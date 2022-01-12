import React, { Component } from 'react';
import './issues.scss';
import flooding from '../../images/flooding.jpg';
import mentalHealth from '../../images/mental_health.jpg';
import seniorCare from '../../images/senior_care.jpg';
import jobMarket from '../../images/job_market.jpg';
import openGovernment from '../../images/open_government.jpg';
import covid from '../../images/covid.png';
import foodHome from '../../images/foodandhome.jpg';

export default class Issues extends Component {
  render() {
    return (
      <div className='issuesPageContainer'>
        <div className='mobileIssueSectionContainer'>
          <div className='mobileIssueImgContainer'>
            <img
              className='mobileIssueImg'
              src={covid}
              alt='Magnifying glass enlarging the word accountability on a page'
            />
            <p className='mobileIssueImgTitle'>COVID-19</p>
          </div>
          <div className='mobileIssueParagraphContainer'>
            <p className='mobileIssueParagraph'>
              When I first started running for office, COVID-19 was something
              none of us had ever heard of; and now all of our lives, in one way
              or another, have been affected by this horrible pandemic.
            </p>
            <p className='mobileIssueParagraph'>
              DuPage County has shown that we all have the resiliency to do
              better, care for each other, and find solutions to keep moving
              forward. On the county board I have voted to help struggling
              businesses stay on their feet, fund the DuPage County Health
              Department, and continue to help find ways to cope with the mental
              health stresses exasperated by all of the changes we have had to
              make to our daily lives.
            </p>
            <p className='mobileIssueParagraph'>
              I have been appointed to the DuPage Health Department Board two
              times since being elected and I am so proud of the staff, my
              fellow board members and all of the volunteers; working so hard to
              help with testing, vaccines and so many other things.
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
              DuPage County has started to be a leader in sustainability, but
              large strides are still needed. Climate change is a very real
              danger and the changes need to happen now. Renewable Energy
              sources like solar and wind need to be implemented. I am the voice
              of updating our fleet vehicles to electric and installing EV
              chargers on the campus and encouraging businesses to do the same.
            </p>
            <p className='mobileIssueParagraph'>
              Stormwater flooding solutions are critically needed in parts of
              DuPage County. In my experience as a former Certified Floodplain
              Manager, I have seen the damage and heartbreak these situations
              create firsthand. My goal is to continue to work to find ways to
              better help all people stay out of danger, especially those who
              are living near rivers and floodplains. In my work on the
              Stormwater Committee, I am working with staff to find solutions
              and with ARPA money some much needed projects have been approved
              and will be happening in the next few years.
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
              1 in 5 adults in America experience some kind of mental illness
              within their lifetime. 60% of adults with a mental illness did not
              receive mental health services that they need. On the DuPage
              County Board and as a member of DuPage County Health Department
              Board I will keep fighting to provide the services needed to help
              those affected and to remove the stigma attached to this very real
              illness, so that those affected feel comfortable seeking out help.
              So many people, including myself, are working hard to bring good
              changes in the next couple of years in the services provided; from
              new phone numbers to call if help is needed to treating those
              struggling with mental health with dignity and respect.
            </p>
          </div>
        </div>
        <span className='mobileSeparator' />
        <div className='mobileIssueSectionContainer'>
          <div className='mobileIssueImgContainer'>
            <img
              className='mobileIssueImg'
              src={foodHome}
              alt='Toy house and food on a table'
            />
            <p className='mobileIssueImgTitle'>Housing & Food Security</p>
          </div>
          <div className='mobileIssueParagraphContainer'>
            <p className='mobileIssueParagraph'>
              DuPage County has had people who are struggling to find affordable
              housing and enough food to feed their families. The last 2 years
              have made a problem that already existed an issue needing
              solutions now. I was so proud to vote to fund DuPage PADs in their
              plan to purchase a motel in my district to open a permanent
              interim housing location for those in need of housing. I am still
              active in trying to find additional locations in DuPage County
              that can serve as housing for those who cannot afford a place to
              live right now – this includes all types of residents – from young
              to old.
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
              society; as families are not always located in the same area. I
              have lived through those times with my family as I had the
              responsibility of making sure my mother got the best care as she
              became unable to care for herself. I want to make sure people have
              all the resources and assistance to get them through this
              difficult time in life.
            </p>
            <p className='mobileIssueParagraph'>
              I am proud to say that DuPage Care Center is top in terms of care
              of loved ones. I am a proud supporter of this facility and with
              ARPA funds I voted to update the building so safety needs and
              rooms will be updated. It has been the most difficult of two years
              for our Care Center and all the staff; as well as the residents
              and their families, but they were leaders in the fight against
              COVID-19.
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
              Productive and positive businesses are important in helping a
              county grow and evolve into the future. Job growth for the county
              is very important and we should be working on attracting companies
              that are responsible and forward thinking. Another result of the
              pandemic has been a shortage of workers in all businesses. I will
              be continuing to work to find solutions to help businesses thrive
              as the county adjusts to the changes.
            </p>
          </div>
        </div>
        <span className='mobileSeparator' />
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
          </div>
        </div>

        <div className='issueSectionContainer'>
          <div className='issueImgContainer'>
            <img
              className='issueImg'
              src={covid}
              alt='COVID-19 vaccination certificate, syringe, and vaccine vile'
            />
            <p className='issueImgTitle'>COVID-19</p>
          </div>
          <div className='issueParagraphContainer'>
            <p className='issueParagraph'>
              When I first started running for office, COVID-19 was something
              none of us had ever heard of; and now all of our lives, in one way
              or another, have been affected by this horrible pandemic.
            </p>
            <p className='issueParagraph'>
              DuPage County has shown that we all have the resiliency to do
              better, care for each other, and find solutions to keep moving
              forward. On the county board I have voted to help struggling
              businesses stay on their feet, fund the DuPage County Health
              Department, and continue to help find ways to cope with the mental
              health stresses exasperated by all of the changes we have had to
              make to our daily lives.
            </p>
            <p className='issueParagraph'>
              I have been appointed to the DuPage Health Department Board two
              times since being elected and I am so proud of the staff, my
              fellow board members and all of the volunteers; working so hard to
              help with testing, vaccines and so many other things.
            </p>
          </div>
        </div>
        <span className='separator' />
        <div className='issueSectionContainer'>
          <div className='issueParagraphContainer'>
            <p className='issueParagraph'>
              DuPage County has started to be a leader in sustainability, but
              large strides are still needed. Climate change is a very real
              danger and the changes need to happen now. Renewable Energy
              sources like solar and wind need to be implemented. I am the voice
              of updating our fleet vehicles to electric and installing EV
              chargers on the campus and encouraging businesses to do the same.
            </p>
            <p className='issueParagraph'>
              Stormwater flooding solutions are critically needed in parts of
              DuPage County. In my experience as a former Certified Floodplain
              Manager, I have seen the damage and heartbreak these situations
              create firsthand. My goal is to continue to work to find ways to
              better help all people stay out of danger, especially those who
              are living near rivers and floodplains. In my work on the
              Stormwater Committee, I am working with staff to find solutions
              and with ARPA money some much needed projects have been approved
              and will be happening in the next few years.
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
              1 in 5 adults in America experience some kind of mental illness
              within their lifetime. 60% of adults with a mental illness did not
              receive mental health services that they need. On the DuPage
              County Board and as a member of DuPage County Health Department
              Board I will keep fighting to provide the services needed to help
              those affected and to remove the stigma attached to this very real
              illness, so that those affected feel comfortable seeking out help.
              So many people, including myself, are working hard to bring good
              changes in the next couple of years in the services provided; from
              new phone numbers to call if help is needed to treating those
              struggling with mental health with dignity and respect.
            </p>
          </div>
        </div>
        <span className='separator' />
        <div className='issueSectionContainer'>
          <div className='issueParagraphContainer'>
            <p className='issueParagraph'>
              DuPage County has had people who are struggling to find affordable
              housing and enough food to feed their families. The last 2 years
              have made a problem that already existed an issue needing
              solutions now. I was so proud to vote to fund DuPage PADs in their
              plan to purchase a motel in my district to open a permanent
              interim housing location for those in need of housing. I am still
              active in trying to find additional locations in DuPage County
              that can serve as housing for those who cannot afford a place to
              live right now – this includes all types of residents – from young
              to old.
            </p>
          </div>
          <div className='issueImgContainer'>
            <img
              className='issueImg'
              src={foodHome}
              alt='Toy house and food on a table'
            />
            <p className='issueImgTitle'>Housing &</p>
            <p className='issueImgTitle'>Food Security</p>
          </div>
        </div>
        <span className='separator' />
        <div className='issueSectionContainer'>
          <div className='issueImgContainer'>
            <img
              className='issueImg'
              src={seniorCare}
              alt='Younger hands holding older hands'
            />
            <p className='issueImgTitle'>Senior Care</p>
          </div>
          <div className='issueParagraphContainer'>
            <p className='issueParagraph'>
              Services for our senior citizens is mandatory for a caring
              society; as families are not always located in the same area. I
              have lived through those times with my family as I had the
              responsibility of making sure my mother got the best care as she
              became unable to care for herself. I want to make sure people have
              all the resources and assistance to get them through this
              difficult time in life.
            </p>
            <p className='issueParagraph'>
              I am proud to say that DuPage Care Center is top in terms of care
              of loved ones. I am a proud supporter of this facility and with
              ARPA funds I voted to update the building so safety needs and
              rooms will be updated. It has been the most difficult of two years
              for our Care Center and all the staff; as well as the residents
              and their families, but they were leaders in the fight against
              COVID-19.
            </p>
          </div>
        </div>
        <span className='separator' />
        <div className='issueSectionContainer'>
          <div className='issueParagraphContainer'>
            <p className='issueParagraph'>
              Productive and positive businesses are important in helping a
              county grow and evolve into the future. Job growth for the county
              is very important and we should be working on attracting companies
              that are responsible and forward thinking. Another result of the
              pandemic has been a shortage of workers in all businesses. I will
              be continuing to work to find solutions to help businesses thrive
              as the county adjusts to the changes.
            </p>
          </div>
          <div className='issueImgContainer'>
            <img
              className='issueImg'
              src={jobMarket}
              alt="You're Hired written on chalkboard"
            />
            <p className='issueImgTitle'>Job Growth</p>
          </div>
        </div>
        <span className='separator' />
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
          </div>
        </div>
      </div>
    );
  }
}
