import React from 'react'

const Pagination = ({currentPage,totalPages,onPageChange}) => {
    const handlePrevious = () => {
        onPageChange(currentPage - 1)
    };
    const handleNext = () => {
        onPageChange(currentPage + 1)
    }
  return (
    <div>
        <button className='mr-4 bg-cyan-950 rounded border w-24 text-white' onClick={handlePrevious} disabled={currentPage === 1}>Previous</button>
        <span>{`Page ${currentPage} of ${totalPages}`}</span>
        <button className='ml-4 bg-cyan-950 rounded border w-24 text-white' onClick={handleNext} disabled={currentPage === totalPages}>Next</button>
    </div>
  )
}

export default Pagination