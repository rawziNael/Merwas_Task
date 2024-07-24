import React from 'react'
import Service from './Service'
import SectionTitle from '../ui/SectionTitle'

const services = [
  {
    index: 1,
    title: 'Coworking Spaces',
    content:
      'Increase Your Productivity in Inspirational Workspaces. Our coworking spaces are more than just workplaces - they are hubs for innovation and collaboration. Choose from diverse options, including open workspaces, private offices, and fully-equipped meeting rooms. Immerse yourself in a dynamic environment designed to stimulate creativity and enhance productivity',
    images: ['assets/image01.png', 'assets/image02.png', 'assets/image03.png'],
    isReversed: false,
  },
  {
    index: 2,
    title: 'Mentoring and Training',
    content:
      'Grow with Expert Guidance. Our mentoring and training programs are your gateway to professional development. Gain insights and guidance from industry experts. Learn how to effectively apply your knowledge, navigate challenges, and expand your technological project',
    images: ['assets/image01.png', 'assets/image02.png', 'assets/image03.png'],
    isReversed: true,
  },
  {
    index: 3,
    title: 'Coworking Spaces',
    content:
      'Increase Your Productivity in Inspirational Workspaces. Our coworking spaces are more than just workplaces - they are hubs for innovation and collaboration. Choose from diverse options, including open workspaces, private offices, and fully-equipped meeting rooms. Immerse yourself in a dynamic environment designed to stimulate creativity and enhance productivity',
    images: ['assets/image01.png', 'assets/image02.png', 'assets/image03.png'],
    isReversed: false,
  },
  {
    index: 4,
    title: 'Mentoring and Training',
    content:
      'Grow with Expert Guidance. Our mentoring and training programs are your gateway to professional development. Gain insights and guidance from industry experts. Learn how to effectively apply your knowledge, navigate challenges, and expand your technological project',
    images: ['assets/image01.png', 'assets/image02.png', 'assets/image03.png'],
    isReversed: true,
  },
]

export default function Services() {
  return (
    <div className="h-full w-full bg-white">
      <SectionTitle
        title="Services"
        text="With lots of unique blocks, you can easily build a page easily without any coding."
      />
      {services.map((service, index) => (
        <div
          className="w-full mb-0"
          key={index}
        >
          <Service
            key={index}
            index={index}
            title={service.title}
            content={service.content}
            images={service.images}
            isReversed={service.isReversed}
          />
        </div>
      ))}
    </div>
  )
}
