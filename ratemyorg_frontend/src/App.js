import './App.css';
import OrgList from './Components/OrgList.js';
import NavBar from './Components/Navbar.js';
import ReactScrollableList from './index'




function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <div style = {{overflow:"scroll"}}>
            <div className= 'testComponent'>

            </div>
        </div>

      </header>

    </div>
  );
}



export default App = () => {
  return (
    <NavBar />
  );
}
