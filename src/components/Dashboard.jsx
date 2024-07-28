import React from 'react'
import Navbar from './Navbar';
import { useState } from 'react';
import Sidebar from './Sidebar';
import Home from './Home';
const Dashboard = () => {
    const [isSidebarOpen,setIsSidebarOpen] = useState(false)
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen)
    }
  return (
    <div >
      
       <Navbar />
       <div>
            <Sidebar  isOpen={isSidebarOpen} toggleSidebar={toggleSidebar}/>
            <Home isSidebarOpen={isSidebarOpen} />
       </div>
      


    </div>
  )
}

export default Dashboard;