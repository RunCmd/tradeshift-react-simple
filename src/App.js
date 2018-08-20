import React, { Component } from 'react';
import './App.css';
import Triangle from './components/triangle';

class App extends Component {
  render() {
    return (
      <div className="App">
       
        <header data-ts="TopBar"></header>
        <main data-ts="Main">
          <div data-ts="MainContent">
            <h1>Triangle</h1>
            <Triangle />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
