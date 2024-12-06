import {configureStore} from '@reduxjs/toolkit'
import employeeReducer from './slices/EmployeeManagement'
import leavesReducer from './slices/LeaveSlice'


export const store = configureStore({
    reducer:{
      employees : employeeReducer,
      leaves : leavesReducer
    },
    middleware: (getDefaultMiddleware)=> getDefaultMiddleware({
      serializableCheck:{
        ignoredPaths: ["leaves"],
        ignoredActions: ["leaves/addLeave"],
      }
    })
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch