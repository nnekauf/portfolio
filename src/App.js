import './App.css';
// import face from "./images/portfolio_portait.png"
import NavBar from "./components/NavBar"
import construction from "./images/under_construction_giphy.webp"

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <NavBar/>{/* < img src={face}></img> */}
       <h1> Please Excuse our Appearance</h1>
       <div>This website is currently under construction</div>
       < img src={construction}></img> 
        <div>No worries, we are working quickly to deliver an amazing website to you. 
          Please check back soon.</div>
      </header>
    </div>
  );
}

export default App;
