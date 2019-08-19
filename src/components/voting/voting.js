import React, { Component } from 'react';
import './voting.scss';
import countyDistrictMap from '../../images/countyDistrictMap.png';

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
                href='https://www.dupageco.org/VoterLookup/'
                alt='Link To DuPage County Voter Lookup Website'
              >
                CLICKING HERE
              </a>
            </p>
          </div>
          <div className='districtImgContainer'>
            <img
              src={countyDistrictMap}
              alt='Map of DuPage County, District Two'
            />
          </div>
        </div>
        <div className='votingInfoContainer'>
          <div className='votingTitleContainer'>
            <p className='votingTitle'>Voting Information</p>
          </div>
          <div className='votingLinkContainer'>
            <p>
              For additional DuPage County election information or to register
              to vote
              <a
                href='https://www.dupageco.org/election/'
                alt='DuPage County Election Information Website'
              >
                CLICK HERE
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
