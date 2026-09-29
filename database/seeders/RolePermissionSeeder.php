<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RolePermissionSeeder extends Seeder
{
    public function run(): void
    {
        /*
        |--------------------------------------------------------------------------
        | PERMISSIONS
        |--------------------------------------------------------------------------
        */

        $permissions = [

            /*
            |--------------------------------------------------------------------------
            | GENERAL
            |--------------------------------------------------------------------------
            */

            'dashboard.view' => 'View dashboard',


            /*
            |--------------------------------------------------------------------------
            | ADMINISTRATOR
            |--------------------------------------------------------------------------
            */

            'dashboard.admin.overview' => 'View administrator dashboard overview',
            'dashboard.admin.mif-bst-comparison' => 'View MIF/BST comparison',
            'dashboard.admin.activity-logs' => 'View administrator activity logs',

            'enrollment.monitor' => 'Monitor enrollment',
            'enrollment.submissions' => 'View enrollment submissions',
            'enrollment.verified' => 'View verified enrollment records',
            'enrollment.intake' => 'View enrollment intake summary',

            'schedule.manage' => 'Create and manage schedules',
            'schedule.calendar' => 'View schedule calendar',
            'schedule.compliance' => 'View schedule duration compliance',

            'system.accounts' => 'Manage system accounts',
            'system.audit-logs' => 'View system audit logs',
            'system.announcements' => 'Monitor system announcements',
            'system.health' => 'View system health',

            'reports.progress' => 'View progress reports',
            'reports.completion' => 'View completion reports',
            'reports.performance' => 'View performance reports',
            'reports.export' => 'Export reports',


            /*
            |--------------------------------------------------------------------------
            | REGISTRAR
            |--------------------------------------------------------------------------
            */

            'enrollment.review' => 'Review enrollment submissions',
            'enrollment.confirm' => 'Confirm enrollment',
            'enrollment.send-admin' => 'Send enrollment to administrator',

            'students.view' => 'View student records',
            'students.update' => 'Update student records',
            'students.archive' => 'Archive student records',

            'announcements.view' => 'View announcements',
            'announcements.manage' => 'Create, edit and remove announcements',
            'announcements.viewership' => 'View announcement viewership',

            'accounts.password-reset' => 'Reset user passwords',
            'accounts.verify' => 'Verify user accounts',
            'accounts.activate' => 'Activate user accounts',
            'accounts.deactivate' => 'Deactivate user accounts',

            'institutions.mif' => 'Manage MIF records',
            'institutions.bst' => 'Manage BST records',


            /*
            |--------------------------------------------------------------------------
            | UTPRAS / FOCAL PERSON
            |--------------------------------------------------------------------------
            */

            'grades.encode' => 'Encode grades',
            'grades.submit' => 'Submit grades to provincial office',
            'grades.competency' => 'Manage competency results',

            'courses.create' => 'Register new courses',
            'courses.update' => 'Update course details',
            'courses.view' => 'View active courses',

            'documents.upload' => 'Upload documents',
            'documents.download' => 'Download documents',
            'documents.generate' => 'Generate documents',
            'documents.secretarial' => 'Perform secretarial tasks',


            /*
            |--------------------------------------------------------------------------
            | SCHOLAR / STUDENT
            |--------------------------------------------------------------------------
            */

            'enrollment.requirements' => 'View enrollment requirements',
            'enrollment.submit' => 'Submit enrollment',
            'enrollment.status' => 'View enrollment status',

            'schedule.view' => 'View personal schedule',
            'schedule.timeline' => 'View batch timeline',

            'records.grades' => 'View grade status',
            'records.personal' => 'View personal records',

            'profile.update' => 'Update profile',
            'password.reset-request' => 'Request password reset',
            'support.help' => 'Access support and help',
        ];


        /*
        |--------------------------------------------------------------------------
        | INSERT / UPDATE PERMISSIONS
        |--------------------------------------------------------------------------
        */

        foreach ($permissions as $name => $description) {

            DB::table('permissions')->updateOrInsert(
                [
                    'name' => $name,
                ],
                [
                    'description' => $description,
                    'updated_at' => now(),
                    'created_at' => now(),
                ]
            );

        }


        /*
        |--------------------------------------------------------------------------
        | GET PERMISSION IDS
        |--------------------------------------------------------------------------
        */

        $permissionIds = DB::table('permissions')
            ->pluck('id', 'name');


        /*
        |--------------------------------------------------------------------------
        | ROLES & PERMISSIONS
        |--------------------------------------------------------------------------
        */

        $roles = [

            /*
            |--------------------------------------------------------------------------
            | ADMINISTRATOR
            |--------------------------------------------------------------------------
            */

            'Administrator' => [

                'dashboard.view',

                'dashboard.admin.overview',
                'dashboard.admin.mif-bst-comparison',
                'dashboard.admin.activity-logs',

                /*
                | Enrollment Monitoring
                */

                'enrollment.monitor',
                'enrollment.submissions',
                'enrollment.verified',
                'enrollment.intake',

                /*
                | Scheduling Management
                */

                'schedule.manage',
                'schedule.calendar',
                'schedule.compliance',

                /*
                | System Monitoring
                */

                'system.accounts',
                'system.audit-logs',
                'system.announcements',
                'system.health',

                /*
                | Reports & Oversight
                */

                'reports.progress',
                'reports.completion',
                'reports.performance',
                'reports.export',
            ],


            /*
            |--------------------------------------------------------------------------
            | REGISTRAR
            |--------------------------------------------------------------------------
            */

            'Registrar' => [

                'dashboard.view',

                /*
                | Enrollment Management
                */

                'enrollment.review',
                'enrollment.confirm',
                'enrollment.intake',
                'enrollment.send-admin',

                /*
                | Student Records
                */

                'students.view',
                'students.update',
                'students.archive',

                /*
                | Announcements
                */

                'announcements.view',
                'announcements.manage',
                'announcements.viewership',

                /*
                | Account Management
                */

                'accounts.password-reset',
                'accounts.verify',
                'accounts.activate',
                'accounts.deactivate',

                /*
                | Institutions
                */

                'institutions.mif',
                'institutions.bst',
            ],


            /*
            |--------------------------------------------------------------------------
            | UTPRAS / FOCAL PERSON
            |--------------------------------------------------------------------------
            */

            'UTPRAS/Focal Person' => [

                'dashboard.view',

                /*
                | Grade Management
                */

                'grades.encode',
                'grades.submit',
                'grades.competency',

                /*
                | Course Management
                */

                'courses.create',
                'courses.update',
                'courses.view',

                /*
                | Document & Admin Tasks
                */

                'documents.upload',
                'documents.download',
                'documents.generate',
                'documents.secretarial',
            ],


            /*
            |--------------------------------------------------------------------------
            | SCHOLAR / STUDENT
            |--------------------------------------------------------------------------
            */

            'Scholar/Students' => [

                'dashboard.view',

                /*
                | Enrollment Submission
                */

                'enrollment.requirements',
                'enrollment.submit',
                'enrollment.status',

                /*
                | My Schedule
                */

                'schedule.view',
                'schedule.timeline',

                /*
                | My Status & Records
                */

                'records.grades',
                'records.personal',

                /*
                | Announcements
                */

                'announcements.view',

                /*
                | Profile & Support
                */

                'profile.update',
                'password.reset-request',
                'support.help',
            ],
        ];


        /*
        |--------------------------------------------------------------------------
        | CLEAR EXISTING ROLE PERMISSIONS
        |--------------------------------------------------------------------------
        |
        | Important:
        | This ensures old permissions such as Enrollment Monitoring
        | do not remain assigned to Registrar.
        |
        */

        DB::table('role_permissions')->delete();


        /*
        |--------------------------------------------------------------------------
        | ASSIGN PERMISSIONS
        |--------------------------------------------------------------------------
        */

        foreach ($roles as $role => $permissionNames) {

            foreach ($permissionNames as $permissionName) {

                if (!isset($permissionIds[$permissionName])) {
                    continue;
                }

                DB::table('role_permissions')->insert([
                    'role' => $role,
                    'permission_id' => $permissionIds[$permissionName],
                    'created_at' => now(),
                    'updated_at' => now(),
                ]);

            }

        }
    }
}