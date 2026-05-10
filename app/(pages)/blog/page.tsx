import React from 'react'
import Link from 'next/link'

const blogData = [
  {
    id: 1,
    title: 'Getting Started with Next.js',
    excerpt: 'Learn the basics of Next.js and how to build modern web applications.',
    date: 'May 1, 2024'
  },
  {
    id: 2,
    title: 'React Hooks Explained',
    excerpt: 'Deep dive into React hooks and how they can improve your code.',
    date: 'May 5, 2024'
  },
  {
    id: 3,
    title: 'TypeScript Best Practices',
    excerpt: 'Discover the best practices for writing type-safe TypeScript code.',
    date: 'May 8, 2024'
  },
  {
    id: 4,
    title: 'CSS Grid Layout Guide',
    excerpt: 'Master CSS Grid and create responsive layouts with ease.',
    date: 'May 10, 2024'
  },
  {
    id: 5,
    title: 'API Design Patterns',
    excerpt: 'Explore common patterns for designing scalable APIs.',
    date: 'May 12, 2024'
  },
  {
    id: 6,
    title: 'Performance Optimization Tips',
    excerpt: 'Optimize your applications for better performance and user experience.',
    date: 'May 15, 2024'
  }
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-12">Blog</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogData.map((blog) => (
            <Link
              key={blog.id}
              href={`/blog/${blog.id}`}
              className="block group"
            >
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full">
                <div className="p-6 h-full flex flex-col">
                  <div className="flex-grow">
                    <h2 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                      {blog.title}
                    </h2>
                    <p className="text-gray-600 mb-4">
                      {blog.excerpt}
                    </p>
                  </div>
                  <p className="text-sm text-gray-400">
                    {blog.date}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
