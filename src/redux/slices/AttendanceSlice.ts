import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Attendance } from "../../types/Attendance";

interface AttendanceState {
    attendance : Attendance[]
}

const initialState : AttendanceState = {
    attendance : []
}

const attendanceSlice = createSlice({
    name:'Attendance',
    initialState,
    reducers:{
        addAttendance : (state, actioin : PayloadAction<Attendance>)=>{
             state.attendance.push(actioin.payload)
        },
        updateAttendanceStatus : (state,action: PayloadAction<Attendance>)=>{
            const index = state.attendance.findIndex((a)=>{return a.empId === action.payload.empId})
            if(index >= 0) state.attendance[index].status = action.payload.status
        }
    }
})