import ContactUs from '@/components/ContactUs'
import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css'
import Hero from '@/components/Hero/Hero'
import Introduction from '@/components/Introduction'
import AboutUs from '@/components/AboutUs'
import Services from '@/components/Services/Services'
import Partners from '@/components/Partners/Partners'

const introData = [
  {
    imageUrl: '/assets/coworking_spaces.png',
    title: 'Coworking Spaces',
    content:
      'Inspiring Work Environments Designed for Technological Innovation',
  },
  {
    imageUrl: '/assets/monotoring.png',
    title: 'Mentoring and Training',
    content: 'Gain Insights from Industry Experts to Boost Your Success',
  },
  {
    imageUrl: '/assets/funding_and_markets.png',
    title: 'Access to Funding and Markets',
    content: 'Unlock Financing Opportunities and Expand Your Impact',
  },
  {
    imageUrl: '/assets/networking_opportunities.png',
    title: 'Networking Opportunities',
    content:
      'Connect with like-minded technology enthusiasts and industry leaders',
  },
]

const templateData = [
  {
    icon: 'fa-solid fa-rocket',
    title: 'Fostering Collaboration',
    text: 'Encouraging synergy among different entities in the technology ecosystem, including startups, freelancers, companies, academia, and government',
  },
  {
    icon: 'fas fa-lightbulb',
    title: 'Promoting Innovation',
    text: 'By providing support and guidance/training, the center aims to cultivate an environment where new ideas and innovative solutions can thrive',
  },
  {
    icon: 'fa-solid fa-bullseye',
    title: 'Mission Statement',
    text: 'A technological revolution in East Amman through fostering innovation, collaboration, education, and community growth',
  },
  {
    icon: 'fa-solid fa-binoculars',
    title: 'Vision Statement',
    text: 'Establishing a leading technological hub as a catalyst for technological advancement and social development in East Amman',
  },
]

const partners = [
  {
    image: '/assets/partner_logo.png',
    text: 'Agreement between XYZ and ourwebsite',
  },
  {
    image: '/assets/partner_logo.png',
    text: 'Agreement between XYZ and ourwebsite',
  },
  {
    image: '/assets/partner_logo.png',
    text: 'Agreement between XYZ and ourwebsite',
  },
]

const Home: React.FC = () => {
  return (
    <div>
      <section>
        <Hero
          color="primary"
          textcolor="white"
          text="Welcome to The OurWebsite Your Platform for Launching Towards Technological Success!"
          imageurl="/assets/intro.png"
        />
        <Introduction introData={introData} />
        <AboutUs
          title="OurWebsite"
          text="We offer more than just a workspace"
          imageurl="/assets/about_us.png"
          templateData={templateData}
        />
        <Services />
        <Partners partners={partners} />
        <ContactUs />
      </section>
    </div>
  )
}

export default Home
