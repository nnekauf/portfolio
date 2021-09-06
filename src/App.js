import './App.css';
// import face from "./images/portfolio_portait.png"
import NavBar from "./components/NavBar"
import construction from "./images/under_construction_giphy.webp"

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <NavBar/>{/* < img src={face}></img> */}
       < img src={construction}></img> 
      </header>
    </div>
  );
}

export default App;
