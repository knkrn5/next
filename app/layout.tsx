import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// export const metadata: Metadata = {
//   title: "karan Next App",
//   description: "Learning next js",
// };

export const metadata: Metadata = {
  title: {
    default: "karan Next App",
    template: "karan Next App | %s",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <header className="text-5xl font-bold">My Custom Header</header>
        {children}
      </body>
    </html>
  );
}
