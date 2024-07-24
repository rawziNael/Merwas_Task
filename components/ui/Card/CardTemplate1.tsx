import React from 'react'
import Button from '../Button/Button1'

type CardProps = {
  title: string
  content: string
  image?: string
  className?: string
}

export default function Card({ title, content, image, className }: CardProps) {
  return (
    <div
      className={`h-48 relative bg-white shadow-lg rounded-lg overflow-hidden ${className} max-w-full md:w-96 md:h-96 lg:w-96 lg:h-96`}
    >
      {image && (
        <div
          className="absolute inset-0 bg-cover bg-top"
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary " />
        </div>
      )}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="relative z-10 p-6 flex flex-col h-full justify-end">
        <div className="mb-2 ml-2 md:mb-4 md:ml-2 lg:mb-6 lg:ml-2">
          <h2 className="text-sm md:text-xl lg:text-2xl lg:font-medium text-left text-white font-nobile mb-4">
            {title}
          </h2>
          <p className="hidden md:block lg:block lg:text-base lg:font-normal text-left text-white font-dm-sans lg:mb-4">
            {content}
          </p>
        </div>
        <div className="self-start ml-2 mb-2 md:ml-4 md:mb-4 lg:ml-4 lg:mb-4">
          <Button text="Learn More" />
        </div>
      </div>
    </div>
  )
}
