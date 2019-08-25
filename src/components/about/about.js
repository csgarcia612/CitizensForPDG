import React, { Component } from 'react';
import './about.scss';
import headshot from '../../images/PDG_Headshot1.jpg';
import communityGarden1 from '../../images/Community_Garden1.jpg';
import communityGarden2 from '../../images/Community_Garden2.jpg';
import communityGarden3 from '../../images/Community_Garden3.jpg';
import pads1 from '../../images/PADS1.jpg';

export default class About extends Component {
  render() {
    return (
      <div className='aboutPageContainer'>
        <div className='bioContainer'>
          <div className='bioTitleContainer'>
            <p className='bioTitle'>Meet Paula</p>
          </div>
          <div className='bioSectionContainer'>
            <div className='bioImgContainer'>
              <img
                className='bioImg'
                src={headshot}
                alt='Paula Deacon Garcia Headshot'
              />
            </div>
            <div className='bioParagraphContainer'>
              <p className='bioParagraph'>Paragraph</p>
            </div>
          </div>
        </div>
        <span className='separator' />
        <div className='philanthropyContainer'>
          <div className='philanthropyTitleContainer'>
            <p className='philanthropyTitle'>Community Involvement</p>
          </div>
          <div className='philanthropySectionContainer'>
            <div className='philanthropyImgContainer'>
              <div className='imgRow1'>
                <img
                  className='philanthropyImg'
                  src={communityGarden1}
                  alt='Community Gardeners'
                />
                <img
                  className='philanthropyImg'
                  src={communityGarden2}
                  alt='Community Garden Harvest'
                />
              </div>
              <div className='imgRow2'>
                <img
                  className='philanthropyImg'
                  src={communityGarden3}
                  alt='Community Garden Award'
                />
              </div>
            </div>
            <div className='philanthropyParagraphContainer'>
              <p className='philanthropyParagraph'>
                Community Garden Paragraph
              </p>
            </div>
          </div>
          <div className='philanthropySectionContainer'>
            <div className='philanthropyParagraphContainer'>
              <p className='philanthropyParagraph'>PADS Paragraph</p>
            </div>
            <div className='philanthropyImgContainer'>
              <img className='philanthropyImg' src={pads1} alt='' />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
