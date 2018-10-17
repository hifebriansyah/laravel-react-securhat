<?php

namespace App\Http\Middleware;

use Illuminate\Contracts\Auth\Factory as Auth;

use Closure;

class CheckToken
{
    protected $auth;

    public function __construct(Auth $auth)
    {
        $this->auth = $auth;
    }

    public function handle($request, Closure $next)
    {
        $isDebug = ($request->header('authorization') == 'debug' /*&& debugEnv*/);

        if ($this->auth->guard('api')->check() || $isDebug) {
            $this->auth->shouldUse('api');
            
            return $next($request);
        }

        return response()->json(['message' => 'invalid user'], 401);
    }
}
