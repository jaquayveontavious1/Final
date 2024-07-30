import React from 'react'
import {Icon} from 'react-icons-kit'
import { useState } from 'react';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import videoSrc from '../assets/video/bus-station-video.mp4.mp4';

const LandingPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [type, setType] = useState('password');
    const [icon, setIcon] = useState(eyeOff);
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:8000/accounts/login/', {
                username,
                password
            });
            localStorage.setItem('token', response.data.token);
            alert('Login Successful');
            navigate('/profile');
            console.log('Login Confirmed');
        } catch (error) {
            setMessage('Login failed! Please provide correct credentials');
            console.error('Login failed', error);
        }
    };
    const handleToggle = () => {
        if (type === 'password') {
            setIcon(eye);
            setType('text');
        } else {
            setIcon(eyeOff);
            setType('password');
        }
    };
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
            <h2 className='absolute top-0 mt-4 text-2xl'>Login Into Account</h2>
            <div className='text-white'>
                <form onSubmit={handleSubmit}>
                    {message && message}
                    <div className='mb-4 flex'>
                        <label htmlFor='username' className='block text-white text-lg'>Username : </label>
                        <input type='text' value={username} className='ml-6 w-72 text-black border-rounded' onChange={(e) => setUsername(e.target.value)} placeholder='username' id='username' />
                    </div>
                    <div className='mb-4 flex'>
                        <label htmlFor='password' className='block text-white text-lg'>Password : </label>
                        <input type='text' className='text-black ml-8 border-rounded w-72' value={password}  onChange={(e) => setPassword(e.target.value)} placeholder='password' id='password'  autoComplete='current-password'/>
                       
                    </div>
                    <div className='mb-4'>
                        <input type='checkbox'/>
                        <label htmlFor='remember'>Remember Me </label>
                    </div>
                    <button className='w-full bg-customColor text-black-300 py-2 rounded'>Login</button>
                </form>
                <h3 className='text-cyan-700 mt-4'><a href='#'>Forgot Password?</a></h3>
                
                <div className='mt-24 '>
                    <hr />
                    <Link to='/signup'><h3>Dont have an account ? <h3 className='text-cyan-700'>Sign Up</h3></h3></Link>
                </div>


            </div>
        </div>
    

    </div>
  )
}

export default LandingPage
    
    
    
   


