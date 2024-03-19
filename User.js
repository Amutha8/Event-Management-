import React,{useEffect,useState} from 'react'
import axios from'axios'
import './User.css'
export default function User() {
    const[post,setpost]=useState([])
    const[popup,setpopup]=useState(false)
    const[Name,setName]=useState('')
    const[phno,setphno]=useState('')
    const[add,setadd]=useState('')
    const[tick,settick]=useState(0);
    const Openpopup=(data)=>
    {
      setpopup(true);
      setName(data.name);
      setphno(data.phno);
      setadd(data.add);
      settick(data.tick);
    }
    useEffect(()=>
    {
        axios.get('http://localhost:3001/events')
        .then(res=>{setpost(res.data)})
        .catch(err=>{console.log(err)})
    })
    const handlebook=()=>
    {
      axios.put(`http://localhost:3001/book/${Name}`,
      {
        "Name":setName,"phno":setphno,"add":setadd,"tick":"settick"
      })
      .then(res=>{console.log(res)})
      .catch(err=>{console.log(err)})
          alert('Booked Successfully');
  
     }
     const handleticket=()=>
     {
         alert('Booked Successfully');
     }
   
  return (
    <div>
   <div className="upic" >
    <h1 className="user">User Page</h1><br></br>
      <div className="flex-container" onSubmit={handlebook}>
      {
        post.map(x=>(<div className="flex-items">
        <img src={x.image} width={150} height={150}/>
        <h1>Event:{x.name}</h1>
        <h1>ChiefGuest:{x.guest}</h1>
        <h1>Date:{x.date}</h1>
        <h1>Location:{x.Location}</h1>
        <button  onClick={()=>setpopup(true)}>Book now</button>
        </div>))
      }
      <br></br>
      {popup && <div className="popup"> <form  onSubmit={handleticket}>
        <br></br>
       
        <input className="binp" type='text' value={Name} placeholder="Enter Name"onChange={(e)=>setName(e.target.value)}/><br></br><br></br>
       
        <input className="binp" type='numberr' value={phno}  placeholder="Enter Phonenumber" onChange={(e)=>setphno(e.target.value)}/><br></br><br></br>
       
        <input className="binp" type='text' value={add} placeholder="Enter Address" onChange={(e)=>setadd(e.target.value)}/><br></br><br></br>
        
        <input  className="binp" type='number' value={tick} placeholder="Enter no of tickets" onChange={(e)=>settick(e.target.value)}/><br></br><br></br>
       
         <button className="abut" type="submit" onSubmit={()=>setpopup(false)}>submit</button>
      </form>
      <br></br>
      </div>
}
      </div>
      </div>
     
      

      </div>
    
    
    
  )
}


