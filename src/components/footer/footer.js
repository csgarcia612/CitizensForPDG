import React, { Component } from 'react';
import './footer.scss';
import facebookIcon from '../../images/facebook_icon.png';

class Footer extends Component {
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
    return (
      <div className='footerContainer'>
        <div className='authorizationContainer'>
          <p className='authorization'>
            Paid For and Authorized by Citizens For Paula Deacon Garcia
          </p>
        </div>
        <div className='socialMediaContainer'>
          <a
            className='socialMediaLink'
            href='https://www.facebook.com/pdg4dupage'
            target='_blank'
            rel='noopener noreferrer'
            title='https://www.facebook.com/pdg4dupage'
          >
            <img
              className='socialMediaIcon'
              src={facebookIcon}
              alt='Facebook Icon'
            />
          </a>
        </div>
        <div className='reportsContainer'>
          <p className='reports'>
            Copies of reports filed with the State Board of Elections is (or
            will be) available on the board's official website (
            <a
              className='reportsLink'
              href='https://www.elections.il.gov'
              target='_blank'
              rel='noopener noreferrer'
              title='Illinois State Board of Elections - https://www.elections.il.gov/'
            >
              https://www.elections.il.gov
            </a>
            ) or for purchase from the State Board of Elections, Springfield,
            Illinois
          </p>
        </div>
        <div className='developerContainer'>
          <p className='developerInfo'>
            SITE DESIGNED / DEVELOPED / DONATED BY
            <a
              className='developerLink'
              href='https://www.csgdesigns.dev'
              target='_blank'
              rel='noopener noreferrer'
              title='CSG Designs - https://www.csgdesigns.dev'
            >
              CHRISTOPHER GARCIA
            </a>
          </p>
        </div>
      </div>
    );
  }
}

export default Footer;
