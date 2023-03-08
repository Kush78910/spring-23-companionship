import './App.css';
<<<<<<< HEAD
import OrgList from './Components/OrgList.js';
import NavBar from './Components/Navbar.js';
import ReactScrollableList from './index'



=======
import NavBar from './Components/Navbar'
import SearchBar from './Components/SearchBar'
import { useState } from 'react';
>>>>>>> cd42ba1e9812d4cf1783988226c9d6905e9a2031

function App() {
  const [page, setPage] = useState("Home");

  return page === "Home" ? (
    // searchBar is not done yet
    <div className="App">
<<<<<<< HEAD
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

=======
      <NavBar/>
      <SearchBar/>
    </div>
  ) : (
    <div>
      <p>
        Not implemented yet
      </p>
>>>>>>> cd42ba1e9812d4cf1783988226c9d6905e9a2031
    </div>
  );
}

<<<<<<< HEAD


export default App = () => {
  return (
    <NavBar />
  );
}
=======
export default App;
>>>>>>> cd42ba1e9812d4cf1783988226c9d6905e9a2031
