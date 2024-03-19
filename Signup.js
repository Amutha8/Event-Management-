import React,{useState} from 'react'
import axios from 'axios'
import { Link} from 'react-router-dom'
import './Signup.css';
const Signup = () => {
    const[username,setusername]=useState('')
    const[email,setemail]=useState('')
    const[password,setpassword]=useState('')
    const handleSignup=()=>{
        axios.post('http://localhost:3001/users',
        {"username":username,"email":email,"password":password})
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
    }
    const handleclick=()=>{
      alert("create Successfully")
  }
  return (
    <div className="signpic">
        <br></br>
        <br></br>
        
          <div className="card_title">
            <h1>Create Account</h1>
          </div>
          <div className="forms" >
          <form onSubmit={handleSignup} action="/">
            <br></br>
<br></br>
            <input className="inps" type="text" placeholder="username"value={username} onChange={(e)=>{setusername(e.target.value)}}/><br></br><br></br><br></br>
            <input className="inps" type="email"  placeholder="email"value={email} onChange={(e)=>{setemail(e.target.value)}} /><br></br><br></br><br></br>
            <input className="inps" type="password" placeholder="password" value={password} onChange={(e)=>{setpassword(e.target.value)}} /><br></br><br></br><br></br>
            <button class="sbut" onClick={handleclick}>Sign Up</button><br></br><br></br>
            <center><Link className="links" to="/login">Already have an account?Log in</Link></center>
            </form>
          </div>
    
        
      
    </div>
  )
}

export default Signup;

