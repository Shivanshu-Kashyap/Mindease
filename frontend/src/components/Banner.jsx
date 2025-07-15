import React from 'react';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

const Banner = () => {
    const navigate = useNavigate();

    return (
        <div className='flex bg-primary rounded-lg px-6 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-10'>
            
            {/* Left Side */}
            <div className='flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5'>
                <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-white'>
                    Book Appointment
                </h1>
                <p className='mt-4 text-lg sm:text-xl text-white'>
                    With 100+ Trusted Doctors
                </p>
                <p className='mt-2 text-md text-white'>
                    Prioritize your mental health with MindEase. Connect with qualified professionals you can trust.
                </p>
                <button
                    onClick={() => { 
                        navigate('/login'); 
                        window.scrollTo(0, 0); 
                    }} 
                    className='bg-white text-sm sm:text-base text-[#595959] px-8 py-3 rounded-full mt-6 hover:scale-105 transition-all'
                    type='button' // Added type attribute
                >
                    Create account
                </button>
            </div>

            {/* Right Side */}
            <div className='hidden md:block md:w-1/2 lg:w-[370px] relative'>
                <img 
                    className='w-full absolute bottom-0 right-0 max-w-md'
                    src={assets.appointment_img} 
                    alt="Doctor consulting a patient" // Updated alt text
                />
            </div>
        </div>
    );
};

export default Banner;
