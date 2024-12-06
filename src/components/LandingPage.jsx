import React from 'react'
import { auth } from './Firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { signInWithGooglePopup } from './Firebase';
import GoogleIcon from '../assets/images/google-icon-removebg-preview.png'
import { useState } from 'react';
import { signInWithTwitterPopup } from './Firebase';
import axios from 'axios';
import TwitterIcon from '../assets/images/twitter-logo-change-x-elon-musk-designboom-500-removebg-preview.png';
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
    const logInWithTwitter = async () => {
        try {
            const response = await signInWithTwitterPopup()
            const user = response.user;
            console.log('User',user)
            //Access token and secret

          
            alert('Wait to be redirected')
            navigate('/dashboard')
        }
        catch (error) {
            console.log('Error logging in',error)
        }
    }
  return (
    <div  className='flex h-screen'>
        {/* Video Section */}
        <div className='w-full md:w-2/3 h-2/3 md:h-full'>
            <video className='w-full h-full object-cover' autoPlay loop muted>
                <source src={videoSrc} type='video/mp4'/>
                <h2>Your Browser Does Not Support The Video Tag</h2>
            </video>
        </div>
        {/* Sign and Log In Section */}
        <div className='relative w-full md:w-1/3 h-1/3 md:h-full flex flex-col justify-center items-center bg-black text-white'>
            <div className='flex p-2 mr-2'>
                <div className='-mt-20 mr-4'>
                    <button type='button' className='bg-black  text-white w-48 h-8 border border-rounded' onClick={logInWithGoogle}>
                        <img src={GoogleIcon} className=' -mb-4'  width='27'/>
                        <p className='-mt-6 ml-4'>Log In With Google</p></button>
                </div>
                <div className='-mt-20 ml-4'>
                    <button type='button' className='bg-black  text-white w-48 h-8 border border-rounded 'onClick={logInWithTwitter}> 
                    <img src={TwitterIcon} width='24' className='mb-2' />
                    <p className='-mt-8'>Log In With Twitter</p></button>
                </div>
            </div>
           
            <h2 className='text-xl'><strong>OR</strong></h2>
            <div className='text-white mt-6'>
                <form onSubmit={handleLogin}>
                    {message && message}
                    <div className='mb-4 '>
                        <label htmlFor='email' className='block text-white text-lg'>Email : </label>
                        <input type='email' value={email} className='ml-6 mt-2 h-8 rounded border w-72 text-black border-rounded' onChange={(e) => setEmail(e.target.value)} placeholder=' Enter Email ' id='email' />
                    </div>
                    <div className='mb-4 '>
                        <label htmlFor='password' className='block text-white text-lg'>Password : </label>
                        <input type='password' className='text-black mt-2 rounded h-8 border ml-8 border-rounded w-72' value={password}  onChange={(e) => setPassword(e.target.value)} placeholder=' Enter Password ' id='password'  autoComplete='current-password'/>
                       
                    </div>
                    <div className='mb-4'>
                        <input type='checkbox'/>
                        <label htmlFor='remember' className='text-white'>Remember Me </label>
                    </div>
                    <button className='w-full bg-cyan-900 text-white py-2 rounded'>Login</button>
                </form>
                <h3 className='text-black mt-4'><a href='#'>Forgot Password?</a></h3>
                
                <div className='mt-24 '>
                    <hr  />
                    <Link to='/signup'><h3 className='text-white'>Dont have an account ? <h3 className='text-cyan-900'>Sign Up</h3></h3></Link>
                </div>
                <div>
                  
                </div>
               


            </div>
        </div>
    

    </div>
  )
}

export default LandingPage
    
    
    
   


