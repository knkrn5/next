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
    <div className="min-h-screen flex items-center justify-center bg-radial from-gray-300 to-gray-100 dark:from-gray-800 from-40% dark:to-gray-900 p-4">
      <h1>Auth Layout</h1>
      {children}
    </div>
  );
}
