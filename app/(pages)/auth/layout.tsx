import React from "react";

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
    <div className="min-h-screen flex flex-col items-center justify-center bg-radial from-gray-300 to-gray-100 p-4">
      <h1>Auth Layout</h1>
      {children}
    </div>
  );
}
