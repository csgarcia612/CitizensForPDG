import React, { Component } from 'react';
import './homepage.scss';

export default class Homepage extends Component {
  render() {
    return (
      <div className='homepageContainer'>
        <div className='homepageImgContainer'>
          <img src='' alt='' />
        </div>
        <div className='newsContainer'>
          <div className='newsTitleContainer'>
            <p className='newsTitle'>Campaign News</p>
          </div>
          <div className='newsEntriesContainer'>
            <div className='singleEntryContainer'>
              <div className='entryDateContainer'>
                <p className='entryDate'>DATE</p>
              </div>
              <div className='entryImageContainer'>
                <img className='entryImage' src='' alt='' />
              </div>
              <div className='entryTextContainer'>
                <p className='entryText'>TEXT</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
