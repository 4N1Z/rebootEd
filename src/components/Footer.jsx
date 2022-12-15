import React from 'react'
import "../styles/Footer.css"
function Footer(props) {
  return (
    <div className='Footer'
    style={
      {marginTop : props.margin}
    }
    >
        <div className="socialmedia" id='socialmedia'>
        <h4>Follow Us : </h4>
        <a href="https://www.linkedin.com/company/gdsc-sctce/"><i class="fa-brands fa-xl fa-linkedin"></i></a>
        <a href="https://github.com/gdsc-sctce"><i class="fa-brands fa-xl fa-github"></i></a>
        <a href="https://instagram.com/gdscsctce"><i class="fa-brands fa-xl fa-instagram"></i></a>
        <a href="https://discord.gg/HgKeTZK5yN"><i class="fa-brands fa-xl fa-discord"></i></a>
        </div>
        <h6 className='credits'>Made by <a href="https://www.linkedin.com/in/aswnss">@aswnss</a> </h6>
    </div>
  )
}

export default Footer