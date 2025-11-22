// import BlogCarousel from '@/components/globalbiz/homepage/blogs';
// import React from 'react';

// export default function Blogs() {
//     return (
//         <div className="min-h-screen bg-white">
//             {/* Hero Section with Background */}
//             <div
//                 className="relative h-64 bg-cover bg-center"
//                 style={{
//                     backgroundImage: "url('/global/breadcrumbs.png')",
//                 }}
//             >
//                 <div className="absolute inset-0 opacity-60"></div>

//                 {/* Bottom-center aligned heading */}
//                 <h1 className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 text-white text-5xl font-oswald
//         ">
//                     Blogs
//                 </h1>
//             </div>
//             <BlogCarousel />
//         </div>
//     );
// }

// app/blogs/page.tsx
'use client';

import React, { useState } from 'react';
import { CalendarSearch, Eye } from 'lucide-react';

interface Blog {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  category?: string;
  readTime?: string;
}

const blogs: Blog[] = [
  {
    id: 1,
    title: "Start A New Business In Umm-Al-Quwain: Process To Follow",
    date: "28th, Aug 2022",
    excerpt: "Let's know more about the process to start a new business in Umm-Al-Quwain in an in-depth guide covering all requirements and procedures.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
    category: "Business Setup",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "6 Things to Keep in Mind While Setting Up a Business in UAE",
    date: "27th, Aug 2022",
    excerpt: "Are you planning to set up a business? then before making the huge step towards entrepreneurship, consider these crucial factors...",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    category: "Business Tips",
    readTime: "4 min read"
  },
  {
    id: 3,
    title: "Perks Of Hiring Business Setup Consultants In Dubai, UAE",
    date: "27th, Aug 2022",
    excerpt: "Dig deep to know the advantages of engaging a business setup expert for your Dubai venture and how it can save you time and resources...",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    category: "Consulting",
    readTime: "6 min read"
  },
  {
    id: 4,
    title: "Guide to Company Formation in Dubai Free Zones",
    date: "26th, Aug 2022",
    excerpt: "Discover the benefits and step-by-step process of setting up your company in Dubai's thriving free zones with complete licensing details...",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
    category: "Free Zones",
    readTime: "7 min read"
  },
  {
    id: 5,
    title: "Understanding VAT Registration Requirements in UAE",
    date: "25th, Aug 2022",
    excerpt: "Everything you need to know about VAT registration and compliance for businesses in the UAE, including thresholds and documentation...",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop",
    category: "Taxation",
    readTime: "5 min read"
  },
  {
    id: 6,
    title: "Latest Updates in UAE Commercial Companies Law",
    date: "24th, Aug 2022",
    excerpt: "Stay updated with the recent changes in UAE commercial companies law and how they impact foreign ownership and business operations...",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop",
    category: "Legal",
    readTime: "8 min read"
  },
  {
    id: 7,
    title: "Benefits of Establishing in Abu Dhabi Industrial Zone",
    date: "23rd, Aug 2022",
    excerpt: "Explore the competitive advantages and incentives offered by Abu Dhabi's industrial zones for manufacturing and logistics businesses...",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop",
    category: "Industrial",
    readTime: "6 min read"
  },
  {
    id: 8,
    title: "Digital Transformation for SMEs in the UAE Market",
    date: "22nd, Aug 2022",
    excerpt: "Learn how small and medium enterprises can leverage digital transformation to compete effectively in the rapidly evolving UAE market...",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    category: "Technology",
    readTime: "5 min read"
  },
  {
    id: 9,
    title: "Sustainable Business Practices in the Middle East",
    date: "21st, Aug 2022",
    excerpt: "Discover how businesses can adopt sustainable practices while operating in the Middle East and the benefits of going green...",
    image: "https://images.unsplash.com/photo-1569163139394-de44cb54d5ce?w=600&h=400&fit=crop",
    category: "Sustainability",
    readTime: "4 min read"
  }
];

export default function BlogsPage() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Get unique categories
  const categories = ['All', ...Array.from(new Set(blogs.map(blog => blog.category)))].filter(Boolean) as string[];

  // Filter blogs by category
  const filteredBlogs = selectedCategory === 'All' 
    ? blogs 
    : blogs.filter(blog => blog.category === selectedCategory);

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
          
          {/* Category Filter
          <div className="flex flex-wrap justify-center gap-4 mb-12">
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
              <div
                key={blog.id}
                className="bg-white rounded-lg shadow-md overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-xl"
                onMouseEnter={() => setHoveredId(blog.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  
                  {/* Category Badge */}
                  {blog.category && (
                    <div className="absolute top-4 left-4 bg-yellow text-black px-3 py-1 rounded-full text-sm font-medium">
                      {blog.category}
                    </div>
                  )}
                  
                  {/* Blue Overlay on Hover */}
                  <div
                    className={`absolute inset-0 bg-blue-900 transition-opacity duration-300 flex items-center justify-center ${
                      hoveredId === blog.id ? 'opacity-80' : 'opacity-0'
                    }`}
                  >
                    <Eye size={48} className="text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Date and Read Time */}
                  <div className="flex items-center justify-between text-gray-500 text-sm mb-3">
                    <div className="flex items-center">
                      <CalendarSearch size={16} className="mr-2" />
                      {blog.date}
                    </div>
                    {blog.readTime && (
                      <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                        {blog.readTime}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 leading-tight min-h-[56px] line-clamp-2">
                    {blog.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {blog.excerpt}
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