import React from 'react'

export default function AccountLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <div>
            <h1>Account layout</h1>
            {children}
        </div>
    )
}
