import React from 'react'
import { Employee } from '../../types/Employee'
import Avatar from '@mui/material/Avatar';
import { lightBlue } from '@mui/material/colors';
import { useDispatch } from 'react-redux';
import { removeEmployee } from '../../redux/slices/EmployeeManagement';
interface EmployeeCardProp {
  data: Employee,
  setEmpId : React.Dispatch<React.SetStateAction<String>>,
  open :  React.Dispatch<React.SetStateAction<Boolean>>
}

const EmployeeCard: React.FC<EmployeeCardProp> = ({ data, setEmpId,open }: EmployeeCardProp) => {

  const dispatch = useDispatch()
  const handleEditOpen = (empid : any)=>{
     open(true)
     setEmpId(empid)
  }

  const handleDelete = (empid:Employee)=>{
     
      dispatch(removeEmployee(empid))
  }
  return (
    <div>
      <div className="p-3 cursor-pointer gap-5 bg-gradient-to-r from-blue-600 to-blue-400 bg-blue-600 rounded-lg">
        <Avatar sx={{ bgcolor: lightBlue[500] }}>{data.emp_name.slice(0, 1)}</Avatar>
        <h2 className='text-white font-semibold'>Name : {data.emp_name}</h2>
        <h2 className='text-white font-semibold'>Department : {data.emp_department}</h2>
        <h2 className='text-white font-semibold'>Email : {data.emp_email}</h2>
        <h2 className='text-white font-semibold'>Position : {data.emp_position}</h2>
        <h2 className='text-white font-semibold'>Joining At : {data.emp_joiningDate}</h2>
        <h2 className='text-white font-semibold'>Date of birth : {data.emp_dob}</h2>
        <button onClick={()=>{
          handleEditOpen(data)
        }} className='bg-gradient-to-r from-green-600 to-green-400 px-3 py-2 rounded-md font-semibold text-white'>Update</button>
        <button onClick={()=>{
          handleDelete(data)
        }} className='bg-gradient-to-r mx-2 from-red-600 to-red-400 px-3 py-2 rounded-md font-semibold text-white'>Remove</button>
      </div>
      
    </div>
  )
}

export default EmployeeCard