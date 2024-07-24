import React from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

type CardTemplate3Props = {
  imageSrc: string
  text: string
}

export default function CardTemplate3({ imageSrc, text }: CardTemplate3Props) {
  const words = text.split(' ')
  const firstWord = words.shift()
  const remainingText = words.join(' ')

  return (
    <div className="grid grid-cols-1 lg:grid h:96 lg:grid-cols-2 mx-8 p-4 md:p-24 lg:p-12 bg-primary text-white rounded-3xl">
      <div className="relative h-36 2-24 w-full md:h-96 lg:h-96">
        <Image
          src={imageSrc}
          alt="Content"
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative flex items-center justify-center w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 border-4 border-white rounded-full bg-black bg-opacity-50">
            <FontAwesomeIcon
              icon={faPlay}
              className="text-white text-lg md:text-2xl lg:text-3xl"
            />
          </div>
        </div>
      </div>
      <div className="lg:flex lg:flex-col lg:justify-center p-4">
        <p className="text-xs font-nobile md:text-xl font-medium text-justify lg:leading-relaxed lg:text-2xl">
          <span className="text-secondary">{firstWord}</span> {remainingText}
        </p>
      </div>
    </div>
  )
}
