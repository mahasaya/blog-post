import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'

const Pagination = () => {
  const { page, handlePageChange,totalPages}= useContext(AppContext)
  console.log(totalPages)
  return (
    <div className='w-full flex justify-center items-center border-2 '>
    <div className='flex justify-between w-11/12 max-w-[670px] py-2'>
    <div className='flex gap-x-2 '>
    {
        page>1 &&
        (<button className=' rounded-md border px-4 py-1' onClick={()=>handlePageChange(page-1) }>
          previous
        </button>)
      }
      {
        page <totalPages &&  
        (<button className=' rounded-md border px-4 py-1' onClick={()=>handlePageChange(page+1) }>
          Next
        </button>)
      }

    </div>
      
    <p className='font-bold text-xs'>
        page {page} Total Page {totalPages}
      </p>
    </div>

    </div>
  )
}

export default Pagination