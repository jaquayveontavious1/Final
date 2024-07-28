import React from 'react'
import homeVideo from '../assets/video/bus-station-video.mp4.mp4'
import homePicture from '../assets/images/picture-for-homepage.jpg'
const Home = () => {
  return (
    <div>

        <div className='image mt-4 items-center ml-44 pl-0.5'>
            <div id='home-image'>
                <img src={homePicture} className='mb-3'  height={670} width={1100}/>
            </div>
            <div id='home-message' className='-mt-32 text-white'>
                <h2><strong>Welcome To Express Travel</strong></h2>
                
                <p>Experience seamless bus booking with real-time tracking, easy ticketing,<br/> secure payments, and detailed booking history.<br/> Join us for a hassle-free journey!</p>
            </div>
            <div id='about' className='mt-8 mr-14 p-2 text-center text-2xl'>
                <h2 className='mt-8 p-2 text-center text-2xl'>About Us</h2>
                <p className='text-center text-lg'>Our Bus Booking System is designed to address the unique transportation needs of Kenyan high school students. By providing a streamlined platform for booking bus rides, it simplifies the process of securing travel, ensuring that students can easily find and book seats on buses for their school commutes and extracurricular activities. With features such as real-time bus tracking, seat selection, and event-based booking, the system enhances convenience and reliability. Additionally, the integration of a user-friendly interface and multilingual support caters to diverse student populations, making the journey to and from school more efficient and less stressful.</p>



            </div>
          
           
        </div>
    </div>
  )
}

export default Home