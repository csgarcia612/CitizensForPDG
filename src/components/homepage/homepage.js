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

  render() {
    // eslint-disable-next-line
    let countDown = setInterval(() => {
      let isLeapYear = (Year) => {
        return (Year % 4 === 0 && Year % 100 !== 0) || Year % 400 === 0;
      };

      let daysInMonth = [29, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

      let targetDate = new Date('nov 8, 2022 00:00:00');

      let currentDate = new Date();

      let remaining = targetDate.getTime() - currentDate.getTime();

      let timeLeft = {
        seconds: Math.floor((remaining % (1000 * 60)) / 1000),
        minutes: Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60)),
        hours: Math.floor(
          (remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        days: Math.floor(remaining / (1000 * 60 * 60 * 24)),
        weeks: 0,
        months: 0,
        years: 0,
      };

      for (
        let thisYear = currentDate.getFullYear();
        timeLeft.days >= (isLeapYear(thisYear + 1) ? 366 : 365);
        thisYear++
      ) {
        timeLeft.days -= isLeapYear(thisYear + 1) ? 366 : 365;

        timeLeft.years++;
      }

      for (
        let thisYear = currentDate.getFullYear(),
          thisMonth = currentDate.getMonth() + 1;
        timeLeft.days >=
        (isLeapYear(thisYear) && thisMonth === 2
          ? daysInMonth[0]
          : daysInMonth[thisMonth]);
        thisMonth++, thisYear++
      ) {
        timeLeft.days -=
          isLeapYear(thisYear) && thisMonth === 2
            ? daysInMonth[0]
            : daysInMonth[thisMonth];

        timeLeft.months++;

        if (thisMonth === 12) {
          thisMonth = 0;
        }
      }

      // NEED TO FIGURE OUT CODE FOR CALCULATING WEEKS LEFT TO WORK WITH DAYS, MONTHS, AND YEARS

      // console.log(
      //   '***Remaining Time : ',
      //   `${timeLeft.months} Months - ${timeLeft.days} Days - ${timeLeft.hours} Hours - ${timeLeft.minutes} Minutes - ${timeLeft.seconds} Seconds`
      // );

      if (window.location.pathname === '/') {
        if (
          timeLeft.years === 0 &&
          timeLeft.months === 0 &&
          timeLeft.days === 0 &&
          timeLeft.hours === 0 &&
          timeLeft.minutes === 0 &&
          timeLeft.seconds === 0
        ) {
          document.getElementById('countdownBox').className = 'hideCountdown';
          document.getElementById('electionDayBox').className =
            'electionDayMsgContainer';
        } else if (
          timeLeft.years === 0 &&
          timeLeft.months === 0 &&
          timeLeft.days === 0 &&
          timeLeft.hours === 0 &&
          timeLeft.minutes === 0
        ) {
          document.getElementById('yearsBox').className = 'hideCountdown';
          document.getElementById('monthsBox').className = 'hideCountdown';
          document.getElementById('daysBox').className = 'hideCountdown';
          document.getElementById('hoursBox').className = 'hideCountdown';
          document.getElementById('minutesBox').className = 'hideCountdown';
          document.getElementById('seconds').innerHTML = timeLeft.seconds;
        } else if (
          timeLeft.years === 0 &&
          timeLeft.months === 0 &&
          timeLeft.days === 0 &&
          timeLeft.hours === 0
        ) {
          document.getElementById('yearsBox').className = 'hideCountdown';
          document.getElementById('monthsBox').className = 'hideCountdown';
          document.getElementById('daysBox').className = 'hideCountdown';
          document.getElementById('hoursBox').className = 'hideCountdown';
          document.getElementById('minutes').innerHTML = timeLeft.minutes;
          document.getElementById('seconds').innerHTML = timeLeft.seconds;
        } else if (
          timeLeft.years === 0 &&
          timeLeft.months === 0 &&
          timeLeft.days === 0
        ) {
          document.getElementById('yearsBox').className = 'hideCountdown';
          document.getElementById('monthsBox').className = 'hideCountdown';
          document.getElementById('daysBox').className = 'hideCountdown';
          document.getElementById('hours').innerHTML = timeLeft.hours;
          document.getElementById('minutes').innerHTML = timeLeft.minutes;
          document.getElementById('seconds').innerHTML = timeLeft.seconds;
        } else if (timeLeft.years === 0 && timeLeft.months === 0) {
          document.getElementById('yearsBox').className = 'hideCountdown';
          document.getElementById('monthsBox').className = 'hideCountdown';
          document.getElementById('days').innerHTML = timeLeft.days;
          document.getElementById('hours').innerHTML = timeLeft.hours;
          document.getElementById('minutes').innerHTML = timeLeft.minutes;
          document.getElementById('seconds').innerHTML = timeLeft.seconds;
        } else if (timeLeft.years === 0) {
          document.getElementById('yearsBox').className = 'hideCountdown';
          document.getElementById('months').innerHTML = timeLeft.months;
          document.getElementById('days').innerHTML = timeLeft.days;
          document.getElementById('hours').innerHTML = timeLeft.hours;
          document.getElementById('minutes').innerHTML = timeLeft.minutes;
          document.getElementById('seconds').innerHTML = timeLeft.seconds;
        } else {
          document.getElementById('years').innerHTML = timeLeft.years;
          document.getElementById('months').innerHTML = timeLeft.months;
          document.getElementById('days').innerHTML = timeLeft.days;
          document.getElementById('hours').innerHTML = timeLeft.hours;
          document.getElementById('minutes').innerHTML = timeLeft.minutes;
          document.getElementById('seconds').innerHTML = timeLeft.seconds;
        }
      }
    }, 1000);

    return (
      <div className='homepageContainer'>
        <div className='homepageHeaderContainer'>
          {/* <div class='base-timer'>
            <svg
              class='base-timer__svg'
              viewBox='0 0 100 100'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g class='base-timer__circle'>
                <circle
                  class='base-timer__path-elapsed'
                  cx='50'
                  cy='50'
                  r='45'
                />
              </g>
            </svg>
            <span><!-- Remaining time label --></span>
          </div> */}
          <div className='countdownMainContainer'>
            <div className='voteCountdownContainer' id='countdownBox'>
              <div className='counterMainContainer' id='yearsBox'>
                <div className='counterContainer'>
                  <p className='counterNum' id='years'></p>
                </div>
                <div className='counterTitleContainer'>
                  <p className='counterTitle'>Years</p>
                </div>
              </div>
              <div className='counterMainContainer' id='monthsBox'>
                <div className='counterContainer'>
                  <p className='counterNum' id='months'></p>
                </div>
                <div className='counterTitleContainer'>
                  <p className='counterTitle'>Months</p>
                </div>
              </div>
              <div className='counterMainContainer' id='daysBox'>
                <div className='counterContainer'>
                  <p className='counterNum' id='days'></p>
                </div>
                <div className='counterTitleContainer'>
                  <p className='counterTitle'>Days</p>
                </div>
              </div>
              <div className='counterMainContainer' id='hoursBox'>
                <div className='counterContainer'>
                  <p className='counterNum' id='hours'></p>
                </div>
                <div className='counterTitleContainer'>
                  <p className='counterTitle'>Hours</p>
                </div>
              </div>
              <div className='counterMainContainer' id='minutesBox'>
                <div className='counterContainer'>
                  <p className='counterNum' id='minutes'></p>
                </div>
                <div className='counterTitleContainer'>
                  <p className='counterTitle'>Minutes</p>
                </div>
              </div>
              <div className='counterMainContainer' id='secondsBox'>
                <div className='counterContainer'>
                  <p className='counterNum' id='seconds'></p>
                </div>
                <div className='counterTitleContainer'>
                  <p className='counterTitle'>Seconds</p>
                </div>
              </div>
            </div>
            <div className='voteMsgContainer' id='countdownBox'>
              <p className='voteMsg'>
                Until the Illinois General Election : Tuesday, November 8, 2022
              </p>
            </div>
            <div className='hideElectionDayMsg' id='electionDayBox'>
              <p className='electionDayMsg'>HAPPY ELECTION DAY</p>
            </div>
          </div>
          {/* <div className='specialMsgMainContainer'>
            <div className='specialMsgRow1'>
              <a
                className='ballotRequestLink'
                href='https://www.dupageco.org/election/votebymail/'
                target='_blank'
                rel='noopener noreferrer'
                title='Mail-In Ballot Request Form - dupageco.org/election/votebymail'
              >
                <div className='specialMsgContainer'>
                  <p className='specialMsg'>
                  Sign Up Date Updated : Request Your Mail-In Ballot Now
                </p>
                <span className='specialMsgSpan' />
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
          </div> */}
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
              I heard your worries about living paycheck to paycheck. I heard
              you say the county needs to prioritize fair elections, protections
              for all people’s rights and search for new jobs that will benefit
              the area. These are the things I have been fighting for; calling
              upon my experience leading, mediating and 21 years of solving
              residents problems during my career at the Village of Lisle. I
              hear you and want to continue to be your voice on the DuPage
              County Board. As a board member this last year I am very proud to
              have voted to have all new election equipment – we all win as
              residents.
              <br />
              <br />
              I am so appreciative of those that helped elect me in 2020 and
              yes, it is 2022 and it is election time again. I feel as if I have
              been learning and making strides to be your voice and I look
              forward to doing more to make DuPage County the best place to call
              home.
              <br />
              <br />
              That’s why I have been working to help build a better DuPage.
            </p>
            <p className='hashtagLogo'>#BuildaBetterDuPage</p>
          </div>
        </div>
        <span className='separator' />
        <div className='mediaMainContainer'>
          {/* <div className='campaignVideosMainContainer'>
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
            <div className='campaignVideoContainer'>
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
            </div>
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
          </div> */}
          {/* <span className='separator' /> */}
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
