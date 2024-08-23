import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import "../styles/Navbar.css"
import ReorderIcon from "@material-ui/icons/Reorder"
import logoImg from "../pictures/logo.png"

function Navbar() {
    const [expandNavbar, setExpandNavbar] = useState(false);
    const location = useLocation();

    useEffect(() => {setExpandNavbar(false)}, [location])

  return (
    <div className ="navbar" id ={expandNavbar ? "open" : "close"}>
        <div className="navbar-logo">
           <img className="logo" src={logoImg} alt="logo"/> 
        </div>
        <div className ="toggleButton"> 
            <button onClick={() => {setExpandNavbar((prev) => !prev)}}>
                <ReorderIcon />
            </button>
        </div>
        <div className="links">
            <Link to="/"> Home </Link>
            <Link to="/achievements"> Achievements </Link>
            <Link to="/learning"> Learning </Link>
        </div>
    </div>
  )
}

export default Navbar