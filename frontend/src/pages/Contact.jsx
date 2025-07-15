import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div className="py-16 bg-white">
      <div className='text-center text-2xl text-gray-700'>
        <p>CONTACT <span className='font-semibold'>US</span></p>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
        <img className='w-full md:max-w-[360px]' src={assets.contact_image} alt="Contact Us" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-lg text-gray-600'>OUR OFFICE</p>
          <p className='text-gray-500'>54709 Willms Station <br /> Suite 350, Washington, USA</p>
          <p className='text-gray-500'>Tel: (415) 555-0132 <br /> Email: <a href="mailto:mindeasehelp@gmail.com" className="text-[#16718b] hover:underline">mindeasehelp@gmail.com</a></p>
          <p className='font-semibold text-lg text-gray-600'>CAREERS AT MIND EASE</p>
          <p className='text-gray-500'>Learn more about our teams and job openings.</p>
          <a href="/careers" className='inline-block border border-black px-8 py-4 text-sm text-center hover:bg-black hover:text-white transition-all duration-500'>
            Explore Jobs
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact
