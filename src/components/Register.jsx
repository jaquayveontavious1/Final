import React from 'react'
import { useState } from 'react';
import {Icon} from 'react-icons-kit';

import { useNavigate } from 'react-router-dom';

import { Link } from 'react-router-dom';
import axios from 'axios';
import videoSrc from '../assets/video/bus-station-video.mp4.mp4';
const Register = () => {
  const [username,setUsername] = useState()
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

 
  const navigate = useNavigate()

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('http://127.0.0.1:8000/accounts/register/',{
        username,
        email,
        password
      });
     
      if (response.status === 201) {
        const token = response.data.token
        localStorage.setItem('authToken',token)
        alert('Registration successful')
        navigate('/')
      }
      
    } catch(error) {
      
      alert('Signup failed')
      
    }
  }
  

 
  return (
    <div className='flex h-screen'>
      {/**Video Section */}
       
          
      <div className='w-full md:w-1/2 h-1/2 md:h-full'>
        <video className='w-full h-full object-cover' autoPlay loop muted>
          <source src={videoSrc} type='video/mp4' />
          <h2>Your Browser Does Not Support the Video Tag</h2>
        </video>
      </div>
      {/**Registration Form */}
      
        <div className='relative w-full md:w-1/2 h-1/2 md:h-full flex flex-col justify-center items-center bg-black text-white'>
          <h2 className='text-white absolute top-0 mt-4 text-2xl'>Create an Account</h2>
            <form onSubmit={handleSubmit}>
              <div className='mb-4 flex'>
                <label htmlFor='username' className='block text-white text-lg'>Username : </label>
                <input type='text' placeholder='username' id='username' className='ml-6 w-72 border-rounded text-black' value={username} onChange={(e) => setUsername(e.target.value) }/>
              </div>
              <div className='mb-4 flex'>
                <label htmlFor='email' className='block text-white text-lg'>Email: </label>
                <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='example@gmail.com' id='email' className='text-black ml-16 border-rounded w-72'/>
              </div>
              <div className='mb-4 flex'>
                <label htmlFor='password' className='block text-white text-lg'>Password : </label>
                <input type='password' name='password' value={password} placeholder='password'onChange={(e) => setPassword(e.target.value)} autoComplete='current-password' id='password' className='text-black ml-10 border-rounded w-72'/>
                
              </div>
              <button type='submit'  className='w-full bg-customColor text-black-300 py-2 rounded'>Register</button>
            </form>
            <div className='mt-24'>
              <hr />
              <Link to='/'><h2>Already have an account ? <p className='text-cyan-700'>Login</p></h2></Link>

            </div>
          


        </div>

    </div>
       
    
  )
}

export default Register;