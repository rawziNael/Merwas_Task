import React from 'react'
import Image from 'next/image'
import Template01 from './Template01'
import SectionTitle from '../ui/SectionTitle'

type TemplateData = {
  icon: string
  title: string
  text: string
}

type AboutUsProps = {
  title: string
  text?: string
  imageurl: string
  templateData: TemplateData[]
}

export default function AboutUs({
  title,
  text,
  imageurl,
  templateData,
}: AboutUsProps) {
  return (
    <div className="bg-white p-8 md:p-16 lg:p-36">
      {/* Section Title */}
      <div className="text-center mb-8">
        <SectionTitle
          title="About Us"
          text="With lots of unique blocks, you can easily build a page easily without any coding."
          color="primary"
        />
      </div>
      {/* Main Content */}
      <div className="flex flex-wrap">
        {/* Text Section */}
        <div className="w-full md:w-2/3 pr-8">
          <h1
            className="my-1 md:my-4 lg:my-6 text-left text-sm md:text-4xl lg:text-6xl font-bold text-secondary"
            dangerouslySetInnerHTML={{ __html: title }}
          ></h1>
          {text && (
            <div
              className="my-6 text-left text-xs md:text-2xl lg:text-4xl font-bold text-primary"
              dangerouslySetInnerHTML={{ __html: text }}
            ></div>
          )}

          {/* Templates Section */}
          <div className="flex flex-wrap mt-0 md:mt-4 lg:mt-8">
            {templateData.map((item, index) => (
              <div
                className="w-full md:w-1/2 mb-4 lg:mb-8"
                key={index}
              >
                <Template01
                  icon={item.icon}
                  title={item.title}
                  text={item.text}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Image Section */}
        <div className="w-1/3">
          <div className="relative w-full h-full">
            <Image
              src={imageurl}
              alt={title}
              layout="fill"
              objectFit="cover"
              className="rounded-3xl"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
