<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    protected $fillable = ['post_id', 'body', 'user_id'];
    protected $hidden = ['created_at', 'user_id', 'post_id'];
    protected $appends = ['index'];
    protected $dateFormat = 'U';

    public static $rules = [
        'post_id' => 'required',
        'body' => 'required',
    ];

    public static function relate($id = null)
    {
        return self::with('user')->find($id);
    }

    public function user()
    {
        return $this->belongsTo('App\Models\User');
    }

    public static function store()
    {
        $validation = validator()->make(request()->all(), self::$rules);

        if ($validation->fails()) {
            return $errors = $validation->errors();
        } else {
            $input = request()->input();
            $input['user_id'] = auth()->id();

            $model = self::create($input);

            return self::relate($model->id);
        }
    }

    public function getIndexAttribute()
    {
        return ($this->updated_at->getTimestamp()).$this->id;
    }
}
