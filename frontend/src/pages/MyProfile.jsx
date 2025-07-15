import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import { assets } from '../assets/assets'

const MyProfile = () => {

    const [isEdit, setIsEdit] = useState(false)

    const [image, setImage] = useState(false)

    const { token, backendUrl, userData, setUserData, loadUserProfileData } = useContext(AppContext)

    // Function to update user profile data using API
    const updateUserProfileData = async () => {

        try {

            const formData = new FormData();

            formData.append('name', userData.name)
            formData.append('phone', userData.phone)
            formData.append('address', JSON.stringify(userData.address))
            formData.append('gender', userData.gender)
            formData.append('dob', userData.dob)

            image && formData.append('image', image)

            const { data } = await axios.post(backendUrl + '/api/user/update-profile', formData, { headers: { token } })

            if (data.success) {
                toast.success(data.message)
                await loadUserProfileData()
                setIsEdit(false)
                setImage(false)
            } else {
                toast.error(data.message)
            }

        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }

    }

    return userData ? (
        <div className='min-h-screen bg-gray-50 py-8'>
            <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
                {/* Header */}
                <div className='bg-white rounded-xl shadow-lg overflow-hidden'>
                    <div className='bg-gradient-to-r from-[#16718b] to-[#0f5a6b] px-6 py-8'>
                        <div className='flex items-center space-x-6'>
                            {/* Profile Image */}
                            <div className='relative'>
                                {isEdit ? (
                                    <label htmlFor='image' className='cursor-pointer group'>
                                        <div className='relative'>
                                            <img 
                                                className='w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg group-hover:opacity-75 transition-opacity' 
                                                src={image ? URL.createObjectURL(image) : userData.image} 
                                                alt="Profile" 
                                            />
                                            <div className='absolute inset-0 flex items-center justify-center rounded-full bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity'>
                                                <svg className='w-8 h-8 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z' />
                                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 13a3 3 0 11-6 0 3 3 0 016 0z' />
                                                </svg>
                                            </div>
                                        </div>
                                        <input onChange={(e) => setImage(e.target.files[0])} type="file" id="image" hidden accept="image/*" />
                                    </label>
                                ) : (
                                    <img 
                                        className='w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg' 
                                        src={userData.image} 
                                        alt="Profile" 
                                    />
                                )}
                            </div>

                            {/* Name and Edit Button */}
                            <div className='flex-1 min-w-0'>
                                {isEdit ? (
                                    <input 
                                        className='text-3xl font-bold text-white bg-transparent border-b-2 border-white border-opacity-50 focus:border-opacity-100 focus:outline-none placeholder-white placeholder-opacity-75 w-full max-w-md'
                                        type="text" 
                                        onChange={(e) => setUserData(prev => ({ ...prev, name: e.target.value }))} 
                                        value={userData.name}
                                        placeholder="Enter your name"
                                    />
                                ) : (
                                    <h1 className='text-3xl font-bold text-white truncate'>{userData.name}</h1>
                                )}
                                <p className='text-blue-100 text-lg mt-1'>MindEase User</p>
                            </div>

                            {/* Action Buttons */}
                            <div className='flex space-x-3'>
                                {isEdit ? (
                                    <>
                                        <button 
                                            onClick={updateUserProfileData} 
                                            className='bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2'
                                        >
                                            <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
                                            </svg>
                                            <span>Save</span>
                                        </button>
                                        <button 
                                            onClick={() => setIsEdit(false)} 
                                            className='bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2'
                                        >
                                            <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
                                            </svg>
                                            <span>Cancel</span>
                                        </button>
                                    </>
                                ) : (
                                    <button 
                                        onClick={() => setIsEdit(true)} 
                                        className='bg-white text-[#16718b] hover:bg-gray-100 px-6 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2'
                                    >
                                        <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z' />
                                        </svg>
                                        <span>Edit Profile</span>
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Profile Content */}
                    <div className='p-8'>
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                            {/* Contact Information */}
                            <div className='space-y-6'>
                                <div>
                                    <h3 className='text-xl font-semibold text-gray-800 mb-4 flex items-center'>
                                        <svg className='w-6 h-6 mr-2 text-[#16718b]' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
                                        </svg>
                                        Contact Information
                                    </h3>
                                    <div className='space-y-4'>
                                        <div className='flex items-start space-x-3'>
                                            <div className='w-2 h-2 bg-[#16718b] rounded-full mt-2 flex-shrink-0'></div>
                                            <div className='flex-1'>
                                                <p className='text-sm font-medium text-gray-600'>Email Address</p>
                                                <p className='text-gray-900 font-medium'>{userData.email}</p>
                                            </div>
                                        </div>

                                        <div className='flex items-start space-x-3'>
                                            <div className='w-2 h-2 bg-[#16718b] rounded-full mt-2 flex-shrink-0'></div>
                                            <div className='flex-1'>
                                                <p className='text-sm font-medium text-gray-600'>Phone Number</p>
                                                {isEdit ? (
                                                    <input 
                                                        className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#16718b] focus:border-transparent'
                                                        type="text" 
                                                        onChange={(e) => setUserData(prev => ({ ...prev, phone: e.target.value }))} 
                                                        value={userData.phone}
                                                        placeholder="Enter phone number"
                                                    />
                                                ) : (
                                                    <p className='text-gray-900 font-medium'>{userData.phone || 'Not provided'}</p>
                                                )}
                                            </div>
                                        </div>

                                        <div className='flex items-start space-x-3'>
                                            <div className='w-2 h-2 bg-[#16718b] rounded-full mt-2 flex-shrink-0'></div>
                                            <div className='flex-1'>
                                                <p className='text-sm font-medium text-gray-600'>Address</p>
                                                {isEdit ? (
                                                    <div className='space-y-2'>
                                                        <input 
                                                            className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#16718b] focus:border-transparent'
                                                            type="text" 
                                                            onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line1: e.target.value } }))} 
                                                            value={userData.address.line1}
                                                            placeholder="Address line 1"
                                                        />
                                                        <input 
                                                            className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#16718b] focus:border-transparent'
                                                            type="text" 
                                                            onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line2: e.target.value } }))} 
                                                            value={userData.address.line2}
                                                            placeholder="Address line 2"
                                                        />
                                                    </div>
                                                ) : (
                                                    <p className='text-gray-900 font-medium'>
                                                        {userData.address.line1 && userData.address.line2 
                                                            ? `${userData.address.line1}, ${userData.address.line2}`
                                                            : userData.address.line1 || userData.address.line2 || 'Not provided'
                                                        }
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Basic Information */}
                            <div className='space-y-6'>
                                <div>
                                    <h3 className='text-xl font-semibold text-gray-800 mb-4 flex items-center'>
                                        <svg className='w-6 h-6 mr-2 text-[#16718b]' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' />
                                        </svg>
                                        Basic Information
                                    </h3>
                                    <div className='space-y-4'>
                                        <div className='flex items-start space-x-3'>
                                            <div className='w-2 h-2 bg-[#16718b] rounded-full mt-2 flex-shrink-0'></div>
                                            <div className='flex-1'>
                                                <p className='text-sm font-medium text-gray-600'>Gender</p>
                                                {isEdit ? (
                                                    <select 
                                                        className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#16718b] focus:border-transparent'
                                                        onChange={(e) => setUserData(prev => ({ ...prev, gender: e.target.value }))} 
                                                        value={userData.gender}
                                                    >
                                                        <option value="Not Selected">Select Gender</option>
                                                        <option value="Male">Male</option>
                                                        <option value="Female">Female</option>
                                                        <option value="Other">Other</option>
                                                        <option value="Prefer not to say">Prefer not to say</option>
                                                    </select>
                                                ) : (
                                                    <p className='text-gray-900 font-medium'>{userData.gender || 'Not specified'}</p>
                                                )}
                                            </div>
                                        </div>

                                        <div className='flex items-start space-x-3'>
                                            <div className='w-2 h-2 bg-[#16718b] rounded-full mt-2 flex-shrink-0'></div>
                                            <div className='flex-1'>
                                                <p className='text-sm font-medium text-gray-600'>Date of Birth</p>
                                                {isEdit ? (
                                                    <input 
                                                        className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#16718b] focus:border-transparent'
                                                        type='date' 
                                                        onChange={(e) => setUserData(prev => ({ ...prev, dob: e.target.value }))} 
                                                        value={userData.dob}
                                                    />
                                                ) : (
                                                    <p className='text-gray-900 font-medium'>{userData.dob || 'Not provided'}</p>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Quick Stats */}
                                <div className='bg-gray-50 rounded-xl p-6'>
                                    <h4 className='text-lg font-semibold text-gray-800 mb-4'>Account Stats</h4>
                                    <div className='grid grid-cols-2 gap-4'>
                                        <div className='text-center'>
                                            <div className='text-2xl font-bold text-[#16718b]'>0</div>
                                            <div className='text-sm text-gray-600'>Sessions</div>
                                        </div>
                                        <div className='text-center'>
                                            <div className='text-2xl font-bold text-[#16718b]'>Active</div>
                                            <div className='text-sm text-gray-600'>Status</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) : null
}

export default MyProfile