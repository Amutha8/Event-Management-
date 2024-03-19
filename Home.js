import React from 'react'
import './Home.css'
import {Link} from 'react-router-dom'
const Home = () => {
  return (
    <div>
     <div className="c1">
     <div className="c2">
      <div className="c3">
     <Link className="c4" to="/about">About us</Link>
     <Link className="c4" to="/contact">Contact us</Link>
   
                <div className="aa1">
               <a href="https://www.google.com/maps">Location:MSD Hall,Chennai</a></div>
            
              
            <div className="aa2"><a href="https://mail.google.com">Gmail:event@gmail.com</a></div>
    </div>
    <div className="c6"><p >"Event becomes feelings ,Feelings becomes Events :)"</p></div>
     <div className="c5"></div>
     
     </div>
    </div>
   
    </div>
  )
}

export default Home
