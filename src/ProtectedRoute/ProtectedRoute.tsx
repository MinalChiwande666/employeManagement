import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
const ProtectedRoute = () => {
    const {user} = useAuth()
  return user===null ? <Navigate to={"login"} replace/> : <Outlet/>
}

export default ProtectedRoute