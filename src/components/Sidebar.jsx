import React from 'react'
import menu from '../assets/images/menu_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg' 
import close from '../assets/images/close_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg'
import profile from '../assets/images/person_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg'
import GPS from '../assets/images/share_location_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg'
import ticket from '../assets/images/confirmation_number_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg'
import payment from '../assets/images/payments_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg'
import history from '../assets/images/history_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg'
import logout from '../assets/images/door_open_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg';
import { useState } from 'react'
import { Link } from 'react-router-dom'
const Sidebar = () => {
    const [isOpen,setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen)
    }
  return (
    <div>
       
        <div>
           <img  src={menu} alt='hamburger menu' className='-mt-9 ml-2 cursor-pointer ' onClick={toggleSidebar}/>
        </div>
        {isOpen && (
            <div className='fixed top-0 left-0 mt-11 p-4 bg-cyan-950 w-44  h-full z-50 text-white'>
                {/**Sidebar Content is going here */}
                <button className='top-2 left-10'>
                    <img src={close} onClick={toggleSidebar} />
                </button>
                <div className='flex mt-6 cursor-pointer'>
                    <img src={profile} alt='Profile Info'/>
                    <Link to='/update-profile'><h3>Profile</h3></Link>
                </div>
                <div className='flex mt-6 cursor-pointer'>
                    <img src={GPS} alt='Real Time Bus Tracking'/>
                    <h3>RT Bus Tracking</h3>
                </div>
                <div className='flex mt-6 cursor-pointer'>
                    <img src={ticket} alt='Printing Tickets'/>
                    <h3>Ticket</h3>
                </div>
                <div className='flex mt-6 cursor-pointer'>
                    <img src={payment} alt='Payment'/>
                    <h3>Payment</h3>
                </div>
                <div className='flex mt-6 cursor-pointer'>
                    <img src={history} alt='Booking History'/>
                    <h3>Booking History</h3>
                </div>
                <div className='flex mt-6 cursor-point'>
                    <img src={logout} alt='Logout'/>
                    <h3>Logout</h3>
                </div>
            </div>
        )}
    </div>
  )
}

export default Sidebar