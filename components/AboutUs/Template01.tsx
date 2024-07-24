import React from 'react'

type Template01Props = {
  icon: string
  title: string
  text: string
}

export default function Template01({ icon, title, text }: Template01Props) {
  return (
    <div className="flex flex-col items-start p-6 bg-white h-36 w-auto md:h-44 lg:h-60">
      {' '}
      {/* Increased width */}
      <div className="flex items-start mb-4">
        <i
          className={`${icon} text-xs md:text-base lg:text-4xl text-secondary mr-4`}
        ></i>
        <h2 className="text-xs md:text-base lg:text-2xl font-semibold text-primary font-nobile lg:tracking-tight">
          {title}
        </h2>
      </div>
      <div className="ml-12">
        <p className="text-sm lg:text-lg text-primary font-nobile lg:tracking-tight">
          {text}
        </p>
      </div>
    </div>
  )
}
