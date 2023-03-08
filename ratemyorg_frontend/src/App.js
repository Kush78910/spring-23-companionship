import './App.css';
import NavBar from './Components/Navbar'
import SearchBar from './Components/SearchBar'
import { useState } from 'react';

function App() {
  const [page, setPage] = useState("Home");

  return page === "Home" ? (
    // searchBar is not done yet
    <div className="App">
      <NavBar/>
      <SearchBar/>
    </div>
  ) : (
    <div>
      <p>
        Not implemented yet
      </p>
    </div>
  );
}

export default App;
