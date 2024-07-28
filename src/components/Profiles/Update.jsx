import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useState,useEffect } from 'react'
const Update = () => {
  const [profile,setProfile] = useState({
    firstname : '',
    lastname : '',
    contact_number : '',
    email : '',
    profile_pic : '',
    payment : '',
    role : '',
    school : ''
  });
  const [message,setMessage] = useState('')
  const [loading,setLoading] = useState(true)
  
  const navigate = useNavigate()
  
  useEffect(() => {
    const fetchProfile = async () => {
      
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://127.0.0.1:8000/profiles/profile/',{
          headers: {
            'Authorization' : `Token ${token}`,
            'Content-Type' : 'multipart/form-data',
          }
        });
        setProfile(response.data)
        console.log(response.data)
        setLoading(false)
      } catch(error) {
        console.error('Error fetching data',error)
        setLoading(false)
      }
    };
    fetchProfile()
    
  },[]);
  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setProfile(prevProfile => ({
      ...prevProfile,
      [name] : value
    }));
  };
  const handleSubmit = async(e) => {
    e.preventDefault()
    try {
      const token = localStorage.getItem('token');
      const formData = new FormData()
      Object.keys(profile).forEach(key => {
        formData.append(key,profile[key]);
      });
      await axios.put('http://127.0.0.1:8000/profiles/profile/',formData,{
        headers: {
          'Authorization' : `Token ${token}`,
          'Content-Type' : 'multipart/form-data',
        }
      });
      setMessage('Profile updated successfully')
      navigate('/dashboard')

    } catch(error) {
      console.error('Error updating Profile', error)
      setMessage('Profile update failed')
    }
  }

  if(loading) {
    return <div>Loading...</div>
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        {message&& message}
        <div className='main 1-4/12 ml-44 mt-32 bgCustomClass'>
          <div className='container bg-white p-8 rounded shadow-md'>
            <h2>Edit Profile Information</h2>
            <div className='mb-4'>
              <label htmlFor="firstname">First Name : </label>
              <input type='text' id='firstname' className='w-full px-3 py-2 border rounded'name='firstname'value={profile.firstname} onChange={handleInputChange} placeholder='First Name' />
              
            </div>
            <div className='mb-4'>
              <label htmlFor="lastname">Last Name : </label>
              <input type='text' id='lastname' className='w-full px-3 py-2 border rounded'name='lastname'value={profile.lastname} onChange={handleInputChange} placeholder='Last Name' />
              
            </div>
            <div className='mb-4'>
              <label htmlFor="contact_number">Contact Number : </label>
              <input type='text' id='contact_number' className='w-full px-3 py-2 border rounded'name='contact_number'value={profile.contact_number} onChange={handleInputChange} placeholder='0712345678' />
              
            </div>
            <div className='mb-4'>
              <label htmlFor="email">Email : </label>
              <input type='email' id='email' className='w-full px-3 py-2 border rounded'name='email'value={profile.email} onChange={handleInputChange} placeholder='example@gmail.com' />
              
            </div>
            <div className='mb-4'>
              <label htmlFor="profile_pic">Profile Picture : </label>
              <input type='file' id='profile_pic' className='w-full px-3 py-2 border rounded'name='profile_pic'value={profile.email} onChange={(e) => setProfile(prevProfile => ({ ...prevProfile,profile_pic:e.target.files[0]}))} placeholder='example@gmail.com' />
              
            </div>
            <div className='mb-4'>
              <label htmlFor="payment">Payment : </label>
              <input type='text' id='payment' className='w-full px-3 py-2 border rounded'name='payment'value={profile.payment} onChange={handleInputChange}    />
              
            </div>
            <div className='mb-4'>
              <label htmlFor="role">Role : </label>
              <input type='text' id='role' className='w-full px-3 py-2 border rounded'name='role'value={profile.role} onChange={handleInputChange}    />
              
            </div>
            <div className='mb-4'>
              <label htmlFor="school">School Name : </label>
              <input type='text' id='school' className='w-full px-3 py-2 border rounded'name='school'value={profile.school} onChange={handleInputChange}    />
              
            </div>
            <button type='submit' className='w-full bg-customColor text-white py-2 rounded'>Update Profile</button>

          </div>
        </div>

      </form>
    </>
  )
}

export default Update