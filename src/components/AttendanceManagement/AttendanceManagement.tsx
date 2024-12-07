import React, { useCallback } from 'react'
// import { useSelector } from 'react-redux'
// import { RootState } from '../../redux/store'
// import AttendanceCalender from './AttendanceCalender'
import AttendanceManage from './AttendanceManage'
import AttendanceCalender from './AttendanceCalender'
import ModalUi from '../../ui/Modal/ModalUi'
import { useAuth } from '../../context/AuthContext'

const AttendanceManagement:React.FC = () => {
  // const emp_data = useSelector((state:RootState)=>state.employees.employees)
  const [openModal,setopenModal] = React.useState<Boolean | any>(false)
  const [selectStatus,setselectStatus] = React.useState<String | any>('')
  const {user} = useAuth()
  const handleselectStatus = useCallback((status : "Present" | "Absent")=>{
       alert(status)
       setselectStatus(status)
  },[])

  console.log(selectStatus,'status')
  const attendance = [
    {
    id:Math.floor(Math.random() * 10000).toString(),
    empId : Math.floor(Math.random() * 10000).toString(),
    emp_name : "Minal Chiwande",
    date : new Date(),
    status: "Present"
    },
    {
      id:Math.floor(Math.random() * 10000).toString(),
      empId : Math.floor(Math.random() * 10000).toString(),
      emp_name : "Hiten Chiwande",
      date : new Date(),
      status: "Present"
      }
  ]
  return (
    <div className='p-6'>
        <h2 className="text-2xl font-semibold">Attendance Management</h2>
        {
          user.role === "HR"?<AttendanceManage data={attendance}/>:
          <><AttendanceCalender openModal={openModal} selectedStatus={selectStatus} setOpenModal={setopenModal} /><ModalUi open={openModal} setOpen={setopenModal}>
          <div className='p-3 '>
            <span>Please Select Your Attendance Select?</span>
            <div className='flex gap-4 mt-3'>
              <button onClick={() => handleselectStatus("Present")} className='bg-gradient-to-tr from-green-700 to-green-300 p-2 text-sm text-white rounded-md'>Present</button>
              <button onClick={() => handleselectStatus("Absent")} className='bg-gradient-to-tr from-red-700 to-red-300 p-2 text-sm text-white rounded-md'>Absent</button>
            </div>
          </div>
        </ModalUi></>
        }
         
   
    </div>
  )
}

export default AttendanceManagement