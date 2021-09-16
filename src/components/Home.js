import React from 'react';

import { Link } from 'react-router-dom'


const Home = () => {

    return (
        <>
        <div className = "homePage">
            <text className="mainTitle"> Home</text> <br/>
            
          
           
                <>
                    <Link className = "homeButton"  to="/about"> about</Link> 
                        <br/><br/>
                    <br/><br/>
                
                    <Link className = "homeButton"  to="/projects">projects</Link> 
                    <br/> <br/>
                    <Link className = "homeButton"  to="/resume">resume</Link>
                </>
            

        </div>

        </>
    )


};
 

  
  
  export default Home