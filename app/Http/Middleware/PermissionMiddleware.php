<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class PermissionMiddleware
{
    public function handle(
        Request $request,
        Closure $next,
        string ...$permissions
    ): Response {

        $user = $request->user();


        /*
        |--------------------------------------------------------------------------
        | Not Authenticated
        |--------------------------------------------------------------------------
        */

        if (!$user) {

            if ($request->expectsJson()) {

                return response()->json([
                    'message' => 'Unauthenticated.',
                ], 401);

            }

            return redirect('/login');
        }


        /*
        |--------------------------------------------------------------------------
        | Check Permission
        |--------------------------------------------------------------------------
        |
        | User must have at least ONE of the required permissions.
        |
        */

        foreach ($permissions as $permission) {

            if ($user->hasPermission($permission)) {

                return $next($request);

            }

        }


        /*
        |--------------------------------------------------------------------------
        | Permission Denied
        |--------------------------------------------------------------------------
        */

        if ($request->expectsJson()) {

            return response()->json([
                'message' => 'Forbidden.',
                'permission' => $permissions,
            ], 403);

        }


        return redirect('/dashboard');
    }
}