import React,{useEffect,useState} from 'react'
import axios from'axios'
import './Admin.css'
export default function Admin() {
    const[post,setpost]=useState([])
    const[id,setid]=useState(0)
    const[name,setname]=useState('')
    const[guest,setguest]=useState('')
    const[date,setdate]=useState('')
    const[location,setlocation]=useState('')
    const[image,setimage]=useState('')

    useEffect(()=>
    {
        axios.get('http://localhost:3001/events')
        .then(res=>{setpost(res.data)})
        .catch(err=>{console.log(err)})
    })
    const handlesubmit=()=>
    {
        axios.post('http://localhost:3001/events',
        {
            "id":id,"name":name,"guest":guest,"date":date,"Location":location,"image":image})
            .then(res=>{console.log(res)})
           .catch(err=>{console.log(err)})

    }
    const handledelete=()=>
    {
        axios.delete(`http://localhost:3001/events/${id}`)
        .then(res=>{console.log(res)})
        .catch(err=>{console.log(err)})
        
    }
   
  return (
    <div className="place1">
        <h1 className="ah1">Add Event</h1>
      
      <br></br>
      <form className="form1" onSubmit={handlesubmit}>
        <br></br>
        <input className="ainp" type='number' value={id} placeholder="Serial No"onChange={(e)=>setid(e.target.value)}/><br></br><br></br>
       
        <input className="ainp" type='text' value={name} placeholder="EventName"onChange={(e)=>setname(e.target.value)}/><br></br><br></br>
       
        <input className="ainp" type='text' value={guest}  placeholder="ChiefGuest" onChange={(e)=>setguest(e.target.value)}/><br></br><br></br>
       
        <input className="ainp" type='text' value={date} placeholder="Date" onChange={(e)=>setdate(e.target.value)}/><br></br><br></br>
        
        <input  className="ainp" type='text' value={location} placeholder="Location" onChange={(e)=>setlocation(e.target.value)}/><br></br><br></br>
       
        <input className="ainp" type='text' value={image} placeholder="Image" onChange={(e)=>setimage(e.target.value)}/><br></br><br></br>
        <button className="abut" type='submit'>submit</button>
      </form>
      <br></br>
      <br></br>
      <table>
        <thead>
            <tr>
                <th>EventName</th>
                <th>Chief Guest</th>
                <th>Date</th>
                <th>Location</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {post.map(x=>(
                <tr>
                    <td>{x.name}</td>
                    <td>{x.guest}</td>
                    <td>{x.date}</td>
                    <td>{x.Location}</td>
                   <td><button onClick={()=>handledelete(x.name)}>Delete</button></td>
                </tr>
                
            ))}
        </tbody>
      </table><br></br>
      
    </div>
  )
}




