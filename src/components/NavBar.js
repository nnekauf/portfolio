import React from "react"
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className = "NavBar">
            
            <div><Link className = "navTitle"  to="/"> Nneka | Software Engineer</Link></div> 
            <div> 
                <Link className = "navLink"  to="/"> About Me |</Link>
                <Link className = "navLink"  to="/projects"> Projects |</Link>  
                <Link className = "navLink"  to="/resume"> Resume |</Link> 
                <Link className = "navLink"  to="/contact"> Contact |</Link>
                
            </div>
        </div>
    )
}

export default NavBar