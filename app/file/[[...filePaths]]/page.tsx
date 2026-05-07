import React from 'react'

export default async function FilePaths({ params }) {
  const { filePaths } = await params;
  return (
    <div>
      <h1>File Paths</h1>
      <p className="font-bold">{filePaths?.join(" / ")}</p>
    </div>
  )
}
