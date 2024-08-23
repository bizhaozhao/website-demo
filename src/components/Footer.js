import React from 'react'
import "../styles/Footer.css"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import GitHubIcon from "@material-ui/icons/GitHub"
import EmailIcon from "@material-ui/icons/Email"

function Footer() {
  return (
    <div className="footer">
        <div className="socialMedia"> 
            <LinkedInIcon />
            <GitHubIcon />
            <EmailIcon />
        </div>
        <p> &copy; 2024 Sarah</p>
    </div>
  )
}

export default Footer