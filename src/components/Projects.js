import React from 'react';
import construction from "../images/under_construction_giphy.webp"
import HoopTown from "../images/HoopTown-screen-recording.mov"
import Nest from "../images/Nest-screen-recording.mov"
import MyNba from "../images/MyNba-screen-recording.mov"


const Projects = () => {

    return (
        <div className = "projects">
            <text className="mainTitle"> Projects Page</text> <br/>
            <h1 > Please Excuse our Appearance</h1>
            <video className="projectsVideo" width="480" height="480" 
                onMouseOver={event => event.target.play()}
                onMouseOut={event => event.target.pause()}
                src={HoopTown}>
            </video>
            <video className="projectsVideo" width="480" height="480" 
                onMouseOver={event => event.target.play()}
                onMouseOut={event => event.target.pause()}
                src={Nest}>
            </video>
            <video className="projectsVideo" width="480" height="480" 
                onMouseOver={event => event.target.play()}
                onMouseOut={event => event.target.pause()}
                src={MyNba}>
            </video>
                <div>This website is currently under construction</div>
                <img id="construction" src={construction} alt= "Under Construction GIF"></img> 
                <div>No worries, we are working quickly to deliver an amazing website to you. 
                    Please check back soon.
                </div>

        </div>

      
    )


};
 
  
  export default Projects