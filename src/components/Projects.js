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

            <div className = "projectText">
                HoopTown - <a className="aboutLink" href = "https://youtu.be/ExWmPQxtv6Q">Demo</a>
                <br/>Street Tournament registration website that connects players and coaches nationwide.
                <ul>
                <li>Utilizes Ruby on Rails as a backend API.</li>
                <li>Handles user registration and personal accounts.</li>
                <li>Successfully uses Redux to handle state management.</li>
                <li>Designed frontend using pure CSS.</li>
                </ul> 
            </div>

            <br/>
            <video className="projectsVideo" width="480" height="480" 
                onMouseOver={event => event.target.play()}
                onMouseOut={event => event.target.pause()}
                src={Nest}>
            </video>

            <div className = "projectText">
                Nest - <a className="aboutLink" href = "https://www.youtube.com/watch?v=llJWNpN7jBQ">Demo</a>
                <br/>Book review website that fosters conversations between readers and authors.
                <ul>
                <li>Utilizes Ruby on Rails for backend and front end.</li> 
                <li>Enables users to create a reader or author account.</li>
                <li>Designed frontend using pure CSS.</li>

                </ul> 
            </div>
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