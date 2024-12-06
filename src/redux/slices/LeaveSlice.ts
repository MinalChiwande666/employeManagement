import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import LeaveForm from "../../components/LeaveManageMenet/LeaveForm";
import { Leave } from "../../types/Leave";


interface LeaveState {
    leaves : Leave[]
}

const initialState : LeaveState = {
    leaves: []
}

const leaveSlice = createSlice({
    name:'Leave',
    initialState,
    reducers:{
        addLeave : (state, action:PayloadAction<any>)=>{
            state.leaves.push(action.payload)
        },
    }
})

export const {addLeave} = leaveSlice.actions;
export default leaveSlice.reducer