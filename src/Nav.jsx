import React, { useState } from 'react';
import DropdownMenu from "./Components/Mens";
import WomenMenu from "./Components/Women";
import Hero from "./Components/hero";
import Sale from "./Components/sale";
import Kids from "./Components/Kids";
import NewU from "./Components/new";
import Login from "./Components/login";
import {Link ,useNavigate} from 'react-router-dom'; 
import SNKRS from "./Components/SNKRS";
import PrivateComponent from "./Components/PrivateComponent";
import './App.css';
const Navigation = () =>{
  const [showMenu, setShowMenu] = useState(false);
  const auth= localStorage.getItem('user');
  const navigate=useNavigate();
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const logout =()=>{
   localStorage.clear();
   navigate('/Sign')
  }

    return(
      
<nav className="container">
          <div className="Logo">
            <img src="/brand_logo.png" ></img>
          </div>
          <div className="menu-toggle" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
          {auth ?  <ul className={`nav-links ${showMenu ? 'show' : ''}`}>
         <div className="home-border"> 
         <li className="home"> <Link to="/Hero" >Home</Link></li></div>
            <li> <Link to ="/Mens"><DropdownMenu/></Link></li>
            <li><Link to="/Women"><WomenMenu></WomenMenu></Link></li>
            <li> <Link to="/Kids"><Kids/></Link></li>
            <li> <Link to="/Sale"><Sale></Sale></Link></li>
            <li> <Link to="/SNKRS"><SNKRS></SNKRS></Link></li>
            
            <li> <Link to="/ne"><NewU></NewU></Link></li>
            <li><Link onClick={logout} to= "/signup">Logout </Link></li>
            </ul>
            :
            <ul  className={`nav-links ${showMenu ? 'show' : ''}`} >
         
<div  className="s1">
<li   ><Link to="/Sign">Sign-Up</Link></li>

</div>
<div >

<li   ><Link to="/login">Login</Link></li>
</div>

</ul>

          }


            
          
  

</nav>   
            
    );
 };
 
 export default Navigation;