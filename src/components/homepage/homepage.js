import React, { Component } from 'react';
import './homepage.scss';
// import breakingNews from '../../images/breakingNews.jpg';
import pdgGroup2 from '../../images/homepageHeaderImg.jpg';
// import candidateSpotlight from '../../images/candidateSpotlight.png';
// import fundraiserFoodPantry from '../../images/Fundraiser-Food-Pantry.jpg';

export default class Homepage extends Component {
  constructor() {
    super();
    this.state = {
      viewportWidth: 0
    };
  }

  componentDidMount() {
    this.checkViewport();
  }

  checkViewport = () => {
    let currentWidth = window.innerWidth;

    // console.log('***Init Width: ', this.state.viewportWidth);

    // console.log('***Inner Width: ', currentWidth);

    if (currentWidth < 500) {
      let mobileWidth = currentWidth - 100;

      // console.log('***Mobile Width: ', mobileWidth);

      this.setState({
        viewportWidth: mobileWidth
      });
    } else {
      this.setState({
        viewportWidth: 500
      });
    }
  };

  render() {
    // eslint-disable-next-line
    let countdownClock = setInterval(() => {
      let endDateTime = new Date('mar 17, 2020 00:00:00').getTime();

      let currentDateTime = new Date().getTime();

      let remaining = endDateTime - currentDateTime;

      let days = Math.floor(remaining / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((remaining % (1000 * 60)) / 1000);

      if (days < 10) {
        days = '0' + days;
      }

      if (hours < 10) {
        hours = '0' + hours;
      }

      if (minutes < 10) {
        minutes = '0' + minutes;
      }

      if (seconds < 10) {
        seconds = '0' + seconds;
      }

      // console.log(
      //   '***Remaining Time : ',
      //   `${days} Days - ${hours} Hours - ${minutes} Minutes - ${seconds} Seconds`
      // );

      if (window.location.pathname === '/') {
        document.getElementById('days').innerHTML = days;
        document.getElementById('hours').innerHTML = hours;
        document.getElementById('minutes').innerHTML = minutes;
        document.getElementById('seconds').innerHTML = seconds;
      }
    }, 1000);

    return (
      <div className='homepageContainer'>
        <div className='homepageHeaderContainer'>
          <div className='countdownMainContainer'>
            <div className='voteCountdownContainer'>
              <div className='counterMainContainer'>
                <div className='counterContainer'>
                  <p className='counterNum' id='days'></p>
                </div>
                <div className='counterTitleContainer'>
                  <p className='counterTitle'>Days</p>
                </div>
              </div>
              <div className='counterMainContainer'>
                <div className='counterContainer'>
                  <p className='counterNum' id='hours'></p>
                </div>
                <div className='counterTitleContainer'>
                  <p className='counterTitle'>Hours</p>
                </div>
              </div>
              <div className='counterMainContainer'>
                <div className='counterContainer'>
                  <p className='counterNum' id='minutes'></p>
                </div>
                <div className='counterTitleContainer'>
                  <p className='counterTitle'>Minutes</p>
                </div>
              </div>
              <div className='counterMainContainer'>
                <div className='counterContainer'>
                  <p className='counterNum' id='seconds'></p>
                </div>
                <div className='counterTitleContainer'>
                  <p className='counterTitle'>Seconds</p>
                </div>
              </div>
            </div>
            <div className='voteMsgContainer'>
              <p className='voteMsg'>
                Until the Illinois General Primary Election : Tuesday, March 17,
                2020
              </p>
            </div>
          </div>
          <img className='homepageHeaderImg' src={pdgGroup2} alt='' />
        </div>
        <div className='reasonContainer'>
          <div className='reasonTitleContainer'>
            <p className='reasonTitle'>My Reasons To Run</p>
          </div>
          <div className='reasonParagraphContainer'>
            <p className='reasonParagraph'>
              I am running to be your voice. I hear your frustrations as you
              feel your concerns are not being addressed. I hear you when you
              are frustrated at the misuse of your tax money. I hear your
              worries about living paycheck to paycheck. I hear you say the
              county needs to prioritize fair elections, protection for all
              people's rights, and search for new jobs that will benefit the
              area. These are things worth fighting for and I have experience
              leading, mediating, and 20+ years of solving resident's problems.
              I hear you and want to be your voice on the DuPage County Board.
              <br />
              <br />
              I am running not as an individual voice, but as a spokesperson for
              the many diverse and unique voices that make up our great
              community.
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
            <p className='campaignNewsTitle'>Facebook Feed</p>
          </div>
          <div
            className='facebookFeedsContainer'
            style={{ width: this.state.viewportWidth + 'px' }}
          >
            <div
              className='fb-page'
              data-href='https://www.facebook.com/pdg4Dupage/'
              data-tabs='timeline, events'
              data-width='500'
              data-height='750'
              data-small-header='true'
              data-adapt-container-width='true'
              data-hide-cover='true'
              data-show-facepile='false'
            >
              <blockquote
                cite='https://www.facebook.com/pdg4Dupage/'
                className='fb-xfbml-parse-ignore'
              >
                <a href='https://www.facebook.com/pdg4Dupage/'>
                  Citizens for Paula Deacon Garcia
                </a>
              </blockquote>
            </div>
          </div>
          {/* <div className='newsEntryContainer'>
            <div className='entryImgContainer'>
              <img
                className='entrySpecialImg2'
                src={fundraiserFoodPantry}
                alt='food pantry fundraiser logo'
              />
            </div>
            <div className='entryTitleContainer'>
              <p className='entryTitle'>PDG4DuPage Fundraiser & Food Drive</p>
            </div>
            <div className='entryDateContainer'>
              <p className='entryDate'>Monday, October 28, 2019</p>
            </div>
            <div className='entryParagraphContainer'>
              <p className='entryParagraph2'>
                Come have a bite with Paula and take a bite out of hunger in
                DuPage - Fundraiser for Paula Deacon Garcia for DuPage County
                Board District 2.
                <br />
                <br />
                Paula is running for office to make a change, but near and dear
                to my heart is making changes in people's lives. Please come for
                appetizers, cash bar and bring an item to donate to the Lisle
                Township Food Pantry.
                <br />
                <br />
                ** Items to bring: Canned Soup, Macaroni and Cheese, Chili,
                Pasta with Meat, Canned Fruit, Peanut Butter, Jelly / Jam,
                Canned Tuna / Chicken / Sardines, Coffee, Ketchup, Mustard,
                Salad Dressings, Laundry Detergent.
                <br />
                <br />
                <a
                  className='newsEntryLink'
                  href='https://www.facebook.com/events/393125444945290/'
                  target='_blank'
                  rel='noopener noreferrer'
                  title='https://www.facebook.com/events/393125444945290/'
                >
                  Event Facebook Page
                </a>
                <br />
                <br />
                <a
                  className='newsEntryLink'
                  href='https://secure.actblue.com/donate/pdg4dupage-fundraiser'
                  target='_blank'
                  rel='noopener noreferrer'
                  title='https://secure.actblue.com/donate/pdg4dupage-fundraiser'
                >
                  ActBlue Ticket Page
                </a>
              </p>
            </div>
          </div>
          <span className='newsSeparator' />
          <div className='newsEntryContainer'>
            <div className='entryTitleContainer'>
              <p className='entryTitle'>
                Democratic Party of DuPage County Candidate Spotlight
              </p>
            </div>
            <div className='entryDateContainer'>
              <p className='entryDate'>Thursday, September 26, 2019</p>
            </div>
            <div className='entryParagraphContainer'>
              <p className='entryParagraph'>
                The Democratic Party of DuPage County just sent out an email
                newsletter that includes a Candidate Spotlight piece on Paula.
                The below image is the specific section from the newsletter.
              </p>
            </div>
            <div className='entryImgContainer'>
              <img
                className='entrySpecialImg'
                src={candidateSpotlight}
                alt='News Entry Special Insert'
              />
            </div>
          </div>
          <span className='newsSeparator' />
          <div className='newsEntryContainer'>
            <div className='entryImgContainer'>
              <img
                className='entryImg'
                src={breakingNews}
                alt='breaking news logo'
              />
            </div>
            <div className='entryTitleContainer'>
              <p className='entryTitle'>ActBlue Donation Page Now Active</p>
            </div>
            <div className='entryDateContainer'>
              <p className='entryDate'>Friday, September 06, 2019</p>
            </div>
            <div className='entryParagraphContainer'>
              <p className='entryParagraph'>
                The ActBlue donation page for Citizens For Paula Deacon Garcia
                is now active. Paula is extremely grateful for any donations
                made to the campaign, but no one should feel obligated to do so.
                All support is appreciated, whether it be donations,
                volunteering, or simply voting for Paula in the election.
              </p>
            </div>
          </div>
          <span className='newsSeparator' />
          <div className='newsEntryContainer'>
            <div className='entryImgContainer'>
              <img
                className='entryImg'
                src={breakingNews}
                alt='breaking news logo'
              />
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
          </div> */}
        </div>
      </div>
    );
  }
}
