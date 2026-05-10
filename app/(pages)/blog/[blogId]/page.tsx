import { notFound } from "next/navigation";
import Link from "next/link";

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
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <Link
          href="/blog"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6 transition-colors"
        >
          <span className="mr-2">←</span>
          Back
        </Link>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Blog Post</h1>
            <div className="bg-blue-100 rounded-lg p-6 mb-4">
              <p className="text-4xl font-bold text-blue-600">{blogId}</p>
            </div>
            <p className="text-gray-600 mb-6">Post ID: {blogId}</p>
            <Link
              href="/blog"
              className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              View All Posts
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
