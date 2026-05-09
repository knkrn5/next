import React from "react";

export default function pageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <header className="text-4xl">Pages Header</header>
      {children}
      <footer className="text-4xl">Pages Footer</footer>

    </div>
  );
}
