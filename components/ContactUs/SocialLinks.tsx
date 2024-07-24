import React from 'react'

const socialLinks = [
  { href: '#', icon: 'fab fa-facebook' },
  { href: '#', icon: 'fab fa-twitter' },
  { href: '#', icon: 'fab fa-instagram' },
  { href: '#', icon: 'fab fa-linkedin' },
  { href: '#', icon: 'fab fa-skype' },
]
export default function SocialLinks() {
  return (
    <div className="flex space-x-4 text-xs md:text-base lg:text-lg">
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className={`${link.icon} text-customColor`}></i>
        </a>
      ))}
    </div>
  )
}
