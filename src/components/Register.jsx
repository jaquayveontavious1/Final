import React from 'react'
import { useState } from 'react';
import {Icon} from 'react-icons-kit';
import {eyeOff} from 'react-icons-kit/feather/eyeOff';
import { useNavigate } from 'react-router-dom';
import {eye} from 'react-icons-kit/feather/eye';
import axios from 'axios';
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
    } catch(error) {
      setMessage('Signup failed')
      navigate('/login')
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
      <form onSubmit={handleSubmit}>
        {message }
        <div className='main w-4/12 ml-96 mt-14 bg-customClass'>
          <div className='container bg-white p-8 rounded shadow-md'>
            <div className='mb-4'>
              <label htmlFor='username' className='block text-gray-700'>Username : </label>
              <input type='text' placeholder='username' id='username' className='w-full px-3 py-2 border rounded' value={username} onChange={(e) => setUsername(e.target.value) }/>
            </div>
            <div className='mb-4'>
              <label htmlFor='email' className='block text-gray-700'>Email: </label>
              <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='example@gmail.com' id='email' className='w-full px-3 py-2 border rounded'/>
            </div>
            <div className='mb-4'>
              <label htmlFor='password' className='block text-gray-700'>Password : </label>
              <input type={type} name='password' value={password} placeholder='password'onChange={(e) => setPassword(e.target.value)} autoComplete='current-password' id='password' className='w-full px-3 py-2 border rounded'/>
              <span className='flex justify-around items-center' onClick={handleToggle}>
                <Icon className='absolute mr-9 ml-80 -mt-11' icon={icon} size={20}/>
              </span>
            </div>
            
            <button  className='w-full bg-customColor text-black-300 py-2 rounded'>Register</button>

          </div>
        </div>
      </form>
  )
}

export default Register;