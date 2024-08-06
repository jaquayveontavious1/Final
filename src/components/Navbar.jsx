import React from 'react'
import School from './School';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo-to-use.jpg';

const Navbar = () => {
    console.log('Logo path:', logo);
  return (
    <nav className='container  bg-customColor p-2 text-white flex justify-between items-center'>
       <div className='logo mb-1.5 ml-10'>
         <h2>
            <a href='#'>Express Travel Agency</a>
          </h2>
       </div>
       <div className='body'>
        <ul className='flex gap-4 cursor-pointer'>
          <li><a href='#'>Home</a></li>
          <Link to='/routes'><li>Bookings</li></Link>
          <Link to='/about'><li>About Us</li></Link>
          <Link to='/buses'><li>Security</li></Link>
          <Link to='/schools'><li>Schools</li></Link>

        </ul>

       </div>
    </nav>
  )
}

export default Navbar