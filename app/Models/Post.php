<?php

namespace App\Models;

class Post extends Model
{
    protected $fillable = ['title', 'body', 'user_id', 'img_src'];
    protected $hidden = ['updated_at', 'user_id', 'likes'];
    protected $appends = ['like_counts', 'liked', 'comments', 'comment_counts', 'commented', 'share_counts', 'shared'];

    protected static $path = '/uploads/posts';

    public static $rules = [
        'title' => 'max:255',
        'body' => 'required',
    ];

    public static function relate($id = null)
    {
        return self::with('user')->find($id);
    }

    public static function share($id)
    {
        return self::find($id)->shares()->toggle(auth()->id());
    }

    public static function like($id)
    {
        return self::find($id)->likes()->toggle(auth()->id());
    }

    public function comments()
    {
        return $this->hasMany('App\models\Comment')->latest();
    }

    public function user()
    {
        return $this->belongsTo('App\Models\User');
    }

    public function likes()
    {
        return $this->belongsToMany('App\Models\User', 'post_likes')->withTimestamps()->latest();
    }

    public function shares()
    {
        return $this->belongsToMany('App\Models\User', 'post_shares')->withTimestamps()->latest();
    }

    public static function store()
    {
        $validation = validator()->make(request()->all(), self::$rules);

        if ($validation->fails()) {
            return $validation->errors();
        }

        $input = request()->input();
        $input['user_id'] = auth()->id();

        $img = request()->file('img');

        if ($img) {
            $url = md5($img->getClientOriginalName().microtime()).'.'.$img->extension();
            $input['img'] = $url;

            $img = \Image::make($img)
                ->resize(320, 240)
                ->save(public_path(self::$path.'/'.$url));
        }

        $model = self::create($input);

        return self::relate($model->id);
    }

    public function getLikeCountsAttribute()
    {
        return $this->likes()->count();
    }

    public function getLikedAttribute()
    {
        return (Boolean) $this->likes()->where('user_id', auth()->id())->count();
    }

    public function getCommentedAttribute()
    {
        return (Boolean) $this->comments()->where('user_id', auth()->id())->count();
    }

    public function getSharedAttribute()
    {
        return (Boolean) $this->shares()->where('user_id', auth()->id())->count();
    }

    public function getCommentsAttribute()
    {
        return $this->comments()->with('user')->take(3)->get();
    }

    public function getCommentCountsAttribute()
    {
        return $this->comments()->count();
    }

    public function getShareCountsAttribute()
    {
        return $this->shares()->count();
    }
}
