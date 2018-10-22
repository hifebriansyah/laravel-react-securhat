<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['namespace' => 'API'], function () {
	Route::prefix('/user')->group(function () {
		Route::post('register', 'UserController@register');
		Route::post('login', 'UserController@login');
	});

	Route::group(['middleware' => ['token']], function () {
		Route::prefix('/post')->group(function () {
			Route::get('/', 'PostController@index');
			Route::post('/', 'PostController@store');

			Route::prefix('/{id}')->group(function () {
				Route::get('/comments', 'PostController@comments');
				Route::post('/share', 'PostController@share');
				Route::post('/like', 'PostController@like');
				Route::delete('/', 'PostController@destroy');
			});
		});

		Route::prefix('/user')->group(function () {
			Route::prefix('/{id}')->group(function () {
				Route::post('/', 'userController@update');
			});
		});

		Route::prefix('/comment')->group(function () {
			Route::post('/', 'CommentController@store');
			Route::delete('/{id}', 'CommentController@destroy');
		});
	});
});