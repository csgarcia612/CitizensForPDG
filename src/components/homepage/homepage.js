import React, { Component } from 'react';
import './homepage.scss';

export default class Homepage extends Component {
  render() {
    return (
      <div className='homepageContainer'>
        <div className='homepageHeaderContainer'>
          <img className='homepageHeaderImg' src='' alt='' />
        </div>
        <div className='reasonContainer'>
          <div className='reasonTitleContainer'>
            <p className='reasonTitle'>Why I Run</p>
          </div>
          <div className='reasonParagraphContainer'>
            <p className='reasonParagraph'>Reason Why I Am Running</p>
          </div>
        </div>
        <span className='separator' />
        <div className='campaignNewsContainer'>
          <div className='campaignNewsTitleContainer'>
            <p className='campaignNewsTitle'>Campaign News</p>
          </div>
          <div className='newsEntryContainer'>
            <div className='entryTitleContainer'>
              <p className='entryTitle'>Campaign News Entry Title</p>
            </div>
            <div className='entryDateContainer'>
              <p className='entryDate'>Entry Date</p>
            </div>
            <div className='entryImgContainer'>
              <img className='entryImg' src='' alt='' />
            </div>
            <div className='entryParagraphContainer'>
              <p className='entryParagraph'>Entry Paragraph</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
