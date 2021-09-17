import React from 'react';
import { Link } from 'react-router-dom'
import face from "../images/portfolio_portait.png"

const AboutMe = () => {

    return (
        <div className = "about">
            <div id= "face" >
                < img src={face} alt="Portrait of Nneka" 
                    style={{width: "70%", height: "auto", 
                    justifyContent: "left", position: "absolute",
                    objectFit: "cover", left: "-10%",                  
                    zIndex: "1"}}>
                </img>
                   
            </div>
            <div id="aboutName" style={{zIndex: "2", position: "relative", 
                textAlign: "center", fontFamily: "Bangers", letterSpacing: "2px", fontSize: "4em" }}> Nneka ("Neck-Uh")</div>
            <br/> <br/>
            <div id= "aboutText" 
                style={{zIndex: "2", left: "45%", position: "relative", 
                backgroundColor: "#eeeeee", maxWidth: "50%", maxHeight: "auto", textAlign: "center" }}>
                <h1 style={{fontFamily: "Bangers", letterSpacing: "2px"}}> My Journey</h1>
                <div><b>TL;DR: </b> I am Software Engineer with a background in Video Editing and Technical Support. </div>
                    <br/>
                <div>My fascinated with technology emerged through my love for Film and Video.
                    I recorded and edited footage for the extra-curricular activities I was a part of 
                    until I got my start professionally in the tech field as a Video Editor for an up-and-coming TV network.
                    <br/>
                </div>
                <h2 style={{fontFamily: "Bangers", letterSpacing: "2px"}}>A Software Engineer Was Born</h2>
                <div>
                    Amidst the 
                    <a href = "https://www.nytimes.com/2021/03/19/style/pandemic-nicknames.html">"Panoramic"</a>
                    due to <a href = "https://medium.com/the-interlude/so-were-in-a-panini-now-12ce989fae16">"Panini-19", </a>
                    I decided to use my free time to develop new skills, reaching new heights within my professional journey. 
                    <br/>
                    <b>This is when I discoved Software Engineering.</b>
                    <br/>
                    I graduated from a Software Engineering Bootcamp and began my career,
                    <br/>
                    <b>never looking back!</b>
                </div>

                <h2 style={{fontFamily: "Bangers", letterSpacing: "2px"}}>Moving Forward</h2>
                <div>
                    Along my <Link className = "homeButton"  to="/resume">Journey</Link>, 
                    I've created (and still maintain) personal <Link className = "homeButton"  to="/projects">projects </Link> 
                    that you can explore!
                    <br/>
                    Alrighty, my time here is up. However, you can always find me <Link className = "homeButton"  to="/contact">here</Link>!
                    <br/> <br/>
                    <br/> <br/>
                </div>
            </div>
                
        

        </div>

      
    )


};
 
  
  export default AboutMe