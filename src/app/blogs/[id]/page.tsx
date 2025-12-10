
// // app/blogs/[id]/page.tsx
// 'use client';

// import React, { useEffect, useState } from 'react';
// import { CalendarSearch, ArrowLeft, Share2, Bookmark, Loader2, Loader2Icon } from 'lucide-react';
// import Link from 'next/link';
// import { useParams } from 'next/navigation';
// import Image from 'next/image';
// import Loader from '@/components/loader';

// interface Blog {
//   id: string;
//   url: string;
//   title: string;
//   short_description: string;
//   description: string;
//   image: string;
//   tags?: string;
//   author_name?: string;
//   view?: number;
//   created: string;
//   modified: string;
//   is_featured?: boolean;
//   status?: boolean;
// }

// export default function BlogDetailPage() {
//   const params = useParams();
//   const id = params?.id as string;
  
//   const [currentBlog, setCurrentBlog] = useState<Blog | null>(null);
//   const [relatedBlogs, setRelatedBlogs] = useState<Blog[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchBlogData = async () => {
//       try {
//         setLoading(true);
//         setError(null);

//         // Fetch current blog
//         const blogResponse = await fetch(`/api/blogs/${id}`);
//         if (!blogResponse.ok) {
//           throw new Error('Blog not found');
//         }
//         const blogData = await blogResponse.json();
        
//         // Check if response has success property and blog data
//         if (blogData.success && blogData.blog) {
//           setCurrentBlog(blogData.blog);
//         } else {
//           throw new Error('Invalid blog data');
//         }

//         // Fetch all blogs for related posts
//         const allBlogsResponse = await fetch('/api/blogs');
//         if (allBlogsResponse.ok) {
//           const allBlogsData = await allBlogsResponse.json();
          
//           // Get blogs array from response
//           const blogsArray = allBlogsData.success && allBlogsData.blog 
//             ? allBlogsData.blog 
//             : [];
          
//           // Filter out current blog and limit to 5, only show published blogs
//           const related = blogsArray
//             .filter((blog: Blog) => blog.id !== id && blog.status === true)
//             .slice(0, 5);
//           setRelatedBlogs(related);
//         }
//       } catch (err) {
//         setError(err instanceof Error ? err.message : 'Failed to load blog');
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (id) {
//       fetchBlogData();
//     }
//   }, [id]);

//   // Helper function to format date
//   const formatDate = (dateString: string) => {
//     const date = new Date(dateString);
//     const options: Intl.DateTimeFormatOptions = { 
//       day: 'numeric', 
//       month: 'short', 
//       year: 'numeric' 
//     };
//     return date.toLocaleDateString('en-US', options);
//   };

//   // Helper function to calculate read time
//   const calculateReadTime = (content: string) => {
//     const wordsPerMinute = 200;
//     const textContent = content.replace(/<[^>]*>/g, ''); // Remove HTML tags
//     const wordCount = textContent.split(/\s+/).length;
//     const minutes = Math.ceil(wordCount / wordsPerMinute);
//     return `${minutes} min read`;
//   };

//   // Loading state
//   if (loading) {
// return<Loader/>  }

//   // Error or not found state
//   if (error || !currentBlog) {
//     return (
//       <div className="min-h-screen bg-white flex items-center justify-center">
//         <div className="text-center">
//           <h1 className="text-2xl font-bold text-gray-800 mb-4">
//             {error || 'Blog Not Found'}
//           </h1>
//           <Link href="/blogs" className="text-yellow-500 hover:text-yellow-600 font-medium">
//             ← Back to Blogs
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Hero Section with Background */}
//       <div
//         className="relative h-60 bg-cover bg-center"
//         style={{
//           backgroundImage: "url('/global/breadcrumbs.png')",
//         }}
//       >
//         <div className="absolute inset-0 opacity-60"></div>
        
//         {/* Back Button and Title */}
//         <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 w-full max-w-7xl px-4">
//           <div className="flex items-center justify-between">
//             <Link
//               href="/blogs"
//               className="flex items-center text-white hover:text-yellow-500 transition-colors"
//             >
//               <ArrowLeft size={20} className="mr-2" />
//               Back to Blogs
//             </Link>
            
//             <h1 className="text-3xl font-oswald text-white text-center flex-1 mx-8">
//               {currentBlog.title}
//             </h1>
            
//             <div className="flex items-center space-x-4">
//               <button className="text-white hover:text-yellow-500 transition-colors">
//                 <Share2 size={20} />
//               </button>
//               <button className="text-white hover:text-yellow-500 transition-colors">
//                 <Bookmark size={20} />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="max-w-7xl mx-auto px-8 py-8">
//         <div className="flex flex-col lg:flex-row gap-8">
//           {/* Blog Content - 70% */}
//           <div className="lg:w-9/12">
//             {/* Blog Image */}
//             <div className="relative h-80 mb-6 rounded-xl overflow-hidden">
//               <img
//                 src={`/uploads/${currentBlog.image}`}
//                 alt={currentBlog.title}
//                 className="w-full h-full object-cover"
//                 onError={(e) => {
//                   e.currentTarget.src = '/blogs.png';
//                 }}
//                 height={500}
//                 width={800}
//               />
//             </div>

//             {/* Blog Meta */}
//             <div className="flex items-center justify-between text-gray-600 mb-6">
//               <div className="flex items-center space-x-4">
//                 <div className="flex items-center">
//                   <CalendarSearch size={18} className="mr-2" />
//                   <span>{formatDate(currentBlog.created)}</span>
//                 </div>
//                 <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
//                   {calculateReadTime(currentBlog.description)}
//                 </span>
//                 {currentBlog.view && (
//                   <span className="text-sm text-gray-500">
//                     {currentBlog.view} views
//                   </span>
//                 )}
//               </div>
              
//               {currentBlog.tags && (
//                 <span className="bg-yellow-500 text-black px-4 py-1 rounded-full text-sm font-medium">
//                   {currentBlog.tags.trim()}
//                 </span>
//               )}
//             </div>

//             {/* Author */}
//             {currentBlog.author_name && (
//               <div className="mb-6 flex items-center text-gray-600">
//                 <span className="text-sm">By <strong>{currentBlog.author_name}</strong></span>
//               </div>
//             )}

//             {/* Blog Content */}
//             <article className="prose  font-raleway prose-lg max-w-none">
//               <div 
//                 dangerouslySetInnerHTML={{ __html: currentBlog.description }}
//                 className="text-gray-700 leading-relaxed"
//               />
//             </article>

//             {/* Action Buttons */}
//             <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-200">
//               <Link
//                 href="/blogs"
//                 className="flex items-center text-gray-600 hover:text-yellow-500 transition-colors"
//               >
//                 <ArrowLeft size={18} className="mr-2" />
//                 Back to All Blogs
//               </Link>
              
//               <div className="flex items-center space-x-4">
//                 <button className="flex items-center text-gray-600 hover:text-yellow-500 transition-colors">
//                   <Share2 size={18} className="mr-2" />
//                   Share
//                 </button>
//                 <button className="flex items-center text-gray-600 hover:text-yellow-500 transition-colors">
//                   <Bookmark size={18} className="mr-2" />
//                   Save
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Related Blogs - 30% */}
//           <div className="lg:w-3/12">
//             <div className="bg-gray-50 rounded-xl p-6 sticky top-8">
//               <h3 className="text-2xl font-oswald text-gray-800 mb-6 pb-3 border-b border-gray-200">
//                 Latest Posts
//               </h3>
              
//               {relatedBlogs.length > 0 ? (
//                 <div className="space-y-6">
//                   {relatedBlogs.map((blog) => (
//                     <Link
//                       key={blog.id}
//                       href={`/blogs/${blog.id}`}
//                       className="block group"
//                     >
//                       <div className="flex gap-4 p-3 rounded-lg hover:bg-white hover:shadow-md transition-all duration-300">
//                         {/* Blog Image */}
//                         <div className="flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden">
//                           <Image
//                             src={`/uploads/${blog.image}`}
//                             alt={blog.title}
//                             className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
//                             onError={(e) => {
//                               e.currentTarget.src = '/images/blogs.png';
                            
//                             }}
//                             height={20}
//                             width={20}
//                           />
//                         </div>
                        
//                         {/* Blog Info */}
//                         <div className="flex-1 min-w-0">
//                           <h4 className="font-semibold text-gray-800 text-sm leading-tight mb-2 line-clamp-2 group-hover:text-yellow-500 transition-colors">
//                             {blog.title}
//                           </h4>
                          
//                           <div className="flex items-center text-gray-500 text-xs">
//                             <CalendarSearch size={14} className="mr-1" />
//                             {formatDate(blog.created)}
//                           </div>
                          
//                           {blog.tags && (
//                             <span className="inline-block mt-1 bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs">
//                               {blog.tags.trim()}
//                             </span>
//                           )}
//                         </div>
//                       </div>
//                     </Link>
//                   ))}
//                 </div>
//               ) : (
//                 <p className="text-gray-500 text-sm">No related blogs available</p>
//               )}

//               {/* View All Blogs Button */}
//               <div className="mt-6 pt-6 border-t border-gray-200">
//                 <Link
//                   href="/blogs"
//                   className="block w-full bg-yellow-500 hover:bg-yellow-600 text-black text-center font-semibold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105"
//                 >
//                   View All Blogs
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



// app/blogs/[id]/page.tsx
'use client';

import React, { useEffect, useState } from 'react';
import { CalendarSearch, ArrowLeft, Share2, Bookmark, Loader2 } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import Image from 'next/image';

interface Blog {
  id: string;
  url: string;
  title: string;
  short_description: string;
  description: string;
  image: string;
  tags?: string;
  author_name?: string;
  view?: number;
  created: string;
  modified: string;
  is_featured?: boolean;
  status?: boolean;
}

export default function BlogDetailPage() {
  const params = useParams();
  const id = params?.id as string;
  
  const [currentBlog, setCurrentBlog] = useState<Blog | null>(null);
  const [relatedBlogs, setRelatedBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Fetch current blog
        const blogResponse = await fetch(`/api/blogs/${id}`);
        if (!blogResponse.ok) {
          throw new Error('Blog not found');
        }
        const blogData = await blogResponse.json();
        
        // Check if response has success property and blog data
        if (blogData.success && blogData.blog) {
          setCurrentBlog(blogData.blog);
        } else {
          throw new Error('Invalid blog data');
        }

        // Fetch all blogs for related posts
        const allBlogsResponse = await fetch('/api/blogs');
        if (allBlogsResponse.ok) {
          const allBlogsData = await allBlogsResponse.json();
          
          // Get blogs array from response
          const blogsArray = allBlogsData.success && allBlogsData.blog 
            ? allBlogsData.blog 
            : [];
          
          // Filter out current blog and limit to 5, only show published blogs
          const related = blogsArray
            .filter((blog: Blog) => blog.id !== id && blog.status === true)
            .slice(0, 5);
          setRelatedBlogs(related);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load blog');
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchBlogData();
    }
  }, [id]);

  // Helper function to format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = { 
      day: 'numeric', 
      month: 'short', 
      year: 'numeric' 
    };
    return date.toLocaleDateString('en-US', options);
  };

  // Helper function to calculate read time
  const calculateReadTime = (content: string) => {
    const wordsPerMinute = 200;
    const textContent = content.replace(/<[^>]*>/g, ''); // Remove HTML tags
    const wordCount = textContent.split(/\s+/).length;
    const minutes = Math.ceil(wordCount / wordsPerMinute);
    return `${minutes} min read`;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Background - ALWAYS VISIBLE */}
      <div
        className="relative h-60 bg-cover bg-center"
        style={{
          backgroundImage: "url('/global/breadcrumbs.png')",
        }}
      >
        <div className="absolute inset-0 opacity-60"></div>
        
        {/* Back Button and Title */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 w-full max-w-7xl px-4">
          <div className="flex items-center justify-between">
            <Link
              href="/blogs"
              className="flex items-center text-white hover:text-yellow-500 transition-colors"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to Blogs
            </Link>
            
            <h1 className="text-3xl font-oswald text-white text-center flex-1 mx-8">
              {currentBlog?.title || 'Loading...'}
            </h1>
            
            <div className="flex items-center space-x-4">
              <button className="text-white hover:text-yellow-500 transition-colors">
                <Share2 size={20} />
              </button>
              <button className="text-white hover:text-yellow-500 transition-colors">
                <Bookmark size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-8 py-8">
        {/* Loading State */}
        {loading && (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="animate-spin text-yellow-500" size={48} />
          </div>
        )}

        {/* Error State */}
        {!loading && error && (
          <div className="text-center py-20">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              {error}
            </h2>
            <Link href="/blogs" className="text-yellow-500 hover:text-yellow-600 font-medium">
              ← Back to Blogs
            </Link>
          </div>
        )}

        {/* Blog Content - Only show when loaded and no error */}
        {!loading && !error && currentBlog && (
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Blog Content - 70% */}
            <div className="lg:w-9/12">
              {/* Blog Image */}
              <div className="relative h-80 mb-6 rounded-xl overflow-hidden">
                <img
                  src={`/uploads/${currentBlog.image}`}
                  alt={currentBlog.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = '/blogs.png';
                  }}
                  height={500}
                  width={800}
                />
              </div>

              {/* Blog Meta */}
              <div className="flex items-center justify-between text-gray-600 mb-6">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <CalendarSearch size={18} className="mr-2" />
                    <span>{formatDate(currentBlog.created)}</span>
                  </div>
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                    {calculateReadTime(currentBlog.description)}
                  </span>
                  {currentBlog.view && (
                    <span className="text-sm text-gray-500">
                      {currentBlog.view} views
                    </span>
                  )}
                </div>
                
                {currentBlog.tags && (
                  <span className="bg-yellow-500 text-black px-4 py-1 rounded-full text-sm font-medium">
                    {currentBlog.tags.trim()}
                  </span>
                )}
              </div>

              {/* Author */}
              {currentBlog.author_name && (
                <div className="mb-6 flex items-center text-gray-600">
                  <span className="text-sm">By <strong>{currentBlog.author_name}</strong></span>
                </div>
              )}

              {/* Blog Content */}
              <article className="prose font-raleway prose-lg max-w-none">
                <div 
                  dangerouslySetInnerHTML={{ __html: currentBlog.description }}
                  className="text-gray-700 leading-relaxed"
                />
              </article>

              {/* Action Buttons */}
              <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-200">
                <Link
                  href="/blogs"
                  className="flex items-center text-gray-600 hover:text-yellow-500 transition-colors"
                >
                  <ArrowLeft size={18} className="mr-2" />
                  Back to All Blogs
                </Link>
                
                <div className="flex items-center space-x-4">
                  <button className="flex items-center text-gray-600 hover:text-yellow-500 transition-colors">
                    <Share2 size={18} className="mr-2" />
                    Share
                  </button>
                  <button className="flex items-center text-gray-600 hover:text-yellow-500 transition-colors">
                    <Bookmark size={18} className="mr-2" />
                    Save
                  </button>
                </div>
              </div>
            </div>

            {/* Related Blogs - 30% */}
            <div className="lg:w-3/12">
              <div className="bg-gray-50 rounded-xl p-6 sticky top-8">
                <h3 className="text-2xl font-oswald text-gray-800 mb-6 pb-3 border-b border-gray-200">
                  Latest Posts
                </h3>
                
                {relatedBlogs.length > 0 ? (
                  <div className="space-y-6">
                    {relatedBlogs.map((blog) => (
                      <Link
                        key={blog.id}
                        href={`/blogs/${blog.id}`}
                        className="block group"
                      >
                        <div className="flex gap-4 p-3 rounded-lg hover:bg-white hover:shadow-md transition-all duration-300">
                          {/* Blog Image */}
                          <div className="flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden">
                            <Image
                              src={`/uploads/${blog.image}`}
                              alt={blog.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                              onError={(e) => {
                                e.currentTarget.src = '/images/blogs.png';
                              }}
                              height={20}
                              width={20}
                            />
                          </div>
                          
                          {/* Blog Info */}
                          <div className="flex-1 min-w-0">
                            <h4 className="font-semibold text-gray-800 text-sm leading-tight mb-2 line-clamp-2 group-hover:text-yellow-500 transition-colors">
                              {blog.title}
                            </h4>
                            
                            <div className="flex items-center text-gray-500 text-xs">
                              <CalendarSearch size={14} className="mr-1" />
                              {formatDate(blog.created)}
                            </div>
                            
                            {blog.tags && (
                              <span className="inline-block mt-1 bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs">
                                {blog.tags.trim()}
                              </span>
                            )}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500 text-sm">No related blogs available</p>
                )}

                {/* View All Blogs Button */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <Link
                    href="/blogs"
                    className="block w-full bg-yellow-500 hover:bg-yellow-600 text-black text-center font-semibold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105"
                  >
                    View All Blogs
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}