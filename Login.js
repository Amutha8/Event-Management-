import React , {useState,useEffect } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios'
import './Login.css'
const Login = () => {
    const navigate=useNavigate()
    const[username,setUserName]=useState('')
    const[password,setPassword]=useState('')
    const[userlist,setUserlist]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:3001/users')
        .then(res=>setUserlist(res.data))
        .catch(err=>console.log(err))
    },[])

    const handleLogin=()=>{
        const userExist=userlist.some(u=>u.username===username && u.password===password)
        if(userExist){
          
            navigate('/')
            alert("Login successfully")
        }
        else{
            alert("Invalid username or password")
        }
    }
  return (
   <div class="image">
        <div class="login-page">
          <center>
    <div class="form" onSubmit={handleLogin}>
    <form class="login-form">
   
      <input type="text"placeholder="username" value={username} onChange={(e)=>{setUserName(e.target.value)}}/>
      <br></br>
      <br></br>
      <input type="password" placeholder="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
      <br></br>
      <br></br>
      <button>login</button>

    </form>
    <Link to="/signup">Don't have an account?Signup</Link>
  </div>
  </center>
</div>
</div>
  )
}

export default Login;