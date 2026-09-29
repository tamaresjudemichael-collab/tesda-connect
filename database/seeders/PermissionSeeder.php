<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PermissionSeeder extends Seeder
{
    public function run(): void
    {
        $permissions = [
            // Dashboard
            [
                'name' => 'dashboard.view',
                'description' => 'View dashboard',
            ],

            // Enrollment - Administrator
            [
                'name' => 'enrollment.monitor',
                'description' => 'Monitor enrollment',
            ],
            [
                'name' => 'enrollment.submissions',
                'description' => 'View enrollment submissions',
            ],
            [
                'name' => 'enrollment.verified',
                'description' => 'View verified enrollment records',
            ],
            [
                'name' => 'enrollment.intake',
                'description' => 'View enrollment intake summary',
            ],

            // Scheduling - Administrator
            [
                'name' => 'schedule.manage',
                'description' => 'Create and manage schedules',
            ],
            [
                'name' => 'schedule.calendar',
                'description' => 'View schedule calendar',
            ],
            [
                'name' => 'schedule.compliance',
                'description' => 'View schedule duration compliance',
            ],

            // System Monitoring - Administrator
            [
                'name' => 'system.accounts',
                'description' => 'Manage system accounts',
            ],
            [
                'name' => 'system.audit-logs',
                'description' => 'View system audit logs',
            ],
            [
                'name' => 'system.announcements',
                'description' => 'Monitor system announcements',
            ],
            [
                'name' => 'system.health',
                'description' => 'View system health',
            ],

            // Reports - Administrator
            [
                'name' => 'reports.progress',
                'description' => 'View progress reports',
            ],
            [
                'name' => 'reports.completion',
                'description' => 'View completion reports',
            ],
            [
                'name' => 'reports.performance',
                'description' => 'View performance reports',
            ],
            [
                'name' => 'reports.export',
                'description' => 'Export reports',
            ],

            // Enrollment - Registrar
            [
                'name' => 'enrollment.review',
                'description' => 'Review enrollment submissions',
            ],
            [
                'name' => 'enrollment.confirm',
                'description' => 'Confirm enrollment',
            ],
            [
                'name' => 'enrollment.send-admin',
                'description' => 'Send enrollment to administrator',
            ],

            // Students - Registrar
            [
                'name' => 'students.view',
                'description' => 'View student records',
            ],
            [
                'name' => 'students.update',
                'description' => 'Update student records',
            ],
            [
                'name' => 'students.archive',
                'description' => 'Archive student records',
            ],

            // Announcements - Registrar
            [
                'name' => 'announcements.manage',
                'description' => 'Create, edit and remove announcements',
            ],
            [
                'name' => 'announcements.viewership',
                'description' => 'View announcement viewership',
            ],

            // Accounts - Registrar
            [
                'name' => 'accounts.password-reset',
                'description' => 'Reset user passwords',
            ],
            [
                'name' => 'accounts.verify',
                'description' => 'Verify user accounts',
            ],
            [
                'name' => 'accounts.activate',
                'description' => 'Activate user accounts',
            ],
            [
                'name' => 'accounts.deactivate',
                'description' => 'Deactivate user accounts',
            ],

            // Institutions - Registrar
            [
                'name' => 'institutions.mif',
                'description' => 'Manage MIF records',
            ],
            [
                'name' => 'institutions.bst',
                'description' => 'Manage BST records',
            ],

            // Grades - UTPRAS / Focal Person
            [
                'name' => 'grades.encode',
                'description' => 'Encode grades',
            ],
            [
                'name' => 'grades.submit',
                'description' => 'Submit grades to provincial office',
            ],
            [
                'name' => 'grades.competency',
                'description' => 'Manage competency results',
            ],

            // Courses - UTPRAS / Focal Person
            [
                'name' => 'courses.create',
                'description' => 'Register new courses',
            ],
            [
                'name' => 'courses.update',
                'description' => 'Update course details',
            ],
            [
                'name' => 'courses.view',
                'description' => 'View active courses',
            ],

            // Documents - UTPRAS / Focal Person
            [
                'name' => 'documents.upload',
                'description' => 'Upload documents',
            ],
            [
                'name' => 'documents.download',
                'description' => 'Download documents',
            ],
            [
                'name' => 'documents.generate',
                'description' => 'Generate documents',
            ],
            [
                'name' => 'documents.secretarial',
                'description' => 'Perform secretarial tasks',
            ],

            // Enrollment - Scholar / Student
            [
                'name' => 'enrollment.requirements',
                'description' => 'View enrollment requirements',
            ],
            [
                'name' => 'enrollment.submit',
                'description' => 'Submit enrollment',
            ],
            [
                'name' => 'enrollment.status',
                'description' => 'View enrollment status',
            ],

            // Schedule - Scholar / Student
            [
                'name' => 'schedule.view',
                'description' => 'View personal schedule',
            ],
            [
                'name' => 'schedule.timeline',
                'description' => 'View batch timeline',
            ],

            // Records - Scholar / Student
            [
                'name' => 'records.grades',
                'description' => 'View grade status',
            ],
            [
                'name' => 'records.personal',
                'description' => 'View personal records',
            ],

            // Announcements - Scholar / Student
            [
                'name' => 'announcements.view',
                'description' => 'View announcements',
            ],

            // Profile / Support - Scholar / Student
            [
                'name' => 'profile.update',
                'description' => 'Update profile',
            ],
            [
                'name' => 'password.reset-request',
                'description' => 'Request password reset',
            ],
            [
                'name' => 'support.help',
                'description' => 'Access support and help',
            ],
        ];

        foreach ($permissions as $permission) {
            DB::table('permissions')->updateOrInsert(
                ['name' => $permission['name']],
                [
                    'description' => $permission['description'],
                    'updated_at' => now(),
                    'created_at' => now(),
                ]
            );
        }
    }
}