import React from 'react';
import construction from "../images/under_construction_giphy.webp"


const Projects = () => {

    return (
        <div className = "projects">
            <text className="mainTitle"> Projects Page</text> <br/>
            <h1 > Please Excuse our Appearance</h1>
                <div>This website is currently under construction</div>
                <img src={construction} alt= "Under Construction GIF"></img> 
                <div>No worries, we are working quickly to deliver an amazing website to you. 
                    Please check back soon.
                </div>

        </div>

      
    )


};
 
  
  export default Projects