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
        <div className='issueSectionContainer'>
          <div className='issueImgContainer'>
            <img className='issueImg' src={openGovernment} alt='' />
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
            <p className='issueParagraph'>Flooding Paragraph</p>
          </div>
          <div className='issueImgContainer'>
            <img className='issueImg' src={flooding} alt='' />
            <p className='issueImgTitle'>Climate Change</p>
          </div>
        </div>
        <span className='separator' />
        <div className='issueSectionContainer'>
          <div className='issueImgContainer'>
            <img className='issueImg' src={mentalHealth} alt='' />
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
            <p className='issueParagraph'>Senior Care Paragraph</p>
          </div>
          <div className='issueImgContainer'>
            <img className='issueImg' src={seniorCare} alt='' />
            <p className='issueImgTitle'>Senior Care</p>
          </div>
        </div>
        <span className='separator' />
        <div className='issueSectionContainer'>
          <div className='issueImgContainer'>
            <img className='issueImg' src={jobMarket} alt='' />
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
