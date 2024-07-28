import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'

const Bookings = () => {
    const [routes,setRoutes] = useState([])
    const [buses,setBuses] = useState([])
    const [selectedRoute,setSelectedRoute] = useState(null)
    const [selectedBus,setSelectedBus] = useState(null)
    const [searchTerm,setSearchTerm] = useState('')
    const [contactNumber,setContactNumber] = useState('')
    const [bookingDate,setBookingDate] = useState('')
    const [schoolName,setSchoolName] = useState('')


    useEffect(() => {
        const fetchRoutes = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/booking/routes/')
                setRoutes(response.data.results)
                console.log(response.data.results)
            } catch(error) {
                console.error('Error fetching data :',error)
            }
        };
        fetchRoutes()
    },[])

    useEffect(() => {
        if (selectedRoute) {
            const fetchBuses = async () => {
                try {
                    const response = await axios.get(`http://127.0.0.1:8000/booking/buses/?route=${selectedRoute}`);
                    setBuses(response.data.results)
                    console.log(response.data.results)
                } catch(error) {
                    console.error('Error fetching buses:',error)
                }
            }
            fetchBuses()
        }
        
    },)
  return (
    <div>Bookings</div>
  )
}

export default Bookings