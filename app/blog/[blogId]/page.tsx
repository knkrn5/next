import { notFound } from "next/navigation";
import React from "react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) {
  const { blogId } = await params;
  return {
    title: `blog ${blogId}`,
    description: `this is blog post number ${blogId}`,
  };
}

export default async function Blog({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) {
  const { blogId } = await params;

  const isBlogIdValid = /^\d+$/.test(blogId);

  if (!isBlogIdValid) {
    notFound();
  }

  return (
    <div>
      <h1>Blog Post</h1>
      <p>{blogId}</p>
    </div>
  );
}
