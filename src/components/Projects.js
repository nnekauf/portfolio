import React from 'react';
import HoopTown from "../images/HoopTown-screen-recording.mov"
import Nest from "../images/Nest-screen-recording.mov"
import MyNba from "../images/MyNba-screen-recording.mov"


const Projects = () => {

    return (
        <div className = "projects">
            <h1 className="mainTitle"> Projects</h1> 
            <br/>
            <div style ={{display: "flex"}}>

                <video className="projectsVideo" alt="Video of HoopTown Demo"
                    width="480" height="480" 
                    onMouseOver={event => event.target.play()}
                    onMouseOut={event => event.target.pause()}
                    src={HoopTown}>
                </video>
                

                <div className = "projectText">
                    <h2>HoopTown - <a className="aboutLink" href = "https://youtu.be/ExWmPQxtv6Q">Demo</a></h2>
                    <h3>Street Tournament registration website that connects players and coaches nationwide.</h3>
                    <ul>
                        <li>Utilizes Ruby on Rails as a backend API.</li>
                        <li>Handles user registration and personal accounts.</li>
                        <li>Successfully uses Redux to handle state management.</li>
                        <li>Designed frontend using pure CSS.</li>
                    </ul> 
                </div>

            </div>
            
            <div style ={{display: "flex"}}>
                <video className="projectsVideo" alt="Video of Nest Demo"
                    width="480" height="480" 
                    onMouseOver={event => event.target.play()}
                    onMouseOut={event => event.target.pause()}
                    src={Nest}>
                </video>

                <div className = "projectText">
                    <h2>Nest - <a className="aboutLink" href = "https://www.youtube.com/watch?v=llJWNpN7jBQ">Demo</a></h2>
                    <h3>Book review website that fosters conversations between readers and authors.</h3>
                    <ul>
                        <li>Utilizes Ruby on Rails for backend and front end.</li> 
                        <li>Enables users to create a reader or author account.</li>
                        <li>Designed frontend using pure CSS.</li>
                    </ul> 
                </div>
            </div>

            
            <div style ={{display: "flex"}}>

                <video className="projectsVideo" alt="Video of My NBA Demo"
                    width="480" height="480" 
                    onMouseOver={event => event.target.play()}
                    onMouseOut={event => event.target.pause()}
                    src={MyNba}>
                </video>

                <div className = "projectText">
                    <h2>My NBA - <a className="aboutLink" href = "https://www.youtube.com/watch?v=mqIInjJv7CQ">Demo</a> </h2>
                    <h3>Basketball player rating application that allows users to vote on who they feel are the top players in the NBA.</h3>
                    <ul>
                        <li>Utilizes Ruby on Rails as a backend API.</li>
                        <li>Organized backend API using JSON. </li>
                        <li>Constructed with vanilla Javascript.</li>
                        <li>Designed frontend using pure CSS. </li>
                    </ul> 
                </div>


            </div>
            
            

        </div>

      
    )


};
 
  
  export default Projects