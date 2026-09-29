<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Student;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class StudentSeeder extends Seeder
{
    public function run(): void
    {
        /*
        |--------------------------------------------------------------------------
        | USERS
        |--------------------------------------------------------------------------
        |
        | ONLY 4 ROLES:
        |
        | Administrator
        | Registrar
        | UTPRAS/Focal Person
        | Scholar/Students
        |
        */

        $users = [

            /*
            |--------------------------------------------------------------------------
            | ADMINISTRATOR
            |--------------------------------------------------------------------------
            */

            [
                'name' => 'System Administrator',
                'username' => 'admin',
                'email' => 'admin@tesdaconnect.test',
                'role' => 'Administrator',
            ],


            /*
            |--------------------------------------------------------------------------
            | REGISTRAR
            |--------------------------------------------------------------------------
            */

            [
                'name' => 'Juan Cruz',
                'username' => 'juan',
                'email' => 'juan.cruz@example.com',
                'role' => 'Registrar',
            ],


            /*
            |--------------------------------------------------------------------------
            | UTPRAS / FOCAL PERSON
            |--------------------------------------------------------------------------
            */

            [
                'name' => 'Maria Reyes',
                'username' => 'maria',
                'email' => 'maria.reyes@example.com',
                'role' => 'UTPRAS/Focal Person',
            ],


            /*
            |--------------------------------------------------------------------------
            | SCHOLAR / STUDENT
            |--------------------------------------------------------------------------
            */

            [
                'name' => 'Ana Garcia',
                'username' => 'ana',
                'email' => 'ana.garcia@example.com',
                'role' => 'Scholar/Students',
            ],

        ];


        /*
        |--------------------------------------------------------------------------
        | CREATE USERS
        |--------------------------------------------------------------------------
        */

        foreach ($users as $data) {

            User::updateOrCreate(

                [
                    'username' => $data['username'],
                ],

                [
                    'name' => $data['name'],
                    'email' => $data['email'],
                    'password' => Hash::make('admin123'),
                    'role' => $data['role'],
                ]

            );

        }


        /*
        |--------------------------------------------------------------------------
        | STUDENT RECORDS
        |--------------------------------------------------------------------------
        |
        | Student records should ONLY be created for
        | Scholar/Students.
        |
        */

        $students = [

            [
                'first_name' => 'Ana',
                'middle_name' => 'Santos',
                'last_name' => 'Garcia',

                'username' => 'ana',

                'sex' => 'Female',
                'birth_date' => '2001-08-20',
                'civil_status' => 'Single',

                'contact_number' => '09181234567',
                'email' => 'ana.garcia@example.com',

                'address' => 'Barangay Fatima',
                'barangay' => 'Fatima',
                'municipality' => 'Mamburao',
                'province' => 'Occidental Mindoro',

            ],

        ];


        /*
        |--------------------------------------------------------------------------
        | CREATE STUDENT RECORDS
        |--------------------------------------------------------------------------
        */

        foreach ($students as $data) {

            $user = User::where(
                'username',
                $data['username']
            )->first();


            if (!$user) {
                continue;
            }


            Student::updateOrCreate(

                [
                    'user_id' => $user->id,
                ],

                [

                    'student_number' => 'STU-' . date('Y') . '-' .
                        str_pad(
                            Student::count() + 1,
                            4,
                            '0',
                            STR_PAD_LEFT
                        ),

                    'first_name' => $data['first_name'],
                    'middle_name' => $data['middle_name'],
                    'last_name' => $data['last_name'],

                    'birth_date' => $data['birth_date'],
                    'sex' => $data['sex'],
                    'civil_status' => $data['civil_status'],

                    'contact_number' => $data['contact_number'],
                    'email' => $data['email'],

                    'address' => $data['address'],
                    'barangay' => $data['barangay'],
                    'municipality' => $data['municipality'],
                    'province' => $data['province'],

                    'status' => 'active',

                ]

            );

        }

    }
}