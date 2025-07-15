import React, { useContext, useState } from 'react';
import { assets } from '../../assets/assets';
import { toast } from 'react-toastify';
import axios from 'axios';
import { AdminContext } from '../../context/AdminContext';
import { AppContext } from '../../context/AppContext';

const AddDoctor = () => {
    const [docImg, setDocImg] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [experience, setExperience] = useState('1 Year');
    const [fees, setFees] = useState('');
    const [about, setAbout] = useState('');
    const [speciality, setSpeciality] = useState('General Physician');
    const [degree, setDegree] = useState('');
    const [address1, setAddress1] = useState('');
    const [address2, setAddress2] = useState('');

    const { backendUrl } = useContext(AppContext);
    const { aToken } = useContext(AdminContext);

    const onSubmitHandler = async (event) => {
        event.preventDefault();

        try {
            // Validate image upload
            if (!docImg) {
                return toast.error('Image Not Selected');
            }

            const formData = new FormData();
            formData.append('image', docImg);
            formData.append('name', name);
            formData.append('email', email);
            formData.append('password', password);
            formData.append('experience', experience);
            formData.append('fees', Number(fees));
            formData.append('about', about);
            formData.append('speciality', speciality);
            formData.append('degree', degree);
            formData.append('address', JSON.stringify({ line1: address1, line2: address2 }));

            const { data } = await axios.post(backendUrl + '/api/admin/add-doctor', formData, { headers: { aToken } });
            if (data.success) {
                toast.success(data.message);
                resetForm();
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error(error.message);
            console.error(error);
        }
    };

    const resetForm = () => {
        setDocImg(false);
        setName('');
        setPassword('');
        setEmail('');
        setAddress1('');
        setAddress2('');
        setDegree('');
        setAbout('');
        setFees('');
    };

    return (
        <form onSubmit={onSubmitHandler} className='max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg mt-10'>
            <p className='mb-5 text-2xl font-semibold text-gray-800'>Add Doctor</p>
            
            <div className='flex items-center gap-4 mb-8 text-gray-500'>
                <label htmlFor="doc-img">
                    <img className='w-24 h-24 object-cover rounded-full border-2 border-primary cursor-pointer' src={docImg ? URL.createObjectURL(docImg) : assets.upload_area} alt="Upload" />
                </label>
                <input onChange={(e) => setDocImg(e.target.files[0])} type="file" id="doc-img" hidden />
                <p className='text-sm'>Upload doctor <br /> picture</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div className='flex flex-col'>
                    <label>Your Name</label>
                    <input onChange={e => setName(e.target.value)} value={name} className='border border-gray-300 rounded-md px-3 py-2 mt-1' type="text" placeholder='Name' required />
                </div>

                <div className='flex flex-col'>
                    <label>Doctor Email</label>
                    <input onChange={e => setEmail(e.target.value)} value={email} className='border border-gray-300 rounded-md px-3 py-2 mt-1' type="email" placeholder='Email' required />
                </div>

                <div className='flex flex-col'>
                    <label>Set Password</label>
                    <input onChange={e => setPassword(e.target.value)} value={password} className='border border-gray-300 rounded-md px-3 py-2 mt-1' type="password" placeholder='Password' required />
                </div>

                <div className='flex flex-col'>
                    <label>Experience</label>
                    <select onChange={e => setExperience(e.target.value)} value={experience} className='border border-gray-300 rounded-md px-3 py-2 mt-1'>
                        {['1 Year', '2 Years', '3 Years', '4 Years', '5 Years', '6 Years', '8 Years', '9 Years', '10 Years'].map((exp, index) => (
                          <option key={index} value={exp}>{exp}</option>
                        ))}
                    </select>
                </div>

                <div className='flex flex-col'>
                    <label>Fees</label>
                    <input onChange={e => setFees(e.target.value)} value={fees} className='border border-gray-300 rounded-md px-3 py-2 mt-1' type="number" placeholder='Doctor fees' required />
                </div>

                <div className='flex flex-col'>
                    <label>Speciality</label>
                    <select onChange={e => setSpeciality(e.target.value)} value={speciality} className='border border-gray-300 rounded-md px-3 py-2 mt-1'>
                        {['Clinical Psychologist', 'Psychiatrist', 'Therapist/Counselor', 'Child Psychologist', 'Marriage & Family Therapist', 'Behavioral Therapist', 'Addiction Specialist', 'Trauma Therapist', 'Cognitive Behavioral Therapist (CBT)', 'Grief Counselor'].map((spec, index) => (
                          <option key={index} value={spec}>{spec}</option>
                        ))}
                    </select>
                </div>

                <div className='flex flex-col'>
                    <label>Degree</label>
                    <input onChange={e => setDegree(e.target.value)} value={degree} className='border border-gray-300 rounded-md px-3 py-2 mt-1' type="text" placeholder='Degree' required />
                </div>

                <div className='flex flex-col'>
                    <label>Address</label>
                    <input onChange={e => setAddress1(e.target.value)} value={address1} className='border border-gray-300 rounded-md px-3 py-2 mt-1' type="text" placeholder='Address 1' required />
                    <input onChange={e => setAddress2(e.target.value)} value={address2} className='border border-gray-300 rounded-md px-3 py-2 mt-1' type="text" placeholder='Address 2' />
                </div>
            </div>

            <div className='mt-6'>
                <p className='mb-2'>About Doctor</p>
                <textarea onChange={e => setAbout(e.target.value)} value={about} className='w-full border border-gray-300 rounded-md px-4 py-2' rows={5} placeholder='Write about doctor'></textarea>
            </div>

            <button type='submit' className='mt-6 bg-primary text-white px-6 py-2 rounded-full hover:bg-primary-dark transition ease-in-out duration-200'>Add Doctor</button>
        </form>
    );
};

export default AddDoctor;
