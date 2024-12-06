import React, { useState } from 'react'
import LeaveForm from './LeaveForm'
import LeaveCalender from './LeaveCalender'


const LeaveManageMent:React.FC = () => {
  const [Leave,setLeave] = useState<[]>([])
  const [open,setOpen] = useState(false)

  return (
    <div className='p-6'>
        <LeaveCalender Leave={Leave} setLeave={setLeave}/>
        <button onClick={()=>{
          setOpen(true)
        }} className='px-3 py-2 bg-gradient-to-tr from-blue-600 to-blue-400 text-white font-semibold'>
           Add Reason
        </button>
        <LeaveForm Leaves={Leave} open={open} setOpen={setOpen}/>
    </div>
  )
}

export default LeaveManageMent