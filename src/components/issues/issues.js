import React, { Component } from 'react';
import './issues.scss';
import budgeting from '../../images/budgeting.jpg';
import flooding from '../../images/flooding.jpg';
import mentalHealth from '../../images/mental_health.jpg';
import seniorCare from '../../images/senior_care.jpg';
import jobMarket from '../../images/job_market.jpg';
import openGovernment from '../../images/open_government.jpg';

export default class Issues extends Component {
  render() {
    return (
      <div className='issuesPageContainer'>
        <div className='issuesStatementContainer'>
          <p className='issuesStatement'>Issues Statement</p>
        </div>
        <div className='issueSectionContainer'>
          <div className='issueImgContainer'>
            <img className='issueImg' src={budgeting} alt='' />
          </div>
          <div className='issueParagraphContainer'>
            <p className='issueParagraph'>Budgeting Paragraph</p>
          </div>
        </div>
        <span className='separator' />
        <div className='issueSectionContainer'>
          <div className='issueParagraphContainer'>
            <p className='issueParagraph'>Flooding Paragraph</p>
          </div>
          <div className='issueImgContainer'>
            <img className='issueImg' src={flooding} alt='' />
          </div>
        </div>
        <span className='separator' />
        <div className='issueSectionContainer'>
          <div className='issueImgContainer'>
            <img className='issueImg' src={mentalHealth} alt='' />
          </div>
          <div className='issueParagraphContainer'>
            <p className='issueParagraph'>Mental Health Paragraph</p>
          </div>
        </div>
        <span className='separator' />
        <div className='issueSectionContainer'>
          <div className='issueParagraphContainer'>
            <p className='issueParagraph'>Senior Care Paragraph</p>
          </div>
          <div className='issueImgContainer'>
            <img className='issueImg' src={seniorCare} alt='' />
          </div>
        </div>
        <span className='separator' />
        <div className='issueSectionContainer'>
          <div className='issueImgContainer'>
            <img className='issueImg' src={openGovernment} alt='' />
          </div>
          <div className='issueParagraphContainer'>
            <p className='issueParagraph'>Open Government Paragraph</p>
          </div>
        </div>
        <span className='separator' />
        <div className='issueSectionContainer'>
          <div className='issueParagraphContainer'>
            <p className='issueParagraph'>Job Market Paragraph</p>
          </div>
          <div className='issueImgContainer'>
            <img className='issueImg' src={jobMarket} alt='' />
          </div>
        </div>
      </div>
    );
  }
}
