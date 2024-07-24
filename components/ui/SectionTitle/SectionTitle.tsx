import React from 'react'

type SectionTitleProps = {
  title?: string
  subtitle?: string
  text?: string
  color?: string
}

function capitalizeWords(text: string): string {
  return text
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

export default function SectionTitle({
  title,
  subtitle,
  text,
  color,
}: SectionTitleProps) {
  return (
    <div className="block text-center mx-4 pb-2 md:pb-8 lg:pb-12">
      {title && (
        <h1
          className={`text-lg md:text-4xl lg:text-6xl font-nobile text-${color} font-bold mb-4`}
        >
          {title}
        </h1>
      )}
      {text && (
        <p className="text-xs md:text-base lg:text-lg text-slate text-tertiary mt-2 mb-4 max-w-2xl lg:max-w-4xl mx-auto">
          {capitalizeWords(text)}
        </p>
      )}
      {subtitle && (
        <h2
          className={`text-lg md:text-2xl lg:text-4xl font-nobile text-${color} font-bold mt-4`}
        >
          {subtitle}
        </h2>
      )}
    </div>
  )
}
