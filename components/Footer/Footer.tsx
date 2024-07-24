import React from 'react'
import SocialLinks from '../ContactUs/SocialLinks'

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-4 px-10 md:py-6 md:px-16 lg:py-10 lg:px-24">
      <div className="container mx-auto flex flex-col items-center">
        <div className="block text-center pb-12 space-y-4">
          <h1 className="text-base md:text-2xl lg:text-4xl font-semibold md:font-bold lg:font-bold font-nobile">
            Subscribe Our Newsletter
          </h1>
          <p className="text-sm md:text-xl lg:text-2xl text-slate">
            Your Download Should Start Automatically; If not, Click Here?.
          </p>
        </div>
        <div className="w-full max-w-md relative flex mb-6">
          <input
            type="text"
            placeholder="Enter your email"
            className="text-xs md:text-lg lg:text-lg flex-1 py-1 px-2 pr-6 md:py-4 md:px-6 md:pr-16 lg:py-4 lg:px-6 lg:pr-16 rounded-full border border-gray-300"
          />
          <button className="w-1/3 absolute right-0 top-0 bottom-0 py-1 px-2 md-px-4 md:py-4 lg:px-4 lg:py-4 bg-footerColor hover:bg-secondary text-white rounded-full z-10 text-xs md:text-base lg:text-base font-semibold">
            Subscribe
          </button>
        </div>
        <SocialLinks />
        <div className="w-full flex flex-col items-center mt-4 md:mt-24 lg:mt-32">
          <hr className="w-11/12 border-t-2 border-gray-600 mb-6" />
          <div className="grid grid-cols-2 items-center w-11/12">
            <span className="text-xs md:text-base lg:text-base text-left py-4">
              Copyright © 2024 OurWebsite. All Rights Reserved.
            </span>
            <button className="flex items-center text-xs md:text-lg lg:text-lg font-normal px-1 py-1 md:px-8 md:py-4 lg:px-8 lg:py-4 bg-slate-600 text-white rounded-md hover:bg-white hover:text-slate-600 justify-self-end">
              English
              <svg
                className="w-6 h-6 ml-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 15l6-6 6 6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
