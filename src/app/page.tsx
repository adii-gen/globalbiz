import Navbar from '@/components/globalbiz/homepage/navbar'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
import AboutUsSec from '@/components/globalbiz/homepage/aboutussec'
import HeroSec from '@/components/globalbiz/homepage/hero'
import WhyBusiness from '@/components/globalbiz/homepage/whyBusiness'
import BusinessSetupServices from '@/components/globalbiz/homepage/BusinessSetupServices '
import BusinessSetupSection from '@/components/globalbiz/homepage/BusinessSetupSection'
import FooterSection from '@/components/globalbiz/homepage/footer'
import OurAssociations from '@/components/globalbiz/homepage/ourAssociation'
import FooterReplica from '@/components/globalbiz/homepage/footer'
import TestimonialsSection from '@/components/globalbiz/homepage/testimonals'
import BlogCarousel from '@/components/globalbiz/homepage/blogs'
import ContactCallback from '@/components/globalbiz/homepage/contactus'

const Homepage = () => {
  return (
    <div><Navbar/>
    <HeroSec />

<AboutUsSec/>
<WhyBusiness />
<BusinessSetupServices />
<BusinessSetupSection />
{/* <FooterReplica /> */}
<TestimonialsSection />
<BlogCarousel />
<ContactCallback />
<FooterSection/>
<OurAssociations />
</div>
  )
}

export default Homepage