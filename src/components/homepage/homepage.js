import React, { Component } from 'react';
import './homepage.scss';
import breakingNews from '../../images/breakingNews.jpg';
import pdgGroup2 from '../../images/homepageHeaderImg.jpg';
import candidateSpotlight from '../../images/candidateSpotlight.png';
import fundraiserFoodPantry from '../../images/Fundraiser-Food-Pantry.jpg';

export default class Homepage extends Component {
  render() {
    return (
      <div className='homepageContainer'>
        <div className='homepageHeaderContainer'>
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
            <p className='campaignNewsTitle'>Campaign News</p>
          </div>
          <div className='newsEntryContainer'>
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
          </div>
        </div>
      </div>
    );
  }
}
