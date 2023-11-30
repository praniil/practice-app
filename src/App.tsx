import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyComponent from './Components/MyComponent';
import Context from './Components/Context';
import { MyContext } from './Components/Context';

function App() {
  return (
    <>
      <Context>
        <MyComponent/>
      </Context>
    </>
  );
}

export default App;
