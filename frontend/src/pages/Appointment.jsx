import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'
import RelatedDoctors from '../components/RelatedDoctors'
import axios from 'axios'
import { toast } from 'react-toastify'
import { Calendar, Clock, MapPin, Award, Star, CheckCircle, User, Phone, Mail } from 'lucide-react'

const Appointment = () => {

    const { docId } = useParams()
    const { doctors, currencySymbol, backendUrl, token, getDoctosData } = useContext(AppContext)
    const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

    const [docInfo, setDocInfo] = useState(false)
    const [docSlots, setDocSlots] = useState([])
    const [slotIndex, setSlotIndex] = useState(0)
    const [slotTime, setSlotTime] = useState('')

    const navigate = useNavigate()

    const fetchDocInfo = async () => {
        const docInfo = doctors.find((doc) => doc._id === docId)
        setDocInfo(docInfo)
    }

    const getAvailableSolts = async () => {

        setDocSlots([])

        // getting current date
        let today = new Date()

        for (let i = 0; i < 7; i++) {

            // getting date with index 
            let currentDate = new Date(today)
            currentDate.setDate(today.getDate() + i)

            // setting end time of the date with index
            let endTime = new Date()
            endTime.setDate(today.getDate() + i)
            endTime.setHours(21, 0, 0, 0)

            // setting hours 
            if (today.getDate() === currentDate.getDate()) {
                currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10)
                currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0)
            } else {
                currentDate.setHours(10)
                currentDate.setMinutes(0)
            }

            let timeSlots = [];


            while (currentDate < endTime) {
                let formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

                let day = currentDate.getDate()
                let month = currentDate.getMonth() + 1
                let year = currentDate.getFullYear()

                const slotDate = day + "_" + month + "_" + year
                const slotTime = formattedTime

                const isSlotAvailable = docInfo.slots_booked[slotDate] && docInfo.slots_booked[slotDate].includes(slotTime) ? false : true

                if (isSlotAvailable) {

                    // Add slot to array
                    timeSlots.push({
                        datetime: new Date(currentDate),
                        time: formattedTime
                    })
                }

                // Increment current time by 30 minutes
                currentDate.setMinutes(currentDate.getMinutes() + 30);
            }

            setDocSlots(prev => ([...prev, timeSlots]))

        }

    }

    const bookAppointment = async () => {

        if (!token) {
            toast.warning('Login to book appointment')
            return navigate('/login')
        }

        const date = docSlots[slotIndex][0].datetime

        let day = date.getDate()
        let month = date.getMonth() + 1
        let year = date.getFullYear()

        const slotDate = day + "_" + month + "_" + year

        try {

            const { data } = await axios.post(backendUrl + '/api/user/book-appointment', { docId, slotDate, slotTime }, { headers: { token } })
            if (data.success) {
                toast.success(data.message)
                getDoctosData()
                navigate('/my-appointments')
            } else {
                toast.error(data.message)
            }

        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }

    }

    useEffect(() => {
        if (doctors.length > 0) {
            fetchDocInfo()
        }
    }, [doctors, docId])

    useEffect(() => {
        if (docInfo) {
            getAvailableSolts()
        }
    }, [docInfo])

    return docInfo ? (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-4 sm:p-6 lg:p-8">
            <div className="max-w-6xl mx-auto">
                
                {/* Header Section */}
                <div className="mb-8">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">Book Appointment</h1>
                    <p className="text-gray-600">Schedule your consultation with our medical professionals</p>
                </div>

                {/* Doctor Profile Card */}
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
                    <div className="lg:flex">
                        {/* Doctor Image */}
                        <div className="lg:w-1/3 relative">
                            <img 
                                className="w-full h-64 sm:h-80 lg:h-full object-cover" 
                                src={docInfo.image} 
                                alt={docInfo.name} 
                            />
                            <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg">
                                <CheckCircle className="w-6 h-6 text-green-500" />
                            </div>
                        </div>

                        {/* Doctor Information */}
                        <div className="lg:w-2/3 p-6 sm:p-8">
                            <div className="flex items-start justify-between mb-6">
                                <div>
                                    <div className="flex items-center gap-3 mb-3">
                                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">{docInfo.name}</h2>
                                        <div className="flex items-center gap-1 bg-green-100 px-3 py-1 rounded-full">
                                            <CheckCircle className="w-4 h-4 text-green-600" />
                                            <span className="text-sm font-medium text-green-700">Verified</span>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-2 mb-4">
                                        <Award className="w-5 h-5 text-blue-600" />
                                        <p className="text-gray-700 font-medium">{docInfo.degree} - {docInfo.speciality}</p>
                                    </div>
                                    
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="flex items-center gap-2">
                                            <Clock className="w-5 h-5 text-gray-500" />
                                            <span className="text-gray-600">{docInfo.experience}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                            <span className="text-gray-600">4.8 (124 reviews)</span>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="text-right">
                                    <p className="text-sm text-gray-500 mb-1">Consultation Fee</p>
                                    <p className="text-3xl font-bold text-green-600">{currencySymbol}{docInfo.fees}</p>
                                </div>
                            </div>

                            {/* About Section */}
                            <div className="mb-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                                    <User className="w-5 h-5 text-blue-600" />
                                    About Doctor
                                </h3>
                                <p className="text-gray-600 leading-relaxed">{docInfo.about}</p>
                            </div>

                            {/* Quick Info */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                                    <MapPin className="w-5 h-5 text-blue-600" />
                                    <div>
                                        <p className="text-sm text-gray-500">Location</p>
                                        <p className="font-medium text-gray-900">
                                            {docInfo.address ? (
                                                // If address is an object, you might need to format it
                                                typeof docInfo.address === 'object' ? 
                                                    `${docInfo.address.line1 || ''} ${docInfo.address.line2 || ''} ${docInfo.address.city || ''} ${docInfo.address.state || ''} ${docInfo.address.zipCode || ''}`.trim() 
                                                    : docInfo.address
                                            ) : 'Location not available'}
                                        </p>
                                    </div>
                                </div>
                                </div>
                                <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                                    <Phone className="w-5 h-5 text-green-600" />
                                    <div>
                                        <p className="text-sm text-gray-500">Emergency</p>
                                        <p className="font-medium text-gray-900">Available 24/7</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Booking Section */}
                <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
                    <div className="flex items-center gap-3 mb-6">
                        <Calendar className="w-6 h-6 text-blue-600" />
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Select Date & Time</h3>
                    </div>

                    {/* Date Selection */}
                    <div className="mb-8">
                        <h4 className="text-lg font-semibold text-gray-700 mb-4">Available Dates</h4>
                        <div className="flex gap-3 overflow-x-auto pb-4">
                            {docSlots.length && docSlots.map((item, index) => (
                                <div
                                    key={index}
                                    onClick={() => setSlotIndex(index)}
                                    className={`flex-shrink-0 text-center p-4 min-w-20 rounded-xl cursor-pointer transition-all duration-200 ${
                                        slotIndex === index 
                                        ? 'bg-gradient-to-b from-blue-500 to-blue-600 text-white shadow-lg transform scale-105' 
                                        : 'bg-gray-50 text-gray-700 hover:bg-gray-100 border border-gray-200'
                                    }`}
                                >
                                    <p className="text-sm font-medium opacity-90">{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
                                    <p className="text-xl font-bold mt-1">{item[0] && item[0].datetime.getDate()}</p>
                                    <p className="text-xs opacity-75 mt-1">
                                        {item[0] && item[0].datetime.toLocaleDateString('en-US', { month: 'short' })}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Time Selection */}
                    <div className="mb-8">
                        <h4 className="text-lg font-semibold text-gray-700 mb-4">Available Times</h4>
                        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
                            {docSlots.length && docSlots[slotIndex].map((item, index) => (
                                <button
                                    key={index}
                                    onClick={() => setSlotTime(item.time)}
                                    className={`p-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                                        item.time === slotTime 
                                        ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg transform scale-105' 
                                        : 'bg-gray-50 text-gray-700 hover:bg-gray-100 border border-gray-200'
                                    }`}
                                >
                                    {item.time.toLowerCase()}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Booking Summary */}
                    {slotTime && (
                        <div className="bg-blue-50 rounded-xl p-6 mb-6">
                            <h4 className="text-lg font-semibold text-gray-900 mb-3">Booking Summary</h4>
                            <div className="space-y-2">
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Doctor:</span>
                                    <span className="font-medium">{docInfo.name}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Date:</span>
                                    <span className="font-medium">
                                        {docSlots[slotIndex][0]?.datetime.toLocaleDateString('en-US', { 
                                            weekday: 'long', 
                                            year: 'numeric', 
                                            month: 'long', 
                                            day: 'numeric' 
                                        })}
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Time:</span>
                                    <span className="font-medium">{slotTime}</span>
                                </div>
                                <div className="flex justify-between border-t pt-2">
                                    <span className="text-gray-600">Consultation Fee:</span>
                                    <span className="font-bold text-green-600">{currencySymbol}{docInfo.fees}</span>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Book Button */}
                    <button
                        onClick={bookAppointment}
                        disabled={!slotTime}
                        className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-200 ${
                            slotTime 
                            ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 shadow-lg hover:shadow-xl transform hover:scale-105' 
                            : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                        }`}
                    >
                        {slotTime ? 'Book Appointment' : 'Select Date & Time'}
                    </button>
                </div>
            </div>

            {/* Related Doctors */}
            <div className="mt-12">
                <RelatedDoctors speciality={docInfo.speciality} docId={docId} />
            </div>
        </div>
    ) : null
}

export default Appointment