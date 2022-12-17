import React from 'react'
import rebootedlogo from "../assets/Rebooted Logo.png"
// import gdsclogo from "../assets/gdsc-black.png"
import { NavLink } from 'react-router-dom'
import "../styles/Navbar.css"
function Navbar() {
  return (
    <div className='navbar'>
       <div className='navbarLogo'>
          <a href="https://rebooted.web.app/"><img src={rebootedlogo} alt="rebootEd" id='rebooted' /></a>
          <a href="https://gdsc.community.dev/sree-chitra-thirunal-college-of-engineering-thiruvananthapuram/"><img src="" alt="GDSC SCTCE" id='gdsc-logo' /></a>
       </div>
        <div className='navbarLinks'>
          <NavLink style={({ isActive})=>{return isActive==true?{color:'black'}:{color:'white'}}}  to={'/'} >Home</NavLink>
          <NavLink style={({ isActive})=>{return isActive==true?{color:'black'}:{color:'white'}}}  to={'/resource'}>Resource</NavLink>
        </div>
    </div>
  )
}

export default Navbar