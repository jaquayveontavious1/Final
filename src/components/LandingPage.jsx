import React from 'react'
import { auth } from './Firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { signInWithGooglePopup } from './Firebase';

import { useState } from 'react';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import videoSrc from '../assets/video/bus-station-video.mp4.mp4';

const LandingPage = () => {
    const [email,setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    
    const navigate = useNavigate();
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth,email,password)
            navigate('/dashboard')
            alert('Login Successful!! Please wait to be redirected')
        } catch (error) {
            console.error('Error while logging in the user', error)
            alert('Unable to log in. Please try again')
        }
    }
    
    const logInWithGoogle = async () => {
        try {
            const response = await signInWithGooglePopup()
            console.log(response)
            alert('Wait to be redirected')
            navigate('/dashboard')
        } catch(error) {
            console.error('Error loggin them in',error)
        }
    }
  return (
    <div  className='flex h-screen'>
        {/* Video Section */}
        <div className='w-full md:w-1/2 h-1/2 md:h-full'>
            <video className='w-full h-full object-cover' autoPlay loop muted>
                <source src={videoSrc} type='video/mp4'/>
                <h2>Your Browser Does Not Support The Video Tag</h2>
            </video>
        </div>
        {/* Sign and Log In Section */}
        <div className='relative w-full md:w-1/2 h-1/2 md:h-full flex flex-col justify-center items-center bg-black text-white'>
            
            <div className='text-white'>
                <form onSubmit={handleLogin}>
                    {message && message}
                    <div className='mb-4 '>
                        <label htmlFor='email' className='block text-white text-lg'>Email : </label>
                        <input type='email' value={email} className='ml-6 mt-4 border w-72 text-black border-rounded' onChange={(e) => setEmail(e.target.value)} placeholder=' Enter Your Email: example@gmail.com' id='email' />
                    </div>
                    <div className='mb-4 '>
                        <label htmlFor='password' className='block text-white text-lg'>Password : </label>
                        <input type='text' className='text-black mt-4 border ml-8 border-rounded w-72' value={password}  onChange={(e) => setPassword(e.target.value)} placeholder=' Enter Your Password' id='password'  autoComplete='current-password'/>
                       
                    </div>
                    <div className='mb-4'>
                        <input type='checkbox'/>
                        <label htmlFor='remember' className='text-white'>Remember Me </label>
                    </div>
                    <button className='w-full bg-cyan-900 text-white py-2 rounded'>Login</button>
                </form>
                <h3 className='text-black mt-4'><a href='#'>Forgot Password?</a></h3>
                
                <div className='mt-24 '>
                    <hr />
                    <Link to='/signup'><h3 className='text-white'>Dont have an account ? <h3 className='text-cyan-900'>Sign Up</h3></h3></Link>
                </div>
                <div className='mt-4'>
                    <button type='button' className='bg-cyan-900 border-rounded ' onClick={logInWithGoogle}>Log In With Google</button>
                    
                </div>


            </div>
        </div>
    

    </div>
  )
}

export default LandingPage
    
    
    
   


