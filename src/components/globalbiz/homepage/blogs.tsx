'use client'
import React, { useState, useRef } from 'react';
import { CalendarSearch, ChevronLeft, ChevronRight, Eye } from 'lucide-react';

interface Blog {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  image: string;
}

const blogs: Blog[] = [
  {
    id: 1,
    title: "Start A New Business In Umm-Al-Quwain: Process To Follow",
    date: "28th, Aug 2022",
    excerpt: "Let's know more about the process to start a new business in Umm-Al-Quwain in an...",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop"
  },
  {
    id: 2,
    title: "6 Things to Keep in Mind While Setting Up a Business in UAE",
    date: "27th, Aug 2022",
    excerpt: "Are you planning to set up a business? then before making the huge step towards ...",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
  },
  {
    id: 3,
    title: "Perks Of Hiring Business Setup Consultants In Dubai, UAE",
    date: "27th, Aug 2022",
    excerpt: "Dig deep to know the advantages of engaging a business setup expert for your Dub...",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"
  },
  {
    id: 4,
    title: "Guide to Company Formation in Dubai Free Zones",
    date: "26th, Aug 2022",
    excerpt: "Discover the benefits and step-by-step process of setting up your company in Dubai's thriving free zones...",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop"
  },
  {
    id: 5,
    title: "Understanding VAT Registration Requirements in UAE",
    date: "25th, Aug 2022",
    excerpt: "Everything you need to know about VAT registration and compliance for businesses in the UAE...",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop"
  }
];

const BlogCarousel: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 450;
      const newScrollPosition = direction === 'left' 
        ? scrollContainerRef.current.scrollLeft - scrollAmount
        : scrollContainerRef.current.scrollLeft + scrollAmount;
      
      scrollContainerRef.current.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="w-full bg-[#F5F5F5] py-16 px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h2 className="text-5xl font-oswald text-center mb-12 text-yellow">
          OUR BLOG
        </h2>

        {/* Carousel Container */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-yellow hover:bg-yellow-600 text-black rounded-full p-3 shadow-lg transition-all duration-300 -ml-5"
            aria-label="Previous"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Blog Cards Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-hidden scroll-smooth px-2 pb-4"
          >
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="flex-shrink-0 w-[360px] bg-white  shadow-md overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-xl"
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
                  {/* Date */}
                  <div className="flex items-center px-2 text-gray-500 text-sm mb-3">
                    {/* <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg> */}
                    <CalendarSearch size={16} className='px-1'/>
                    {blog.date}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 leading-tight min-h-[56px]">
                    {blog.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {blog.excerpt}
                  </p>

                  {/* View More Link */}
                  <a
                    href="#"
                    className="text-gray-700 font-medium text-sm inline-flex items-center hover:text-yellow-500 transition-colors"
                  >
                    View More
                    <span className="ml-1">»</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-yellow hover:bg-yellow-600 text-black rounded-full p-3 shadow-lg transition-all duration-300 -mr-5"
            aria-label="Next"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCarousel;