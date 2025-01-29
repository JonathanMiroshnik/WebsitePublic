import logo from './logo.svg';
import './App.css';

import React, { useState, useEffect } from 'react';

function App() {

  // const [data, setData] = useState([{}]);
  // useEffect(async () => {
  //   await fetch("/api/get-output").then(
  //     res => res.json()
  //   ).then(
  //     data => {
  //       setData(data)
  //       console.log(data)
  //     }
  //   )
  // }, []);

  const [data, setData] = useState([{}]);
  useEffect( () => {
    fetch("/api/test").then(
      res => res.json()
    ).then(
      data => {
        setData(data)
        console.log(data)
      }
    )
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>


        {(typeof data.friend === 'undefined') ? (
          <p>Loading...</p>
        ) : (
            <p >{data.friend}</p>
          
        )}

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
