import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
const Profile = () => {
  
  const [firstname,setFirstName] = useState('');
  const [lastname,setLastName] = useState('');
  const [contact_number,setContact_Number] = useState('');
  const [email,setEmail] = useState('');
  const [profile_pic,setProfile_Pic] = useState(null);
  const [payment,setPayment] = useState('')
  const [role,setRole] = useState('');
  const [school,setSchool] = useState('')
  const [message,setMessage] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('firstname',firstname);
    formData.append('lastname',lastname);
    formData.append('contact_number',contact_number);
    formData.append('email',email);
    if(profile_pic) formData.append('profile_pic',profile_pic);
    formData.append('payment',payment);
    formData.append('role',role);
    formData.append('school',school);
    try {
      const token = localStorage.getItem('token')
      const response = await axios.post('http://127.0.0.1:8000/profiles/create-profile/',formData,{
        
      headers : {
        'Authorization' : `Token ${token}`,
        'Content-Type' : 'multipart/form-data',
      }
      });
      setMessage('Profile created Successfully')
      navigate('/dashboard')
    } catch(error) {
      const errorData = error.response?.data || {detail : 'Profile creation failed'}
      setMessage(`Error : ${errorData.detail} || 'An error occurred'`)
    }
  }


  return (
      <>
        <form onSubmit={handleSubmit}>
          {message &&message}
          <div className='main w-4/12 ml-96 mt-32 bg-customClass'>
            <div className='container bg-white p-8 rounded shadow-md'>
              
              <h1>Profile Information</h1>
             
              <div className='mb-4'>
                <label htmlFor='firstname'>First Name :  </label>
                <input type='text' id='firstname' name='firstname' value={firstname} onChange={(e) => setFirstName(e.target.value)} placeholder='First Name'className='w-full px-3 py-2 border rounded' />
              </div>
              <div className='mb-4'>
                <label htmlFor='lastname'>Last Name :  </label>
                <input type='text' value={lastname} id='lastname' name='lastname' onChange={(e) => setLastName(e.target.value)} placeholder='Last Name'className='w-full px-3 py-2 border rounded' />
              </div>
              <div className='mb-4'>
                <label htmlFor='contact_number'>Contact Number :  </label>
                <input type='text' value={contact_number} id='contact_number' name='contact_number' onChange={(e) => setContact_Number(e.target.value)} placeholder='0712345678'className='w-full px-3 py-2 border rounded' />
              </div>
              <div className='mb-4'>
                <label htmlFor='email'>Email :  </label>
                <input type='email' value={email} id='email' name='email' onChange={(e) => setEmail(e.target.value)} placeholder='example@gmail.com'className='w-full px-3 py-2 border rounded' />
              </div>
              <div className='mb-4'>
                <label htmlFor='profile_pic'>Profile Picture :  </label>
                <input type='file'  id='profile_pic' name='profile_pic' onChange={(e) => setProfile_Pic(e.target.files[0])} className='w-full px-3 py-2 border rounded' />
              </div>
              <div>
             
                <label htmlFor='payment'>Payment :  </label>
                <input type='text' value={payment} id='payment' name='payment' onChange={(e) => setPayment(e.target.value)} className='w-full px-3 py-2 border rounded' />
              
                
              </div>
              <div>
             
                <label htmlFor='role'>Role :  </label>
                <input type='text' value={role} id='role' name='role' onChange={(e) => setRole(e.target.value)} className='w-full px-3 py-2 border rounded' />
              
                
              </div>
              <div>
             
                <label htmlFor='school'>School Name :  </label>
                <input type='text' value={school} id='school' name='school' onChange={(e) => setSchool(e.target.value)} className='w-full px-3 py-2 border rounded' />
              
                
              </div>
              <button type='submit' className='w-full bg-customColor text-black-300 py-2 rounded'>Create Profile</button>
            </div>

          </div>

        </form>
      </>
  )
}

export default Profile;