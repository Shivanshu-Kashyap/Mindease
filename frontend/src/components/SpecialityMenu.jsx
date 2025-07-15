import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const SpecialityMenu = () => {
  const navigate = useNavigate();

  const specialties = [
    { name: 'Clinical Psychologist', icon: 'fa-user-md' },
    { name: 'Psychiatrist', icon: 'fa-brain' },
    { name: 'Therapist/Counselor', icon: 'fa-comments' },
    { name: 'Child Psychologist', icon: 'fa-child' },
    { name: 'Marriage & Family Therapist', icon: 'fa-heart' },
    { name: 'Behavioral Therapist', icon: 'fa-project-diagram' },
    { name: 'Addiction Specialist', icon: 'fa-pills' },
    { name: 'Trauma Therapist', icon: 'fa-hand-holding-heart' },
    { name: 'Cognitive Behavioral Therapist', icon: 'fa-lightbulb' },
    { name: 'Grief Counselor', icon: 'fa-hands-helping' }
  ]

  const handleNavigateToDoctors = () => {
    window.scrollTo(0, 0)
    navigate('/doctors')
  }

  return (
    <div id='speciality' className='flex flex-col items-center gap-4 py-16 text-[#262626]'>
      <h1 className='text-3xl font-medium'>Find Mental Health Specialists</h1>
      <p className='sm:w-1/3 text-center text-sm'>
        Connect with licensed professionals specializing in various mental health disciplines.
      </p>

      {/* Font Awesome CSS */}
      <link 
        rel="stylesheet" 
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" 
      />

      <div className='flex flex-wrap justify-center gap-6 pt-5 px-4 w-full'>
        {specialties.map((specialty, index) => (
          <div 
            key={index}
            onClick={handleNavigateToDoctors}
            className='flex flex-col items-center w-32 p-4 rounded-lg hover:bg-blue-50 transition-colors duration-200 cursor-pointer'
          >
            <div className='text-4xl mb-2 text-primary'>
              <i className={`fas ${specialty.icon}`}></i>
            </div>
            <p className='text-sm text-center font-medium'>{specialty.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SpecialityMenu
