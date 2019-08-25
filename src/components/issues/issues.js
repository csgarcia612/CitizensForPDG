import React, { Component } from 'react';
import './issues.scss';

export default class Issues extends Component {
  render() {
    return (
      <div className='issuesPageContainer'>
        <div className='issuesStatementContainer'>
          <p className='issuesStatement'>Issues Statement</p>
        </div>
        <div className='issueSectionContainer'>
          <div className='issueImgContainer'>
            <img className='issueImg' src='' alt='' />
          </div>
          <div className='issueParagraphContainer'>
            <p className='issueParagraph'>Issue Paragraph</p>
          </div>
        </div>
        <span className='separator' />
        <div className='issueSectionContainer'>
          <div className='issueParagraphContainer'>
            <p className='issueParagraph'>Issue Paragraph</p>
          </div>
          <div className='issueImgContainer'>
            <img className='issueImg' src='' alt='' />
          </div>
        </div>
      </div>
    );
  }
}
