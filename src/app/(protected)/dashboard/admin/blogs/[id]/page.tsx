// /app/dashboard/admin/blog/[id]/page.tsx
"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
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

export default function BlogDetailPage() {
  const params = useParams();
  const id = params.id as string;
  
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      fetchBlog(id);
    }
  }, [id]);

  const fetchBlog = async (blogId: string) => {
    try {
      setLoading(true);
      const response = await fetch(`/api/blogs?id=${blogId}`);
      
      if (!response.ok) {
        throw new Error("Failed to fetch blog");
      }
      
      const data = await response.json();
      
      if (data.success && data.blog.length > 0) {
        setBlog(data.blog[0]);
      } else {
        throw new Error("Blog not found");
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
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading blog...</p>
        </div>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-500 text-6xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Error</h2>
          <p className="text-gray-600 mb-4">{error || "Blog not found"}</p>
          <button
            onClick={() => window.history.back()}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-4">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button
          onClick={() => window.history.back()}
          className="mb-6 flex items-center text-blue-600 hover:text-blue-700"
        >
          ← Back to Blogs
        </button>

        {/* Blog Content */}
        <article className="bg-white rounded-lg shadow-sm border">
          {/* Header */}
          <div className="p-6 border-b">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-4">
                {blog.is_featured && (
                  <span className="bg-yellow text-white text-sm px-3 py-1 rounded-full">
                    Featured
                  </span>
                )}
                <span
                  className={`text-sm px-3 py-1 rounded-full ${
                    blog.status 
                      ? "bg-green-100 text-green-800" 
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {blog.status ? "Published" : "Draft"}
                </span>
              </div>
              <span className="text-sm text-gray-500">
                {formatDate(blog.published)}
              </span>
            </div>
            
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {blog.title}
            </h1>
            
            <p className="text-xl text-gray-600 mb-4">
              {blog.short_description}
            </p>

            <div className="flex items-center justify-between text-sm text-gray-500">
              <div>
                {blog.author_name && (
                  <span>By {blog.author_name}</span>
                )}
              </div>
              <div className="flex items-center space-x-4">
                <span>Views: {blog.view}</span>
               
              </div>
            </div>
          </div>

          {/* Blog Image */}
          {blog.image && (
            <div className="relative h-96 bg-gray-200">
              <Image
                src={`/images/blogs/${blog.image}`}
                alt={blog.title}
                fill
                className="object-cover"
              />
            </div>
          )}

          {/* Blog Description */}
          <div className="p-6">
            <div 
              className="prose max-w-none"
              dangerouslySetInnerHTML={{ __html: blog.description }}
            />
          </div>

          
        

          {/* Timestamps */}
          <div className="p-6 border-t bg-gray-50">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
              <div>
                <strong>Created:</strong> {formatDate(blog.created)}
              </div>
              <div>
                <strong>Modified:</strong> {formatDate(blog.modified)}
              </div>
              <div>
                <strong>Published:</strong> {formatDate(blog.published)}
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}