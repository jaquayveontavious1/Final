import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import video from '../assets/video/bus-station-video.mp4.mp4'
import { useNavigate } from 'react-router-dom';
const Profile = () => {
  
  const [firstname,setFirstName] = useState('');
  const [lastname,setLastName] = useState('');
  const [contact_number,setContact_Number] = useState('');
  const [email,setEmail] = useState('');
  const [profile_pic,setProfile_Pic] = useState(null);
  const [payment,setPayment] = useState('')
  const [role,setRole] = useState('');
  const [school,setSchool] = useState('')
  const [message,setMessage] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('firstname',firstname);
    formData.append('lastname',lastname);
    formData.append('contact_number',contact_number);
    formData.append('email',email);
    if(profile_pic) formData.append('profile_pic',profile_pic);
    formData.append('payment',payment);
    formData.append('role',role);
    formData.append('school',school);
    try {
      const token = localStorage.getItem('token')
      const response = await axios.post('http://127.0.0.1:8000/profiles/create-profile/',formData,{
        
      headers : {
        'Authorization' : `Token ${token}`,
        'Content-Type' : 'multipart/form-data',
      }
      });
      setMessage('Profile created Successfully')
      navigate('/dashboard')
    } catch(error) {
      const errorData = error.response?.data || {detail : 'Profile creation failed'}
      setMessage(`Error : ${errorData.detail} || 'An error occurred'`)
    }
  }


  return (
      <>
      <div className='h-screen flex'>
        {/**Video Section */}
        <div className='w-full md:w-1/2 h-1/2 md:h-full'>
            <video className='w-full h-full object-cover' autoPlay loop muted>
                <source src={video} type='video/mp4'/>
                <h2>Your Browser Does Not Support The Video Tag</h2>
            </video>
        </div>
        {/**Profile Form */}
        <div className='relative w-full md:w-1/2 h-1/2 md:h-full flex flex-col justify-center items-center bg-black text-white'>
          <h2 className='absolute top-0 mt-4 text-2xl'>Creation of Profile</h2>
          <div >
            <form onSubmit={handleSubmit}>
              {message && message}
              <div className='mb-4 flex'>
                <label htmlFor='firstname'>First Name : </label>
                <input type='text' name='firstname' className='text-black ml-8 border-rounded w-72' value={firstname} onChange={(e) => setFirstName(e.target.value) } id='firstname' placeholder='First Name' />
              </div>
              <div className='mb-4 flex'>
                <label htmlFor='lastname'>Last Name : </label>
                <input type='text' name='lastname' className='text-black ml-8 border-rounded w-72' value={lastname} onChange={(e) => setLastName(e.target.value) } id='lastname' placeholder='last Name' />
              </div>
              <div className='mb-4 flex'>
                <label htmlFor='contact_number'>Contact Number : </label>
                <input type='text' name='contact_number' className='text-black ml-8 border-rounded w-72' value={contact_number} onChange={(e) => setContact_Number(e.target.value) } id='contact_number' placeholder='0712345678' />
              </div>
              <div className='mb-4 flex'>
                <label htmlFor='email'>Email : </label>
                <input type='email' name='email' className='text-black ml-8 border-rounded w-72' value={email} onChange={(e) => setEmail(e.target.value) } id='email' placeholder='example@gmail.com' />
              </div>
              <div className='mb-4 flex'>
                <label htmlFor='profile_pic'>Profile Pic : </label>
                <input type='file' name='profile_pic' className='text-black ml-8 border-rounded w-72' value={profile_pic} onChange={(e) => setProfile_Pic(e.target.files[0]) } id='profile_pic'  />
              </div>
              <div className='mb-4 flex'>
                <label htmlFor='payment'>Payment : </label>
                <input type='text' name='payment' className='text-black ml-8 border-rounded w-72' value={payment} onChange={(e) => setPayment(e.target.value) } id='payment' placeholder='example: Mpesa /Cash' />
              </div>
              <div className='mb-4 flex'>
                <label htmlFor='role'>Role : </label>
                <input type='text' name='role' className='text-black ml-8 border-rounded w-72' value={role} onChange={(e) => setRole(e.target.value) } id='role' placeholder='e.g Student' />
              </div>
              <div className='mb-4 flex'>
                <label htmlFor='school'>School Name : </label>
                <input type='text' name='school' className='text-black ml-8 border-rounded w-72' value={school} onChange={(e) => setSchool(e.target.value) } id='school' placeholder='School Name' />
                
              </div>
              <button type='submit' className='text-black w-full bg-cyan-700 mt-4'>Create Profile</button>
            </form>
          </div>

        </div>
       
             
        
      </div>
      </>
  )
}

export default Profile;