import React from 'react'
import EmployeeManagement from './components/EmployeeManagement/EmployeeManagement'
import DrawerUI from './ui/Drawer/DrawerUI'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AttendanceManagement from './components/AttendanceManagement/AttendanceManagement'
import LeaveManageMent from './components/LeaveManageMenet/LeaveManageMent'

const App = () => {
  return (
    <>
    {/* <DrawerUI>
    <EmployeeManagement/>
    </DrawerUI> */}
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<DrawerUI><EmployeeManagement/></DrawerUI>}/>
      <Route path='/attendancemanagement' element={<DrawerUI><AttendanceManagement/></DrawerUI>}/>
      <Route path='/leavemanagement' element={<DrawerUI><LeaveManageMent/></DrawerUI>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App