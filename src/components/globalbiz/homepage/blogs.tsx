
// 'use client'
// import React, { useState, useRef } from 'react';
// import { CalendarSearch, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
// import Image from 'next/image';

// interface Blog {
//   id: number;
//   title: string;
//   date: string;
//   excerpt: string;
//   image: string;
// }

// const blogs: Blog[] = [
//   {
//     id: 1,
//     title: "Start A New Business In Umm-Al-Quwain: Process To Follow",
//     date: "28th, Aug 2022",
//     excerpt: "Let's know more about the process to start a new business in Umm-Al-Quwain in an...",
//     image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop"
//   },
//   {
//     id: 2,
//     title: "6 Things to Keep in Mind While Setting Up a Business in UAE",
//     date: "27th, Aug 2022",
//     excerpt: "Are you planning to set up a business? then before making the huge step towards ...",
//     image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
//   },
//   {
//     id: 3,
//     title: "Perks Of Hiring Business Setup Consultants In Dubai, UAE",
//     date: "27th, Aug 2022",
//     excerpt: "Dig deep to know the advantages of engaging a business setup expert for your Dub...",
//     image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"
//   },
//   {
//     id: 4,
//     title: "Guide to Company Formation in Dubai Free Zones",
//     date: "26th, Aug 2022",
//     excerpt: "Discover the benefits and step-by-step process of setting up your company in Dubai's thriving free zones...",
//     image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop"
//   },
//   {
//     id: 5,
//     title: "Understanding VAT Registration Requirements in UAE",
//     date: "25th, Aug 2022",
//     excerpt: "Everything you need to know about VAT registration and compliance for businesses in the UAE...",
//     image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop"
//   }
// ];

// const BlogCarousel: React.FC = () => {
//   const [hoveredId, setHoveredId] = useState<number | null>(null);
//   const scrollContainerRef = useRef<HTMLDivElement>(null);

//   const scroll = (direction: 'left' | 'right') => {
//     if (scrollContainerRef.current) {
//       const scrollAmount = window.innerWidth < 768 ? 320 : 450;
//       const newScrollPosition = direction === 'left' 
//         ? scrollContainerRef.current.scrollLeft - scrollAmount
//         : scrollContainerRef.current.scrollLeft + scrollAmount;
      
//       scrollContainerRef.current.scrollTo({
//         left: newScrollPosition,
//         behavior: 'smooth'
//       });
//     }
//   };

//   return (
//     <div className="w-full bg-[#F5F5F5] py-8 md:py-16 px-4 md:px-16">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <h2 className="text-3xl md:text-5xl font-oswald text-center mb-6 md:mb-12 text-yellow">
//           OUR BLOG
//         </h2>

//         {/* Carousel Container */}
//         <div className="relative">
//           {/* Left Arrow - Hidden on mobile, visible on md and up */}
//           <button
//             onClick={() => scroll('left')}
//             className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-yellow hover:bg-yellow-600 text-black rounded-full p-2 md:p-3 shadow-lg transition-all duration-300 -ml-2 md:-ml-5"
//             aria-label="Previous"
//           >
//             <ChevronLeft size={20} className="md:w-6 md:h-6" />
//           </button>

//           {/* Blog Cards Container */}
//           <div
//             ref={scrollContainerRef}
//             className="flex gap-4 md:gap-6 overflow-x-auto scroll-smooth px-1 md:px-2 pb-4 md:pb-4 snap-x snap-mandatory"
//           >
//             {blogs.map((blog) => (
//               <div
//                 key={blog.id}
//                 className="flex-shrink-0 w-[280px] md:w-[360px] bg-white rounded-lg md:rounded-none shadow-md md:shadow-md overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-xl snap-start"
//                 onMouseEnter={() => setHoveredId(blog.id)}
//                 onMouseLeave={() => setHoveredId(null)}
//               >
//                 {/* Image Container */}
//                 <div className="relative h-40 md:h-48 overflow-hidden">
//                   <Image
//                     src={blog.image}
//                     alt={blog.title}
//                     className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
//                       height={192}
//                       width={192}
//                   />
                  
//                   {/* Blue Overlay on Hover */}
//                   <div
//                     className={`absolute inset-0 bg-blue transition-opacity duration-300 flex items-center justify-center ${
//                       hoveredId === blog.id ? 'opacity-50' : 'opacity-0'
//                     }`}
//                   >
//                     <Eye size={32} className="md:w-12 md:h-12 text-white" />
//                   </div>
//                 </div>

//                 {/* Content */}
//                 <div className="p-4 md:p-6">
//                   {/* Date */}
//                   <div className="flex items-center text-gray-500 text-xs md:text-sm mb-2 md:mb-3">
//                     <CalendarSearch size={14} className="md:w-4 md:h-4 mr-1 md:mr-2" />
//                     {blog.date}
//                   </div>

//                   {/* Title */}
//                   <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2 md:mb-3 leading-tight min-h-[60px] md:min-h-[56px] line-clamp-2">
//                     {blog.title}
//                   </h3>

//                   {/* Excerpt */}
//                   <p className="text-gray-600 text-xs md:text-sm mb-3 md:mb-4 line-clamp-2">
//                     {blog.excerpt}
//                   </p>

//                   {/* View More Link */}
//                   <a
//                     href="#"
//                     className="text-gray-700 font-medium text-xs md:text-sm inline-flex items-center hover:text-yellow-500 transition-colors"
//                   >
//                     View More
//                     <span className="ml-1">»</span>
//                   </a>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Right Arrow - Hidden on mobile, visible on md and up */}
//           <button
//             onClick={() => scroll('right')}
//             className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-yellow hover:bg-yellow-600 text-black rounded-full p-2 md:p-3 shadow-lg transition-all duration-300 -mr-2 md:-mr-5"
//             aria-label="Next"
//           >
//             <ChevronRight size={20} className="md:w-6 md:h-6" />
//           </button>

//           {/* Mobile Navigation Dots */}
//           {/* <div className="flex justify-center mt-6 md:hidden space-x-2">
//             {blogs.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => {
//                   if (scrollContainerRef.current) {
//                     const scrollAmount = 320 * index;
//                     scrollContainerRef.current.scrollTo({
//                       left: scrollAmount,
//                       behavior: 'smooth'
//                     });
//                   }
//                 }}
//                 className="w-2 h-2 rounded-full bg-gray-300 transition-colors duration-200"
//                 aria-label={`Go to slide ${index + 1}`}
//               />
//             ))}
//           </div> */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BlogCarousel;


'use client'
import React, { useState, useRef, useEffect } from 'react';
import { CalendarSearch, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

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

const BlogCarousel: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

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

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = window.innerWidth < 768 ? 320 : 450;
      const newScrollPosition = direction === 'left' 
        ? scrollContainerRef.current.scrollLeft - scrollAmount
        : scrollContainerRef.current.scrollLeft + scrollAmount;
      
      scrollContainerRef.current.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth'
      });
    }
  };

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

  // Handle blog click navigation
  const handleBlogClick = (blogId: string) => {
    router.push(`/blogs/${blogId}`);
  };

  // Handle view more click
  const handleViewMoreClick = (e: React.MouseEvent, blogId: string) => {
    e.preventDefault();
    e.stopPropagation();
    router.push(`/blogs/${blogId}`);
  };

  if (loading) {
    return (
      <div className="w-full bg-[#F5F5F5] py-8 md:py-16 px-4 md:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-oswald text-center mb-6 md:mb-12 text-yellow">
            OUR BLOG
          </h2>
          <div className="flex justify-center items-center h-40">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow mx-auto"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full bg-[#F5F5F5] py-8 md:py-16 px-4 md:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-oswald text-center mb-6 md:mb-12 text-yellow">
            OUR BLOG
          </h2>
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
      </div>
    );
  }

  return (
    <div className="w-full bg-[#F5F5F5] py-8 md:py-16 px-4 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h2 className="text-3xl md:text-5xl font-oswald text-center mb-6 md:mb-12 text-yellow">
          OUR BLOG
        </h2>

        {/* Carousel Container */}
        <div className="relative">
          {/* Left Arrow - Hidden on mobile, visible on md and up */}
          <button
            onClick={() => scroll('left')}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-yellow hover:bg-yellow-600 text-black rounded-full p-2 md:p-3 shadow-lg transition-all duration-300 -ml-2 md:-ml-5"
            aria-label="Previous"
          >
            <ChevronLeft size={20} className="md:w-6 md:h-6" />
          </button>

          {/* Blog Cards Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-4 md:gap-6 overflow-x-auto scroll-smooth px-1 md:px-2 pb-4 md:pb-4 snap-x snap-mandatory"
          >
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="flex-shrink-0 w-[280px] md:w-[360px] bg-white rounded-lg md:rounded-none shadow-md md:shadow-md overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-xl snap-start"
                onMouseEnter={() => setHoveredId(blog.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => handleBlogClick(blog.id)}
              >
                {/* Image Container */}
                <div className="relative h-40 md:h-48 overflow-hidden">
                  <img
                    src={`/uploads/${blog.image}`}
                    alt={blog.title}
                    // width={360}
                    // height={192}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "/images/blogs.png";
                    }}
                  />
                  
                  {/* Tag */}
                  {blog.tags && (
                    <div className="absolute top-3 left-3 bg-yellow text-black px-2 py-1 rounded-full text-xs font-medium">
                      {blog.tags.split(',')[0].trim()}
                    </div>
                  )}

                  {/* Blue Overlay on Hover */}
                  <div
                    className={`absolute inset-0 bg-blue transition-opacity duration-300 flex items-center justify-center ${
                      hoveredId === blog.id ? 'opacity-50' : 'opacity-0'
                    }`}
                  >
                    <Eye size={32} className="md:w-12 md:h-12 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 md:p-6">
                  {/* Date and Views */}
                  <div className="flex items-center justify-between text-gray-500 text-xs md:text-sm mb-2 md:mb-3">
                    <div className="flex items-center">
                      <CalendarSearch size={14} className="md:w-4 md:h-4 mr-1 md:mr-2" />
                      {formatDate(blog.created)}
                    </div>
                    <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                      {blog.view} views
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2 md:mb-3 leading-tight min-h-[60px] md:min-h-[56px] line-clamp-2">
                    {blog.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-600 text-xs md:text-sm mb-3 md:mb-4 line-clamp-2">
                    {blog.short_description}
                  </p>

                  {/* View More Link */}
                  <a
                    href={`/blogs/${blog.id}`}
                    onClick={(e) => handleViewMoreClick(e, blog.id)}
                    className="text-gray-700 font-medium text-xs md:text-sm inline-flex items-center hover:text-yellow-500 transition-colors"
                  >
                    View More
                    <span className="ml-1">»</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow - Hidden on mobile, visible on md and up */}
          <button
            onClick={() => scroll('right')}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-yellow hover:bg-yellow-600 text-black rounded-full p-2 md:p-3 shadow-lg transition-all duration-300 -mr-2 md:-mr-5"
            aria-label="Next"
          >
            <ChevronRight size={20} className="md:w-6 md:h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCarousel;