import { Metadata } from "next";
import React from "react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ filePaths?: string[] }>;
}) {
  const { filePaths } = await params;
  return {
    title: `File Paths: ${filePaths?.join(" / ") || "Home"}`,
    description: `File paths page for karan next app`,
  };
}

export default async function FilePaths({
  params,
}: {
  params: Promise<{ filePaths: string[] }>;
}) {
  const { filePaths } = await params;
  return (
    <div>
      <h1>File Paths</h1>
      <p className="font-bold">{filePaths?.join(" / ")}</p>
    </div>
  );
}
