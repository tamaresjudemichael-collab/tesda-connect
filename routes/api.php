<?php

use Illuminate\Support\Facades\Route;


/*
|--------------------------------------------------------------------------
| AUTHENTICATED API ROUTES
|--------------------------------------------------------------------------
*/

Route::middleware('auth')->group(function () {

    /*
    |--------------------------------------------------------------------------
    | ADMINISTRATOR
    |--------------------------------------------------------------------------
    */

    Route::middleware('role:Administrator')
        ->prefix('admin')
        ->group(function () {

            Route::get('/dashboard', function () {

                return response()->json([
                    'message' => 'Administrator dashboard',
                ]);

            })->middleware('permission:dashboard.view');


            Route::get('/enrollment-monitoring', function () {

                return response()->json([
                    'message' => 'Administrator enrollment monitoring',
                ]);

            })->middleware('permission:enrollment.monitor');


            Route::get('/scheduling', function () {

                return response()->json([
                    'message' => 'Administrator scheduling management',
                ]);

            })->middleware('permission:schedule.manage');


            Route::get('/system-monitoring', function () {

                return response()->json([
                    'message' => 'Administrator system monitoring',
                ]);

            })->middleware('permission:system.accounts');


            Route::get('/reports', function () {

                return response()->json([
                    'message' => 'Administrator reports',
                ]);

            })->middleware('permission:reports.progress');

        });


    /*
    |--------------------------------------------------------------------------
    | REGISTRAR
    |--------------------------------------------------------------------------
    */

    Route::middleware('role:Registrar')
        ->prefix('registrar')
        ->group(function () {

            Route::get('/dashboard', function () {

                return response()->json([
                    'message' => 'Registrar dashboard',
                ]);

            })->middleware('permission:dashboard.view');


            Route::get('/enrollment/review', function () {

                return response()->json([
                    'message' => 'Review enrollment',
                ]);

            })->middleware('permission:enrollment.review');


            Route::get('/enrollment/confirm', function () {

                return response()->json([
                    'message' => 'Confirm enrollment',
                ]);

            })->middleware('permission:enrollment.confirm');


            Route::get('/enrollment/intake', function () {

                return response()->json([
                    'message' => 'Registrar intake',
                ]);

            })->middleware('permission:enrollment.intake');


            Route::get('/enrollment/send-admin', function () {

                return response()->json([
                    'message' => 'Send enrollment to administrator',
                ]);

            })->middleware('permission:enrollment.send-admin');


            Route::get('/students', function () {

                return response()->json([
                    'message' => 'Student records',
                ]);

            })->middleware('permission:students.view');


            Route::get('/announcements', function () {

                return response()->json([
                    'message' => 'Registrar announcements',
                ]);

            })->middleware('permission:announcements.view');


            Route::get('/accounts', function () {

                return response()->json([
                    'message' => 'Registrar account management',
                ]);

            })->middleware('permission:accounts.activate');


            Route::get('/institutions', function () {

                return response()->json([
                    'message' => 'Registrar institutions',
                ]);

            })->middleware('permission:institutions.mif');

        });


    /*
    |--------------------------------------------------------------------------
    | UTPRAS / FOCAL PERSON
    |--------------------------------------------------------------------------
    */

    Route::middleware('role:UTPRAS/Focal Person')
        ->prefix('focal-person')
        ->group(function () {

            Route::get('/dashboard', function () {

                return response()->json([
                    'message' => 'UTPRAS / Focal Person dashboard',
                ]);

            })->middleware('permission:dashboard.view');


            Route::get('/grades', function () {

                return response()->json([
                    'message' => 'Grade management',
                ]);

            })->middleware('permission:grades.encode');


            Route::get('/courses', function () {

                return response()->json([
                    'message' => 'Course management',
                ]);

            })->middleware('permission:courses.view');


            Route::get('/documents', function () {

                return response()->json([
                    'message' => 'Document and admin tasks',
                ]);

            })->middleware('permission:documents.download');

        });


    /*
    |--------------------------------------------------------------------------
    | SCHOLAR / STUDENT
    |--------------------------------------------------------------------------
    */

    Route::middleware('role:Scholar/Students')
        ->prefix('trainee')
        ->group(function () {

            Route::get('/dashboard', function () {

                return response()->json([
                    'message' => 'Scholar / Student dashboard',
                ]);

            })->middleware('permission:dashboard.view');


            Route::get('/enrollment', function () {

                return response()->json([
                    'message' => 'Enrollment submission',
                ]);

            })->middleware('permission:enrollment.submit');


            Route::get('/schedule', function () {

                return response()->json([
                    'message' => 'Student schedule',
                ]);

            })->middleware('permission:schedule.view');


            Route::get('/records', function () {

                return response()->json([
                    'message' => 'Student records',
                ]);

            })->middleware('permission:records.personal');


            Route::get('/announcements', function () {

                return response()->json([
                    'message' => 'Student announcements',
                ]);

            })->middleware('permission:announcements.view');

        });

});