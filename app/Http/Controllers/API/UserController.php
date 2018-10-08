<?php

namespace App\Http\Controllers\API;

use App\Models\User as Model;

class UserController extends Controller
{
    protected static $path = '/uploads/users';

    public function register()
    {
        return Model::store();
    }

    public function login()
    {
        $user = Model::login();

        return (isset($user['token']))
            ? $this->respond(Model::login())/*->withCookie('token', $user['token'], 0, '/; samesite=strict')*/
            : $user;
    }

    public function update()
    {
    	
        return $this->respond(Model::updates());
    }
}
