import React, { Component } from 'react';
import './header.scss';
import { NavLink } from 'react-router-dom';
import PDGLogo from '../../images/PDGLogo.svg';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      showMobileMenu: false,
      currentPathname: '/'
    };
  }

  checkPathname = () => {
    setTimeout(() => {
      // console.log('***Current Pathname: ', window.location.pathname);

      this.setState({
        currentPathname: window.location.pathname
      });
    }, 0);
  };

  toggleMobileMenu = () => {
    this.setState({
      showMobileMenu: !this.state.showMobileMenu
    });
  };

  render() {
    const { showMobileMenu, currentPathname } = this.state;
    return (
      <div className='headerContainer'>
        <div className='siteLogoContainer'>
          <img
            className='siteLogo'
            src={PDGLogo}
            alt='Paula Deacon Garcia For County Board District 2'
          />
        </div>
        <div className='menuContainer'>
          {/* <NavLink exact to='/' className='navLinks' activeClassName='active'>
            Home
          </NavLink> */}
          <a
            href='/'
            className={currentPathname === '/' ? 'active' : 'navLinks'}
            onClick={this.checkPathname}
          >
            Home
          </a>
          <NavLink
            to='/issues'
            className='navLinks'
            activeClassName='active'
            onClick={this.checkPathname}
          >
            Issues
          </NavLink>
          <NavLink
            to='/about'
            className='navLinks'
            activeClassName='active'
            onClick={this.checkPathname}
          >
            About
          </NavLink>
          <NavLink
            to='/votinginformation'
            className='navLinks'
            activeClassName='active'
            onClick={this.checkPathname}
          >
            District & Voting
          </NavLink>
          <NavLink
            to='/contact'
            className='navLinks'
            activeClassName='active'
            onClick={this.checkPathname}
          >
            Contact & Volunteer
          </NavLink>
          <a
            href='https://secure.actblue.com/donate/pdg4dupage'
            className='donateBtn'
            target='_blank'
            rel='noopener noreferrer'
            title='ActBlue - Donate To Citizens For Paula Deacon Garcia - https://secure.actblue.com/donate/pdg4dupage'
          >
            Donate
          </a>
        </div>
        <div className='mobileMenuContainer'>
          <div className='mobileMenuBtnContainer'>
            <button className='mobileMenuBtn' onClick={this.toggleMobileMenu}>
              {showMobileMenu ? 'Close' : 'Menu'}
            </button>
          </div>
          <div className={showMobileMenu ? 'showMobileMenu' : 'hideMobileMenu'}>
            <ul>
              <li>
                <a href='/'>Home</a>
              </li>
              <li>
                <a href='/issues'>Issues</a>
              </li>
              <li>
                <a href='/about'>About</a>
              </li>
              <li>
                <a href='/votinginformation'>District & Voting</a>
              </li>
              <li>
                <a href='/contact'>Contact & Volunteer</a>
              </li>
              <li>
                <a
                  href='https://secure.actblue.com/donate/pdg4dupage'
                  className='donateBtn'
                  target='_blank'
                  rel='noopener noreferrer'
                  title='ActBlue - Donate To Citizens For Paula Deacon Garcia - https://secure.actblue.com/donate/pdg4dupage'
                >
                  Donate
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
