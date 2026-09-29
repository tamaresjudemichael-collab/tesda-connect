import { useState } from 'react';
import SidebarItem from './SidebarItem';

export default function Sidebar({ collapsed, user }) {

    /*
    |--------------------------------------------------------------------------
    | PERMISSION CHECKER
    |--------------------------------------------------------------------------
    */

    const can = (permission) => {
        return user?.permissions?.includes(permission) ?? false;
    };


    /*
    |--------------------------------------------------------------------------
    | CURRENT PATH
    |--------------------------------------------------------------------------
    */

    const currentPath = window.location.pathname;


    /*
    |--------------------------------------------------------------------------
    | USER INITIAL
    |--------------------------------------------------------------------------
    */

    const userInitial =
        user?.name?.trim()?.charAt(0)?.toUpperCase() ?? '?';


    /*
    |--------------------------------------------------------------------------
    | ROLE
    |--------------------------------------------------------------------------
    */

    const role = user?.role ?? '';


    /*
    |--------------------------------------------------------------------------
    | SUBMENU STATE
    |--------------------------------------------------------------------------
    */

    const [openMenus, setOpenMenus] = useState({});


    const toggleMenu = (menu) => {

        setOpenMenus((previous) => ({
            ...previous,
            [menu]: !previous[menu],
        }));

    };


    /*
    |--------------------------------------------------------------------------
    | ACTIVE PATH
    |--------------------------------------------------------------------------
    */

    const isActive = (path) => {

        if (!path) {
            return false;
        }

        return currentPath.startsWith(path);
    };


    /*
    |--------------------------------------------------------------------------
    | ICONS
    |--------------------------------------------------------------------------
    */

    const DashboardIcon = () => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 12l9-9 9 9M5 10v10h14V10"
            />
        </svg>
    );


    const EnrollmentIcon = () => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5h6M9 9h6M9 13h6M9 17h6M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z"
            />
        </svg>
    );


    const ScheduleIcon = () => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 7V3m8 4V3M4 11h16M5 5h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V6a1 1 0 011-1z"
            />
        </svg>
    );


    const SystemIcon = () => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 6h3l.6-2h-4.2l.6 2zM7.5 9l-1.7-1.7L4 8.9l1.4 1.4M6 14H3v-2h3m1.5 3L5 17.7l1.4 1.4 2.5-2.5M12 18v3m4.5-3l2.5 2.5 1.4-1.4-2.5-2.5M18 14h3v-2h-3m-1.5-3L19 8.5l-1.4-1.4-2.5 2.5"
            />
            <circle
                cx="12"
                cy="13"
                r="3"
            />
        </svg>
    );


    const ReportsIcon = () => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 19V5m0 14h16M8 16v-4m4 4V8m4 8V5"
            />
        </svg>
    );


    const StudentIcon = () => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 20h5v-2a4 4 0 00-4-4h-1M9 20H4v-2a4 4 0 014-4h1m4-9a4 4 0 11-8 0 4 4 0 018 0zm6 2a3 3 0 100-6 3 3 0 000 6z"
            />
        </svg>
    );


    const AnnouncementIcon = () => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 17h5l-1.5-2V9a6.5 6.5 0 00-13 0v6L4 17h5"
            />
        </svg>
    );


    const AcademicIcon = () => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 14l9-5-9-5-9 5 9 5z"
            />
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 12v5c4 3 10 3 14 0v-5"
            />
        </svg>
    );


    const CourseIcon = () => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 5h16v14H4z"
            />
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 9h8M8 13h5"
            />
        </svg>
    );


    const DocumentIcon = () => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 3h7l5 5v13H7a2 2 0 01-2-2V5a2 2 0 012-2z"
            />
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14 3v6h5"
            />
        </svg>
    );


    const ProfileIcon = () => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 12a4 4 0 100-8 4 4 0 000 8z"
            />
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 21a8 8 0 0116 0"
            />
        </svg>
    );


    /*
    |--------------------------------------------------------------------------
    | SUBMENU
    |--------------------------------------------------------------------------
    */

    const SubMenu = ({
        title,
        menuKey,
        icon,
        children,
        permission,
        permissions = [],
    }) => {

        const hasAccess =
            (permission && can(permission)) ||
            permissions.some((item) => can(item));

        if (!hasAccess) {
            return null;
        }

        const open = openMenus[menuKey];

        return (
            <div className="mb-1">

                <button
                    type="button"
                    onClick={() => toggleMenu(menuKey)}
                    title={collapsed ? title : ''}
                    className={`
                        group
                        flex
                        w-full
                        items-center
                        rounded-lg
                        px-3
                        py-3
                        transition-all
                        duration-200
                        ${collapsed ? 'justify-center' : ''}
                        ${
                            open
                                ? 'bg-white/10 text-white'
                                : 'text-slate-300 hover:bg-white/10 hover:text-white'
                        }
                    `}
                >

                    <span
                        className={`
                            flex
                            h-6
                            w-6
                            shrink-0
                            items-center
                            justify-center
                            ${
                                open
                                    ? 'text-orange-400'
                                    : 'text-slate-300 group-hover:text-white'
                            }
                        `}
                    >
                        {icon}
                    </span>


                    {!collapsed && (
                        <>

                            <span
                                className="
                                    ml-3
                                    flex-1
                                    text-left
                                    text-sm
                                    font-semibold
                                "
                            >
                                {title}
                            </span>


                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className={`
                                    h-4
                                    w-4
                                    transition-transform
                                    duration-200
                                    ${open ? 'rotate-180' : ''}
                                `}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>

                        </>
                    )}

                </button>


                {!collapsed && open && (

                    <div
                        className="
                            ml-5
                            mt-1
                            space-y-1
                            border-l
                            border-white/10
                            pl-3
                        "
                    >
                        {children}
                    </div>

                )}

            </div>
        );
    };


    /*
    |--------------------------------------------------------------------------
    | SUBMENU ITEM
    |--------------------------------------------------------------------------
    */

    const SubMenuItem = ({
        label,
        to,
        permission,
        badge,
    }) => {

        if (!can(permission)) {
            return null;
        }

        return (
            <SidebarItem
                label={label}
                to={to}
                active={isActive(to)}
                collapsed={false}
                badge={badge}
                icon={
                    <span
                        className="
                            h-1.5
                            w-1.5
                            rounded-full
                            bg-current
                        "
                    />
                }
                small
            />
        );
    };


    /*
    |--------------------------------------------------------------------------
    | RENDER
    |--------------------------------------------------------------------------
    */

    return (

        <aside
            className={`
                fixed
                left-0
                top-0
                z-50
                h-screen
                overflow-hidden
                bg-[#0d2559]
                text-white
                shadow-xl
                transition-all
                duration-300
                ${collapsed ? 'w-[80px]' : 'w-[300px]'}
            `}
        >

            {/* =====================================================
                LOGO
            ===================================================== */}

            <div
                className="
                    flex
                    h-[74px]
                    items-center
                    border-b
                    border-white/10
                    px-5
                "
            >

                <div className="flex items-center gap-3">

                    <div
                        className="
                            flex
                            h-10
                            w-10
                            shrink-0
                            items-center
                            justify-center
                            rounded-full
                            bg-white
                            text-xs
                            font-bold
                            text-[#0d2559]
                            shadow-sm
                        "
                    >
                        AD
                    </div>


                    {!collapsed && (

                        <div className="whitespace-nowrap">

                            <div className="text-lg font-bold">
                                TESDA
                                <span className="text-orange-400">
                                    Connect
                                </span>
                            </div>

                            <div className="text-xs text-white/50">
                                Mamburao Integrated Farm
                            </div>

                        </div>

                    )}

                </div>

            </div>


            {/* =====================================================
                MENU
            ===================================================== */}

            <nav
                className="
                    h-[calc(100vh-74px)]
                    overflow-y-auto
                    px-3
                    py-6
                    pb-28
                    scrollbar-thin
                "
            >

                {!collapsed && (

                    <div
                        className="
                            mb-3
                            px-3
                            text-xs
                            font-bold
                            uppercase
                            tracking-widest
                            text-white/30
                        "
                    >
                        Main Menu
                    </div>

                )}


                {/* =================================================
                    DASHBOARD
                    ALL ROLES
                ================================================= */}

                {can('dashboard.view') && (

                    <SidebarItem
                        label="Dashboard"
                        to="/dashboard"
                        active={currentPath === '/dashboard'}
                        collapsed={collapsed}
                        icon={<DashboardIcon />}
                    />

                )}


                {/* =================================================
                    ADMINISTRATOR
                    ENROLLMENT MONITORING
                ================================================= */}

                {role === 'Administrator' && (

                    <SubMenu
                        title="Enrollment Monitoring"
                        menuKey="admin-enrollment-monitoring"
                        permission="enrollment.monitor"
                        permissions={[
                            'enrollment.submissions',
                            'enrollment.verified',
                            'enrollment.intake',
                        ]}
                        icon={<EnrollmentIcon />}
                    >

                        <SubMenuItem
                            label="Submissions"
                            to="/enrollment/submissions"
                            permission="enrollment.submissions"
                        />

                        <SubMenuItem
                            label="Verified Records"
                            to="/enrollment/verified"
                            permission="enrollment.verified"
                        />

                        <SubMenuItem
                            label="Intake Summary"
                            to="/enrollment/intake"
                            permission="enrollment.intake"
                        />

                    </SubMenu>

                )}


                {/* =================================================
                    ADMINISTRATOR
                    SCHEDULING MANAGEMENT
                ================================================= */}

                {role === 'Administrator' && (

                    <SubMenu
                        title="Scheduling Management"
                        menuKey="admin-scheduling"
                        permission="schedule.manage"
                        permissions={[
                            'schedule.calendar',
                            'schedule.compliance',
                        ]}
                        icon={<ScheduleIcon />}
                    >

                        <SubMenuItem
                            label="Create / Edit"
                            to="/scheduling"
                            permission="schedule.manage"
                        />

                        <SubMenuItem
                            label="Calendar"
                            to="/scheduling/calendar"
                            permission="schedule.calendar"
                        />

                        <SubMenuItem
                            label="Duration Compliance"
                            to="/scheduling/compliance"
                            permission="schedule.compliance"
                        />

                    </SubMenu>

                )}


                {/* =================================================
                    ADMINISTRATOR
                    SYSTEM MONITORING
                ================================================= */}

                {role === 'Administrator' && (

                    <SubMenu
                        title="System Monitoring"
                        menuKey="admin-system"
                        permission="system.accounts"
                        permissions={[
                            'system.audit-logs',
                            'system.announcements',
                            'system.health',
                        ]}
                        icon={<SystemIcon />}
                    >

                        <SubMenuItem
                            label="Accounts"
                            to="/system/accounts"
                            permission="system.accounts"
                        />

                        <SubMenuItem
                            label="Audit Logs"
                            to="/system/audit-logs"
                            permission="system.audit-logs"
                        />

                        <SubMenuItem
                            label="Announcement Monitor"
                            to="/system/announcements"
                            permission="system.announcements"
                        />

                        <SubMenuItem
                            label="Health"
                            to="/system/health"
                            permission="system.health"
                        />

                    </SubMenu>

                )}


                {/* =================================================
                    ADMINISTRATOR
                    REPORTS & OVERSIGHT
                ================================================= */}

                {role === 'Administrator' && (

                    <SubMenu
                        title="Reports & Oversight"
                        menuKey="admin-reports"
                        permission="reports.progress"
                        permissions={[
                            'reports.completion',
                            'reports.performance',
                            'reports.export',
                        ]}
                        icon={<ReportsIcon />}
                    >

                        <SubMenuItem
                            label="Progress"
                            to="/reports/progress"
                            permission="reports.progress"
                        />

                        <SubMenuItem
                            label="Completion"
                            to="/reports/completion"
                            permission="reports.completion"
                        />

                        <SubMenuItem
                            label="Performance"
                            to="/reports/performance"
                            permission="reports.performance"
                        />

                        <SubMenuItem
                            label="Export"
                            to="/reports/export"
                            permission="reports.export"
                        />

                    </SubMenu>

                )}


                {/* =================================================
                    REGISTRAR
                    ENROLLMENT MANAGEMENT
                ================================================= */}

                {role === 'Registrar' && (

                    <SubMenu
                        title="Enrollment Management"
                        menuKey="registrar-enrollment"
                        permission="enrollment.review"
                        permissions={[
                            'enrollment.confirm',
                            'enrollment.intake',
                            'enrollment.send-admin',
                        ]}
                        icon={<EnrollmentIcon />}
                    >

                        <SubMenuItem
                            label="Review"
                            to="/enrollment/review"
                            permission="enrollment.review"
                        />

                        <SubMenuItem
                            label="Confirm"
                            to="/enrollment/confirm"
                            permission="enrollment.confirm"
                        />

                        <SubMenuItem
                            label="Intake"
                            to="/enrollment/intake"
                            permission="enrollment.intake"
                        />

                        <SubMenuItem
                            label="Send to Admin"
                            to="/enrollment/send-admin"
                            permission="enrollment.send-admin"
                        />

                    </SubMenu>

                )}


                {/* =================================================
                    REGISTRAR
                    STUDENT RECORDS
                ================================================= */}

                {role === 'Registrar' && (

                    <SubMenu
                        title="Student Records"
                        menuKey="registrar-students"
                        permission="students.view"
                        permissions={[
                            'students.update',
                            'students.archive',
                        ]}
                        icon={<StudentIcon />}
                    >

                        <SubMenuItem
                            label="View / Search"
                            to="/students"
                            permission="students.view"
                        />

                        <SubMenuItem
                            label="Update"
                            to="/students/update"
                            permission="students.update"
                        />

                        <SubMenuItem
                            label="Archive"
                            to="/students/archive"
                            permission="students.archive"
                        />

                    </SubMenu>

                )}


                {/* =================================================
                    REGISTRAR
                    ANNOUNCEMENTS
                ================================================= */}

                {role === 'Registrar' && (

                    <SubMenu
                        title="Announcements"
                        menuKey="registrar-announcements"
                        permission="announcements.view"
                        permissions={[
                            'announcements.manage',
                            'announcements.viewership',
                        ]}
                        icon={<AnnouncementIcon />}
                    >

                        <SubMenuItem
                            label="View All"
                            to="/announcements"
                            permission="announcements.view"
                        />

                        <SubMenuItem
                            label="Create / Post"
                            to="/announcements/create"
                            permission="announcements.manage"
                        />

                        <SubMenuItem
                            label="Edit / Remove"
                            to="/announcements/manage"
                            permission="announcements.manage"
                        />

                        <SubMenuItem
                            label="Viewership Tracking"
                            to="/announcements/viewership"
                            permission="announcements.viewership"
                        />

                    </SubMenu>

                )}


                {/* =================================================
                    REGISTRAR
                    ACCOUNT MANAGEMENT
                ================================================= */}

                {role === 'Registrar' && (

                    <SubMenu
                        title="Account Management"
                        menuKey="registrar-accounts"
                        permission="accounts.password-reset"
                        permissions={[
                            'accounts.verify',
                            'accounts.activate',
                            'accounts.deactivate',
                        ]}
                        icon={<ProfileIcon />}
                    >

                        <SubMenuItem
                            label="Password Reset"
                            to="/accounts/password-reset"
                            permission="accounts.password-reset"
                        />

                        <SubMenuItem
                            label="Verify / No Expiry"
                            to="/accounts/verify"
                            permission="accounts.verify"
                        />

                        <SubMenuItem
                            label="Activate / Deactivate"
                            to="/accounts"
                            permission="accounts.activate"
                        />

                    </SubMenu>

                )}


                {/* =================================================
                    REGISTRAR
                    INSTITUTIONS
                ================================================= */}

                {role === 'Registrar' && (

                    <SubMenu
                        title="Institutions"
                        menuKey="registrar-institutions"
                        permission="institutions.mif"
                        permissions={[
                            'institutions.bst',
                        ]}
                        icon={<CourseIcon />}
                    >

                        <SubMenuItem
                            label="MIF Records"
                            to="/institutions/mif"
                            permission="institutions.mif"
                        />

                        <SubMenuItem
                            label="BST Records"
                            to="/institutions/bst"
                            permission="institutions.bst"
                        />

                    </SubMenu>

                )}


                {/* =================================================
                    UTPRAS / FOCAL PERSON
                    GRADE MANAGEMENT
                ================================================= */}

                {role === 'UTPRAS/Focal Person' && (

                    <SubMenu
                        title="Grade Management"
                        menuKey="focal-grades"
                        permission="grades.encode"
                        permissions={[
                            'grades.submit',
                            'grades.competency',
                        ]}
                        icon={<AcademicIcon />}
                    >

                        <SubMenuItem
                            label="Encode"
                            to="/grades/encode"
                            permission="grades.encode"
                        />

                        <SubMenuItem
                            label="Submit to Provincial"
                            to="/grades/submit"
                            permission="grades.submit"
                        />

                        <SubMenuItem
                            label="Competent / Not Competent"
                            to="/grades/competency"
                            permission="grades.competency"
                        />

                    </SubMenu>

                )}


                {/* =================================================
                    UTPRAS / FOCAL PERSON
                    COURSE MANAGEMENT
                ================================================= */}

                {role === 'UTPRAS/Focal Person' && (

                    <SubMenu
                        title="Course Management"
                        menuKey="focal-courses"
                        permission="courses.view"
                        permissions={[
                            'courses.create',
                            'courses.update',
                        ]}
                        icon={<CourseIcon />}
                    >

                        <SubMenuItem
                            label="Register New"
                            to="/courses/create"
                            permission="courses.create"
                        />

                        <SubMenuItem
                            label="Update Details"
                            to="/courses/update"
                            permission="courses.update"
                        />

                        <SubMenuItem
                            label="View Active Courses"
                            to="/courses"
                            permission="courses.view"
                        />

                    </SubMenu>

                )}


                {/* =================================================
                    UTPRAS / FOCAL PERSON
                    DOCUMENT & ADMIN TASKS
                ================================================= */}

                {role === 'UTPRAS/Focal Person' && (

                    <SubMenu
                        title="Document & Admin Tasks"
                        menuKey="focal-documents"
                        permission="documents.download"
                        permissions={[
                            'documents.upload',
                            'documents.generate',
                            'documents.secretarial',
                        ]}
                        icon={<DocumentIcon />}
                    >

                        <SubMenuItem
                            label="Upload"
                            to="/documents/upload"
                            permission="documents.upload"
                        />

                        <SubMenuItem
                            label="Download"
                            to="/documents"
                            permission="documents.download"
                        />

                        <SubMenuItem
                            label="Generate Forms"
                            to="/documents/generate"
                            permission="documents.generate"
                        />

                        <SubMenuItem
                            label="Secretarial Work"
                            to="/documents/secretarial"
                            permission="documents.secretarial"
                        />

                    </SubMenu>

                )}


                {/* =================================================
                    SCHOLAR / STUDENT
                    ENROLLMENT SUBMISSION
                ================================================= */}

                {role === 'Scholar/Students' && (

                    <SubMenu
                        title="Enrollment Submission"
                        menuKey="student-enrollment"
                        permission="enrollment.requirements"
                        permissions={[
                            'enrollment.submit',
                            'enrollment.status',
                        ]}
                        icon={<EnrollmentIcon />}
                    >

                        <SubMenuItem
                            label="View Requirements"
                            to="/my-enrollment/requirements"
                            permission="enrollment.requirements"
                        />

                        <SubMenuItem
                            label="Submit Enrollment"
                            to="/my-enrollment/submit"
                            permission="enrollment.submit"
                        />

                        <SubMenuItem
                            label="Check Status"
                            to="/my-enrollment/status"
                            permission="enrollment.status"
                        />

                    </SubMenu>

                )}


                {/* =================================================
                    SCHOLAR / STUDENT
                    MY SCHEDULE
                ================================================= */}

                {role === 'Scholar/Students' && (

                    <SubMenu
                        title="My Schedule"
                        menuKey="student-schedule"
                        permission="schedule.view"
                        permissions={[
                            'schedule.timeline',
                        ]}
                        icon={<ScheduleIcon />}
                    >

                        <SubMenuItem
                            label="View Schedule"
                            to="/my-schedule"
                            permission="schedule.view"
                        />

                        <SubMenuItem
                            label="Batch Timeline"
                            to="/my-schedule/timeline"
                            permission="schedule.timeline"
                        />

                    </SubMenu>

                )}


                {/* =================================================
                    SCHOLAR / STUDENT
                    MY STATUS & RECORDS
                ================================================= */}

                {role === 'Scholar/Students' && (

                    <SubMenu
                        title="My Status & Records"
                        menuKey="student-records"
                        permission="records.personal"
                        permissions={[
                            'records.grades',
                        ]}
                        icon={<StudentIcon />}
                    >

                        <SubMenuItem
                            label="Grade Status"
                            to="/my-records/grades"
                            permission="records.grades"
                        />

                        <SubMenuItem
                            label="Personal Records"
                            to="/my-records"
                            permission="records.personal"
                        />

                    </SubMenu>

                )}


                {/* =================================================
                    SCHOLAR / STUDENT
                    ANNOUNCEMENTS
                ================================================= */}

                {role === 'Scholar/Students' && (

                    <SubMenu
                        title="Announcements"
                        menuKey="student-announcements"
                        permission="announcements.view"
                        icon={<AnnouncementIcon />}
                    >

                        <SubMenuItem
                            label="View All"
                            to="/announcements"
                            permission="announcements.view"
                        />

                    </SubMenu>

                )}


                {/* =================================================
                    SCHOLAR / STUDENT
                    PROFILE & SUPPORT
                ================================================= */}

                {role === 'Scholar/Students' && (

                    <SubMenu
                        title="Profile & Support"
                        menuKey="student-profile"
                        permission="profile.update"
                        permissions={[
                            'password.reset-request',
                            'support.help',
                        ]}
                        icon={<ProfileIcon />}
                    >

                        <SubMenuItem
                            label="Edit Info"
                            to="/profile"
                            permission="profile.update"
                        />

                        <SubMenuItem
                            label="Password Reset Request"
                            to="/password-reset"
                            permission="password.reset-request"
                        />

                        <SubMenuItem
                            label="Help"
                            to="/help"
                            permission="support.help"
                        />

                    </SubMenu>

                )}

            </nav>


            {/* =====================================================
                AUTHENTICATED USER
            ===================================================== */}

            <div
                className="
                    absolute
                    bottom-0
                    left-0
                    w-full
                    border-t
                    border-white/10
                    bg-[#0d2559]
                    p-4
                "
            >

                <div className="flex items-center gap-3">

                    <div
                        className="
                            flex
                            h-10
                            w-10
                            shrink-0
                            items-center
                            justify-center
                            rounded-full
                            bg-cyan-400
                            font-bold
                            text-white
                        "
                    >
                        {userInitial}
                    </div>


                    {!collapsed && (

                        <div className="min-w-0">

                            <div className="truncate text-sm font-bold">
                                {user?.name ?? 'Unknown User'}
                            </div>

                            <div className="truncate text-xs text-white/50">
                                {user?.role ?? 'Unknown Role'}
                            </div>

                        </div>

                    )}

                </div>

            </div>

        </aside>
    );
}