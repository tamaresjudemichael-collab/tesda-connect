import { useState } from 'react';

export default function LoginModal({ onClose }) {

    /*
    |--------------------------------------------------------------------------
    | Login Form
    |--------------------------------------------------------------------------
    */

    const [username, setUsername] = useState('admin');

    const [password, setPassword] = useState('admin123');

    const [role, setRole] = useState('Administrator');


    /*
    |--------------------------------------------------------------------------
    | Login State
    |--------------------------------------------------------------------------
    */

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState('');


    /*
    |--------------------------------------------------------------------------
    | Handle Login
    |--------------------------------------------------------------------------
    */

    const handleLogin = async (e) => {

        e.preventDefault();

        setLoading(true);

        setError('');


        try {

            const response = await fetch('/login', {

                method: 'POST',

                headers: {

                    'Content-Type': 'application/json',

                    'Accept': 'application/json',

                    'X-CSRF-TOKEN': document
                        .querySelector('meta[name="csrf-token"]')
                        ?.getAttribute('content'),

                },

                credentials: 'same-origin',

                body: JSON.stringify({

                    username,

                    password,

                    role,

                }),

            });


            const data = await response.json();


            /*
            |--------------------------------------------------------------------------
            | Login Failed
            |--------------------------------------------------------------------------
            */

            if (!response.ok) {

                throw new Error(

                    data.message || 'Login failed.'

                );

            }


            /*
            |--------------------------------------------------------------------------
            | Login Success
            |--------------------------------------------------------------------------
            |
            | Laravel session is now authenticated.
            |
            */

            window.location.href = '/dashboard';


        } catch (error) {

            console.error('Login Error:', error);


            setError(

                error.message ||

                'Something went wrong while signing in.'

            );


        } finally {

            setLoading(false);

        }

    };


    /*
    |--------------------------------------------------------------------------
    | Render
    |--------------------------------------------------------------------------
    */

    return (

        <div

            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-4 backdrop-blur-md"

            onClick={onClose}

        >

            <div

                className="w-full max-w-md rounded-2xl border border-white/10 bg-[#111d1f]/95 p-7 shadow-2xl"

                onClick={(e) => e.stopPropagation()}

            >


                {/* =========================
                    HEADER
                ========================= */}

                <div className="mb-6 flex items-center justify-between">

                    <div>

                        <h2 className="text-2xl font-bold">

                            Welcome Back 👋

                        </h2>


                        <p className="mt-1 text-xs text-white/40">

                            Sign in to access your TESDAConnect account.

                        </p>

                    </div>


                    <button

                        type="button"

                        onClick={onClose}

                        className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white/60 hover:bg-white/20"

                    >

                        ×

                    </button>

                </div>



                {/* =========================
                    DEMO ACCOUNT
                ========================= */}

                <div className="mb-4 rounded-lg border border-white/10 bg-white/5 p-3 text-xs text-white/50">

                    🔑 Demo:{' '}

                    <strong className="text-white">

                        admin

                    </strong>


                    {' / '}


                    <strong className="text-white">

                        admin123

                    </strong>

                </div>



                {/* =========================
                    LOGIN FORM
                ========================= */}

                <form onSubmit={handleLogin}>


                    {/* =========================
                        ERROR
                    ========================= */}

                    {error && (

                        <div className="mb-4 rounded-lg border border-red-400/20 bg-red-400/10 p-3 text-xs text-red-300">

                            {error}

                        </div>

                    )}



                    {/* =========================
                        USERNAME
                    ========================= */}

                    <label className="mb-1 block text-[9px] font-bold uppercase tracking-widest text-white/50">

                        Username

                    </label>


                    <input

                        type="text"

                        value={username}

                        onChange={(e) => setUsername(e.target.value)}

                        placeholder="Username"

                        autoComplete="username"

                        required

                        className="mb-4 w-full rounded-lg border border-white/10 bg-white/10 px-4 py-3 text-sm text-white outline-none focus:border-cyan-400"

                    />



                    {/* =========================
                        PASSWORD
                    ========================= */}

                    <label className="mb-1 block text-[9px] font-bold uppercase tracking-widest text-white/50">

                        Password

                    </label>


                    <input

                        type="password"

                        value={password}

                        onChange={(e) => setPassword(e.target.value)}

                        placeholder="Password"

                        autoComplete="current-password"

                        required

                        className="mb-4 w-full rounded-lg border border-white/10 bg-white/10 px-4 py-3 text-sm text-white outline-none focus:border-cyan-400"

                    />



                    {/* =========================
                        ROLE
                    ========================= */}

                    <label className="mb-1 block text-[9px] font-bold uppercase tracking-widest text-white/50">

                        Sign In As

                    </label>


                    <select

                        value={role}

                        onChange={(e) => setRole(e.target.value)}

                        className="mb-5 w-full rounded-lg border border-white/10 bg-white/10 px-4 py-3 text-sm text-white outline-none"

                    >

                        <option

                            value="Administrator"

                            className="bg-[#111d1f]"

                        >

                            Administrator

                        </option>


                        <option

                            value="Registrar"

                            className="bg-[#111d1f]"

                        >

                            Registrar

                        </option>


                        <option

                            value="UTPRAS/Focal Person"

                            className="bg-[#111d1f]"

                        >

                            UTPRAS/Focal Person

                        </option>


                        <option

                            value="Scholar/Students"

                            className="bg-[#111d1f]"

                        >

                            Scholar/Students

                        </option>

                    </select>



                    {/* =========================
                        LOGIN BUTTON
                    ========================= */}

                    <button

                        type="submit"

                        disabled={loading}

                        className="w-full rounded-lg bg-[#0d3190] py-3 text-sm font-bold transition hover:bg-[#1241b5] disabled:cursor-not-allowed disabled:opacity-50"

                    >

                        {loading

                            ? 'Signing In...'

                            : 'Sign In →'

                        }

                    </button>


                </form>



                {/* =========================
                    FOOTER
                ========================= */}

                <p className="mt-5 text-center text-[9px] text-white/30">

                    TESDAConnect v1.0.0 · Capstone Project 2025

                </p>


            </div>

        </div>

    );

}