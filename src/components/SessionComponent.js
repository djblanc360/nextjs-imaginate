'use client'

import { useSession, signOut } from 'next-auth/react'
import Link from 'next/link'

export default function SessionComponent() {
    const { data: session } = useSession()

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
        {session ? (
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
                <p>Welcome, {session.user.name}!</p>
                <button
                    onClick={() => signOut()}
                    className="w-full py-2 mt-4 font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600"
                >
                Sign out
                </button>
            </div>
            ) : (
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-center">Account</h2>
                <p className="text-center">You are not signed in</p>
                <Link href="/auth/signin">
                    <span className="text-blue-500">Sign in</span>
                </Link>
                <Link href="/auth/register">
                    <span className="ml-4 text-blue-500">Register</span>
                </Link>
            </div>
            )
        }
        </div>
    )
      
}