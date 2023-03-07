import logo from './logo.svg';
import './App.css';
import Home from './pages/Home.js';
import React, {useState} from 'react'

function App() {
  const [page, setPage] = useState("Home");

  return page === "Home" ? (
    <div>
      <Home/>
    </div>
  ) : (
    <div>
      <p>not done yet</p>
    </div>);
}

export default App;
