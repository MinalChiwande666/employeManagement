import React, { useState } from 'react'
import { Attendance } from '../../types/Attendance'

interface AttendanceManageProp{
    data : String[] | any
}

const AttendanceManage:React.FC<AttendanceManageProp> = ({data}:AttendanceManageProp) => {

    const [attendance,setattendance] = useState<Attendance[]>(data)

    const handleUpdateStatus=(eid:string,status: "Present" | "Absent" | "Late")=>{
        
        const changestatus = attendance.map((a:any)=>{
           return a.empId === eid ? {...a,status:status} : a
        })

        setattendance([...changestatus])
    }
    
  return (
    <div className='p-1'>
      <table className='w-full border-collapse border border-gray-500'>
        <thead>
            <tr className='border'>
                <td className='border text-center px-3 py-2 bg-neutral-300'>Sr No</td>
                <td className='border text-center px-3 py-2 bg-neutral-300'>Name</td>
                <td className='border text-center px-3 py-2 bg-neutral-300'>Date</td>
                <td className='border text-center px-3 py-2 bg-neutral-300'>Status</td>
                <td className='border text-center px-3 py-2 bg-neutral-300'>Time</td>
                <td className='border text-center px-3 py-2 bg-neutral-300'>Action</td>
            </tr>
        </thead>
        <tbody>
            {
                attendance.map((item:any,index:any)=>(

                    <tr className='border p-3' key={index}>
                        <td className='p-2 border text'>{index+1}</td>
                        <td className='p-2 border text'>{item?.emp_name}</td>
                        <td className='p-2 border text'>{item.date.toDateString()}</td>
                        <td className='p-2 border text'>{item.date.toLocaleTimeString()}</td>
                        <td className='p-2 border text'>{item.status}</td>
                        <td className='p-2 border text'>
                            <button onClick={()=>handleUpdateStatus(item.empId,"Present")} className='w-full text-white bg-green-400 p-2'>Present</button>
                            <button onClick={()=>handleUpdateStatus(item.empId,"Absent")} className='w-full text-white bg-red-400 p-2'>Absent</button>
                            <button onClick={()=>handleUpdateStatus(item.empId,"Late")} className='w-full text-white bg-yellow-400 p-2'>Late</button>
                        </td>
                    </tr>
                ))
            }
           
        </tbody>
      </table>
    </div>
  )
}

export default AttendanceManage