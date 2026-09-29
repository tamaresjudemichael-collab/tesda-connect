<?php

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\SettingsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;


/*
|--------------------------------------------------------------------------
| Login
|--------------------------------------------------------------------------
*/

Route::post('/login', [LoginController::class, 'login'])
    ->name('login');


/*
|--------------------------------------------------------------------------
| Authenticated User
|--------------------------------------------------------------------------
|
| React uses this endpoint to determine whether the user is logged in.
|
*/

Route::get('/api/me', function (Request $request) {

    if (!$request->user()) {

        return response()->json([
            'user' => null,
            'message' => 'Unauthenticated.',
        ], 401);

    }

    $user = $request->user();

    $permissions = DB::table('role_permissions')
        ->join(
            'permissions',
            'permissions.id',
            '=',
            'role_permissions.permission_id'
        )
        ->where('role_permissions.role', $user->role)
        ->orderBy('permissions.name')
        ->pluck('permissions.name')
        ->values();

    return response()->json([
        'user' => [
            'id' => $user->id,
            'name' => $user->name,
            'username' => $user->username,
            'role' => $user->role,
            'permissions' => $permissions,
        ],
    ]);

})->middleware('auth')->name('api.me');


/*
|--------------------------------------------------------------------------
| Protected SPA Pages
|--------------------------------------------------------------------------
|
| IMPORTANT:
|
| These routes are protected by BOTH:
|
| auth
| role
|
| Administrator automatically has access to everything
| because of your RoleMiddleware.
|
*/


/*
|--------------------------------------------------------------------------
| Dashboard
|--------------------------------------------------------------------------
|
| All four authenticated roles can access Dashboard.
|
*/

Route::get('/dashboard', function () {

    return view('welcome');

})->middleware([
    'auth',
    'role:Administrator,Registrar,UTPRAS/Focal Person,Scholar/Students'
])->name('dashboard');


/*
|--------------------------------------------------------------------------
| Trainee Intake
|--------------------------------------------------------------------------
|
| Administrator + Registrar only.
|
*/

Route::get('/trainee-intake', function () {

    return view('welcome');

})->middleware([
    'auth',
    'role:Administrator,Registrar'
])->name('trainee-intake');


/*
|--------------------------------------------------------------------------
| Profiles & Records
|--------------------------------------------------------------------------
|
| Administrator + Registrar only.
|
*/

Route::get('/profiles-records', function () {

    return view('welcome');

})->middleware([
    'auth',
    'role:Administrator,Registrar'
])->name('profiles-records');


/*
|--------------------------------------------------------------------------
| Announcements
|--------------------------------------------------------------------------
|
| Administrator + UTPRAS/Focal Person + Scholar/Students.
|
*/

Route::get('/announcements', function () {

    return view('welcome');

})->middleware([
    'auth',
    'role:Administrator,UTPRAS/Focal Person,Scholar/Students'
])->name('announcements.index');


/*
|--------------------------------------------------------------------------
| Announcements Management
|--------------------------------------------------------------------------
|
| Administrator + UTPRAS/Focal Person only.
|
*/

Route::get('/announcements/manage', function () {

    return view('welcome');

})->middleware([
    'auth',
    'role:Administrator,UTPRAS/Focal Person'
])->name('announcements.manage');


/*
|--------------------------------------------------------------------------
| Schedule Coordination
|--------------------------------------------------------------------------
|
| Administrator + UTPRAS/Focal Person + Scholar/Students.
|
*/

Route::get('/schedule-coordination', function () {

    return view('welcome');

})->middleware([
    'auth',
    'role:Administrator,UTPRAS/Focal Person,Scholar/Students'
])->name('schedule-coordination');


/*
|--------------------------------------------------------------------------
| Schedules
|--------------------------------------------------------------------------
|
| Administrator + UTPRAS/Focal Person + Scholar/Students.
|
*/

Route::get('/schedules', function () {

    return view('welcome');

})->middleware([
    'auth',
    'role:Administrator,UTPRAS/Focal Person,Scholar/Students'
])->name('schedules.index');


/*
|--------------------------------------------------------------------------
| Schedule Management
|--------------------------------------------------------------------------
|
| Administrator + UTPRAS/Focal Person only.
|
*/

Route::get('/schedules/manage', function () {

    return view('welcome');

})->middleware([
    'auth',
    'role:Administrator,UTPRAS/Focal Person'
])->name('schedules.manage');


/*
|--------------------------------------------------------------------------
| Report Readiness
|--------------------------------------------------------------------------
|
| Administrator + UTPRAS/Focal Person only.
|
*/

Route::get('/report-readiness', function () {

    return view('welcome');

})->middleware([
    'auth',
    'role:Administrator,UTPRAS/Focal Person'
])->name('report-readiness');


/*
|--------------------------------------------------------------------------
| Settings
|--------------------------------------------------------------------------
|
| All four authenticated roles.
|
*/

Route::get('/settings', function () {

    return view('welcome');

})->middleware([
    'auth',
    'role:Administrator,Registrar,UTPRAS/Focal Person,Scholar/Students'
])->name('settings');


/*
|--------------------------------------------------------------------------
| User / Account
|--------------------------------------------------------------------------
|
| These remain protected by authentication.
|
*/

Route::middleware('auth')->group(function () {

    Route::get('/user', [SettingsController::class, 'user'])
        ->name('user');

    Route::put('/user/profile', [
        SettingsController::class,
        'updateProfile'
    ])->name('user.profile');


    /*
    |--------------------------------------------------------------------------
    | Logout
    |--------------------------------------------------------------------------
    */

    Route::post('/logout', [LoginController::class, 'logout'])
        ->name('logout');

});


/*
|--------------------------------------------------------------------------
| Public Landing Page
|--------------------------------------------------------------------------
*/

Route::get('/', function () {

    return view('welcome');

})->name('home');


/*
|--------------------------------------------------------------------------
| PWA Manifest
|--------------------------------------------------------------------------
*/

Route::get('/manifest.webmanifest', function () {

    $path = public_path('build/manifest.webmanifest');

    if (!file_exists($path)) {

        abort(404);

    }

    return response()->file($path, [

        'Content-Type' => 'application/manifest+json',

        'Cache-Control' => 'no-cache',

    ]);

});


/*
|--------------------------------------------------------------------------
| React SPA Catch-All
|--------------------------------------------------------------------------
|
| IMPORTANT:
| Keep this LAST.
|
*/

Route::get('/{any}', function () {

    return view('welcome');

})->where('any', '.*');