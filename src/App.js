import './App.css';
// import face from "./images/portfolio_portait.png"
import NavBar from "./components/NavBar"
import AboutMe from "./components/AboutMe"
import Contact from "./components/Contact"
import Projects from "./components/Projects"
import Resume from "./components/Resume"
import Home from "./components/Home"
import construction from "./images/under_construction_giphy.webp"
import { Route, Switch, withRouter } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <NavBar/>{/* < img src={face}></img> */}
       <Switch>
           <Route exact path='/'component={Home}/>
           <Route exact path='/about' component={AboutMe}/>
           <Route exact path='/projects' component={Projects}/>
           <Route exact path='/resume' component={Resume}/>
           <Route exact path='/contact' component={Contact}/>
           
       </Switch>

       <h1> Please Excuse our Appearance</h1>
       <div>This website is currently under construction</div>
       < img src={construction} alt= "Under Construction GIF"></img> 
        <div>No worries, we are working quickly to deliver an amazing website to you. 
          Please check back soon.</div>
      </header>
    </div>
  );
}

export default App;
