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
import DailyHeraldEndorsement from '../../images/DH_Banner2.jpg';
import LiUNAEndorsement from '../../images/LiUNA_Endorsement.jpg';
import AFSCME31Endorsement from '../../images/AFSCME31_Endorsement.jpg';
import SMART265Endorsement from '../../images/SMART_Union265.jpg';
import MomsDemandActionLogo from '../../images/MomsDemandAction.png';

class Endorsements extends Component {
  constructor() {
    super();
    this.state = {
      showCurrentEndorsements: true,
    };
  }

  toggleCurrentEndorsements = () => {
    this.setState({
      showCurrentEndorsements: !this.state.showCurrentEndorsements,
    });
  };

  render() {
    const { showCurrentEndorsements } = this.state;

    return (
      <div className='endorsementsPageContainer'>
        <div className='newPrvBtnContainer'>
          <button
            className='newPrvBtn'
            onClick={this.toggleCurrentEndorsements}
          >
            {showCurrentEndorsements
              ? 'Show Previous Endorsements'
              : 'Show Current Endorsements'}
          </button>
        </div>
        <div
          className={
            showCurrentEndorsements
              ? 'showNewEndorsements'
              : 'hideNewEndorsements'
          }
        >
          <div className='endorsementsTitleContainer'>
            <p className='endorsementsTitle'>Honored To Be Endorsed By</p>
          </div>
          <div className='endorsementsMainContainer'>
            {/* <p className='endorsementPlaceholder'>
              Endorsements for Paula's 2022 campaign will appear here as they
              are announced.
            </p> */}
            <div className='endorserContainerShort1'>
              <div className='endorserInfoMainContainer'>
                <div className='endorserTitleContainer'>
                  <p className='endorserTitle'>Moms Demand Action</p>
                  <p className='endorserSubTitle'>Gun Sense Candidate</p>
                  <a
                    className='endorserSiteLink'
                    href='https://momsdemandaction.org/'
                    target='_blank'
                    rel='noopener noreferrer'
                    title='Moms Demand Action - momsdemandaction.org'
                  >
                    <p className='endorserSiteLinkTitle'>
                      momsdemandaction.org
                    </p>
                  </a>
                  <a
                    className='endorserSiteLink'
                    href='https://www.everytown.org/'
                    target='_blank'
                    rel='noopener noreferrer'
                    title='Everytown - everytown.org'
                  >
                    <p className='endorserSiteLinkTitle'>everytown.org</p>
                  </a>
                </div>
                <div className='endorserQuoteContainer'>
                  <p className='endorserQuote'>
                    "...your campaign has been awarded the 2022 Moms Demand
                    Action Gun Sense Candidate distinction. Thank you again for
                    advocating for gun violence prevention and making a
                    commitment to govern with gun safety in mind..."
                  </p>
                </div>
              </div>
              <div className='endorserImgContainer'>
                <img
                  className='endorserImg'
                  src={MomsDemandActionLogo}
                  alt='Moms Demand Action : Gun Sense Candidate Distinction Logo'
                />
              </div>
            </div>
            <div className='endorserContainerShort2'>
              <div className='endorserImgContainer'>
                <img
                  className='endorserImg'
                  src={SMART265Endorsement}
                  alt='S.M.A.R.T. Union Local 265 Logo'
                />
              </div>
              <div className='endorserInfoMainContainer'>
                <div className='endorserTitleContainer'>
                  <p className='endorserTitle'>SMART - Local Union 265</p>
                  <p className='endorserSubTitle'>
                    Sheet Metal, Air, Rail, Transportation
                  </p>
                  <a
                    className='endorserSiteLink'
                    href='https://www.smart265.org/'
                    target='_blank'
                    rel='noopener noreferrer'
                    title='SMART - Local Union 265 - smart265.org'
                  >
                    <p className='endorserSiteLinkTitle'>smart265.org</p>
                  </a>
                </div>
                <div className='endorserQuoteContainer'>
                  <p className='endorserQuote'>
                    "Paula Deacon Garcia is endorsed by SMART for her extensive
                    experience in local government."
                  </p>
                </div>
              </div>
            </div>
            <div className='endorserContainerShort1'>
              <div className='endorserInfoMainContainer'>
                <div className='endorserTitleContainer'>
                  <p className='endorserTitle'>AFSCME - Council 31</p>
                  <p className='endorserSubTitle'>American Federation of</p>
                  <p className='endorserSubTitle'>
                    State, County, & Municipal Employees
                  </p>
                  <a
                    className='endorserSiteLink'
                    href='https://www.afscme31.org/'
                    target='_blank'
                    rel='noopener noreferrer'
                    title='AFSCME : Council 31 - afscme31.org'
                  >
                    <p className='endorserSiteLinkTitle'>afscme31.org</p>
                  </a>
                </div>
              </div>
              <div className='endorserImgContainer'>
                <img
                  className='endorserImg'
                  src={AFSCME31Endorsement}
                  alt='AFSCME : Council 31 Logo'
                />
              </div>
            </div>
            <div className='endorserContainerShort2'>
              <div className='endorserImgContainer'>
                <img
                  className='endorserImg'
                  src={LiUNAEndorsement}
                  alt='LiUNA Logo'
                />
              </div>
              <div className='endorserInfoMainContainer'>
                <div className='endorserTitleContainer'>
                  <p className='endorserTitle'>Laborers' International Union</p>
                  <p className='endorserTitle'>of North America</p>
                  <a
                    className='endorserSiteLink'
                    href='http://www.liuna.org/'
                    target='_blank'
                    rel='noopener noreferrer'
                    title='Laborers International Union of North America - liuna.org'
                  >
                    <p className='endorserSiteLinkTitle'>liuna.org</p>
                  </a>
                </div>
              </div>
            </div>
            <div className='endorserContainerTall1'>
              <div className='endorserInfoMainContainer'>
                <div className='endorserTitleContainer'>
                  <p className='endorserTitle'>US Representative</p>
                  <p className='endorserTitle'>Sean Casten</p>
                  <a
                    className='endorserSiteLink'
                    href='https://castenforcongress.com/'
                    target='_blank'
                    rel='noopener noreferrer'
                    title='Sean Casten - castenforcongress.com'
                  >
                    <p className='endorserSiteLinkTitle'>
                      castenforcongress.com
                    </p>
                  </a>
                </div>
                <div className='endorserQuoteContainer'>
                  <p className='endorserQuote'>
                    "Today, I am endorsing Paula Deacon Garcia in her election
                    for DuPage County Board. She knows that real leadership is
                    about public service. She has demonstrated she has the right
                    experience, passion, and drive to bring our neighbors
                    together to tackle the challenges we face. She has already
                    been a tireless advocate for our community and that's why I
                    am proud to endorse her campaign."
                  </p>
                </div>
              </div>
              <div className='endorserImgContainer'>
                <img
                  className='endorserImg'
                  src={CastenEndorsement}
                  alt='Sean Casten Logo'
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className={
            showCurrentEndorsements
              ? 'hidePrvEndorsements'
              : 'showPrvEndorsements'
          }
        >
          <div className='endorsementsTitleContainer'>
            <p className='endorsementsTitle'>Previously Endorsed By</p>
          </div>
          <div className='endorsementsMainContainer'>
            <div className='endorserContainerTall2'>
              <div className='endorserImgContainer'>
                <img
                  className='endorserImg'
                  src={DailyHeraldEndorsement}
                  alt='Daily Herald Logo'
                />
              </div>
              <div className='endorserInfoMainContainer'>
                <div className='endorserTitleContainer'>
                  <p className='endorserTitle'>Daily Herald</p>
                  <a
                    className='endorserSiteLink'
                    href='https://www.dailyherald.com/discuss/20200930/endorsement-our-choices-for-dupage-county-board-districts-1-6'
                    target='_blank'
                    rel='noopener noreferrer'
                    title='Daily Herald : 2020 Endorsements for DuPage County Board - https://www.dailyherald.com/discuss/20200930/endorsement-our-choices-for-dupage-county-board-districts-1-6'
                  >
                    <p className='endorserSiteLinkTitle'>
                      DuPage County Board Endorsements Article
                    </p>
                  </a>
                  <a
                    className='endorserSiteLink'
                    href='https://www.dailyherald.com/news/20200929/paula-deacon-garcia-candidate-profile-dupage-county-board-district-2'
                    target='_blank'
                    rel='noopener noreferrer'
                    title='Daily Herald : Candidate Profile Article - https://www.dailyherald.com/news/20200929/paula-deacon-garcia-candidate-profile-dupage-county-board-district-2'
                  >
                    <p className='endorserSiteLinkTitle'>
                      Candidate Profile Article
                    </p>
                  </a>
                </div>
                <div className='endorserQuoteContainer-Split'>
                  <p className='endorserQuote'>
                    "Democrat Paula Deacon Garcia of Lisle challenges Republican
                    incumbent Sean Noonan of Elmhurst.
                  </p>
                  <br />
                  <p className='endorserQuote'>
                    Public safety and public health are top priorities for
                    Noonan, a Bloomingdale police officer who has represented
                    the district since 2012, while Deacon Garcia, who has worked
                    for a local municipality's building and customer service
                    department for more than two decades, cites stormwater
                    management, economic recovery for businesses affected by
                    COVID-19, mental health and overall health and safety as her
                    top reasons for running in her first election.
                  </p>
                  <br />
                  <p className='endorserQuote'>
                    While Noonan thinks the board should stay at 18 members,
                    Deacon Garcia believes that reducing the board to 12 could
                    produce many cost savings. She believes voters should have
                    had the chance to have their voices heard at the ballot box
                    on that issue.
                  </p>
                  <br />
                  <p className='endorserQuote'>
                    When it comes to efficiencies, Deacon Garcia proposes more
                    cross training to save money in the recorder's and clerk's
                    offices, while Noonan would like to see a study to determine
                    if there might be benefits from merging the Office of
                    Emergency Management with the Sheriff's Office. Deacon
                    Garcia would like to create a social media task force to
                    improve information available to the public online, in turn
                    creating more transparency, and to host budget workshops for
                    the public so residents could understand where the county's
                    money is going.
                  </p>
                  <br />
                  <p className='endorserQuote'>
                    Both candidates pledge to strive for bipartisanship through
                    cooperation and listening, with the goal of doing what's
                    best for the residents of DuPage, but Deacon Garcia stands
                    out for her energy and forward thinking. Noonan is a likable
                    candidate, but in two terms hasn't distinguished himself as
                    a champion for the causes he advocates. We think Deacon
                    Garcia will be more forceful and that makes her our choice."
                  </p>
                </div>
              </div>
            </div>
            <div className='endorserContainerTall1'>
              <div className='endorserInfoMainContainer'>
                <div className='endorserTitleContainer'>
                  <p className='endorserTitle'>US Senator</p>
                  <p className='endorserTitle'>Tammy Duckworth</p>
                  <a
                    className='endorserSiteLink'
                    href='https://www.duckworth.senate.gov/'
                    target='_blank'
                    rel='noopener noreferrer'
                    title='Tammy Duckworth - duckworth.senate.gov'
                  >
                    <p className='endorserSiteLinkTitle'>
                      duckworth.senate.gov
                    </p>
                  </a>
                </div>
                <div className='endorserQuoteContainer'>
                  <p className='endorserQuote'>
                    "DuPage County deserves a County Board with leaders who will
                    listen to residents, support working families, embrace
                    civility, work for budget transparency and bring
                    science-based solutions to mitigate climate change's impact.
                    I believe Paula Deacon Garcia will be that voice on the
                    DuPage County Board and she has my full support."
                  </p>
                </div>
              </div>
              <div className='endorserImgContainer'>
                <img
                  className='endorserImg'
                  src={DuckworthEndorsement}
                  alt='Tammy Duckworth Logo'
                />
              </div>
            </div>
            <div className='endorserContainerShort2'>
              <div className='endorserImgContainer'>
                <img
                  className='endorserImg'
                  src={IADOEndorsement}
                  alt='IADO Logo'
                />
              </div>
              <div className='endorserInfoMainContainer'>
                <div className='endorserTitleContainer'>
                  <p className='endorserTitle'>Indo-American</p>
                  <p className='endorserTitle'>Democratic Organization</p>
                  <a
                    className='endorserSiteLink'
                    href='https://www.iado.org/'
                    target='_blank'
                    rel='noopener noreferrer'
                    title='Indo-American Democratic Organization - iado.org'
                  >
                    <p className='endorserSiteLinkTitle'>iado.org</p>
                  </a>
                </div>
                <div className='endorserQuoteContainer'>
                  <p className='endorserQuote'>
                    "For your service to your community and your commitment and
                    track record of advocating a progressive agenda for
                    immigrant and working families, we’re confident that your
                    candidacy is aligned with the values and interests of
                    Illinois’ 290,000+ South Asian Americans and voters in your
                    constituency."
                  </p>
                </div>
              </div>
            </div>
            <div className='endorserContainerTall1'>
              <div className='endorserInfoMainContainer'>
                <div className='endorserTitleContainer'>
                  <p className='endorserTitle'>US Representative</p>
                  <p className='endorserTitle'>Bill Foster</p>
                  <a
                    className='endorserSiteLink'
                    href='https://billfoster.com/'
                    target='_blank'
                    rel='noopener noreferrer'
                    title='Bill Foster - billfoster.com'
                  >
                    <p className='endorserSiteLinkTitle'>billfoster.com</p>
                  </a>
                </div>
                <div className='endorserQuoteContainer'>
                  <p className='endorserQuote'>
                    "I am thrilled to endorse Paula Deacon Garcia for DuPage
                    County Board. Given her top notch qualifications, I know she
                    will be an effective and responsive board member. Her
                    expertise, data-based decision making and character will
                    allow her to add value on day one. I look forward to
                    partnering with Paula for the good of the county, our state
                    and our country."
                  </p>
                </div>
              </div>
              <div className='endorserImgContainer'>
                <img
                  className='endorserImg'
                  src={FosterEndorsement}
                  alt='Bill Foster Logo'
                />
              </div>
            </div>
            <div className='endorserContainerTall2'>
              <div className='endorserImgContainer'>
                <img
                  className='endorserImg'
                  src={ConroyEndorsement}
                  alt='Deb Conroy Logo'
                />
              </div>
              <div className='endorserInfoMainContainer'>
                <div className='endorserTitleContainer'>
                  <p className='endorserTitle'>IL Representative</p>
                  <p className='endorserTitle'>Deb Conroy</p>
                  <a
                    className='endorserSiteLink'
                    href='https://www.debconroy.com/'
                    target='_blank'
                    rel='noopener noreferrer'
                    title='Deb Conroy - debconroy.com'
                  >
                    <p className='endorserSiteLinkTitle'>debconroy.com</p>
                  </a>
                </div>
                <div className='endorserQuoteContainer'>
                  <p className='endorserQuote'>
                    "I am proud to endorse Paula Deacon Garcia. Paula is a
                    strong independent-thinking woman who puts her community
                    first. I look forward to working with Paula who will be a
                    strong voice for our District 2 constituents."
                  </p>
                </div>
              </div>
            </div>
            <div className='endorserContainerTall1'>
              <div className='endorserInfoMainContainer'>
                <div className='endorserTitleContainer'>
                  <p className='endorserTitle'>IL Representative</p>
                  <p className='endorserTitle'>Anne Stava-Murray</p>
                  <a
                    className='endorserSiteLink'
                    href='https://www.teamstavamurray.com/'
                    target='_blank'
                    rel='noopener noreferrer'
                    title='Anne Stava-Murray - teamstavamurray.com'
                  >
                    <p className='endorserSiteLinkTitle'>teamstavamurray.com</p>
                  </a>
                </div>
                <div className='endorserQuoteContainer'>
                  <p className='endorserQuote'>
                    "I'm honored to endorse Paula Deacon Garcia, a fellow
                    community activist and concerned citizen, working to better
                    our local government. Your commitment and caring approach
                    come through in all you do. You'd be an asset to the DuPage
                    County Board."
                  </p>
                </div>
              </div>
              <div className='endorserImgContainer'>
                <img
                  className='endorserImg'
                  src={StavaMurrayEndorsement}
                  alt='Anne Stava-Murray Logo'
                />
              </div>
            </div>
            <div className='endorserContainerTall2'>
              <div className='endorserImgContainer'>
                <img
                  className='endorserImg'
                  src={HowardEndorsement}
                  alt='Terra Costa Howard Logo'
                />
              </div>
              <div className='endorserInfoMainContainer'>
                <div className='endorserTitleContainer'>
                  <p className='endorserTitle'>IL Representative</p>
                  <p className='endorserTitle'>Terra Costa Howard</p>
                  <a
                    className='endorserSiteLink'
                    href='https://tchfor48.com/'
                    target='_blank'
                    rel='noopener noreferrer'
                    title='Terra Costa Howard - tchfor48.com'
                  >
                    <p className='endorserSiteLinkTitle'>tchfor48.com</p>
                  </a>
                </div>
                <div className='endorserQuoteContainer'>
                  <p className='endorserQuote'>
                    "I cannot think of a better person than Paula Deacon Garcia
                    to bring needed change to the DuPage County Board. She is
                    dedicated, smart and practical with a 'get it done'
                    attitude. She has my enthusiastic endorsement. I look
                    forward to working with Paula to meet the needs of all of
                    our District 2 constituents."
                  </p>
                </div>
              </div>
            </div>
            <div className='endorserContainerTall1'>
              <div className='endorserInfoMainContainer'>
                <div className='endorserTitleContainer'>
                  <p className='endorserTitle'>US Representative</p>
                  <p className='endorserTitle'>Sean Casten</p>
                  <a
                    className='endorserSiteLink'
                    href='https://castenforcongress.com/'
                    target='_blank'
                    rel='noopener noreferrer'
                    title='Sean Casten - castenforcongress.com'
                  >
                    <p className='endorserSiteLinkTitle'>
                      castenforcongress.com
                    </p>
                  </a>
                </div>
                <div className='endorserQuoteContainer'>
                  <p className='endorserQuote'>
                    "I am proud to endorse Paula Deacon Garcia for the DuPage
                    County Board District 2. She knows that true leadership
                    means putting the public first. The only way we will move
                    forward as a community and a country is to elect people who
                    are committed to progress, and Paula shows a steadfast
                    commitment to make the kind of changes we need. Paula will
                    be a great partner and look forward to working together to
                    serve Illinoisians in the next term."
                  </p>
                </div>
              </div>
              <div className='endorserImgContainer'>
                <img
                  className='endorserImg'
                  src={CastenEndorsement}
                  alt='Sean Casten Logo'
                />
              </div>
            </div>
            <div className='endorserContainerShort2'>
              <div className='endorserImgContainer'>
                <img
                  className='endorserImg'
                  src={DGTDEndorsement}
                  alt='DGTD Logo'
                />
              </div>
              <div className='endorserInfoMainContainer'>
                <div className='endorserTitleContainer'>
                  <p className='endorserTitle'>Downers Grove Township</p>
                  <p className='endorserTitle'>Democrats</p>
                  <a
                    className='endorserSiteLink'
                    href='http://www.dgdemocrats.org/'
                    target='_blank'
                    rel='noopener noreferrer'
                    title='Downers Grove Township Democrats - dgdemocrats.org'
                  >
                    <p className='endorserSiteLinkTitle'>dgdemocrats.org</p>
                  </a>
                </div>
              </div>
            </div>
            <div className='endorserContainerShort1'>
              <div className='endorserInfoMainContainer'>
                <div className='endorserTitleContainer'>
                  <p className='endorserTitle'>York Township</p>
                  <p className='endorserTitle'>Democratic Organization</p>
                  <a
                    className='endorserSiteLink'
                    href='https://www.yorkdemocrats.org/'
                    target='_blank'
                    rel='noopener noreferrer'
                    title='York Township Democratic Organization - yorkdemocrats.org'
                  >
                    <p className='endorserSiteLinkTitle'>yorkdemocrats.org</p>
                  </a>
                </div>
              </div>
              <div className='endorserImgContainer'>
                <img
                  className='endorserImg'
                  src={YTDOEndorsement}
                  alt='YTDO Logo'
                />
              </div>
            </div>
            <div className='endorserContainerTall2'>
              <div className='endorserImgContainer'>
                <img
                  className='endorserImg'
                  src={DurbinEndorsement}
                  alt='Dick Durbin Logo'
                />
              </div>
              <div className='endorserInfoMainContainer'>
                <div className='endorserTitleContainer'>
                  <p className='endorserTitle'>US Senator</p>
                  <p className='endorserTitle'>Dick Durbin</p>
                  <a
                    className='endorserSiteLink'
                    href='https://www.durbinforsenate.com/'
                    target='_blank'
                    rel='noopener noreferrer'
                    title='Dick Durbin - durbinforsenate.com'
                  >
                    <p className='endorserSiteLinkTitle'>durbinforsenate.com</p>
                  </a>
                </div>
              </div>
            </div>
            <div className='endorserContainerShort1'>
              <div className='endorserInfoMainContainer'>
                <div className='endorserTitleContainer'>
                  <p className='endorserTitle'>Lisle Township</p>
                  <p className='endorserTitle'>Democratic Organization</p>
                  <a
                    className='endorserSiteLink'
                    href='https://ltdo.org/'
                    target='_blank'
                    rel='noopener noreferrer'
                    title='Lisle Township Democratic Organization - ltdo.org'
                  >
                    <p className='endorserSiteLinkTitle'>ltdo.org</p>
                  </a>
                </div>
              </div>
              <div className='endorserImgContainer'>
                <img
                  className='endorserImg'
                  src={LTDOEndorsement}
                  alt='LTDO Logo'
                />
              </div>
            </div>
            <div className='endorserContainerShort2'>
              <div className='endorserImgContainer'>
                <img
                  className='endorserImg'
                  src={LaborCouncilEndorsement}
                  alt='NCILC AFL-CIO Logo'
                />
              </div>
              <div className='endorserInfoMainContainer'>
                <div className='endorserTitleContainer'>
                  <p className='endorserTitle'>North Central Illinois</p>
                  <p className='endorserTitle'>Labor Council AFL-CIO</p>
                  <a
                    className='endorserSiteLink'
                    href='https://il.aflcio.org/north-central-illinois-labor-council-afl-cio'
                    target='_blank'
                    rel='noopener noreferrer'
                    title='North Central IL Labor Council, AFL-CIO - il.aflcio.org/north-central-illinois-labor-council-afl-cio'
                  >
                    <p className='endorserSiteLinkTitle'>
                      il.aflcio.org/north-central-illinois-labor-council-afl-cio
                    </p>
                  </a>
                </div>
              </div>
            </div>
            <div className='endorserContainerTall1'>
              <div className='endorserInfoMainContainer'>
                <div className='endorserTitleContainer'>
                  <p className='endorserTitle'>Cynthia Borbas</p>
                  <p className='endorserTitle'>Chair - DuPage Democrats</p>
                  <a
                    className='endorserSiteLink'
                    href='https://cynthiaborbas.com/'
                    target='_blank'
                    rel='noopener noreferrer'
                    title='Cynthia Borbas - cynthiaborbas.com'
                  >
                    <p className='endorserSiteLinkTitle'>cynthiaborbas.com</p>
                  </a>
                </div>
                <div className='endorserQuoteContainer'>
                  <p className='endorserQuote'>
                    "It is critical that we have people who share our values on
                    the DuPage County Board. Paula will be focused on doing the
                    work of the people. She will listen to the facts and fight
                    for the best solutions for her entire district and county.
                    Paula will hit the ground running with a strong work ethic,
                    deep knowledge of current County Board issues, over 20 years
                    of municipal experience and decades of community activism
                    and volunteering. Her knowledge and heart will serve the
                    people of DuPage well."
                  </p>
                </div>
              </div>
              <div className='endorserImgContainer'>
                <img
                  className='endorserImg'
                  src={BorbasEndorsement}
                  alt='Cynthia Borbas Logo'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Endorsements;
