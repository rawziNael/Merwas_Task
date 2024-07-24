import React from 'react'
import SocialLinks from './SocialLinks'
import SectionTitle from '../ui/SectionTitle'

const contactDetails = [
  {
    icon: 'fas fa-map-marker-alt',
    title: 'Find Us',
    content: '2301 AMMAN . JORDAN',
  },
  {
    icon: 'fas fa-phone-alt',
    title: 'Phone',
    content: (
      <>
        + (06) 111-1111
        <br />+ (06) 111-1111
      </>
    ),
  },
  {
    icon: 'fas fa-clock',
    title: 'Working Hours',
    content: (
      <>
        Mon-Fri: 8 AM - 5 PM
        <br />
        Sat-Sun: 8 AM - 2 PM
      </>
    ),
  },
  {
    icon: 'fas fa-envelope',
    title: 'Write to Us',
    content: (
      <>
        info@ourwebsite.com
        <br />
        courses@ourwebsite.com
      </>
    ),
  },
  {
    icon: 'fas fa-share-alt',
    title: 'Follow Us',
    isDynamic: true,
  },
]

export default function ContactUs() {
  return (
    <main className="bg-white text-primary py-4 md:px-36 md:py-10 lg:px-52 lg:py-12 font-nobile">
      <SectionTitle
        title="Contact Us"
        text="With lots of unique blocks, you can easily build a page"
        subtitle="Get in touch today!"
        color="primary"
      />
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Details */}
        <div className="font-jost">
          <h2 className="text-lg font-semibold md:text-2xl lg:text-4xl md:font-bold lg:font-bold pb-6 md:pb-12 lg:pb-16">
            Contact Details
          </h2>
          <div className="grid grid-cols-2 gap-6">
            {contactDetails.map((detail, index) => (
              <div
                key={index}
                className="flex items-start mb-4"
              >
                <i
                  className={`${detail.icon} text-primary mr-2 md:mr-6 lg:mr-6 text-xs md:text-xl lg:text-xl opacity-20`}
                ></i>
                <div>
                  <h3 className="text-xs md:text-lg lg:text-xl font-semibold mb-1">{detail.title}</h3>
                  {detail.isDynamic ? (
                    <SocialLinks />
                  ) : (
                    <p className="text-faded text-xs md:text-sm lg:text-sm">{detail.content}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <div className="font-jost">
          <h2 className="text-lg md:text-2xl lg:text-4xl font-bold pb-6 md:pb-12 lg:pb-16">Have a Question?</h2>
          <form className="space-y-4">
            <div>
              <label
                htmlFor="types"
                className="block text-xs md:text-sm lg:text-sm font-semibold mb-2"
              >
                Types
              </label>
              <input
                id="types"
                type="text"
                name="types"
                className="text-xs md:text-sm lg:text-sm w-full py-1 pl-1 md:py-4 md:pl-4 lg:py-4 lg:pl-4 border border-gray-300 rounded-full"
                placeholder="Complain"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs md:text-sm lg:text-sm font-semibold mb-2"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  className="text-xs md:text-sm lg:text-sm w-full py-1 pl-1 md:py-4 md:pl-4 lg:py-4 lg:pl-4 border border-gray-300 rounded-full"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs md:text-sm lg:text-sm font-semibold mb-2"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  className="text-xs md:text-sm lg:text-sm w-full py-1 pl-1 md:py-4 md:pl-4 lg:py-4 lg:pl-4 border border-gray-300 rounded-full"
                  placeholder="Your Email"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-xs md:text-sm lg:text-sm  font-semibold mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full text-xs md:text-sm lg:text-sm pt-4 py-1 pl-1 md:py-4 md:pl-4 lg:py-4 lg:pl-4 border border-gray-300 rounded-3xl "
                placeholder="Content"
              />
            </div>
            <button
              type="submit"
              className="text-xs md:text-sm lg:text-sm w-1/2  bg-primary text-white py-1 md:py-4 lg:py-4 rounded-full hover:bg-secondary focus:outline-none"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </main>
  )
}
