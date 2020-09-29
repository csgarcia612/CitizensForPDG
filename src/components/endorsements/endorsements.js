import React, { Component } from 'react';
import './endorsements.scss';
// import CynthiaEndorsement from '../../images/Cynthia_Endorsement.jpg';
import BorbasEndorsement from '../../images/Borbas_Banner2.jpg';
import LaborCouncilEndorsement from '../../images/Labor_Council_Endorsement.jpg';
import LTDOEndorsement from '../../images/LTDO_Endorsement.jpg';
import DurbinEndorsement from '../../images/Durbin_Banner.png';
import DGTDEndorsement from '../../images/DGTD_Banner.jpg';
import HowardEndorsement from '../../images/Howard_Banner.jpg';
import CastenEndorsement from '../../images/Casten_Banner.jpg';
import StavaMurrayEndorsement from '../../images/Stava_Murray_Banner.jpg';
import YTDOEndorsement from '../../images/YTDO_Banner.png';
import ConroyEndorsement from '../../images/Conroy_Banner.jpg';
import FosterEndorsement from '../../images/Foster_Banner2.jpg';
import IADOEndorsement from '../../images/IADO_Banner.jpg';
import DuckworthEndorsement from '../../images/Duckworth_Banner.jpg';

export default class Endorsements extends Component {
  render() {
    return (
      <div className='endorsementsPageContainer'>
        <div className='endorsementsTitleContainer'>
          <p className='endorsementsTitle'>Honored To Be Endorsed By</p>
        </div>
        <div className='endorsementsMainContainer'>
          <div className='endorserContainerTall1'>
            <div className='endorserInfoMainContainer'>
              <div className='endorserTitleContainer'>
                <p className='endorserTitle'>US Senator</p>
                <p className='endorserTitle'>Tammy Duckworth</p>
              </div>
              {/* <div className='endorserQuoteContainer'>
                <p className='endorserQuote'>
                  "I am thrilled to endorse Paula Deacon Garcia for DuPage
                  County Board. Given her top notch qualifications, I know she
                  will be an effective and responsive board member. Her
                  expertise, data-based decision making and character will allow
                  her to add value on day one. I look forward to partnering with
                  Paula for the good of the county, our state and our country."
                </p>
              </div> */}
            </div>
            <div className='endorserImgContainer'>
              <a
                className='endorserSiteLink'
                href='https://www.duckworth.senate.gov/'
                target='_blank'
                rel='noopener noreferrer'
                title='Tammy Duckworth - duckworth.senate.gov'
              >
                <img
                  className='endorserImg'
                  src={DuckworthEndorsement}
                  alt='Tammy Duckworth Logo'
                />
              </a>
            </div>
          </div>
          <div className='endorserContainerShort2'>
            <div className='endorserImgContainer'>
              <a
                className='endorserSiteLink'
                href='https://www.iado.org/'
                target='_blank'
                rel='noopener noreferrer'
                title='Indo-American Democratic Organization - iado.org'
              >
                <img
                  className='endorserImg'
                  src={IADOEndorsement}
                  alt='IADO Logo'
                />
              </a>
            </div>
            <div className='endorserInfoMainContainer'>
              <div className='endorserTitleContainer'>
                <p className='endorserTitle'>Indo-American</p>
                <p className='endorserTitle'>Democratic Organization</p>
              </div>
              <div className='endorserQuoteContainer'>
                <p className='endorserQuote'>
                  "For your service to your community and your commitment and
                  track record of advocating a progressive agenda for immigrant
                  and working families, we’re confident that your candidacy is
                  aligned with the values and interests of Illinois’ 290,000+
                  South Asian Americans and voters in your constituency."
                </p>
              </div>
            </div>
          </div>
          <div className='endorserContainerTall1'>
            <div className='endorserInfoMainContainer'>
              <div className='endorserTitleContainer'>
                <p className='endorserTitle'>US Representative</p>
                <p className='endorserTitle'>Bill Foster</p>
              </div>
              <div className='endorserQuoteContainer'>
                <p className='endorserQuote'>
                  "I am thrilled to endorse Paula Deacon Garcia for DuPage
                  County Board. Given her top notch qualifications, I know she
                  will be an effective and responsive board member. Her
                  expertise, data-based decision making and character will allow
                  her to add value on day one. I look forward to partnering with
                  Paula for the good of the county, our state and our country."
                </p>
              </div>
            </div>
            <div className='endorserImgContainer'>
              <a
                className='endorserSiteLink'
                href='https://billfoster.com/'
                target='_blank'
                rel='noopener noreferrer'
                title='Bill Foster - billfoster.com'
              >
                <img
                  className='endorserImg'
                  src={FosterEndorsement}
                  alt='Bill Foster Logo'
                />
              </a>
            </div>
          </div>
          <div className='endorserContainerTall2'>
            <div className='endorserImgContainer'>
              <a
                className='endorserSiteLink'
                href='https://www.debconroy.com/'
                target='_blank'
                rel='noopener noreferrer'
                title='Deb Conroy - debconroy.com'
              >
                <img
                  className='endorserImg'
                  src={ConroyEndorsement}
                  alt='Deb Conroy Logo'
                />
              </a>
            </div>
            <div className='endorserInfoMainContainer'>
              <div className='endorserTitleContainer'>
                <p className='endorserTitle'>IL Representative</p>
                <p className='endorserTitle'>Deb Conroy</p>
              </div>
              <div className='endorserQuoteContainer'>
                <p className='endorserQuote'>
                  "I am proud to endorse Paula Deacon Garcia. Paula is a strong
                  independent-thinking woman who puts her community first. I
                  look forward to working with Paula who will be a strong voice
                  for our District 2 constituents."
                </p>
              </div>
            </div>
          </div>
          <div className='endorserContainerTall1'>
            <div className='endorserInfoMainContainer'>
              <div className='endorserTitleContainer'>
                <p className='endorserTitle'>IL Representative</p>
                <p className='endorserTitle'>Anne Stava-Murray</p>
              </div>
              <div className='endorserQuoteContainer'>
                <p className='endorserQuote'>
                  "I'm honored to endorse Paula Deacon Garcia, a fellow
                  community activist and concerned citizen, working to better
                  our local government. Your commitment and caring approach come
                  through in all you do. You'd be an asset to the DuPage County
                  Board."
                </p>
              </div>
            </div>
            <div className='endorserImgContainer'>
              <a
                className='endorserSiteLink'
                href='https://www.teamstavamurray.com/'
                target='_blank'
                rel='noopener noreferrer'
                title='Anne Stava-Murray - teamstavamurray.com'
              >
                <img
                  className='endorserImg'
                  src={StavaMurrayEndorsement}
                  alt='Anne Stava-Murray Logo'
                />
              </a>
            </div>
          </div>
          <div className='endorserContainerTall2'>
            <div className='endorserImgContainer'>
              <a
                className='endorserSiteLink'
                href='https://tchfor48.com/'
                target='_blank'
                rel='noopener noreferrer'
                title='Terra Costa Howard - tchfor48.com'
              >
                <img
                  className='endorserImg'
                  src={HowardEndorsement}
                  alt='Terra Costa Howard Logo'
                />
              </a>
            </div>
            <div className='endorserInfoMainContainer'>
              <div className='endorserTitleContainer'>
                <p className='endorserTitle'>IL Representative</p>
                <p className='endorserTitle'>Terra Costa Howard</p>
              </div>
              <div className='endorserQuoteContainer'>
                <p className='endorserQuote'>
                  "I cannot think of a better person than Paula Deacon Garcia to
                  bring needed change to the DuPage County Board. She is
                  dedicated, smart and practical with a 'get it done' attitude.
                  She has my enthusiastic endorsement. I look forward to working
                  with Paula to meet the needs of all of our District 2
                  constituents."
                </p>
              </div>
            </div>
          </div>
          <div className='endorserContainerTall1'>
            <div className='endorserInfoMainContainer'>
              <div className='endorserTitleContainer'>
                <p className='endorserTitle'>US Representative</p>
                <p className='endorserTitle'>Sean Casten</p>
              </div>
              <div className='endorserQuoteContainer'>
                <p className='endorserQuote'>
                  "I am proud to endorse Paula Deacon Garcia for the DuPage
                  County Board District 2. She knows that true leadership means
                  putting the public first. The only way we will move forward as
                  a community and a country is to elect people who are committed
                  to progress, and Paula shows a steadfast commitment to make
                  the kind of changes we need. Paula will be a great partner and
                  look forward to working together to serve Illinoisians in the
                  next term."
                </p>
              </div>
            </div>
            <div className='endorserImgContainer'>
              <a
                className='endorserSiteLink'
                href='https://castenforcongress.com/'
                target='_blank'
                rel='noopener noreferrer'
                title='Sean Casten - castenforcongress.com'
              >
                <img
                  className='endorserImg'
                  src={CastenEndorsement}
                  alt='Sean Casten Logo'
                />
              </a>
            </div>
          </div>
          <div className='endorserContainerShort2'>
            <div className='endorserImgContainer'>
              <a
                className='endorserSiteLink'
                href='http://www.dgdemocrats.org/'
                target='_blank'
                rel='noopener noreferrer'
                title='Downers Grove Township Democrats - dgdemocrats.org'
              >
                <img
                  className='endorserImg'
                  src={DGTDEndorsement}
                  alt='DGTD Logo'
                />
              </a>
            </div>
            <div className='endorserInfoMainContainer'>
              <div className='endorserTitleContainer'>
                <p className='endorserTitle'>Downers Grove Township</p>
                <p className='endorserTitle'>Democrats</p>
              </div>
            </div>
          </div>
          <div className='endorserContainerShort1'>
            <div className='endorserInfoMainContainer'>
              <div className='endorserTitleContainer'>
                <p className='endorserTitle'>York Township</p>
                <p className='endorserTitle'>Democratic Organization</p>
              </div>
            </div>
            <div className='endorserImgContainer'>
              <a
                className='endorserSiteLink'
                href='https://www.yorkdemocrats.org/'
                target='_blank'
                rel='noopener noreferrer'
                title='York Township Democratic Organization - yorkdemocrats.org'
              >
                <img
                  className='endorserImg'
                  src={YTDOEndorsement}
                  alt='YTDO Logo'
                />
              </a>
            </div>
          </div>
          <div className='endorserContainerTall2'>
            <div className='endorserImgContainer'>
              <a
                className='endorserSiteLink'
                href='https://www.durbinforsenate.com/'
                target='_blank'
                rel='noopener noreferrer'
                title='Dick Durbin - durbinforsenate.com'
              >
                <img
                  className='endorserImg'
                  src={DurbinEndorsement}
                  alt='Dick Durbin Logo'
                />
              </a>
            </div>
            <div className='endorserInfoMainContainer'>
              <div className='endorserTitleContainer'>
                <p className='endorserTitle'>US Senator</p>
                <p className='endorserTitle'>Dick Durbin</p>
              </div>
            </div>
          </div>
          <div className='endorserContainerShort1'>
            <div className='endorserInfoMainContainer'>
              <div className='endorserTitleContainer'>
                <p className='endorserTitle'>Lisle Township</p>
                <p className='endorserTitle'>Democratic Organization</p>
              </div>
            </div>
            <div className='endorserImgContainer'>
              <a
                className='endorserSiteLink'
                href='https://ltdo.org/'
                target='_blank'
                rel='noopener noreferrer'
                title='Lisle Township Democratic Organization - ltdo.org'
              >
                <img
                  className='endorserImg'
                  src={LTDOEndorsement}
                  alt='LTDO Logo'
                />
              </a>
            </div>
          </div>
          <div className='endorserContainerShort2'>
            <div className='endorserImgContainer'>
              <a
                className='endorserSiteLink'
                href='https://il.aflcio.org/north-central-illinois-labor-council-afl-cio'
                target='_blank'
                rel='noopener noreferrer'
                title='North Central IL Labor Council, AFL-CIO - il.aflcio.org/north-central-illinois-labor-council-afl-cio'
              >
                <img
                  className='endorserImg'
                  src={LaborCouncilEndorsement}
                  alt='NCILC AFL-CIO Logo'
                />
              </a>
            </div>
            <div className='endorserInfoMainContainer'>
              <div className='endorserTitleContainer'>
                <p className='endorserTitle'>North Central Illinois</p>
                <p className='endorserTitle'>Labor Council AFL-CIO</p>
              </div>
            </div>
          </div>
          <div className='endorserContainerTall1'>
            <div className='endorserInfoMainContainer'>
              <div className='endorserTitleContainer'>
                <p className='endorserTitle'>Cynthia Borbas</p>
                <p className='endorserTitle'>Chair - DuPage Democrats</p>
              </div>
              <div className='endorserQuoteContainer'>
                <p className='endorserQuote'>
                  "It is critical that we have people who share our values on
                  the DuPage County Board. Paula will be focused on doing the
                  work of the people. She will listen to the facts and fight for
                  the best solutions for her entire district and county. Paula
                  will hit the ground running with a strong work ethic, deep
                  knowledge of current County Board issues, over 20 years of
                  municipal experience and decades of community activism and
                  volunteering. Her knowledge and heart will serve the people of
                  DuPage well."
                </p>
              </div>
            </div>
            <div className='endorserImgContainer'>
              <a
                className='endorserSiteLink'
                href='https://cynthiaborbas.com/'
                target='_blank'
                rel='noopener noreferrer'
                title='Cynthia Borbas - cynthiaborbas.com'
              >
                <img
                  className='endorserImg'
                  src={BorbasEndorsement}
                  alt='Cynthia Borbas Logo'
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
