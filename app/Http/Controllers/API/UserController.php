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
        return Model::login();
    }

    public function update()
    {
    	
        return $this->respond(Model::updates());
    }
}
