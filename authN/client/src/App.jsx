import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import Register from './pages/Register'
import axios from 'axios'
import {Toaster} from 'react-hot-toast'
import { UserContextProvider } from '../context/userContext'
import Dashboard from './pages/Dashboard'

axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.withCredentials = true

function App() {


  return (
    <UserContextProvider>
    <Navbar/>
    <Toaster position= 'bottom-right' toastOptions={{duration: 2000}}/>
    <Routes>
      <Route path ='/' element = {<Home />} />
      <Route path ='/register' element = {<Register />} />
      <Route path ='/login' element = {<Login />} />
      <Route path ='/dashboard' element = {<Dashboard />} />
    </Routes>
      
    </UserContextProvider>
  )
}

export default App
