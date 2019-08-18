import React, { Component } from 'react';
import './App.scss';
import Routes from './routes';
import Header from './components/header/header';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <header>
          <Header />
        </header>
        <div className='mainContentContainer'>{Routes}</div>
      </div>
    );
  }
}

export default App;
