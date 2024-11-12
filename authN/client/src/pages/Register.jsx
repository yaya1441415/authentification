import React from 'react'
import { Form } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import {toast} from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

export default function Register() {
  const navigate = useNavigate();

  const [Data, setData] = useState({
    name:'', 
    email:'',
    password:'',
  })

  const registerUser = async (e) =>{
    e.preventDefault()
    const {name, email, password} =Data
    try{
      const {data} = await axios.post('/register', {
        name, email, password
      })
      if(data.error){
        toast.error(data.error)
      }else{
        setData({email: '', password: ''})
        toast.success('Login Successful. welcome!')
        navigate('/login')
      }
    }catch(error){
      console.log(error)

    }
    
  }


  return (
    <form onSubmit={registerUser}>
      <label>Name</label>
      <input type='name' placeholder='Enter Name..'
       value={Data.name} onChange={(e)=>setData({...Data, name:e.target.value})} />
      <label>Email</label>
      <input type='email' placeholder='Enter Email..' 
        value={Data.email} onChange={(e)=>setData({...Data, email: e.target.value})}/>
      <label>Password</label>
      <input type='password' placeholder='Enter Password' 
        value={Data.password} onChange={(e)=>setData({...Data, password: e.target.value})}/>
      <button type='submit'>Submit</button>
    </form>
    
  )
}
