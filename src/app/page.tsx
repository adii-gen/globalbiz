
import React from 'react'
import AboutUsSec from '@/components/globalbiz/homepage/aboutussec'
import HeroSec from '@/components/globalbiz/homepage/hero'
import WhyBusiness from '@/components/globalbiz/homepage/whyBusiness'
import BusinessSetupServices from '@/components/globalbiz/homepage/BusinessSetupServices '
import BusinessSetupSection from '@/components/globalbiz/homepage/BusinessSetupSection'

import TestimonialsSection from '@/components/globalbiz/homepage/testimonals'
import BlogCarousel from '@/components/globalbiz/homepage/blogs'
import ContactCallback from '@/components/globalbiz/homepage/contactus'
// Add metadata export
export const metadata = {
  title: 'Business Setup in UAE | Dubai, Abu Dhabi & Free Zone Company Formation',
  description: 'Leading business setup consultants in UAE offering company formation services in Dubai mainland, Abu Dhabi, and free zones. Complete PRO services, trade license, and business registration with 1900+ satisfied clients.',
  keywords: [
    'business setup in UAE',
    'business setup consultants',
    'company formation UAE',
    'business setup services',
    'dubai business setup',
    'abu dhabi business setup',
    'free zone business setup',
    'mainland business setup',
    'trade license UAE',
    'PRO services dubai'
  ],
  authors: [{ name: 'Global Biz Setup' }],
  openGraph: {
    title: 'Business Setup in UAE | Dubai, Abu Dhabi & Free Zone Company Formation',
    description: 'Leading business setup consultants in UAE. Expert company formation services in Dubai mainland, Abu Dhabi, and free zones.',
    url: 'https://globalbizsetup.com',
    siteName: 'Global Biz Setup',
    images: [
      {
        url: 'https://yourwebsite.com/og-image.jpg', // Add your actual image URL
        width: 1200,
        height: 630,
        alt: 'Business Setup UAE',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Business Setup in UAE | Dubai, Abu Dhabi & Free Zone',
    description: 'Leading business setup consultants in UAE. Expert company formation services.',
    images: ['https://yourwebsite.com/twitter-image.jpg'], // Add your actual image URL
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://yourwebsite.com',
  },
  verification: {
    google: 'your-google-verification-code', // Add when you get it from Google Search Console
  },
}
const Homepage = () => {
  return (
    <div>
    <HeroSec />

<AboutUsSec/>
<WhyBusiness />
<BusinessSetupServices />
<BusinessSetupSection />
{/* <FooterReplica /> */}
<TestimonialsSection />
<BlogCarousel />
<ContactCallback />
{/* <FooterSection/> */}
</div>
  )
}

export default Homepage