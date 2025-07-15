import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            About <span className='text-gray-700 font-semibold'>MindEase</span>
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            We're committed to making mental health care accessible, affordable, and convenient for everyone.
          </p>
        </div>

        <div className="my-10 flex flex-col md:flex-row gap-12">
          <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="About MindEase" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
            <p>Welcome to MindEase, your trusted partner in managing your mental health conveniently and efficiently. We understand the challenges individuals face when seeking mental health support and resources.</p>
            <p>MindEase is committed to excellence in mental health technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first session or managing ongoing care, MindEase is here to support you every step of the way.</p>
            <b className='text-gray-800'>Our Vision</b>
            <p>Our vision at MindEase is to create a seamless mental health experience for every user. We aim to bridge the gap between individuals and mental health professionals, making it easier for you to access the care you need, when you need it.</p>
          </div>
        </div>

        <div className='text-xl my-4'>
          <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
        </div>

        <div className='grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3'>
          <div className='flex flex-col items-center border px-10 py-8 sm:py-16 text-[15px] hover:bg-[#16718b] hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-indigo-100 text-[#16718b]">
              <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="mt-4 text-xl font-medium text-gray-900">Licensed Professionals</h3>
            <p className="mt-2 text-center text-gray-500">
              All our therapists are licensed and verified professionals with years of experience.
            </p>
          </div>

          <div className='flex flex-col items-center border px-10 py-8 sm:py-16 text-[15px] hover:bg-[#16718b] hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-indigo-100 text-[#16718b]">
              <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="mt-4 text-xl font-medium text-gray-900">Flexible Scheduling</h3>
            <p className="mt-2 text-center text-gray-500">
              Book sessions at your convenience, 7 days a week, morning or evening.
            </p>
          </div>

          <div className='flex flex-col items-center border px-10 py-8 sm:py-16 text-[15px] hover:bg-[#16718b] hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-indigo-100 text-[#16718b]">
              <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
              </svg>
            </div>
            <h3 className="mt-4 text-xl font-medium text-gray-900">Secure Sessions</h3>
            <p className="mt-2 text-center text-gray-500">
              All sessions are private, confidential, and HIPAA compliant.
            </p>
          </div>
        </div>

        {/* 24/7 AI Mental Health Support Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
              <div>
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                  24/7 AI Mental Health Support
                </h2>
                <p className="mt-3 max-w-3xl text-lg text-gray-500">
                  Get immediate support from our AI chatbot, trained to provide emotional support and coping strategies. While not a replacement for professional therapy, it's here to help you between sessions.
                </p>
                <div className="mt-8 space-y-4">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-lg text-gray-500">Available 24/7 for immediate support</p>
                  </div>
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-lg text-gray-500">Evidence-based coping strategies</p>
                  </div>
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-lg text-gray-500">Private and confidential conversations</p>
                  </div>
                </div>
                <div className="mt-8">
                  <a
                    href="/chatbot"
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#16718b] hover:bg-[#16718b]"
                  >
                    Try AI Chat Now
                  </a>
                </div>
              </div>
              <div className="mt-10 lg:mt-0">
                <div className="bg-indigo-50 rounded-lg p-8">
                  <div className="space-y-4">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="h-10 w-10 rounded-full bg-[#16718b] flex items-center justify-center">
                          <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <p className="text-base font-medium text-gray-900">AI Chat Support</p>
                        <p className="mt-1 text-sm text-gray-500">
                          "How are you feeling today? I'm here to listen and help."
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <div className="ml-4 order-2">
                        <p className="text-base font-medium text-gray-900">You</p>
                        <p className="mt-1 text-sm text-gray-500">
                          "I'm feeling anxious about my upcoming presentation."
                        </p>
                      </div>
                      <div className="order-1">
                        <div className="h-10 w-10 rounded-full bg-gray-300"></div>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="h-10 w-10 rounded-full bg-[#16718b] flex items-center justify-center">
                          <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <p className="text-base font-medium text-gray-900">AI Chat Support</p>
                        <p className="mt-1 text-sm text-gray-500">
                          "Let's work through this together. Would you like to try some quick breathing exercises?"
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default About
