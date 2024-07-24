import React from 'react'
import Image from 'next/image'

type HeroProps = {
  text?: string
  imageurl: string
  color?: string
  textcolor?: string
}

const highlightWord = (text: string, word: string, className: string) => {
  const regex = new RegExp(`(${word})`, 'gi')
  return text.replace(regex, `<span class="${className}">$1</span>`)
}

export default function Hero({
  text = '',
  imageurl,
  color = 'transparent',
  textcolor = 'text-white',
}: HeroProps) {
  const highlightedText = highlightWord(text, 'OurWebsite', 'text-secondary')
  return (
    <div className="relative flex flex-col h-[600px] lg:flex-row lg:h-[800px]">
      <div className="relative flex-1 flex items-center justify-center overflow-hidden">
        {/* Image */}
        <div className="relative w-full h-full">
          <Image
            src={imageurl}
            alt=""
            layout="fill"
            objectFit="cover"
            objectPosition="top"
            quality={100}
          />
        </div>
        {/* Color Overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-r from-primary opacity-100`}
        />
        {/* Overlay Text */}
        <div
          className={`absolute inset-0 flex items-center justify-start pl-4 lg:pl-44 ${textcolor}`}
        >
          <div
            className={`text-base md:text-2xl font-medium lg:font-bold  text-white justify-center p-8 lg:text-4xl max-w-lg lg:max-w-2xl`}
            dangerouslySetInnerHTML={{ __html: highlightedText }}
          />
        </div>
      </div>
    </div>
  )
}
