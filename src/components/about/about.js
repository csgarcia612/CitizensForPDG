import React, { Component } from 'react';
import './about.scss';
import headshot from '../../images/PDG_Headshot1.jpg';
import coupleImg from '../../images/Paula_Larry1.jpg';
import communityGarden1 from '../../images/Community_Garden1.jpg';
import communityGarden2 from '../../images/Community_Garden2.jpg';
import communityGarden3 from '../../images/Community_Garden3.jpg';
import pads1 from '../../images/PADS1.jpg';
import placeholder from '../../images/placeholder.png';

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
              <p className='bioParagraph'>
                Paula has lived in Lisle for the majority of her life and now
                even resides 4 houses away from her childhood home.
              </p>
              <p className='bioParagraph'>
                She has been happily married to her husband, Larry, for 36 years
                after first meeting while they were both attending college, and
                has proudly raised 2 children, Chris and Amanda, who are both
                grown and living full lives themselves. Her daughter Amanda has
                also started her own family with her husband Brandon, and has
                added 2 spectacular grandchildren to Paula’s life.
              </p>
              <p className='bioParagraph'>
                When not volunteering or working she is an avid gardener and
                lover of all animals.
              </p>
            </div>
          </div>
          <div className='bioSectionContainer'>
            <div className='bioParagraphContainer'>
              <p className='bioParagraph'>
                Paula attended Lisle schools for her early education and after
                graduating from Lisle Senior High School, she attended college
                at Illinois State University where she received her Bachelor’s
                Degree in Communication/Public Relations.
              </p>
              <p className='bioParagraph'>
                For the past 20 years, Paula has worked for the Village of Lisle
                in the Development Services Department (Building Department),
                now reorganized as the Customer Service Department. While at
                work, Paula’s primary responsibility is to be a facilitator for
                the residents who come in with questions regarding building
                permits, codes, and other general village questions. Paula also
                has experience as a Certified Floodplain Manager and used her
                knowledge and skills to assist residents affected by the floods
                that have occurred over the past decade.
              </p>
            </div>
            <div className='bioImgContainer'>
              <img
                className='bioImg'
                src={coupleImg}
                alt='Paula Deacon Garcia Headshot'
              />
            </div>
          </div>
          <div className='bioSectionContainer'>
            <div className='bioImgContainer'>
              <img
                className='bioImg'
                src={placeholder}
                alt='Paula Deacon Garcia Headshot'
              />
            </div>
            <div className='bioParagraphContainer'>
              <p className='bioParagraph'>
                Paula’s extensive experience in being a facilitator will be an
                asset to the DuPage County Board as she takes the time to listen
                to the needs and problems of the citizens of the county and
                works diligently to find effective ways to solve them.
              </p>
              <p className='bioParagraph'>
                Paula loves living in a neighborhood where people care about
                each other and do not hesitate to drop everything and help
                someone in need. She truly desires to continue to help people
                and to bring that level of caring to the county level.
              </p>
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
          <div className='philanthropySectionContainer'>
            <div className='philanthropyImgContainer'>
              <img className='philanthropyImg' src={placeholder} alt='' />
            </div>
            <div className='philanthropyParagraphContainer'>
              <p className='philanthropyParagraph'>
                HSO & Sunday School Paragraph
              </p>
            </div>
          </div>
          <div className='philanthropySectionContainer'>
            <div className='philanthropyParagraphContainer'>
              <p className='philanthropyParagraph'>
                Scouts & Roadway Petition Paragraph
              </p>
            </div>
            <div className='philanthropyImgContainer'>
              <img className='philanthropyImg' src={placeholder} alt='' />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
