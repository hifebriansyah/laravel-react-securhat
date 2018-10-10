<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/login', function () {
    return view('login');
});


Route::get('/{path?}', function () {
    return view('main');
})->where('path', '(.*)');


Route::get('/img', function()
{
    return Image::make('/Applications/XAMPP/xamppfiles/htdocs/sch/storage/app/posts/5o3xDGOFBs42j2szxjSOXMM5S5FfKmitCfvjzhz0.jpeg')->resize(320, 240)->response('jpeg');
});