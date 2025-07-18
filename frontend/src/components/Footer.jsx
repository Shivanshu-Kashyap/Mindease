import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10  mt-40 text-sm'>

        <div>
          <div className='flex items-center mb-5'>
            <img className='w-24' src={assets.LOGO} alt="MindEase Logo" />
            <span className='text-2xl font-bold ml-3'>MindEase</span>
          </div>
          <p className='w-full md:w-2/3 text-gray-600 leading-6'>MindEase is dedicated to providing compassionate mental health support and resources to help you navigate your wellness journey with professional care and understanding.</p>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>Home</li>
            <li>About Us</li>
            <li>Therapists</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>CONTACT</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>+1-212-456-7890</li>
            <li>help@mindease.com</li>
          </ul>
        </div>

      </div>

      <div>
        <hr />
        <p className='py-5 text-sm text-center'>© 2024 MindEase. All Rights Reserved.</p>
      </div>

    </div>
  )
}

export default Footer
