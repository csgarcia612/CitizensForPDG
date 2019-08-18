import React, { Component } from 'react';
import './header.scss';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      showMobileMenu: false
    };
  }

  toggleMobileMenu = () => {
    this.setState({
      showMobileMenu: !this.state.showMobileMenu
    });
  };

  render() {
    const { showMobileMenu } = this.state;
    return (
      <div className='headerContainer'>
        <div className='siteLogoContainer'>
          <img className='siteLogo' src='' alt='candidate logo' />
        </div>
        <div className='menuContainer'>
          <NavLink exact to='/' className='navLinks' activeClassName='active'>
            Home
          </NavLink>
          <NavLink to='/issues' className='navLinks' activeClassName='active'>
            Issues
          </NavLink>
          <NavLink
            to='/communityinvolvement'
            className='navLinks'
            activeClassName='active'
          >
            Community Involvement
          </NavLink>
          <NavLink to='/about' className='navLinks' activeClassName='active'>
            About
          </NavLink>
          <NavLink
            to='/votinginformation'
            className='navLinks'
            activeClassName='active'
          >
            District & Voting
          </NavLink>
          <NavLink to='/contact' className='navLinks' activeClassName='active'>
            Contact & Volunteer
          </NavLink>
          <NavLink to='' className='donateBtn'>
            Donate
          </NavLink>
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
                <a href='/communityinvolvement'>Community Involvement</a>
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
            </ul>
            <div className='mobileDonateBtnContainer'>
              <button className='mobileDonateBtn' onClick=''>
                Donate
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
