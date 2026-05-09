import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "login",
  description: "login page for karan next app",
};

export default function Login() {
  return (
    <div>
      <h1
        onClick={() => {
          console.log("login page");
        }}
      >
        Login page
      </h1>
      <p>this is login page</p>

      <Link href="/auth/register">Go to Register Page</Link>
    </div>
  );
}
