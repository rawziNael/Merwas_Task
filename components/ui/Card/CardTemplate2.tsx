import Image from 'next/image'

type CardTemplate2Props = {
  image: string
  text: string
}

export default function CardTemplate2({ image, text }: CardTemplate2Props) {
  return (
    <div className="flex flex-col items-center bg-white h-36 w-36 md:w-56 md:h-56 lg:w-96 lg:h-96 rounded-2xl">
      <div className="relative w-2/3 h-2/3 border-b border-gray-300">
        <Image
          src={image}
          layout="fill"
          objectFit="contain"
          alt="partner_image"
        />
      </div>
      <div className="text-center text-black text-xs md:text-base lg:text-xl w-full p-4">
        {text}
      </div>
    </div>
  )
}
