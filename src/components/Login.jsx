import React from 'react'
import { useState } from 'react';
import {Icon} from 'react-icons-kit';
import {eyeOff} from 'react-icons-kit/feather/eyeOff';
import {eye} from 'react-icons-kit/feather/eye';
import axios from 'axios';

const Login = () => {
  const [username,setUsername] = useState('');
  const [password, setPassword] = useState("");
  const [message,setMessage] = useState('')
  const [type, setType] = useState('password');
  const [icon, setIcon] = useState(eyeOff);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post('http://127.0.0.1:8000/accounts/login/',{
          username,
          password
        });
        setMessage('Login Successful!!')
        


    } catch(error) {
      setMessage('Login failed please provide correct credentials')
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
    <>
      <form onSubmit={handleSubmit}>
        {message && message}
        <div className='main w-4/12 ml-96 mt-32 bg-customClass'>
          <div className='container bg-white p-8 rounded shadow-md'>
            <div className='mb-4'>
              <label for='username' className='block text-gray-700'>Username : </label>
              <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} placeholder='username' id='username' className='w-full px-3 py-2 border rounded'></input>
            </div>
              
            <div className='mb-4'>
              <label for='password' className='block text-gray-700'>Password : </label>
              <input type={type} name='password'value={password}onChange={(e) => setPassword(e.target.value)} autoComplete='current-password' placeholder='password' id='password' className='w-full px-3 py-2 border rounded'/>
              <span className='flex justify-around items-center' onClick={handleToggle}>
                <Icon className='absolute mr-9 ml-80 -mt-11' icon={icon} size={20}/>

              </span>
            </div>
            <button className='w-full bg-customColor text-black-300 py-2 rounded'>Login</button>

          </div>
        </div>
      </form>
        
    </>
  )
}
export default Login;