import React from 'react'
import { Employee } from '../../types/Employee'
import { useDispatch, useSelector} from 'react-redux'
import { addEmployee, updateEmployee } from '../../redux/slices/EmployeeManagement'
import { RootState } from '../../redux/store'
// import { RootState } from '../../redux/store'


interface EmployeeFormModalProp{
    open : Boolean | any,
    setopenModal : React.Dispatch<React.SetStateAction<Boolean>>,
    updateId : string | any
}

const EmployeeFormModal:React.FC<EmployeeFormModalProp> = ({open,setopenModal,updateId}:EmployeeFormModalProp) => {
  const emp_data = useSelector((state:RootState)=>state.employees.employees)

   const dispatch:any = useDispatch() 
   const [employeeForm,setEmployeeForm] = React.useState<Employee>({ id:"",
        empid:"",
        emp_name : "",
        emp_salary : "",
        emp_email : "",
        emp_position : "",
        emp_department : "",
        emp_dob : "",
        emp_joiningDate : "",})
    

        const [employeeUpdateForm,setEmployeeUpdateForm] = React.useState<Employee>(updateId)


    const handleSubmit = (e:React.FormEvent)=>{
       e.preventDefault()
             if(updateId)
             {
              alert('update') 
              dispatch(updateEmployee(employeeUpdateForm))  
             }
             else
             {

                 const newemployees = {
                     ...employeeForm,
                  id:Math.floor(Math.random() * 10000).toString(),
                  empid : Math.floor(Math.random() * 10000).toString(),
                 }
    
                
                 dispatch(addEmployee(newemployees))
             }
     
           
        
       
        setopenModal(false)
    }
  return (
    
    <div className='fixed inset-0 z-20 flex items-center justify-center bg-black bg-opacity-20'>
        <form onSubmit={handleSubmit} className='bg-white shadow-lg gap-4 p-4 rounded-lg grid sm:grid-cols-3 grid-cols-1'>
           <input value={updateId ? employeeUpdateForm.emp_name :employeeForm.emp_name} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{
            if(updateId)
            {
                setEmployeeUpdateForm({
                ...employeeUpdateForm,
                emp_name :e.target.value
              })
            }else
            {
                setEmployeeForm({
                    ...employeeForm,
                    emp_name:e.target.value
                })
            }
           }} placeholder='Name' type="text" className="px-3 py-2 inset-1 border border-spacing-6" />

           <input value={updateId? employeeUpdateForm.emp_email:employeeForm.emp_email} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{

            if(updateId)
            {
                setEmployeeUpdateForm({
                    ...employeeUpdateForm,
                    emp_email :e.target.value
                })
            }
            else
            {
                setEmployeeForm({
                    ...employeeForm,
                    emp_email:e.target.value
                })
            }
           }} placeholder='Email' type="email" className="px-3 py-2 inset-1 border border-spacing-6" />


           <input value={updateId?employeeUpdateForm.emp_salary:employeeForm.emp_salary} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{
            if(updateId)
            {
                setEmployeeUpdateForm({
                    ...employeeUpdateForm,
                    emp_salary:e.target.value
                })
            }else
            {
                setEmployeeForm({
                    ...employeeForm,
                    emp_salary:e.target.value
                })
            }
           }} placeholder='Salary' type="text" className="px-3 py-2 inset-1 border border-spacing-6" />
           <input value={updateId?employeeUpdateForm.emp_position:employeeForm.emp_position} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{
            if(updateId)
            {
                setEmployeeUpdateForm({
                ...employeeUpdateForm,
                emp_department:e.target.value
              })
            }else
            {
                setEmployeeForm({
                    ...employeeForm,
                    emp_position:e.target.value
                })
            }
           }} placeholder='Position' type="text" className="px-3 py-2 inset-1 border border-spacing-6" />

           <input value={updateId?employeeUpdateForm.emp_department: employeeForm.emp_department} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{
            if(updateId)
            {
                setEmployeeUpdateForm({
                    ...employeeUpdateForm,
                    emp_department:e.target.value
                  })
            }else
            {
                setEmployeeForm({
                    ...employeeForm,
                    emp_department:e.target.value
                })
            }
           }} placeholder='Department' type="text" className="px-3 py-2 inset-1 border border-spacing-6"/>

           <input value={updateId? employeeUpdateForm.emp_dob:employeeForm.emp_dob} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{
            if(updateId)
            {
                setEmployeeUpdateForm({
                    ...employeeUpdateForm,
                    emp_dob:e.target.value
                })
            }
            else
            {
                setEmployeeForm({
                    ...employeeForm,
                    emp_dob:e.target.value
                })
            }
           }} placeholder='dob' type="date" className="px-3 py-2 inset-1 border border-spacing-6"/>
           <input value={updateId?employeeUpdateForm.emp_joiningDate:employeeForm.emp_joiningDate} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{
            if(updateId)
            {
                setEmployeeUpdateForm({
                ...employeeUpdateForm,
                emp_joiningDate:e.target.value
             })
            }else
            {
                setEmployeeForm({
                    ...employeeForm,
                    emp_joiningDate:e.target.value
                })
            }
           }} placeholder='joining Date' type="date" className="px-3 py-2 inset-1 border border-spacing-6"/>
           <button type='submit' className='px-3 py-2 bg-blue-600 text-white'>Submit</button>
        </form>
    </div>
  )
}

export default EmployeeFormModal