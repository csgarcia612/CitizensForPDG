import React, { Component } from 'react';
import './voting.scss';
import countyDistrictMap from '../../images/countyDistrictMap.png';

export default class Voting extends Component {
  render() {
    return (
      <div className='votingPageContainer'>
        <div className='districtInfoContainer'>
          <div className='districtDescriptionContainer'>
            <p className='districtDescription'>
              DuPage County, District 2 includes some or all of:
              <br />
              Addison, Clarendon Hills, Downers Grove, Elmhurst, Hinsdale,
              <br />
              Lisle, Lombard, Naperville, Oak Brook, Oak Brook Terrace,
              <br />
              Villa Park, Westmont, Woodridge
            </p>
          </div>
          <div className='districtCheckContainer'>
            <p className='districtCheck'>
              To find out if you live in District 2 you can check by
              <a
                className='districtCheckLink'
                href='https://www.dupageco.org/VoterLookup/'
                target='_blank'
                rel='noopener noreferrer'
                title='DuPage County Voter Lookup - www.dupageco.org/VoterLookup'
              >
                CLICKING HERE
              </a>
            </p>
          </div>
          <div className='districtImgContainer'>
            <img
              className='districtImg'
              src={countyDistrictMap}
              alt='Map of DuPage County, District Two'
            />
          </div>
        </div>
        <span className='separator' />
        <div className='voterInfoContainer'>
          <p className='voterInfoBanner'>
            EVERY VOTE COUNTS
            <br />&<br />
            EVERY VOICE MATTERS
          </p>
          <p className='voterInfo'>
            <a
              className='voterInfoLink'
              href='https://ova.elections.il.gov/'
              target='_blank'
              rel='noopener noreferrer'
              title='Illinois Voter Registration - ova.elections.il.gov/'
            >
              CLICK HERE
            </a>
            to register to vote
          </p>
          <p className='electionInfo'>
            For additional DuPage County election information
            <a
              className='electionInfoLink'
              href='https://www.dupageco.org/election/'
              target='_blank'
              rel='noopener noreferrer'
              title='DuPage County Election Information - www.dupageco.org/election'
            >
              CLICK HERE
            </a>
          </p>
        </div>
      </div>
    );
  }
}
