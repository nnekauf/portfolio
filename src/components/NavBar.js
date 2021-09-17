import React from "react"
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className = "NavBar">
            
            <div><Link className = "navButton"  to="/"> Nneka | Software Engineer</Link></div> 
            <div> 
                <Link className = "navButton"  to="/about"> About Me |</Link>
                <Link className = "navButton"  to="/projects"> Projects |</Link>  
                <Link className = "navButton"  to="/resume"> Resume |</Link> 
                <Link className = "navButton"  to="/contact"> Contact |</Link>
                
            </div>
        </div>
    )
}

export default NavBar