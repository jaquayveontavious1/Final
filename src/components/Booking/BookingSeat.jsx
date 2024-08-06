import React from 'react'
import { useState, useEffect } from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import axios from 'axios'
const BookingSeat = () => {
    const { bus_number} = useParams()
    const [seats,setSeats] = useState([]);
    const [loading,setLoading] = useState(true)
    const [selectedSeat,setSelectedSeat] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        const fetchSeats = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/booking/seats/?bus_number=${bus_number}`);
                setSeats(response.data)
                console.log(response.data)
                setLoading(false)
            } catch (error) {
                console.error('Error fetching seats',error)
                setLoading(false)
            }
        }
        fetchSeats()
    },[bus_number])
    const handleSeatClick = (seat) => {
        setSelectedSeat(seat.seat_number)
        console.log('Seat selected')
    }
    const handleConfirmBooking = () => {
        if (!selectedSeat) {
            alert('Please select a seat')
            return;
        }
        navigate(`/confirm/${bus_number}/${selectedSeat}`)
    }
    if (loading) {
        return <div>Loading...</div>
    }
  return (
    <div className='p-4'>
        <h3 className='text-2xl font-bold text-center mb-4 mt-2'>Select Your Seat</h3>
        <div className='grid grid-cols-5 gap-4 p-4 cursor-pointed'>
            {seats.map((seat) => (
                <div key={seat.seat_number} onClick={() => seat.is_available && handleSeatClick(seat)} className={`border border-gray-300 cursor-pointed rounded-lg p-4 text-center ${seat.is_available ? 'bg-green-100' : 'bg-gray-300 cursor-not-allowed'} ${selectedSeat === seat.seat_number ? 'border-blue-500': ''}`}>
                    <p className='text-lg font-semibold mb-2'>Seat Number: {seat.seat_number}</p>
                    <p className='text-sm mb-1'>{seat.is_available ? 'true' : 'false'}</p>
                </div>
            ))}
        </div>
        <button className='bg-cyan-950' onClick={handleConfirmBooking}>Confirm Booking</button>
    </div>
  )
}

export default BookingSeat