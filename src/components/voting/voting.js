import React, { Component } from 'react';
import './voting.scss';
import countyDistrictMap from '../../images/countyDistrictMap-NEW.jpg';

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
                // href='https://www.dupageco.org/VoterLookup/'
                href='https://dupage.maps.arcgis.com/apps/instant/lookup/index.html?appid=679c2d2563994f308c34e0e7b1a29c69'
                target='_blank'
                rel='noopener noreferrer'
                title='DuPage County Voter Lookup'
              >
                CLICKING HERE
              </a>
            </p>
          </div>
          <div className='districtCheckContainer'>
            <p className='districtCheck'>
              <a
                className='districtCheckLink'
                href='https://dupage.maps.arcgis.com/apps/PublicGallery/map.html?appid=a022f4eb22854f76a0dbf2d129e229fa&webmap=ae2ceab26d8a4baa83853a9e73d9319a'
                target='_blank'
                rel='noopener noreferrer'
                title='DuPage County Interactive Map'
              >
                CLICK HERE
              </a>
              for an interactive map all DuPage County districts
            </p>
          </div>
          <div className='districtImgContainer'>
            <img
              className='districtImg'
              src={countyDistrictMap}
              alt='Detailed map of DuPage County, District 2'
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
