import React from 'react'
import rebootedlogo from "../assets/Rebooted Logo.png"
// import gdsclogo from "../assets/gdsc-black.png"
import { Link } from 'react-router-dom'
import "../styles/Navbar.css"
function Navbar() {
  return (
    <div className='navbar'>
       <div className='navbarLogo'>
          <a href="https://rebooted.web.app/"><img src={rebootedlogo} alt="rebootEd" id='rebooted' /></a>
          <a href="https://gdsc.community.dev/sree-chitra-thirunal-college-of-engineering-thiruvananthapuram/"><img src="" alt="GDSC SCTCE" id='gdsc-logo' /></a>
       </div>
        <div className='navbarLinks'>
          <Link to={'/'}><a href="#">Home</a></Link>
          <Link to={'/resource'}><a href="#">Resource</a></Link>
        </div>
    </div>
  )
}

export default Navbar