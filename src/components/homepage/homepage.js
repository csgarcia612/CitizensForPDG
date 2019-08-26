import React, { Component } from 'react';
import './homepage.scss';
import placeholder from '../../images/placeholder.png';

export default class Homepage extends Component {
  render() {
    return (
      <div className='homepageContainer'>
        <div className='homepageHeaderContainer'>
          <img className='homepageHeaderImg' src={placeholder} alt='' />
        </div>
        <div className='reasonContainer'>
          <div className='reasonTitleContainer'>
            <p className='reasonTitle'>My Reasons To Run</p>
          </div>
          <div className='reasonParagraphContainer'>
            <p className='reasonParagraph'>
              Reason Why I Am Running
              <br />
              <br />
              That's why I want to help build a better DuPage.
            </p>
            <p className='hashtagLogo'>#BuildaBetterDuPage</p>
          </div>
        </div>
        <span className='separator' />
        <div className='campaignNewsContainer'>
          <div className='campaignNewsTitleContainer'>
            <p className='campaignNewsTitle'>Campaign News</p>
          </div>
          {/* <div className='newsEntryContainer'>
            <div className='entryImgContainer'>
              <img className='entryImg' src='' alt='' />
            </div>
            <div className='entryTitleContainer'>
              <p className='entryTitle'>Campaign News Entry Title</p>
            </div>
            <div className='entryDateContainer'>
              <p className='entryDate'>Entry Date</p>
            </div>
            <div className='entryParagraphContainer'>
              <p className='entryParagraph'>Entry Paragraph</p>
            </div>
          </div> */}
          <div className='newsEntryContainer'>
            <div className='entryImgContainer'>
              <img className='entryImg' src={placeholder} alt='' />
            </div>
            <div className='entryTitleContainer'>
              <p className='entryTitle'>
                Paula Deacon Garcia Running For County Board
              </p>
            </div>
            <div className='entryDateContainer'>
              <p className='entryDate'>Monday, August 26, 2019</p>
            </div>
            <div className='entryParagraphContainer'>
              <p className='entryParagraph'>
                After much deliberation and with the support of her family and
                friends, Lisle native, Paula Deacon Garcia has decided to run
                for the DuPage County Board. She will be running to fill one of
                the seats for District 2. Paula is excited to bring her passion
                for helping others and unique perspective to the county level.
                <br />
                <br />
                Paula's donation page on ActBlue will be active around Tuesday,
                September 3, 2019. Please feel free to check out her website and
                Facebook page.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
