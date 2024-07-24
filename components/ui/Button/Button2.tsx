type ButtonProps = {
  color: string
  bgColor: string
  text: string
  className: string
}

export default function Button2({ color, bgColor, text }: ButtonProps) {
  return (
    <button
      className={`px-4 py-2 font-alef text-${color} bg-${bgColor} ${
        text === 'Log in' ? 'border-2 border-white' : ''
      } rounded-full text-xs lg:text-base md:px-4 md:py-2 lg:px-10 hover:bg-secondary hover:text-white `}
    >
      {text}
    </button>
  )
}
