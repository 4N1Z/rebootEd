import React from 'react'
import rebootedlogo from "../assets/Rebooted Logo.png"
import gdsclogo from "../assets/gdsc-black.png"
import "../styles/Navbar.css"
function Navbar() {
  return (
    <div className='navbar'>
        <a href=""><img src={rebootedlogo} alt="rebootEd" /></a>
        <a href=""><img src={gdsclogo} alt="GDSC SCTCE" id='gdsc-logo' /></a>
        <a href="">Home</a>
    </div>
  )
}

export default Navbar