<?php

namespace App\Http\Controllers\API;

use App\Models\Comment as Model;

class CommentController extends Controller
{
    public function store()
    {
        return $this->respond(Model::store());
    }

    public function destroy($id)
    {
        return $this->respond(Model::find($id)->delete());
    }
}
