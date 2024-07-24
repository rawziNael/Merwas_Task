import React from 'react'

type ButtonProps = {
  text: string
  onClick?: () => void
}

export default function Button1({ text, onClick }: ButtonProps) {
  return (
    <button
      className="flex items-center justify-center text-xs text-white font-dm-sans lg:text-base font-bold bg-transparent 
                 transition-transform transform hover:scale-110 focus:outline-none"
      onClick={onClick}
    >
      {text}
      <span className="ml-2">&rarr;</span>
    </button>
  )
}
