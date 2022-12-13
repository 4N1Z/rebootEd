import React from 'react'
import rebootedlogo from "../assets/Rebooted Logo.png"
// import gdsclogo from "../assets/gdsc-black.png"
import "../styles/Navbar.css"
function Navbar() {
  return (
    <div className='navbar'>
        <a href="https://rebooted.web.app/"><img src={rebootedlogo} alt="rebootEd" id='rebooted' /></a>
        <a href="https://gdsc.community.dev/sree-chitra-thirunal-college-of-engineering-thiruvananthapuram/"><img src="" alt="GDSC SCTCE" id='gdsc-logo' /></a>
        <a href="#">Home</a>
    </div>
  )
}

export default Navbar