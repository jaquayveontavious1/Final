import React from 'react'
import { useState } from 'react';
import { auth } from './Firebase';

import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

import { Link } from 'react-router-dom';
import axios from 'axios';
import newImage from '../assets/images/NEW.webp'
import videoSrc from '../assets/video/bus-station-video.mp4.mp4';
const Register = () => {
  //const [username,setUsername] = useState()
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [confirmPassword,setConfirmPassword] = useState('')
  const [notice,setNotice] = useState('')

 
  const navigate = useNavigate()

  const handleRegister = async (e) => {
    e.preventDefault(); //preventing the default behaviour of a form

    if (password === confirmPassword) {
      try {
        await createUserWithEmailAndPassword(auth,email,password)
        navigate('/')

      } catch (error) {
        console.error("Sorry!! something went wrong. Please try again")
        setNotice("Sorry. something went wrong. Pleasee try again")
      }
    } else {
      console.error('Sorry! Passwords do not match. Please make sure the passwords match')
      
    }
  }

  
  
    
  

 
  return (
    <div className='flex h-screen'>
      {/**Video Section */}
       
          
      <div className='w-full md:w-2/3 h-2/3 md:h-full'>
        <video className='w-full h-full object-cover' >
          <source src={newImage} type='video/mp4' />
          <h2>Your Browser Does Not Support the Video Tag</h2>
        </video>
      </div>
      {/**Registration Form */}
        {notice && notice}
        <div className='relative w-full md:w-1/3 h-1/3 md:h-full flex flex-col justify-center items-center bg-black text-white'>
          <h2 className='text-white absolute top-4 mt-4 text-2xl'>Create an Account</h2>
            <form onSubmit={handleRegister}>
              
              <div className='mb-4 '>
                <label htmlFor='email' className='block text-white text-lg'>Email : </label>
                <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='example@gmail.com' id='email' className='text-black ml-6 mt-2 h-8 rounded border w-72 border-rounded'/>
              </div>
              <div className='mb-4 '>
                <label htmlFor='password' className='block text-white text-lg'>Password : </label>
                <input type='password' name='password' value={password} placeholder='Password'onChange={(e) => setPassword(e.target.value)} autoComplete='current-password' id='password' className='text-black ml-6 mt-2 h-8 rounded border-rounded w-72'/>
                
              </div>
              <div className='mb-4 '>
                <label htmlFor='confirmpassword' className='block text-white text-lg'>Confirm Password : </label>
                <input type='password' name='confirmpassword' value={confirmPassword} placeholder='Confirm Password'onChange={(e) => setConfirmPassword(e.target.value)} autoComplete='current-password' id='confirmpassword' className='text-black ml-6 mt-2 h-8 rounded border-rounded w-72'/>
                
              </div>
              <button type='submit'  className='w-full bg-customColor text-black-300 py-2 rounded'>Register</button>
            </form>
            <div className='mt-32'>
              <hr />
              <Link to='/'><h3>Already have an account ? <h3 className='text-red'>Login</h3></h3></Link>

            </div>
          


        </div>

    </div>
       
    
  )
}

export default Register;