"use client";

import React, { useEffect, useState } from 'react';

interface UserData {
    name: string;
    email: string;
    picture: string;
}

export default function ProfilePage() {
    const [user, setUser] = useState<UserData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

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

    if (loading) return <div className="p-5 text-center">Loading profile...</div>;
    if (error) return <div className="p-5 text-center text-red-500">{error}</div>;
    if (!user) return <div className="p-5 text-center">No profile data available.</div>;

    return (
        <div className="max-w-md mx-auto pt-12 px-5 p-6 border rounded-lg shadow-sm mt-10">
            <h2 className="text-2xl font-semibold mb-6">Profile</h2>
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
        </div>
    );
}
