// /* eslint-disable @typescript-eslint/no-unused-vars */
// /* eslint-disable @typescript-eslint/no-explicit-any */
// 'use client';

// import React, { useState, useEffect } from 'react';
// import Image from "next/image";


// import { CalendarSearch, Eye } from 'lucide-react';

// interface Blog {
//   id: string;
//   title: string;
//   created: string;
//   short_description: string;
//   image: string;
//   tags?: string;
//   author_name?: string;
//   view: number;
//   status: boolean;
//   meta_title?: string;
//   meta_description?: string;
//   url: string;
// }

// export default function BlogsPage() {
//   const [hoveredId, setHoveredId] = useState<string | null>(null);
//   const [selectedCategory, setSelectedCategory] = useState<string>('All');
//   const [blogs, setBlogs] = useState<Blog[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
// const [imageSrc, setImageSrc] = useState(`/global/${blog.image}`);

//   // Fetch blogs from API
//   useEffect(() => {
//     const fetchBlogs = async () => {
//       try {
//         setLoading(true);
//         const response = await fetch('/api/blogs');
        
//         if (!response.ok) {
//           throw new Error('Failed to fetch blogs');
//         }
        
//         const data = await response.json();
        
//         if (data.success && data.blog) {
//           // Filter only published blogs with status true
//           const publishedBlogs = data.blog.filter((blog: Blog) => blog.status === true);
//           setBlogs(publishedBlogs);
//         } else {
//           throw new Error('Invalid response format');
//         }
//       } catch (err) {
//         setError(err instanceof Error ? err.message : 'Failed to load blogs');
//         console.error('Error fetching blogs:', err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBlogs();
//   }, []);

//   // Format date to more readable format
//   const formatDate = (dateString: string) => {
//     const date = new Date(dateString);
//     const day = date.getDate();
//     const month = date.toLocaleString('en-US', { month: 'short' });
//     const year = date.getFullYear();
    
//     // Add ordinal suffix to day
//     const getOrdinalSuffix = (day: number) => {
//       if (day > 3 && day < 21) return 'th';
//       switch (day % 10) {
//         case 1: return 'st';
//         case 2: return 'nd';
//         case 3: return 'rd';
//         default: return 'th';
//       }
//     };
    
//     return `${day}${getOrdinalSuffix(day)}, ${month} ${year}`;
//   };

//   // Get unique categories from tags
//   const categories = ['All', ...Array.from(new Set(
//     blogs.flatMap(blog => 
//       blog.tags ? blog.tags.split(',').map(tag => tag.trim()).filter(tag => tag) : []
//     )
//   ))].filter(Boolean) as string[];

//   // Filter blogs by category
//   const filteredBlogs = selectedCategory === 'All' 
//     ? blogs 
//     : blogs.filter(blog => 
//         blog.tags && blog.tags.split(',').map(tag => tag.trim()).includes(selectedCategory)
//       );

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-white flex items-center justify-center">
//         <div className="text-center">
//           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow mx-auto"></div>
//           <p className="mt-4 text-gray-600">Loading blogs...</p>
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="min-h-screen bg-white flex items-center justify-center">
//         <div className="text-center text-red-600">
//           <p>Error: {error}</p>
//           <button 
//             onClick={() => window.location.reload()}
//             className="mt-4 bg-yellow text-black px-4 py-2 rounded hover:bg-yellow-600 transition-colors"
//           >
//             Retry
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Hero Section with Background */}
//       <div
//         className="relative h-64 bg-cover bg-center"
//         style={{
//           backgroundImage: "url('/global/breadcrumbs.png')",
//         }}
//       >
//         <div className="absolute inset-0 opacity-60"></div>

//         {/* Bottom-center aligned heading */}
//         <h1 className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 text-white text-5xl font-oswald">
//           Blogs
//         </h1>
//       </div>

//       {/* Main Content */}
//       <div className="w-full bg-[#F5F5F5] py-16 px-4 sm:px-8">
//         <div className="max-w-7xl mx-auto">
          
//           {/* Category Filter - Uncomment if you want to use it */}
//           {/* <div className="flex flex-wrap justify-center gap-4 mb-12">
//             {categories.map((category) => (
//               <button
//                 key={category}
//                 onClick={() => setSelectedCategory(category)}
//                 className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
//                   selectedCategory === category
//                     ? 'bg-yellow text-black shadow-lg'
//                     : 'bg-white text-gray-700 hover:bg-gray-100'
//                 }`}
//               >
//                 {category}
//               </button>
//             ))}
//           </div> */}

//           {/* Blog Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {filteredBlogs.map((blog) => (
//               <div
//                 key={blog.id}
//                 className="bg-white rounded-lg shadow-md overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-xl"
//                 onMouseEnter={() => setHoveredId(blog.id)}
//                 onMouseLeave={() => setHoveredId(null)}
//               >
//                 {/* Image Container */}
//                <div className="relative h-48 overflow-hidden">
//   <Image
//   src={imageSrc}
//   alt={blog.title}
//   fill
//   className="object-cover transition-transform duration-300 group-hover:scale-110"
//   onError={() => setImageSrc("https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop")}
// />

//   {blog.tags && (
//     <div className="absolute top-4 left-4 bg-yellow text-black px-3 py-1 rounded-full text-sm font-medium">
//       {blog.tags.split(',')[0].trim()}
//     </div>
//   )}

//   <div
//     className={`absolute inset-0 bg-blue-900 transition-opacity duration-300 flex items-center justify-center ${
//       hoveredId === blog.id ? "opacity-80" : "opacity-0"
//     }`}
//   >
//     <Eye size={48} className="text-white" />
//   </div>
// </div>


//                 {/* Content */}
//                 <div className="p-6">
//                   {/* Date and Views */}
//                   <div className="flex items-center justify-between text-gray-500 text-sm mb-3">
//                     <div className="flex items-center">
//                       <CalendarSearch size={16} className="mr-2" />
//                       {formatDate(blog.created)}
//                     </div>
//                     <span className="text-xs bg-gray-100 px-2 py-1 rounded">
//                       {blog.view} views
//                     </span>
//                   </div>

//                   {/* Title */}
//                   <h3 className="text-xl font-semibold text-gray-800 mb-3 leading-tight min-h-[56px] line-clamp-2">
//                     {blog.title}
//                   </h3>

//                   {/* Excerpt */}
//                   <p className="text-gray-600 text-sm mb-4 line-clamp-3">
//                     {blog.short_description}
//                   </p>

//                   {/* View More Link */}
//                   <a
//                     href={`/blogs/${blog.url}`}
//                     className="text-gray-700 font-medium text-sm inline-flex items-center hover:text-yellow-500 transition-colors group/link"
//                   >
//                     View More
//                     <span className="ml-1 transition-transform duration-300 group-hover/link:translate-x-1">»</span>
//                   </a>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Load More Button (if needed) */}
//           {filteredBlogs.length > 6 && (
//             <div className="text-center mt-12">
//               <button className="bg-yellow hover:bg-yellow-600 text-black font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
//                 Load More Blogs
//               </button>
//             </div>
//           )}

//           {/* No Results Message */}
//           {filteredBlogs.length === 0 && (
//             <div className="text-center py-12">
//               <p className="text-gray-500 text-lg">No blogs found in this category.</p>
//               <button 
//                 onClick={() => setSelectedCategory('All')}
//                 className="mt-4 text-yellow hover:text-yellow-600 font-medium"
//               >
//                 View all blogs
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }


/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import React, { useState, useEffect } from 'react';
import Image from "next/image";
import { CalendarSearch, Eye } from 'lucide-react';

interface Blog {
  id: string;
  title: string;
  created: string;
  short_description: string;
  image: string;
  tags?: string;
  author_name?: string;
  view: number;
  status: boolean;
  meta_title?: string;
  meta_description?: string;
  url: string;
}

// BlogCard component to handle individual blog image state
const BlogCard = ({ blog, hoveredId, setHoveredId, formatDate }: {
  blog: Blog;
  hoveredId: string | null;
  setHoveredId: (id: string | null) => void;
  formatDate: (date: string) => string;
}) => {
  const [imageSrc, setImageSrc] = useState(`/uploads/${blog.image}`);

  return (
    <div
      key={blog.id}
      className="bg-white rounded-lg shadow-md overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-xl"
      onMouseEnter={() => setHoveredId(blog.id)}
      onMouseLeave={() => setHoveredId(null)}
    >
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={imageSrc}
          alt={blog.title}
          // fill
          //   height={192}
          // width={192}
          className="object-cover transition-transform duration-300 group-hover:scale-110"
          onError={() => setImageSrc("/images/blogs.png")}
          
        />

        {blog.tags && (
          <div className="absolute top-4 left-4 bg-yellow text-black px-3 py-1 rounded-full text-sm font-medium">
            {blog.tags.split(',')[0].trim()}
          </div>
        )}

        <div
          className={`absolute inset-0 bg-blue-900 transition-opacity duration-300 flex items-center justify-center ${
            hoveredId === blog.id ? "opacity-80" : "opacity-0"
          }`}
        >
          <Eye size={48} className="text-white" />
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Date and Views */}
        <div className="flex items-center justify-between text-gray-500 text-sm mb-3">
          <div className="flex items-center">
            <CalendarSearch size={16} className="mr-2" />
            {formatDate(blog.created)}
          </div>
          <span className="text-xs bg-gray-100 px-2 py-1 rounded">
            {blog.view} views
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold text-gray-800 mb-3 leading-tight min-h-[56px] line-clamp-2">
          {blog.title}
        </h3>

        {/* Excerpt */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {blog.short_description}
        </p>

        {/* View More Link */}
        <a
          href={`/blogs/${blog.id}`}
          className="text-gray-700 font-medium text-sm inline-flex items-center hover:text-yellow-500 transition-colors group/link"
        >
          View More
          <span className="ml-1 transition-transform duration-300 group-hover/link:translate-x-1">»</span>
        </a>
      </div>
    </div>
  );
};

export default function BlogsPage() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch blogs from API
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/blogs');
        
        if (!response.ok) {
          throw new Error('Failed to fetch blogs');
        }
        
        const data = await response.json();
        
        if (data.success && data.blog) {
          // Filter only published blogs with status true
          const publishedBlogs = data.blog.filter((blog: Blog) => blog.status === true);
          setBlogs(publishedBlogs);
        } else {
          throw new Error('Invalid response format');
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load blogs');
        console.error('Error fetching blogs:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // Format date to more readable format
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString('en-US', { month: 'short' });
    const year = date.getFullYear();
    
    // Add ordinal suffix to day
    const getOrdinalSuffix = (day: number) => {
      if (day > 3 && day < 21) return 'th';
      switch (day % 10) {
        case 1: return 'st';
        case 2: return 'nd';
        case 3: return 'rd';
        default: return 'th';
      }
    };
    
    return `${day}${getOrdinalSuffix(day)}, ${month} ${year}`;
  };

  // Get unique categories from tags
  const categories = ['All', ...Array.from(new Set(
    blogs.flatMap(blog => 
      blog.tags ? blog.tags.split(',').map(tag => tag.trim()).filter(tag => tag) : []
    )
  ))].filter(Boolean) as string[];

  // Filter blogs by category
  const filteredBlogs = selectedCategory === 'All' 
    ? blogs 
    : blogs.filter(blog => 
        blog.tags && blog.tags.split(',').map(tag => tag.trim()).includes(selectedCategory)
      );

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading blogs...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center text-red-600">
          <p>Error: {error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="mt-4 bg-yellow text-black px-4 py-2 rounded hover:bg-yellow-600 transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Background */}
      <div
        className="relative h-64 bg-cover bg-center"
        style={{
          backgroundImage: "url('/global/breadcrumbs.png')",
        }}
      >
        <div className="absolute inset-0 opacity-60"></div>

        {/* Bottom-center aligned heading */}
        <h1 className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 text-white text-5xl font-oswald">
          Blogs
        </h1>
      </div>

      {/* Main Content */}
      <div className="w-full bg-[#F5F5F5] py-16 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Category Filter - Uncomment if you want to use it */}
          {/* <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-yellow text-black shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div> */}

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((blog) => (
              <BlogCard
                key={blog.id}
                blog={blog}
                hoveredId={hoveredId}
                setHoveredId={setHoveredId}
                formatDate={formatDate}
              />
            ))}
          </div>

          {/* Load More Button (if needed) */}
          {filteredBlogs.length > 6 && (
            <div className="text-center mt-12">
              <button className="bg-yellow hover:bg-yellow-600 text-black font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Load More Blogs
              </button>
            </div>
          )}

          {/* No Results Message */}
          {filteredBlogs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No blogs found in this category.</p>
              <button 
                onClick={() => setSelectedCategory('All')}
                className="mt-4 text-yellow hover:text-yellow-600 font-medium"
              >
                View all blogs
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}