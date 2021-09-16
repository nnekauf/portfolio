import React from 'react';
import construction from "../images/under_construction_giphy.webp"
import { Link } from 'react-router-dom'


const Home = () => {

    return (
        <div className = "homePage">
            <text className="mainTitle"> Home Page</text> <br/>
                <>
                    <Link className = "homeButton"  to="/about"> about</Link> 
                    <br/> <br/>
                    <Link className = "homeButton"  to="/projects">projects</Link> 
                    <br/> <br/>
                    <Link className = "homeButton"  to="/resume">resume</Link>
                </>
            
                <h1> Please Excuse our Appearance</h1>
                    <div>This website is currently under construction</div>
                    <img src={construction} alt= "Under Construction GIF"></img> 
                    <div>No worries, we are working quickly to deliver an amazing website to you. 
                        Please check back soon.
                    </div>
        </div>

       
    )


};
 

  
  
  export default Home