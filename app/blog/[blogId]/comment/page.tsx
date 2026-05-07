import React from "react";

export default async function Comment({ params }) {
  const { blogId } = await params;
  return (
    <div>
      <h1>Blog Comment</h1>
      <p>comment {blogId}</p>
    </div>
  );
}
