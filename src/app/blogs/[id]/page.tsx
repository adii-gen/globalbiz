// app/blogs/[id]/page.tsx
'use client';

import React from 'react';
import { CalendarSearch, ArrowLeft, Share2, Bookmark, Eye } from 'lucide-react';
import Link from 'next/link';

interface Blog {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  category?: string;
  readTime?: string;
  content?: string;
}

// Mock data - in real app, this would come from API/database
const allBlogs: Blog[] = [
  {
    id: 1,
    title: "5 Reasons Why You Should Consider Company Registration in the Sharjah",
    date: "27th, Sep 2022",
    excerpt: "After Dubai, and Abu Dhabi, Sharjah in the UAE is the third largest emirate...",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=500&fit=crop",
    category: "Business Setup",
    readTime: "6 min read",
    content: `
      <p>After Dubai, and Abu Dhabi, Sharjah in the UAE is the third largest emirate. It is among the most progressive emirate out of the seven, contributing almost 7.5% of the country's GDP (Gross Domestic Product). It has the fastest-growing economy that attracts investors from all around the globe.</p>

      <p>Also, Sharjah is the only emirate with access to the ports on the western & eastern of the Arabian Gulf, the Indian Ocean, and direct access to North Africa. That helps businesses in easy transportation of commercial products and freight. In addition to that, Sharjah's government actively participates in providing a friendly environment for running a business successfully. It offers lucrative governmental incentives for investors in every type of industry. That is why many entrepreneurs are coming forward for new company registration in Sharjah.</p>

      <p>So if you are planning to establish a new company in Sharjah, here are five reasons that will help you to put a stamp on this decision:</p>

      <h3>1. It is Tax-Free!</h3>
      <p>Sharjah is a tax haven. The taxation laws are very lenient compared to any other emirates in the UAE. It does not levy any tax on individuals or companies. With the increasing number of businesses, Sharjah has been a magnet for new startup ideas, established businesses, and businessmen looking for a tax-free zone for company formation.</p>

      <h3>2. Adherence to Rules and Regulations by Everyone</h3>
      <p>In addition to tax benefits, Sharjah UAE is also known for its high living standard for the people with UAE residency. The people of Sharjah follow the rules and regulations, making it one of the safest places in the UAE.</p>

      <h3>3. Get Tax Residency</h3>
      <p>A new company set up in Sharjah allows business owners to take up residence in the UAE. The residency certificate helps to reduce the overall tax burden and evades double taxation, letting business owners enjoy high profitability.</p>

      <h3>4. Growing Business Hub</h3>
      <p>Sharjah has gained much traction in the past few years from prospective business owners around the globe. Making it the most successful growing business hub in the UAE. The reason behind this is no corporate taxes, no taxes on export or import, and minimum requirements for company formation.</p>

      <h3>5. Easy and Smooth banking Facilities</h3>
      <p>Sharjah has a huge presence of international banks and a strong financial system. In Sharjah, businesses can easily get financial support from the banks to support their growth requirements. Registered companies in Sharjah can easily take credits from different financial institutions.</p>

      <p>Other than this, Sharjah also provides the following:</p>
      <ul>
        <li>Sharjah provides 100% repatriation of profits and capital for foreign companies and complete business ownership.</li>
        <li>Sharjah offers a 50% rental decrease for the tourism and hospitality industry for three months.</li>
        <li>Provide warehouse facilities for New company registration in Sharjah to store goods freely for up to 2 months.</li>
        <li>Offer multiple entry visas for entrepreneurs.</li>
      </ul>

      <h3>Bottom Line</h3>
      <p>New company registration in Sharjah comes with lots of perks. It has a robust infrastructure, offers 100% exemption of taxes, eye-catching architects, great incentives by the government, and much more. If you want a high return on investment (ROI), global reach, business visibility, or recognition, Sharjah is the best place to register your company.</p>

      <p>If you're planning to register your company in Sharjah, then Global Biz Setup is here to assist you. With extensive domain knowledge and understanding of Emirate legislation, we'll help you to set up your business in Sharjah hassle-free. Get associated with us to know the entire process of new company registration in Sharjah.</p>
    `
  },
  {
    id: 2,
    title: "A Step–By–Step Guide to Starting an Offshore Business in Dubai",
    date: "23rd, Sep 2022",
    excerpt: "Complete guide to setting up an offshore business in Dubai with all legal requirements...",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
    category: "Offshore",
    readTime: "8 min read"
  },
  {
    id: 3,
    title: "What To Look for When Hiring a Business Setup Service Provider in Dubai",
    date: "18th, Sep 2022",
    excerpt: "Key factors to consider when choosing a business setup consultant in Dubai...",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    category: "Consulting",
    readTime: "5 min read"
  },
  {
    id: 4,
    title: "6 Reasons Why Startups Should Consider Setting Up a Company in Ajman Free Zone",
    date: "11th, Sep 2022",
    excerpt: "Discover why Ajman Free Zone is perfect for startups looking to establish in UAE...",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    category: "Free Zones",
    readTime: "6 min read"
  },
  {
    id: 5,
    title: "5 Advantages Of Setting Up Business in RAKEZ",
    date: "29th, Aug 2022",
    excerpt: "Learn about the benefits of establishing your business in Ras Al Khaimah Economic Zone...",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
    category: "Economic Zones",
    readTime: "4 min read"
  },
  {
    id: 6,
    title: "Start A New Business in Umm–Al–Quwain: Process To Follow",
    date: "28th, Aug 2022",
    excerpt: "Complete process guide for setting up a new business in Umm-Al-Quwain...",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop",
    category: "Business Setup",
    readTime: "7 min read"
  }
];

interface BlogDetailPageProps {
  params: {
    id: string;
  };
}

export default function BlogDetailPage({ params }: BlogDetailPageProps) {
  const blogId = parseInt(params.id);
  const currentBlog = allBlogs.find(blog => blog.id === blogId);
  const relatedBlogs = allBlogs.filter(blog => blog.id !== blogId).slice(0, 5);

  if (!currentBlog) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Blog Not Found</h1>
          <Link href="/blogs" className="text-yellow hover:text-yellow-600 font-medium">
            ← 
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Background */}
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
              className="flex items-center text-white hover:text-yellow transition-colors"
            >
              <ArrowLeft size={20} className="mr-2" />
             
            </Link>
            
            <h1 className="text-3xl font-oswald text-white text-center flex-1 mx-8">
              {currentBlog.title}
            </h1>
            
            <div className="flex items-center space-x-4">
              <button className="text-white hover:text-yellow transition-colors">
                <Share2 size={20} />
              </button>
              <button className="text-white hover:text-yellow transition-colors">
                <Bookmark size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Blog Content - 70% */}
          <div className="lg:w-9/12">
            {/* Blog Image */}
            <div className="relative h-80 mb-6 rounded-xl overflow-hidden">
              <img
                src={currentBlog.image}
                alt={currentBlog.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Blog Meta */}
            <div className="flex items-center justify-between text-gray-600 mb-6">
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <CalendarSearch size={18} className="mr-2" />
                  <span>{currentBlog.date}</span>
                </div>
                {currentBlog.readTime && (
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                    {currentBlog.readTime}
                  </span>
                )}
              </div>
              
              {currentBlog.category && (
                <span className="bg-yellow text-black px-4 py-1 rounded-full text-sm font-medium">
                  {currentBlog.category}
                </span>
              )}
            </div>

            {/* Blog Content */}
            <article className="prose prose-lg max-w-none">
              <div 
                dangerouslySetInnerHTML={{ __html: currentBlog.content || currentBlog.excerpt }}
                className="text-gray-700 leading-relaxed"
              />
            </article>

            {/* Action Buttons */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-200">
              <Link
                href="/blogs"
                className="flex items-center text-gray-600 hover:text-yellow transition-colors"
              >
                <ArrowLeft size={18} className="mr-2" />
                Back to All Blogs
              </Link>
              
              <div className="flex items-center space-x-4">
                <button className="flex items-center text-gray-600 hover:text-yellow transition-colors">
                  <Share2 size={18} className="mr-2" />
                  Share
                </button>
                <button className="flex items-center text-gray-600 hover:text-yellow transition-colors">
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
                        <img
                          src={blog.image}
                          alt={blog.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      
                      {/* Blog Info */}
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-gray-800 text-sm leading-tight mb-2 line-clamp-2 group-hover:text-yellow transition-colors">
                          {blog.title}
                        </h4>
                        
                        <div className="flex items-center text-gray-500 text-xs">
                          <CalendarSearch size={14} className="mr-1" />
                          {blog.date}
                        </div>
                        
                        {blog.category && (
                          <span className="inline-block mt-1 bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs">
                            {blog.category}
                          </span>
                        )}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* View All Blogs Button */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <Link
                  href="/blogs"
                  className="block w-full bg-yellow hover:bg-yellow-600 text-black text-center font-semibold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  View All Blogs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}