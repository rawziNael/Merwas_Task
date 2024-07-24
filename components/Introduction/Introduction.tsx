import React from 'react'
import Card from '../ui/Card/CardTemplate1'
import CardTemplate3 from '../ui/Card/CardTemplate3'
import SectionTitle from '../ui/SectionTitle'

type Data = {
  imageUrl: string
  title: string
  content: string
}

type IntroProps = {
  introData: Data[]
}

export default function Introduction({ introData }: IntroProps) {
  return (
    <div className="w-full px-4 pt-8 bg-white">
      <SectionTitle
        text="
          At OurWebsite, we are dedicated to helping you excel in the world of
          technology.
          Our services are specifically designed to meet your needs."
      />
      <div className="flex justify-center">
        <div className="grid grid-cols-2 gap-2 w-max">
          {introData.map((data, index) => (
            <div
              key={index}
              className="p-2 flex justify-center"
            >
              <Card
                title={data.title}
                content={data.content}
                image={data.imageUrl}
                className="rounded-lg overflow-hidden"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="md:mt-6 lg:mx-36 lg:mt-8">
        <CardTemplate3
          imageSrc="/assets/video_image.png"
          text="OurWebsite Your Gateway to Technological Excellence
                Get a quick glimpse into the dynamic environment at The OurWebsite and the benefits that await you"
        />
      </div>
    </div>
  )
}
