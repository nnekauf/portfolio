import React from 'react';
import HoopTown from "../images/HoopTown-screen-recording.mov"
import Nest from "../images/Nest-screen-recording.mov"
import MyNba from "../images/MyNba-screen-recording.mov"


const Projects = () => {

    return (
        <div className = "projects">
            <h1 className="mainTitle"> Projects</h1> 
            <br/>
            
            <video className="projectsVideo" width="480" height="480" 
                onMouseOver={event => event.target.play()}
                onMouseOut={event => event.target.pause()}
                src={HoopTown}>
            </video>
            <br/>
            <video className="projectsVideo" width="480" height="480" 
                onMouseOver={event => event.target.play()}
                onMouseOut={event => event.target.pause()}
                src={Nest}>
            </video>
            <br/>
            <video className="projectsVideo" width="480" height="480" 
                onMouseOver={event => event.target.play()}
                onMouseOut={event => event.target.pause()}
                src={MyNba}>
            </video>
                

        </div>

      
    )


};
 
  
  export default Projects