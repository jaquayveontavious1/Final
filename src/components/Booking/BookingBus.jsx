import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const BookingBus = () => {
    const { route_number } = useParams()
    const [buses,setBuses] = useState([])
    const [loading,setLoading] = useState(true)
    const navigate = useNavigate()

    useEffect(()=> {
        const fetchBuses = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/booking/buses/?route=${route_number}`);
                setBuses(response.data.results)
                setLoading(false)
                console.log(response.data.results)
            } catch(error) {
                console.error('Error fetching data',error)
            }
        }
        fetchBuses()
    },[route_number])

    const BusBookSelection = (buses) => {
        setBuses(buses.bus_number)
        navigate(`/seats/${buses.bus_number}`)
        
    }
    if (loading) {
        return <div>Loading...</div>
    }
  return (
    <div>
        <h1>Buses for Route {route_number}</h1>
        <div className='grid grid-cols-5 gap-4 p-4'>
            {buses.map(bus => (
                <div key={bus.bus_number}>
                    <h3 className='text-lg font-semibold mb-2'>{bus.bus_number}</h3>
                    <p className='text-sm mb-1'>Bus Type: {bus.type}</p>
                    <p className='text-sm mb-1'>Bus Capacity: {bus.capacity}</p>
                    <p className='text-sm mb-1'>License Plate: {bus.license_plate}</p>
                    <button className='bg-cyan-950' onClick={() => BusBookSelection(bus)}>Book Bus</button>
                </div>
            ))}

        </div>
       
    </div>
  )
}

export default BookingBus
