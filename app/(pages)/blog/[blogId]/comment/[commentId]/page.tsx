import React from 'react'

export default async function specificComment({params}) {

    const {blogId, commentId} = await params;

  return (
    <div>
      <h1>Specific Comment</h1>
      <p>Blog ID: {blogId}</p>
      <p>Comment ID: {commentId}</p>
    </div>
  )
}
