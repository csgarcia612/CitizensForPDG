import React, { Component } from 'react';
import './voting.scss';

export default class Voting extends Component {
  render() {
    return (
      <div className='votingPageContainer'>
        <div className='districtInfoContainer'>
          <div className='districtTitleContainer'>
            <p className='districtTitle'>District Information</p>
          </div>
          <div>
            <p>***DESCRIPTION OF DISTRICT***</p>
          </div>
          <div className='districtCheckContainer'>
            <p>
              To find out if you live in District 02 you can check by
              <a
                href=''
                alt='Link To DuPage County District Address Check Website'
              >
                CLICKING HERE
              </a>
              <p>.</p>
            </p>
          </div>
          <div className='districtImgContainer'>
            <img src='' alt='Map of DuPage County, District Two' />
          </div>
        </div>
        <div className='votingInfoContainer'>
          <div className='votingTitleContainer'>
            <p className='votingTitle'>Voting Information</p>
          </div>
          <div className='votingLinkContainer'>
            <p>***INFO FOR GETTING HELP REGISTERING TO VOTE***</p>
            <p>***LINK TO VOTING REGISTRATION WEBSITE***</p>
          </div>
        </div>
      </div>
    );
  }
}
