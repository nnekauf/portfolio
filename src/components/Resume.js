import React from 'react';
import { Link } from 'react-router-dom'



const Resume = () => {

    return (
        <div className = "resume">
            <h1 id="title">Resume</h1> 
            <div className="resumeCard">
            <h2>Skills</h2>
            <h3>Programming Languages: </h3>Javascript, ES6, Ruby, HTML, CSS; 
            <h3>Frameworks:  </h3>Rails, React, Redux;
            <h3>Database Management Software: </h3>SQL, PostgreSQL, SQLite, Active Record, Sinatra, RESTful API; 
            <h3>Tools: </h3>Git, Heroku, Node, Adobe Creative Cloud, Zendesk

            </div>
            
            <div className="resumeCard">
                <h2>Experience</h2>
                    <h3>A1 Allied Health Training Institute</h3>
                    Camden, NJ
                    <br/>2020 - Present
                    <h4>Technical Support Specialist, Office Assistant</h4>
                    <ul>
                        <li>Trained faculty, staff, and students on existing and newly implemented software.</li>  
                        <li>Performed troubleshooting over the phone, email, video chat, and in person to identify and resolve issues.</li>
                        <li>Led implementation of new tuition payment software which led to an easier and more organized Point of Sale system.</li>
                        <li>Safely organized and maintained sensitive personal student information using Microsoft Office. </li>
                        <li>Provided a complete customer experience from helping new students register for courses to assisting them at graduation.</li>
                    </ul>
                    

                    <h3>Universal Living Faith Network</h3>
                    Brooklyn, NY
                    <br/>2019 - 2020
                    <h4>Production Assistant, Video Editor</h4>
                    <ul>
                                <li>Developed storyboards and scripts for two live programs that aired daily.</li>
                    <li>Created multiple 60 second segments that were aired on BET. </li>
                    <li>Effectively collaborated with an on site and remote team. </li>
                    <li>Upheld fast-paced production during two consecutive live shows.</li> 
                    </ul>


            </div>

            <div className="resumeCard">
                <h2>Education</h2>
                <h3>Flatiron School</h3>
                New York, NY
                <br/>01/2021 - 06/2021
                <br/>
                    Full Stack Web Development, Ruby on Rails and JavaScript program 	

                    <h3>Relevant Coursework:</h3>  
                    <b>Introduction to Multimedia: </b>Built interactive websites using HTML and CSS 
                    at <b>The City University of New York</b>.

            </div>

            <div className="resumeCard">
                <h2><Link className = "navLink"  to="/projects"> Click Here for Projects</Link></h2>
            </div>

        </div>

      
    )


};
 
  
  export default Resume