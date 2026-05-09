import React from "react";

export default function ServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <header className="text-5xl font-bold">My Service Header</header>

      {children}
      <footer className="text-5xl font-bold">My Service Footer</footer>
    </div>
  );
}
