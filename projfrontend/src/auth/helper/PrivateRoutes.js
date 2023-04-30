import React from 'react'
import { Navigate } from 'react-router-dom'
import { isAuthenticated } from '.'
import Home from '../../core/Home'

export default function PrivateRoute() {
  return (
    (isAuthenticated()) ? <Home/> : <Navigate to="/"/>
  )
}