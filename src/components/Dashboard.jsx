import React from 'react'
import Navbar from './Navbar';
import { useState } from 'react';

import Home from './Home';
const Dashboard = () => {
    
  return (
    <div >
      
       <Navbar />
       <div>
           
            <Home  />
       </div>
      


    </div>
  )
}

export default Dashboard;