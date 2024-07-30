import React from 'react'
import { useState, useEffect } from 'react'
import { MapContainer,TileLayer,Marker,Popup } from 'react-leaflet'
import L from 'leaflet'
import axios from 'axios'
const BusTracking = () => {
    const busIcon = new L.Icon({
        iconUrl: 'https://cdn-icons-png.flaticon.com/512/194/194634.png',
        iconSize: [25,41],
        popupAnchor: [1,-34],
        shadowSize: [41,41]
    })
    const [locations,setLocations] = useState([])
    const [viewport,setViewport] = useState({
        center : [-1.2921,36.8219],
        zoom: 12
    })


    useEffect(() => {
        const fetchLocations = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/tracking/location/');
                setLocations(response.data)
                console.log(response.data)

            } catch(error) {
                console.error('Error fetching data', error)
            }
        }
        fetchLocations()
        const interval = setInterval(fetchLocations,5000)
        return () => clearInterval(interval)
    },[])
  return (
    <>
    <MapContainer 
        center={viewport.center}
        zoom={viewport.zoom}
        style={{ height: "100vh", width:"100%"}}
        
        >
        <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' />
        {locations.map((location,index) => (
            <Marker key={index} position={[location.latitude,location.longitude]} icon={busIcon}
               
            >
                <Popup>
                    <h3>Bus : {location.bus.bus_number}</h3>
                </Popup>
            </Marker>
        ))

        }
        </MapContainer>
        
    </>
  )
}

export default BusTracking