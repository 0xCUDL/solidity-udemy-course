import logo from './logo.svg';
import './App.css';
import React from "react";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <p> Welcome to the Lottery </p>
        </header>
      </div>
    );
  }
}

export default App;
