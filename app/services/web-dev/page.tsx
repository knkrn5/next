import Link from "next/link";
import React from "react";
import { createPortal } from "react-dom";

export default function Webdev() {
  return (
    <div>
      <h1>Web Development</h1>
      <p>This is the web development page.</p>

      <Link href="/">Go to Home Page</Link>
    </div>
  );
}
