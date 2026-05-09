import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  return (
    <>
      <h1>Hello, Next.js!</h1>

      <div className="flex flex-col bg-amber-500">
        <Link href="/about">About Page</Link>
        <Link href="/services">Services Page</Link>
        <Link href="/services/web-dev">web dev</Link>
        <Link href="/blog/2">blog</Link>
        <Link href="/blog/test/comment">blog comment</Link>
        <Link href="/blog/test/comment/5">specific comment</Link>
        <Link href="/auth/login">login</Link>
        <Link href="/resume">resume</Link>
      </div>
    </>
  );
}
