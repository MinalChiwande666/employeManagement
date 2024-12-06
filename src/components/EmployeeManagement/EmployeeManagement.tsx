import React from 'react'
import EmployeeFormModal from '../EmployeeFormModal/EmployeeFormModal'
import EmployeeCard from '../EmployeeCard/EmployeeCard'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'

const EmployeeManagement:React.FC = () => {
  const [openForm,setOpenForm] = React.useState<Boolean | any>(false)
  const [updateempId,setupdateEmpId] = React.useState<String | any>(null)
  const emp_data = useSelector((state:RootState)=>state.employees.employees)
  return (
    <div  className='p-6'>
      <h2 className='font-semibold text-2xl'>Employee Management</h2>
      <button onClick={()=>{setOpenForm(true)
        setupdateEmpId(null)
      }} className="px-3 py-2 mt-3 bg-blue-600 text-white rounded-sm">Add Employee</button>
      {
        openForm && 
      <EmployeeFormModal open={openForm}  setopenModal={setOpenForm} updateId={updateempId}/>
      }
      <div className='mt-4 grid sm:grid-cols-4 gap-3 grid-cols-1'>
      {
        emp_data.map((employee)=>(

          <EmployeeCard key={employee.id} data={employee} setEmpId={setupdateEmpId} open={setOpenForm}/>
          
          
        ))
      }
      </div>
    </div>
  )
}

export default EmployeeManagement