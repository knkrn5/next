import React from "react";

export default async function Blog({ params }) {
  console.log("blog param", await params);

  const { blogId } = await params;
  return (
    <div>
      <h1>Blog Post</h1>
      <p>{blogId}</p>
    </div>
  );
}
