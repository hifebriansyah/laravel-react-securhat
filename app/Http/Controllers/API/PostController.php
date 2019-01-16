<?php

namespace App\Http\Controllers\API;

use App\Models\Post as Model;

class PostController extends Controller
{
    // can't use eager for comments
    public function index()
    {
        return $this->respond(
            Model::with('user')
                ->latest()
                ->paginate()
        );
    }

    public function comments($id)
    {
        return $this->respond(
            Model::find($id)
                ->comments()
                ->with('user')
                ->latest()
                ->paginate()
        );
    }

    public function store()
    {
        return $this->respond(Model::store());
    }

    public function like($id)
    {
        return $this->respond(Model::like($id));
    }

    public function share($id)
    {
        return $this->respond(Model::share($id));
    }

    public function destroy($id)
    {
        return $this->respond(Model::find($id)->delete());
    }
}
