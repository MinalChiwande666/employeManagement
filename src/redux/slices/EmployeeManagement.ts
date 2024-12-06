import { Employee } from "../../types/Employee";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface EmployeeState {
    employees: Employee[]
}

const initialState: EmployeeState = {
    employees : []
}

const employeeSlice = createSlice({
    name:'Employee',
    initialState,
    reducers:{
        addEmployee : (state, action : PayloadAction<any>)=>{
                state.employees.push(action.payload)
        },
        updateEmployee : (state, action: PayloadAction<Employee>)=>{
           const index = state.employees.findIndex((e)=>{return e.empid === action.payload.empid})
           if(index >= 0) state.employees[index] = action.payload
        },
        removeEmployee : (state,action : PayloadAction<Employee>)=>{
          state.employees =  state.employees.filter((e)=> {return e.empid !== action.payload.empid})
        }
    }
})

export const {addEmployee,updateEmployee,removeEmployee} = employeeSlice.actions;
export default employeeSlice.reducer;