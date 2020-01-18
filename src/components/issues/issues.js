import React, { Component } from 'react';
import './issues.scss';
import flooding from '../../images/flooding.jpg';
import mentalHealth from '../../images/mental_health.jpg';
import seniorCare from '../../images/senior_care.jpg';
import jobMarket from '../../images/job_market.jpg';
import openGovernment from '../../images/open_government.jpg';

export default class Issues extends Component {
  render() {
    return (
      <div className='issuesPageContainer'>
        <div className='mobileIssueSectionContainer'>
          <div className='mobileIssueImgContainer'>
            <img
              className='mobileIssueImg'
              src={openGovernment}
              alt='Magnifying glass enlarging the word accountability on a page'
            />
            <p className='mobileIssueImgTitle'>Accountability</p>
          </div>
          <div className='mobileIssueParagraphContainer'>
            <p className='mobileIssueParagraph'>
              Transparency is crucial for a good relationship between elected
              officials and their constituents. Commission members and residents
              should be allowed to see all information so that all questions and
              concerns can be addressed before decisions are made.
            </p>
            <p className='mobileIssueParagraph'>
              The DuPage County A.C.T. Initiative (Accountability -
              Consolidation - Transparency) is a comprehensive county reform
              program that was initially designed to improve efficiency, reduce
              duplication, and encourage resource sharing across county
              government. Unfortunately, systems like this in many
              municipalities have not been as effective as they need to be.
            </p>
            <p className='mobileIssueParagraph'>
              Currently, consolidation is happening by limiting the workforce
              and burdening the remaining county workers with more and more
              work. When this happens, workers become overloaded and services,
              and those who rely on them, suffer. Yet at the same time there are
              appointments for committees that cost the taxpayers more than half
              of a million dollars. I will be a voice for county employees who
              are finding it difficult to provide the best service, due to their
              expanding workload, and the citizens who rely on these services.
            </p>
          </div>
        </div>
        <span className='mobileSeparator' />
        <div className='mobileIssueSectionContainer'>
          <div className='mobileIssueImgContainer'>
            <img
              className='mobileIssueImg'
              src={flooding}
              alt='Heavily flooded roadway'
            />
            <p className='mobileIssueImgTitle'>Climate Change</p>
          </div>
          <div className='mobileIssueParagraphContainer'>
            <p className='mobileIssueParagraph'>
              DuPage County needs to be a leader in sustainability and help set
              an example of how to take care of where we live. Climate change is
              a very real danger and the county should be striving for solutions
              that will help combat this issue. Solutions like renewable energy
              like solar and wind, as well as new and updated recycling programs
              and any other technologies that will help the future of our world.
            </p>
            <p className='mobileIssueParagraph'>
              Unfortunately due to the increases in severity of the weather,
              stormwater flooding solutions are critically needed in parts of
              DuPage County. In my experience as a Certified Floodplain Manager,
              I have seen the damage and heartbreak these situations create
              firsthand. My goal is to work to find ways to better help all
              people stay out of danger, especially those who are living near
              rivers and in floodplains.
            </p>
          </div>
        </div>
        <span className='mobileSeparator' />
        <div className='mobileIssueSectionContainer'>
          <div className='mobileIssueImgContainer'>
            <img
              className='mobileIssueImg'
              src={mentalHealth}
              alt='Stop The Stigma written on a chalkboard above crossed out words Mental-Health Problem'
            />
            <p className='mobileIssueImgTitle'>Mental Health</p>
          </div>
          <div className='mobileIssueParagraphContainer'>
            <p className='mobileIssueParagraph'>
              1 in 5 adults in America experience some kind mental illness
              within their lifetime. 60% of adults with a mental illness did not
              receive mental health services they needed. I will fight to
              provide the services needed to help those affected and to remove
              the stigma attached to this very real illness, so that those
              affected feel comfortable seeking out help.
            </p>
          </div>
        </div>
        <span className='mobileSeparator' />
        <div className='mobileIssueSectionContainer'>
          <div className='mobileIssueImgContainer'>
            <img
              className='mobileIssueImg'
              src={seniorCare}
              alt='Younger hands holding older hands'
            />
            <p className='mobileIssueImgTitle'>Senior Care</p>
          </div>
          <div className='mobileIssueParagraphContainer'>
            <p className='mobileIssueParagraph'>
              Services for our senior citizens is mandatory for a caring
              society. As families are not always located in the same area, it
              falls upon county services to help care for the people that have
              helped build, maintain, and grow DuPage County in to what it is
              today.
            </p>
            <p className='mobileIssueParagraph'>
              I have lived through those times with my family as I had the
              responsibility of making sure my mother got the best care as she
              became unable to care for herself. I want to make sure people have
              all the resources and assistance to get them through this
              difficult time in life.
            </p>
          </div>
        </div>
        <span className='mobileSeparator' />
        <div className='mobileIssueSectionContainer'>
          <div className='mobileIssueImgContainer'>
            <img
              className='mobileIssueImg'
              src={jobMarket}
              alt="You're Hired written on chalkboard"
            />
            <p className='mobileIssueImgTitle'>Job Growth</p>
          </div>
          <div className='mobileIssueParagraphContainer'>
            <p className='mobileIssueParagraph'>
              Productive and positive businesses are also important in helping a
              county grow and evolve into the future. Job growth for the county
              is very important and we should be working on attracting companies
              that are responsible and forward thinking as well as encouraging
              the increase in workforce in the area. Respect for the union
              workers who have built DuPage needs to also be renewed and
              applauded.
            </p>
          </div>
        </div>

        <div className='issueSectionContainer'>
          <div className='issueImgContainer'>
            <img
              className='issueImg'
              src={openGovernment}
              alt='Magnifying glass enlarging the word accountability on a page'
            />
            <p className='issueImgTitle'>Accountability</p>
          </div>
          <div className='issueParagraphContainer'>
            <p className='issueParagraph'>
              Transparency is crucial for a good relationship between elected
              officials and their constituents. Commission members and residents
              should be allowed to see all information so that all questions and
              concerns can be addressed before decisions are made.
            </p>
            <p className='issueParagraph'>
              The DuPage County A.C.T. Initiative (Accountability -
              Consolidation - Transparency) is a comprehensive county reform
              program that was initially designed to improve efficiency, reduce
              duplication, and encourage resource sharing across county
              government. Unfortunately, systems like this in many
              municipalities have not been as effective as they need to be.
            </p>
            <p className='issueParagraph'>
              Currently, consolidation is happening by limiting the workforce
              and burdening the remaining county workers with more and more
              work. When this happens, workers become overloaded and services,
              and those who rely on them, suffer. Yet at the same time there are
              appointments for committees that cost the taxpayers more than half
              of a million dollars. I will be a voice for county employees who
              are finding it difficult to provide the best service, due to their
              expanding workload, and the citizens who rely on these services.
            </p>
          </div>
        </div>
        <span className='separator' />
        <div className='issueSectionContainer'>
          <div className='issueParagraphContainer'>
            <p className='issueParagraph'>
              DuPage County needs to be a leader in sustainability and help set
              an example of how to take care of where we live. Climate change is
              a very real danger and the county should be striving for solutions
              that will help combat this issue. Solutions like renewable energy
              like solar and wind, as well as new and updated recycling programs
              and any other technologies that will help the future of our world.
            </p>
            <p className='issueParagraph'>
              Unfortunately due to the increases in severity of the weather,
              stormwater flooding solutions are critically needed in parts of
              DuPage County. In my experience as a Certified Floodplain Manager,
              I have seen the damage and heartbreak these situations create
              firsthand. My goal is to work to find ways to better help all
              people stay out of danger, especially those who are living near
              rivers and in floodplains.
            </p>
          </div>
          <div className='issueImgContainer'>
            <img
              className='issueImg'
              src={flooding}
              alt='Heavily flooded roadway'
            />
            <p className='issueImgTitle'>Climate Change</p>
          </div>
        </div>
        <span className='separator' />
        <div className='issueSectionContainer'>
          <div className='issueImgContainer'>
            <img
              className='issueImg'
              src={mentalHealth}
              alt='Stop The Stigma written on a chalkboard above crossed out words Mental-Health Problem'
            />
            <p className='issueImgTitle'>Mental Health</p>
          </div>
          <div className='issueParagraphContainer'>
            <p className='issueParagraph'>
              1 in 5 adults in America experience some kind mental illness
              within their lifetime. 60% of adults with a mental illness did not
              receive mental health services they needed. I will fight to
              provide the services needed to help those affected and to remove
              the stigma attached to this very real illness, so that those
              affected feel comfortable seeking out help.
            </p>
          </div>
        </div>
        <span className='separator' />
        <div className='issueSectionContainer'>
          <div className='issueParagraphContainer'>
            <p className='issueParagraph'>
              Services for our senior citizens is mandatory for a caring
              society. As families are not always located in the same area, it
              falls upon county services to help care for the people that have
              helped build, maintain, and grow DuPage County in to what it is
              today.
            </p>
            <p className='issueParagraph'>
              I have lived through those times with my family as I had the
              responsibility of making sure my mother got the best care as she
              became unable to care for herself. I want to make sure people have
              all the resources and assistance to get them through this
              difficult time in life.
            </p>
          </div>
          <div className='issueImgContainer'>
            <img
              className='issueImg'
              src={seniorCare}
              alt='Younger hands holding older hands'
            />
            <p className='issueImgTitle'>Senior Care</p>
          </div>
        </div>
        <span className='separator' />
        <div className='issueSectionContainer'>
          <div className='issueImgContainer'>
            <img
              className='issueImg'
              src={jobMarket}
              alt="You're Hired written on chalkboard"
            />
            <p className='issueImgTitle'>Job Growth</p>
          </div>
          <div className='issueParagraphContainer'>
            <p className='issueParagraph'>
              Productive and positive businesses are also important in helping a
              county grow and evolve into the future. Job growth for the county
              is very important and we should be working on attracting companies
              that are responsible and forward thinking as well as encouraging
              the increase in workforce in the area. Respect for the union
              workers who have built DuPage needs to also be renewed and
              applauded.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
