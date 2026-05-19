import React from "react";
import { GoogleOAuthProvider } from '@react-oauth/google';

// export const metadata: Metadata = {
//   title: "karan | auth",
//   description: "auth layout for karan next app",
// };

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string}>
      <div className="min-h-screen flex flex-col items-center justify-center bg-radial from-gray-300 to-gray-100 p-4">
        <h1>Auth Layout</h1>
        {children}
      </div>
    </GoogleOAuthProvider>
  );
}
