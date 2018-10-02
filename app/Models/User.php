<?php

namespace App\Models;

use Laravel\Passport\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use HasApiTokens, Notifiable;

    protected $fillable = ['name', 'email', 'password', 'img'];
    protected $appends = ['img_src'];
    
    protected $hidden = [
        'created_at',
        'updated_at',
        'password',
        'remember_token',
        'email',
        'email_verified_at',
        'img'
    ];

    protected static $path = '/uploads/users';

    public static $rules = [
        'name' => 'required',
        'email' => 'required|unique:users',
        'password' => 'required',
    ];

    public static function store()
    {
        $validation = validator()->make(request()->all(), self::$rules);

        if ($validation->fails()) {
            return $errors = $validation->errors();
        }

        $input = request()->input();
        $input['password'] = bcrypt($input['password']);

        $img = request()->file('img');

        if ($img) {
            $url = md5($img->getClientOriginalName().microtime()).'.'.$img->extension();
            $input['img'] = $url;

            $img = \Image::make($img)
                ->resize(320, 240)
                ->save(public_path(self::$path.'/'.$url));
        }

        $user = self::create($input);

        $success['token'] =  $user->createToken('app')->accessToken;
        $success['name'] =  $user->name;

        return $success;
    }

    public static function login()
    {
        if (auth()->attempt(['email' => request('email'), 'password' => request('password')])) {
            $user = auth()->user()->toArray();
            $user['token'] =  auth()->user()->createToken('app')->accessToken;

            return $user;
        } else {
            return ['error'=>'Unauthorised'];
        }
    }

    public static function updates()
    {
        $validation = validator()->make(request()->all(), [
            'name' => 'max:255',
            'email' => 'unique:users',
            //need to confirm old password
        ]);

        if ($validation->fails()) {
            return $errors = $validation->errors();
        }

        $input = request()->input();

        $img = request()->file('img');

        if ($img) {
            $url = md5($img->getClientOriginalName().microtime()).'.'.$img->extension();
            $input['img'] = $url;

            $img = \Image::make($img)
                ->resize(320, 240)
                ->save(public_path(self::$path.'/'.$url));
        }

        $model = self::find(auth()->id());

        $model->fill($input)->save();

        return $model;
    }

    public function getImgSrcAttribute()
    {

        return ($this->img) ? 'path/'.$this->img : null;
    }
}
