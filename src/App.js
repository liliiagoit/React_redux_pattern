import React, { Component } from 'react';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Menu from './Components/Menu/Menu';
import Menu_Desktop from './Components/Menu-Desktop/Menu-Desktop';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header/>
      <Menu_Desktop/>
      <Main/>
    
      </div>
    );
  }
}

export default App;
