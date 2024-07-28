import React, {useState,useEffect} from 'react'
import axios from 'axios'


const School = () => {
    const [schools,setSchools] = useState([])
    const [loading,setLoading] = useState(true)

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/booking/schools/')
        .then(response => {
            console.log(response.data)
            setSchools(response.data)
            setLoading(false)
        })
        .catch(error => {
            console.error('Error fetching the data', error);
            setLoading(false)
        });
    }, []);
    if (loading) {
        return <div>Loading...</div>
    }
    console.log('Schools State:', schools)
  return (
    <div className='p-4"'>
        <h2 className='text-2xl font-bold text-center mb-4 mt-2'><strong>Schools Participating</strong></h2>
        <div className="grid grid-cols-5 gap-4 p-4">
            {schools.map((school) => (
                <div key={school.address}  className="border border-gray-300 rounded-lg p-4 bg-white text-center">
                    <img src={school.school_image} alt={`${school.name} Image`} className="w-full h-auto rounded-md mb-2" />
                    <h3 className='text-lg font-semibold mb-2'>{school.name}</h3>
                    <p className='text-sm mb-1'>Location : {school.address}</p>
                    <p className='text-sm mb-1'>Contact Number : {school.contact_number}</p>
                    <p className='text-sm mb-1'>Email Address: {school.email}</p>
                    <p className='text-sm mb-1'>Principal Name: {school.principal_name}</p>
                    <p className='text-sm mb-1'>Students Count: {school.students_count} students</p>



                </div>
            ))}
        </div>
    </div>
  )
}

export default School