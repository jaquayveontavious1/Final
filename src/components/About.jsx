import React from 'react'
import Instagram from '../assets/images/instagram-icon.png'
import Gmail from '../assets/images/gmail-icon.png'
import Telephone from '../assets/images/telephone-icon.png'
const About = () => {
  return (
    <div className='text-center text-white bg-black'>
        <h1 className=' p-2 text-center text-2xl'>About Us</h1>
        <h3 className='text-2xl mt-4 text-customColor'>Welcome to Express Travel</h3>
        <div className='mt-6 text-center'>
            <h2 className='text-lg' >Our Mission :</h2>
            <p className='mt-2'>
                Our mission is to provide reliable, efficient and affordable bus booking services for Kenyan High School Students. We aim to make transportation safe and accessible for every student, ensuring they reach their destinations on time and with ease
            </p>

        </div>

        <div className='mt-6 text-center'>
            <h2 className='text-lg' >Our Vision :</h2>
            <p className='mt-2'>
               We envision becoming the leading bus booking service in Kenya, known for our commitment to safety, affordability and convenience. Our goal is to ensure that every student has access to top-notch transportation services.
            </p>

        </div>
        <div className='mt-6 text-center'>
            <h2 className='text-lg' >Our Story :</h2>
            <p className='mt-2'>
              Express Travel was born out of a need to address the challenges faced by students when booking buses. Late bookings, high costs and unreliable services were the common issues. I decided to create a solution tha would streamline the process and make it easier for students to travel.
            </p>

        </div>
        <div className='mt-6 text-center'>
            <h2 className='text-lg'>Our Features : </h2>
            <ul>
                <li><strong>Easy Booking Process : </strong>Simplified booking steps to ensure a hassle-free experience</li>
                <li><strong>Real-Time Bus Tracking : </strong>Track your bus in real-time and never miss a ride</li>
                <li><strong>Integration with MPESA : </strong>Convenient payment options with MPESA </li>
                <li><strong>Booking History : </strong>Keep track of your past bookings and plan your travels better. </li>
                <li><strong>Admin and Manager Dashboard : </strong>Comprehensive Dashboards for effienct management </li>
            </ul>

        </div>
        <div className='mt-6 text-center'>
            <h2 className='text-lg' >Community Impact : </h2>
            <p className='mt-2'>
             We are proud to partner with schools and transport companies to offer discounts and special services for students. Our platform not only eases the booking process but also contributes to the community by making education more accessible
            </p>

        </div>
        <div className='mt-6 text-center'>
            <h2 className='text-lg' >Future Plans : </h2>
            <p className='mt-2'>
             We are constantly working on new features and improvements. Soon, we plan to introduce multilingual support, event-based bookings and more payment options to serve you better.
            </p>

        </div>
        <div className='mt-6 text-center'>
            <h2 className='text-lg' >Contact Us : </h2>
            <p className='mt-2 p-2'>
             We are here to help! Reach out to us on kanyingitiffany@gmail.com
            </p>
            
            

        </div>
       


    </div>
  )
}

export default About