import React from 'react'
import {useState,useEffect} from 'react'
import Pagination from './Pagination'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const BookingRoutes = () => {
    
    const [routes,setRoutes] = useState([])
    const [currentPage,setCurrentPage] = useState(1)
    const [searchTerm,setSearchTerm] = useState('')
    const [totalPages,setTotalPages] = useState(1)
    const [loading,setLoading] = useState(true)
    const [selectedRoute,setSelectedRoute] = useState('')
    const navigate = useNavigate()


    const fetchRoutes = async (page) => {
        setLoading(true)
        try {
            const response = await axios.get(`http://127.0.0.1:8000/booking/routes/?page=${page}`);
            setRoutes(response.data.results)
            console.log(response.data.results)
            setTotalPages(Math.ceil(response.data.count/10))
        } catch(error) {
            console.error('Error fetching data', error)
        }
        setLoading(false)
    }
    useEffect(() => {
        fetchRoutes(currentPage)
    },[currentPage])

    const filteredRoutes = routes.filter(route => 
        route.starting_location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        route.final_destination.toLowerCase().includes(searchTerm.toLowerCase())
    )


    const handleRouteSelect = (routeNumber) => {
            setSelectedRoute(routeNumber)
            console.log('Selected route :',{routeNumber})
            
    }
    const handleButtonClick = () => {
        if (selectedRoute) {
            navigate(`/select-bus/${selectedRoute}`)
        } else {
            console.error('Error fetching selected error')
        }
    }
    const handlePageChange = (page) => {
        if (page > 0 && page <= totalPages) {
            setCurrentPage(page)
        }

    } 
  return (
    <div className='p-4'>
        <h3 className='text-2xl font-bold text-center mb-4 mt-2'><strong>Routes</strong></h3>
        <div className='grid grid-cols-5 gap-4 p-4'>
           
            {routes.map((route) => (
                <div onChange={handleRouteSelect} key={route.route_number}className={`border border-gray-300 rounded-lg p-4 bg-white text-center ${selectedRoute === route.route_number ? 'border-blue-500' : ''}`}>
                    
                        <img src={route.image} alt='Route Image' className='w-full h-auto rounded-md mb-2' />
                        <h3 className='text-lg font-semibold mb-2'>Route Number : {route.route_number}</h3>
                        <p className='text-sm mb-1'>Starting Location : {route.starting_location} </p>
                        <p className='text-sm mb-1'>Final Destination : {route.final_destination} </p>
                        <p className='text-sm mb-1'>Departure Date : {new Date(route.departure_date).toLocaleString()}</p>
                        <p className='text-sm mb-1'>Estimated Arrival : {new Date(route.estimated_arrival).toLocaleString()}</p>

                        <p className='text-sm mb-1'>Price : {route.cost} </p>
                        <p className='text-sm mb-1'>Distance Covered : {route.distance_covered} </p>
                   
                   
                        <button onClick={handleButtonClick} className='bg-cyan-950 rounded border w-24 text-white'>Book</button>
                   
                   

                </div>
            ))}
                
        </div>
   
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </div>
  )
}

export default BookingRoutes