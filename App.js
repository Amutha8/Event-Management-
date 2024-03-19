
import './App.css';

import Navbar from './Component/Navbar';
import Admin from './Component/Admin';
import User from './Component/User';
import Login from './Component/Login';
import Signup from './Component/Signup';
import Home from './Component/Home';
import About from './Component/About';
import Contact from './Component/Contact';
import {Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
     
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/admin" element={<Admin/>}/>
    <Route path="/user" element={<User/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/signup" element={<Signup/>}/>
    </Routes>
   
    </div>
  );
}

export default App;
