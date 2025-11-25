// /app/dashboard/admin/blog/page.tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface Blog {
  id: string;
  url: string;
  title: string;
  short_description: string;
  description: string;
  image: string;
  meta_title: string;
  meta_keywords: string;
  meta_description: string;
  tags: string;
  author_name: string;
  added_by: number;
  view: number;
  is_featured: boolean;
  is_editor: boolean;
  status: boolean;
  created: string;
  modified: string;
  published: string;
}

export default function BlogPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/blogs"); // Adjust the API route as needed
      
      if (!response.ok) {
        throw new Error("Failed to fetch blogs");
      }
      
      const data = await response.json();
      
      if (data.success) {
        setBlogs(data.blog);
      } else {
        throw new Error("Failed to load blogs");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading blogs...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-500 text-6xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Error</h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <button
            onClick={fetchBlogs}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Blog Management</h1>
          <p className="text-gray-600 mt-2">Manage and view all blog posts</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-lg font-semibold text-gray-900">Total Blogs</h3>
            <p className="text-3xl font-bold text-blue-600 mt-2">{blogs.length}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-lg font-semibold text-gray-900">Featured</h3>
            <p className="text-3xl font-bold text-green-600 mt-2">
              {blogs.filter(blog => blog.is_featured).length}
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-lg font-semibold text-gray-900">Total Views</h3>
            <p className="text-3xl font-bold text-purple-600 mt-2">
              {blogs.reduce((sum, blog) => sum + blog.view, 0)}
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-lg font-semibold text-gray-900">Active</h3>
            <p className="text-3xl font-bold text-green-600 mt-2">
              {blogs.filter(blog => blog.status).length}
            </p>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow duration-300 relative"
            >
              {/* Blog Image */}
              <div className="relative h-48 bg-gray-200 rounded-t-lg overflow-hidden">
                {blog.image ? (
                  <Image
                    src={`/images/blogs/${blog.image}`} // Adjust the path as needed
                    alt={blog.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-100">
                    <span className="text-gray-400">No Image</span>
                  </div>
                )}
                {blog.is_featured && (
                  <div className="absolute top-2 left-2">
                    <span className="bg-yellow-500 text-white text-xs px-2 py-1 rounded">
                      Featured
                    </span>
                  </div>
                )}
              </div>

              {/* Blog Content */}
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
                  {blog.title}
                </h2>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {blog.short_description}
                </p>

                {/* Meta Information */}
                <div className="space-y-2 text-sm text-gray-500 mb-4">
                  <div className="flex justify-between">
                    <span>Views: {blog.view}</span>
                    <span>{formatDate(blog.published)}</span>
                  </div>
                  {blog.author_name && (
                    <div>By: {blog.author_name}</div>
                  )}
                </div>

                {/* Actions */}
                <div className="flex space-x-2 absolute bottom-4 left-6 right-6">
                  <Link
                    href={`/dashboard/admin/blogs/${blog.id}`}
                    className="flex-1 bg-blue text-white text-center py-2 px-4 rounded hover:bg-blue-700 transition-colors"
                  >
                    View Details
                  </Link>
               
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {blogs.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">📝</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No blogs found
            </h3>
            <p className="text-gray-600 mb-4">
              There are no blog posts available at the moment.
            </p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Create New Blog
            </button>
          </div>
        )}
      </div>
    </div>
  );
}