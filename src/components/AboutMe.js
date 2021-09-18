import React from 'react';
import { Link } from 'react-router-dom'
import face from "../images/portfolio_portait.png"

const AboutMe = () => {

    return (
        <div className = "about">
            
            <div className= "faceOverlay"> </div>
            
            <div className= "face" >
                < img src={face} alt="Portrait of Nneka" 
                    style={{width: "70%", height: "auto", 
                    justifyContent: "left", position: "absolute",
                    objectFit: "cover", left: "-8%",                  
                    zIndex: "1"}}>
                </img>  
                               
            </div>

            {/* <div id="aboutName" style={{zIndex: "2", position: "relative", 
                textAlign: "center", fontFamily: "Bangers", letterSpacing: "2px", fontSize: "4em" }}>  */}
            <div className="aboutName">
                About Me</div>
            <br/> <br/> 

            
            <div className="aboutText">
                <h1 style={{fontFamily: "Bangers", letterSpacing: "2px", textAlign: "center" }}> 
                My Journey</h1>
                <div><b>TL;DR: </b> I am Software Engineer with a background in Video Editing and Technical Support. </div>
                    <br/>
                <div>My fascination with technology emerged through my love for Film and Video.
                    I got my start in the tech field as a Video Editor for an up-and-coming TV network.
                    <br/>
                </div>
{/* 
                <h2 style={{fontFamily: "Bangers", letterSpacing: "2px", textAlign: "center" }}>
                    A Software Engineer Was Born</h2> */}
                <div>
                    During 2020 when the entire world took a pause, 
                    I decided to use my free time to develop new skills, reaching new heights within my professional journey. 
        
                    <b> This is when I discovered Software Engineering.</b>
                    <br/>
                    I graduated from a Software Engineering Bootcamp and <b>began my career.</b>
                
                   
                </div>

                <h2 style={{fontFamily: "Bangers", letterSpacing: "2px", textAlign: "center" }}>Moving Forward</h2>
                <div>
                    Along my <Link className="aboutLink"  to="/resume">Journey</Link>, 
                    I've created (and still maintain) personal <Link className="aboutLink"  to="/projects">projects </Link> 
                    that you can explore!
                    
                    You can always find me <Link className="aboutLink"  to="/contact">here</Link>!
                    <br/> <br/>
                    <br/> <br/>
                </div>
            </div>
                
        

        </div>

      
    )


};
 
  
  export default AboutMe