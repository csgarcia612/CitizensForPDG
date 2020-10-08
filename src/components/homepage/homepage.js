import React, { Component } from 'react';
import './homepage.scss';
import pdgGroup2 from '../../images/homepageHeaderImg.jpg';

export default class Homepage extends Component {
  constructor() {
    super();
    this.state = {
      viewportWidth: 0,
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
        viewportWidth: mobileWidth,
      });
    } else {
      this.setState({
        viewportWidth: 500,
      });
    }
  };

  // checkLeapYear = (year) => {
  //   if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // };

  render() {
    // eslint - disable - next - line;
    // let countdownClock = setInterval(() => {
    //   let endDateTime = new Date('aug 5, 2020 00:00:00').getTime();

    //   let currentDateTime = new Date().getTime();

    //   let remaining = endDateTime - currentDateTime;

    //   let daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    //   let days = Math.floor(remaining / (1000 * 60 * 60 * 24));
    //   let hours = Math.floor(
    //     (remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    //   );
    //   let minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
    //   let seconds = Math.floor((remaining % (1000 * 60)) / 1000);

    //   if (days < 10) {
    //     days = '0' + days;
    //   }

    //   if (hours < 10) {
    //     hours = '0' + hours;
    //   }

    //   if (minutes < 10) {
    //     minutes = '0' + minutes;
    //   }

    //   if (seconds < 10) {
    //     seconds = '0' + seconds;
    //   }

    //   // console.log(
    //   //   '***Remaining Time : ',
    //   //   `${days} Days - ${hours} Hours - ${minutes} Minutes - ${seconds} Seconds`
    //   // );

    //   if (window.location.pathname === '/') {
    //     document.getElementById('days').innerHTML = days;
    //     document.getElementById('hours').innerHTML = hours;
    //     document.getElementById('minutes').innerHTML = minutes;
    //     document.getElementById('seconds').innerHTML = seconds;
    //   }
    // }, 1000);

    return (
      <div className='homepageContainer'>
        <div className='homepageHeaderContainer'>
          {/* <div className='countdownMainContainer'>
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
          </div> */}
          <div className='specialMsgMainContainer'>
            <div className='specialMsgRow1'>
              <a
                className='ballotRequestLink'
                href='https://www.dupageco.org/election/votebymail/'
                target='_blank'
                rel='noopener noreferrer'
                title='Mail-In Ballot Request Form - dupageco.org/election/votebymail'
              >
                <div className='specialMsgContainer'>
                  {/* <p className='specialMsg'>
                  Sign Up Date Updated : Request Your Mail-In Ballot Now
                </p>
                <span className='specialMsgSpan' /> */}
                  <p className='specialMsg'>
                    Click Here To Request A Mail-In Ballot
                  </p>
                </div>
              </a>

              <a
                className='ballotTrackLink'
                href='https://dupage.ballottrax.net/voter/'
                target='_blank'
                rel='noopener noreferrer'
                title='Mail-In Ballot Tracking - dupage.ballottrax.net/voter'
              >
                <div className='specialMsgContainer'>
                  <p className='specialMsg'>
                    Click Here To Track Your Mail-In Ballot
                  </p>
                </div>
              </a>
            </div>
            <div className='specialMsgRow2'>
              <a
                className='yardSignLink'
                href='https://secure.actblue.com/donate/votedontjustvent'
                target='_blank'
                rel='noopener noreferrer'
                title='Special Fundraiser Yard Sign - secure.actblue.com/donate/votedontjustvent'
              >
                <div className='specialMsgContainer'>
                  <p className='specialMsg'>
                    Click Here For Yard Sign Fundraiser
                  </p>
                </div>
              </a>
            </div>
          </div>
          <img
            className='homepageHeaderImg'
            src={pdgGroup2}
            alt='group discussion'
          />
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
        <div className='mediaMainContainer'>
          <div className='campaignVideosMainContainer'>
            <div className='campaignVideosTitleContainer'>
              <p className='campaignVideosTitle'>Campaign Videos</p>
            </div>
            <div className='campaignVideoContainer'>
              <div className='videoTitleContainer'>
                <p className='videoTitle'>
                  2020 Democratic Candidates for DuPage County Board
                </p>
              </div>
              <iframe
                className='campaignVideo'
                title='Meet Paula'
                src='https://www.youtube-nocookie.com/embed/IOjlm_RHcVw'
                frameBorder='0'
                allow='accelerometer; encrypted-media; gyroscope;'
                allowFullScreen
              ></iframe>
            </div>
            {/* <div className='campaignVideoContainer'>
              <div className='videoTitleContainer'>
                <p className='videoTitle'>League of Women Voters Q & A</p>
              </div>
              <iframe
                className='campaignVideo'
                title='LWV Q and A'
                src='https://www.youtube-nocookie.com/embed/M9cCFgCeSW4'
                frameBorder='0'
                allow='accelerometer; encrypted-media; gyroscope;'
                allowFullScreen
              ></iframe>
            </div> */}
            <div className='campaignVideoContainer'>
              <div className='videoTitleContainer'>
                <p className='videoTitle'>Meet Paula Deacon Garcia</p>
              </div>
              <iframe
                className='campaignVideo'
                title='Meet Paula'
                src='https://www.youtube-nocookie.com/embed/texHQc2kxwo'
                frameBorder='0'
                allow='accelerometer; encrypted-media; gyroscope;'
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <span className='separator' />
          <div className='facebookFeedsMainContainer'>
            <div className='facebookFeedsTitleContainer'>
              <p className='facebookFeedsTitle'>Facebook Feed</p>
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
                data-height='1150'
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
          </div>
        </div>
      </div>
    );
  }
}
