import React, { Component } from 'react';
import './App.scss';
import Routes from './routes';
import Header from './components/header/header';
import Footer from './components/footer/footer';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='mobileModalContainer'>
          <p className='mobileModalText'>Mobile Responsive Site Coming Soon</p>
        </div>
        <header>
          <Header />
        </header>
        <div className='mainContentContainer'>{Routes}</div>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
