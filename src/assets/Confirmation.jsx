import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Confirmation = () => {
    const { bus_number, seat_number } = useParams();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [qrCode, setQrCode] = useState(null);
    const navigate = useNavigate()

    const handleConfirmedBooking =  () => {
        alert('Booking has been confirmed')
        navigate('/dashboard')
        {/*setLoading(true);
        setError(null);

        try {
            const response = await axios.post(
                `http://127.0.0.1:8000/booking/confirm-booking/`,
                {
                    bus_number,
                    seat_number,
                    user_id: 3, // Adjust based on actual user ID logic
                },
                {
                    responseType: 'arraybuffer',
                }
            );

            const qrCodeImage = btoa(
                new Uint8Array(response.data)
                    .reduce((data, byte) => data + String.fromCharCode(byte), '')
            );
            setQrCode(`data:image/png;base64,${qrCodeImage}`);
        } catch (error) {
            setError('Error fetching data');
            console.error('Error:', error);
        }
        setLoading(false);*/}
    };

    return (
        <div className='p-4'>
            <h3 className='text-center'>Booking Confirmation</h3>
            <p className='text-center'>Bus Number: {bus_number}</p>
            <p className='text-center'>Seat Number: {seat_number}</p>
            {loading && <p>Loading....</p>}
            {error && <p className='text-red-500'>{error}</p>}
            {qrCode ? (
                <div className='text-center'>
                    <img src={qrCode} alt='QR Code' className='mx-auto' />
                    <button onClick={() => window.print()} className='bg-cyan-500 rounded border w-24 text-white mt-4'>
                        Print Ticket
                    </button>
                </div>
            ) : (
                <button onClick={handleConfirmedBooking} className='bg-cyan-950 rounded border w-24 text-white mt-4 mx-auto block'>
                    Confirm Booking
                </button>
            )}
        </div>
    );
};

export default Confirmation;
