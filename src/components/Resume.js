import React from 'react';
import { Link } from 'react-router-dom'



const Resume = () => {

    return (
        <div className = "resume">
            <div className="resumeCard">
            <h1>Skills</h1>
            <h2>Programming Languages: </h2>Javascript, ES6, Ruby, HTML, CSS; 
            <h2>Frameworks:  </h2>Rails, React, Redux;
            <h2>Database Management Software: </h2>SQL, PostgreSQL, SQLite, Active Record, Sinatra, RESTful API; 
            <h2>Tools: </h2>Git, Heroku, Node, Adobe Creative Cloud, Zendesk

            </div>
            
            <div className="resumeCard">
                <h1>Experience</h1>
                    <h2>A1 Allied Health Training Institute</h2>Camden, NJ
                    <h3>Technical Support Specialist, Office Assistant</h3>2020 - Present
                    <ul>
                        <li>Trained faculty, staff, and students on existing and newly implemented software.</li>  
                        <li>Performed troubleshooting over the phone, email, video chat, and in person to identify and resolve issues.</li>
                        <li>Led implementation of new tuition payment software which led to an easier and more organized Point of Sale system.</li>
                        <li>Safely organized and maintained sensitive personal student information using Microsoft Office. </li>
                        <li>Provided a complete customer experience from helping new students register for courses to assisting them at graduation.</li>
                    </ul>
                    

                    <h2>Universal Living Faith Network</h2>Brooklyn, NY
                    <h3>Production Assistant, Video Editor</h3>2019 - 2020
                    <ul>
                                <li>Developed storyboards and scripts for two live programs that aired daily.</li>
                    <li>Created multiple 60 second segments that were aired on BET. </li>
                    <li>Effectively collaborated with an on site and remote team. </li>
                    <li>Upheld fast-paced production during two consecutive live shows.</li> 
                    </ul>


            </div>

            <div className="resumeCard">

            </div>

            <div className="resumeCard">
                <Link className = "navLink"  to="/projects"> Projects</Link>
            </div>

        </div>

      
    )


};
 
  
  export default Resume