import React from 'react'
import homeVideo from '../assets/video/bus-station-video.mp4.mp4'
import { Link } from 'react-router-dom'
import homePicture from '../assets/images/picture-for-homepage.jpg'
import BookingIcon from '../assets/images/Booking-40-Off-Featured-2_2.png'
import DiscountTicket from '../assets/images/discount-tickets.jpeg'
import PaymentView from '../assets/images/payment-view.jpg'
import ProfileAvatar from '../assets/images/profile-avatar.jpg'
import GPS from '../assets/images/real-time.jpg'
import SchoolIcon from '../assets/images/school.png'
import Security from '../assets/images/security.jpg'
import TicketView from '../assets/images/ticket-view.png'
import Dreamline from '../assets/images/dreamline.jpeg'
import EasyCoach from '../assets/images/easycoach.jpeg'
import EldoretExpress from '../assets/images/eldoretexpress.jpeg'
import Mash from '../assets/images/mash.png'
import Scania from '../assets/images/scania.jpeg'
import Tahmeed from '../assets/images/tahmeed.png'
import ModernCoast from '../assets/images/moderncoast.jpeg'
import Simba from '../assets/images/simba.jpg'
const Home = () => {
  return (
    <div>

        <div className='image bg-customColor text-white  items-center '>
            <div id='home-image'>
                <img src={homePicture} className='mb-3' height={600} width={1300}  />
            </div>
            <div id='home-message' className='-mt-64 text-black'>
                <h2 className='text-white'><strong>Welcome To Express Travel</strong></h2>
                
                {/*<p>Experience seamless bus booking with real-time tracking, easy ticketing,<br/> secure payments, and detailed booking history.<br/> Join us for a hassle-free journey!</p>*/}
            </div>
            <div id='about' className='mt-52 mr-14 p-2 text-center text-2xl'>
                <h2 className='mt-4 p-2 text-center text-2xl'>About Us</h2>
                <p className='text-center text-lg'>Our Bus Booking System is designed to address the unique transportation needs of Kenyan high school students. By providing a streamlined platform for booking bus rides, it simplifies the process of securing travel, ensuring that students can easily find and book seats on buses for their school commutes and extracurricular activities. With features such as real-time bus tracking, seat selection, and event-based booking, the system enhances convenience and reliability. Additionally, the integration of a user-friendly interface and multilingual support caters to diverse student populations, making the journey to and from school more efficient and less stressful.</p>



            </div>
            <div id='features' className='mt-8 '>
                <h2 className='mt-2 p-2 text-center text-2xl'>Features Included</h2>
                <div className='flex flex-wrap    justify-center' >
                    <div id='image-profile'className='flex flex-col items-center m-4' >
                        <img src={ProfileAvatar} alt='profile-avatar' width={200} height={200} />
                        <h3>Profile Management</h3>

                    </div>
                    <div id='image-GPS ml-6' className='flex flex-col items-center m-4'>
                        <Link to='/tracking'><img src={GPS} alt='real-time-tracking' width={200} height={200} /></Link>
                        <h3>Real Time Tracking</h3>

                    </div>
                    <div id='booking-icon' className='flex flex-col items-center m-4 mt-16'>
                        <img src={BookingIcon} alt='booking-icon' width={200} height={200} />
                        <h3 className='mt-10'>Booking</h3>

                    </div>
                    <div id='school-icon' className='flex flex-col items-center m-4 mt-16'>
                        <Link to='/schools'><img src={SchoolIcon} alt='school-icon' width={200} height={200} /></Link>
                        <h3 className='mt-2' >Schools</h3>

                    </div>
                </div>
                <div className='flex flex-wrap justify-center mt-6'>
                    <div id='payment' className='flex flex-col items-center m-4'>
                        <img src={PaymentView} alt='payment-view' width={200} height={200} />
                        <h3>Payment Methods</h3>

                    </div>
                    <div id='ticket-view' className='flex flex-col items-center m-4'>
                        <img src={TicketView} alt='ticket-view' width={150} height={100} />
                        <h3>Tickets</h3>

                    </div>
                    <div id='security-view' className='flex flex-col items-center m-4'>
                        <Link to='/security'><img src={Security} alt='security-view' width={200} height={200} /></Link>
                        <h3>Security</h3>

                    </div>
                    <div id='discount-ticket' className='flex flex-col items-center m-4'>
                        <img src={DiscountTicket} alt='discount-view' width={200} height={200} />
                        <h3>Discount</h3>

                    </div>

                </div>
               


            </div>
            <div className='mt-8'>
                <h2 className='mt-2 p-2 text-center text-2xl'>In Partnership with: </h2>
                <div className='flex flex-wrap    justify-center' >
                    <div className='flex flex-col items-center m-4'>
                        <img src={Mash} alt='Mash' width={200} height={200} />

                    </div>
                    <div className='flex flex-col items-center m-4'>
                        <img src={Scania} alt='scania' width={200} height={200}  />

                    </div>
                    <div className='flex flex-col items-center m-4'>
                        <img src={Dreamline} alt='dreamline' width={200} height={200}  />

                    </div>
                    <div className='flex flex-col items-center m-4'>
                        <img src={EasyCoach} alt='easycoach' width={200} height={200}  />

                    </div>


                </div>
                <div className='flex flex-wrap    justify-center' >
                    <div className='flex flex-col items-center m-4'>
                        <img src={Tahmeed} alt='Tahmeed' width={200} height={200} />

                    </div>
                    <div className='flex flex-col items-center m-4'>
                        <img src={Simba} alt='Simba' width={200} height={200}  />

                    </div>
                    <div className='flex flex-col items-center m-4'>
                        <img src={ModernCoast} alt='moderncoast' width={200} height={200}  />

                    </div>
                    <div className='flex flex-col items-center m-4'>
                        <img src={EldoretExpress} alt='EldoretExpress' width={200} height={200}  />

                    </div>


                </div>



            </div>
            <div className='mt-6'>
                <p>Copyright. All rights reserved</p>

            </div>
          
           
        </div>
    </div>
  )
}

export default Home