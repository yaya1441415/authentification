import {useState} from 'react'
import axios from 'axios'
import {toast} from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate()
  const [Data, setData]=useState({
    email: '',
    password:'',
  })

  const loginUser= async (e)=>{
    e.preventDefault()
    const {email, password} = Data
    try{
      const {data} = await axios.post('/login', {
        email,
        password
      });
      if(data.error){
        toast.error(data.error)
      }else{
        setData({email: '', password: ''});
        navigate('/dashboard')
      }
    }catch(error){
      console.error(error); // Log error for debugging
      toast.error('An error occurred. Please try again.');
    }
  }
  return (
    <div>
      <form onSubmit={loginUser}>
        <label>Email</label>
        <input type='email' placeholder='Enter Email..' 
          value={Data.email} onChange= {(e) =>setData({...Data, email:e.target.value})}/>
        <label>Password</label>
        <input type='password' placeholder='Enter Password' 
          value={Data.password} onChange={(e)=>setData({...Data, password:e.target.value})}/>
        <button type='submit'>Login</button>        
      </form>
    </div>
  )
}
