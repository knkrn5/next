import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "register",
  description: "register page for karan next app",
};

export default function Register() {
  return (
    <div>
      <h1>Register</h1>
      <p>This is the register page</p>

      <Link href="/auth/login">Go to Login Page</Link>
    </div>
  );
}
