"use client";

import { usePathname } from "next/navigation";

export default function BlogNotfound() {
  const path = usePathname();

  return (
    <div>
      <h1>Blog Not Found {path}</h1>
      <p>The blog you are looking for does not exist.</p>
    </div>
  );
}
