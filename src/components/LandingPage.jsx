import React from 'react'
import { Link } from 'react-router-dom'
import videoSrc from '../assets/video/bus-station-video.mp4.mp4';
const LandingPage = () => {
  return (
    <div className='flex h-screen'>
        {/**Video Section */}
        <div className='w-full md:w-1/2 h-1/2 md:h-full'>
            <video className='w-full h-full object-cover' autoPlay loop muted>
                <source src={videoSrc} type='video/mp4'/>
                <h2>Your Browser Does Not Support The Video Tag</h2>

            </video>

        </div>
        {/**Sign and Log In Section */}
        <div className='relative w-full md:w-1/2 h-1/2 md:h-full flex flex-col justify-center items-center bg-black text-white'>
            <h2 className='absolute top-0 mt-4 text-2xl'>Welcome to EduBus</h2>
            <div className='flex  space-x-4'>
                <Link to='/signup' className='bg-customColor text-white px-6 py-3 rounded'>Sign Up</Link>
                <Link to='/login' className='bg-customColor text-white px-6 py-3 rounded'>Login</Link>
                <Link to='/profile' className='bg-customColor text-white px-6 py-3 rounded'>Profile</Link>
                


            </div>

        </div>
    </div>
  )
}

export default LandingPage;