import React from 'react';
import construction from "../images/under_construction_giphy.webp"
import { Link } from 'react-router-dom'
import face from "../images/portfolio_portait.png"

const AboutMe = () => {

    return (
        <div className = "about">
            <div id= "face" >
                < img src={face} alt="Portrait of Nneka" 
                    style={{width: "70%", height: "auto", 
                    justifyContent: "left", position: "absolute",
                    objectFit: "cover", objectPosition: "-150px",                    
                    zIndex: "1"}}>
                </img>
            </div>
                
            
            <div id= "aboutText" 
            style={{zIndex: "2", left: "50%", position: "relative"}}>
                <h1 > Please Excuse our Appearance</h1>
                <div>This website is currently under construction</div>
                <img src={construction} alt= "Under Construction GIF"></img> 
                <div>No worries, we are working quickly to deliver an amazing website to you. 
                    Please check back soon.
                </div>

                <>
                <Link className = "homeButton"  to="/projects">projects</Link> 
                <br/> <br/>
                <Link className = "homeButton"  to="/resume">resume</Link>
                <br/> <br/>
                <Link className = "homeButton"  to="/contact">Contact</Link>
                </>
            </div>
                
        

        </div>

      
    )


};
 
  
  export default AboutMe