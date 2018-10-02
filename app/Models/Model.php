<?php

namespace App\Models;

abstract class Model extends \Illuminate\Database\Eloquent\Model
{
    public function getImgAttribute()
    {
        return $this->comments()->count();
    }
}