import Link from 'next/link'
import Image from 'next/image'
import Button from '../ui/Button/Button2'
import { FaGlobe, FaBars } from 'react-icons/fa'
import { useState } from 'react'

const links = [
  { href: '#', text: 'HOME' },
  { href: '#', text: 'ABOUT US' },
  { href: '#', text: 'SERVICES' },
  { href: '#', text: 'PARTNERS' },
  { href: '#', text: 'CONTACT US' },
]

export default function MainNavigation() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className="flex flex-col bg-primary text-white p-2 md:flex-row lg:flex-row">
      {/* Mobile Menu Button */}
      <div className="lg:hidden md:hidden flex items-center justify-between w-full mb-2">
        <Link
          href="/"
          legacyBehavior
        >
          <a className="text-2xl font-bold flex items-center">
            <Image
              src="/assets/image.png"
              alt="Ayyaz Tech Logo"
              width={150}
              height={60}
              className="object-contain"
            />
          </a>
        </Link>
        <button
          className="text-white text-2xl p-2"
          onClick={toggleMenu}
        >
          <FaBars />
        </button>
      </div>

      {/* Logo (for larger screens) */}
      <div className="hidden md:flex md:flex-shrink-0 md:items-center md:ml-2 lg:flex lg:flex-shrink-0 lg:items-center lg:ml-4">
        <Link
          href="/"
          legacyBehavior
        >
          <a className="text-2xl font-bold">
            <Image
              src="/assets/image.png"
              alt="Ayyaz Tech Logo"
              width={200}
              height={75}
              className="object-contain lg:w-52 lg:h-20 md:w-40 md:h-15 w-32 h-12"
            />
          </a>
        </Link>
      </div>

      {/* Links and Buttons */}
      <div
        className={`flex flex-col justify-center items-center md:flex-row md:flex-1 md:justify-center  md:items-center lg:flex-row lg:flex-1 lg:justify-center ${
          isOpen ? 'block' : 'hidden lg:flex md:flex'
        }`}
      >
        {/* Links */}
        <div
          className={`flex flex-col md:flex-1 md:flex-row md:items-center md:justify-center lg:flex-1 lg:flex-row lg:items-center lg:justify-center ${
            isOpen ? 'block' : 'hidden lg:flex md:flex'
          }`}
        >
          {links.map(({ href, text }) => (
            <Link
              key={text}
              href={href}
              legacyBehavior
            >
              <a className="mx-2 text-sm font-montserrat text-white font-light leading-custom text-left lg:font-medium lg:text-lg md:font-medium md:text-xs hover:text-secondary hover:overline">
                {text}
              </a>
            </Link>
          ))}
        </div>
        {/* Buttons */}
        <div
          className={`flex flex-row md:space-x-2 items-center md:items-center md:justify-center lg:space-x-4 lg:ml-auto lg:mt-0 mt-2 ${
            isOpen ? 'block' : 'hidden lg:flex md:flex'
          } gap-2`}
        >
          <button className="px-2 py-2 lg:px-4 lg:py-2 text-xs lg:text-lg rounded-full bg-primary text-white font-alef hover:bg-secondary flex items-center">
            <FaGlobe className="mr-2" /> English <span className="ml-2">▼</span>
          </button>
          <Button
            text="Register"
            color="primary"
            bgColor="white"
            className="text-xs lg:text-sm py-1 px-2 lg:py-2 lg:px-4"
          />
          <Button
            text="Log in"
            color="white"
            bgColor="secondary"
            className="text-xs lg:text-sm py-1 px-2 lg:py-2 lg:px-4"
          />
        </div>
      </div>
    </nav>
  )
}
