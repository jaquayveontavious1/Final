import React from 'react'
import { useState } from 'react';
import {Icon} from 'react-icons-kit';
import {eyeOff} from 'react-icons-kit/feather/eyeOff';
import { useNavigate } from 'react-router-dom';
import {eye} from 'react-icons-kit/feather/eye';
import { Link } from 'react-router-dom';
import axios from 'axios';
import videoSrc from '../assets/video/bus-station-video.mp4.mp4';
const Register = () => {
  const [username,setUsername] = useState('');
  const [email,setEmail] = useState('');
  const [password, setPassword] = useState("");
  
  const [type, setType] = useState('password');
  const [icon, setIcon] = useState(eyeOff);
  const [message,setMessage] = useState('')
  const navigate = useNavigate()


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/accounts/register/',{
        username,
        email,
        password
      });
      setMessage('Signup successful')
      navigate('/login')
    } catch(error) {
      setMessage('Signup failed')
      alert('Signup failed')
      
    }
  }
  

  const handleToggle = () => {
    if (type==='password'){
       setIcon(eye);
       setType('text')
    } else {
       setIcon(eyeOff)
       setType('password')
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
      {message && message}
        <div className='relative w-full md:w-1/2 h-1/2 md:h-full flex flex-col justify-center items-center bg-black text-white'>
          <h2 className='text-white absolute top-0 mt-4 text-2xl'>Create an Account</h2>
            <form>
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
                <input type={type} name='password' value={password} placeholder='password'onChange={(e) => setPassword(e.target.value)} autoComplete='current-password' id='password' className='text-black ml-10 border-rounded w-72'/>
                <span className='flex justify-around items-center' onClick={handleToggle}>
                  <Icon className='absolute mr-9 ml-80 -mt-11' icon={icon} size={20}/>
                </span>
              </div>
              <button  className='w-full bg-customColor text-black-300 py-2 rounded'>Register</button>
            </form>
            <div className='mt-24'>
              <hr />
              <Link to='/'><h3>Already have an account ? <h3 className='text-cyan-700'>Login</h3></h3></Link>

            </div>
          


        </div>

    </div>
       
    
  )
}

export default Register;