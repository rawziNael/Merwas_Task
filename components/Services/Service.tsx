import React from 'react'

type ServiceProps = {
  title: string
  content: string
  images: string[]
  isReversed: boolean
  index: number
}

const getCornerClass = (index: number) => {
  if (index % 2 === 0) {
    return index % 4 === 0
      ? 'rounded-bl-special ml-2 md:ml-12 lg:ml-16'
      : 'rounded-tr-special mr-2 md:mr-12 lg:mr-16'
  }
  return ''
}

export default function Service({
  title,
  content,
  images,
  isReversed,
  index,
}: ServiceProps) {
  return (
    <div
      className={`relative flex ${
        isReversed ? 'flex-row-reverse md:items-center lg:items-center' : 'flex-row md:items-center lg:items-center'
      } ${
        index % 2 === 0 ? `bg-primary ${getCornerClass(index)}` : 'bg-white'
      }  py-12 md:px-12 lg:px-20 h-[360px] md:h-[550px] lg:h-[700px] gap-2`}
    >
      <div className="relative w-2/5 h-96 lg:h-full p-12 md:p-6 lg:p-12">
        {images.length > 0 && (
          <>
            <img
              src={images[0]}
              alt="Top Left"
              className="absolute inset-x-2 md:inset-x-8 lg:inset-x-8 w-16 h-28 md:w-36 md:h-64 lg:w-64 lg:h-96 object-cover z-10 rounded-xl md:rounded-2xl lg:rounded-3xl"
            />
            <img
              src={images[1]}
              alt="Top Right"
              className="absolute inset-x-20 md:inset-x-48 lg:inset-x-80 w-16 h-28 md:w-36 md:h-64 lg:w-64 lg:h-96 object-cover rounded-xl md:rounded-2xl lg:rounded-3xl"
            />
            <img
              src={images[2]}
              alt="Bottom Center"
              className="absolute inset-y-28 inset-x-22 md:inset-y-44 md:inset-x-32 lg:inset-y-56 lg:inset-x-32 w-16 h-28 md:w-36 md:h-64 lg:w-64 lg:h-96 object-cover z-0 rounded-xl md:rounded-2xl lg:rounded-3xl"
            />
          </>
        )}
      </div>
      <div
        className={`flex flex-col w-3/5 p-4 md:p-12 lg:p-12`}
      >
        <h3
          className={`font-nobile text-xs md:text-2xl lg:text-4xl font-bold py-2 ${
            isReversed ? 'text-primary' : 'text-secondary'
          }`}
        >
          {title}
        </h3>
        <p
          className={`font-nobile text-xs md:text-lg lg:text-2xl font-medium ${
            isReversed ? 'text-primary' : 'text-white'
          } md:leading-relaxed lg:leading-relaxed text-justify`}
        >
          {content}
        </p>
      </div>
    </div>
  )
}
