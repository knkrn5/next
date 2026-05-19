"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface UserData {
    name: string;
    email: string;
    picture: string;
}

export default function ProfilePage() {
    const [user, setUser] = useState<UserData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const res = await fetch("http://localhost:5000/", {
                    method: "GET",
                    credentials: "include",
                });

                const data = await res.json();

                if (res.ok) {
                    setUser(data);
                } else {
                    setError(data.message || "Failed to load session");
                }
            } catch (err) {
                console.error(err);
                setError("An error occurred while fetching profile");
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, []);

    const handleLogout = async () => {

        fetch("http://localhost:5000/logout", {
            method: "GET",
            credentials: "include",
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                router.push("/auth/login");
            })
            .catch((err) => console.error("Logout error:", err));
    };

    if (loading) return <div className="p-5 text-center">Loading profile...</div>;

    // Show a Login button if there is an error (e.g., unauthorized)
    if (error) return (
        <div className="p-5 flex flex-col items-center justify-center mt-10 gap-4">
            <div className="text-red-500">{error}</div>
            <Link href="/auth/login" className="px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
                Go to Login
            </Link>
        </div>
    );

    // Show a Login button if there's no user data for whatever reason
    if (!user) return (
        <div className="p-5 flex flex-col items-center justify-center mt-10 gap-4">
            <div>No profile data available.</div>
            <Link href="/auth/login" className="px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
                Go to Login
            </Link>
        </div>
    );

    return (
        <div className="max-w-md mx-auto pt-12 px-5 p-6 border rounded-lg shadow-sm mt-10">
            <h2 className="text-2xl font-semibold mb-6">Profile</h2>
            <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                    {user.picture && (
                        <img
                            src={user.picture}
                            alt="Profile"
                            className="w-16 h-16 rounded-full object-cover"
                            referrerPolicy="no-referrer"
                        />
                    )}
                    <div>
                        <h3 className="text-xl font-medium">{user.name}</h3>
                        <p className="text-gray-600 dark:text-gray-400">{user.email}</p>
                    </div>
                </div>

                {/* Buttons Container */}
                <div className="border-t pt-4 mt-2 flex flex-row gap-4">
                    <Link 
                        href="/auth/login" 
                        className="w-full text-center px-4 py-2 bg-blue-100 text-blue-600 font-medium rounded-md hover:bg-blue-200 transition"
                    >
                        Go to Login
                    </Link>

                    {/* Logout Button */}
                    <button
                        onClick={handleLogout}
                        className="w-full px-4 py-2 bg-red-100 text-red-600 font-medium rounded-md hover:bg-red-200 transition"
                    >
                        Logout
                    </button>
                </div>
            </div>
        </div>
    );
}
