import React from "react"
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className = "NavBar">
            
            <div>Nneka | Software Engineer</div> 
            <div> 
                <Link className = "navButton"  to="/about"> About Me |</Link>
                <Link className = "navButton"  to="/projects"> Projects |</Link>  
                <Link className = "navButton"  to="/resume"> Resume |</Link> 
                <Link className = "navButton"  to="/contact"> Contact |</Link>
                <Link className = "navButton"  to="/"> Home |</Link>
            </div>
        </div>
    )
}

export default NavBar