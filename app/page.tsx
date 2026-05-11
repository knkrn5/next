import Image from "next/image";
import Link from "next/link";
import Flow from "./_components/heroSection/Flow";
import HeroSection from "./_components/heroSection/HeroSection";



export default async function Home() {
  return (
    <>
      <h1>Hello, Next.js!</h1>
      <Flow />
      <div className="flex flex-col bg-amber-500">
        <Link href="/about">About Page</Link>
        <Link href="/services">Services Page</Link>
        <Link href="/services/web-dev">web dev</Link>
        <Link href="/blog">blog</Link>
        <Link href="/blog/test/comment">blog comment</Link>
        <Link href="/blog/test/comment/5">specific comment</Link>
        <Link href="/auth/login">login</Link>
        <Link href="/resume">resume</Link>
      </div>
    </>
  );
}
