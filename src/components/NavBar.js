import React from "react"
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className = "NavBar">
            
            <div style={{fontFamily: "Bangers", fontSize: "2em"}}>
                <Link className = "navLink" to="/"> Nneka | Software Engineer</Link>
            </div> 
            <div style={{fontFamily: "OpenSans", fontWeight: "lighter"}}> 
                <Link className = "navLink"  to="/"> About Me</Link>
                <Link className = "navLink"  to="/projects"> Projects</Link>  
                <Link className = "navLink"  to="/resume"> Resume</Link> 
                <Link className = "navLink"  to="/contact"> Contact</Link>
                
            </div>
        </div>
    )
}

export default NavBar