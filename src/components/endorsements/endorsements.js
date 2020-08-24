import React, { Component } from 'react';
import './endorsements.scss';
import CynthiaEndorsement from '../../images/Cynthia_Endorsement.jpg';
import LaborCouncilEndorsement from '../../images/Labor_Council_Endorsement.jpg';
import LTDOEndorsement from '../../images/LTDO_Endorsement.jpg';
import DurbinEndorsement from '../../images/Durbin_Banner.png';
import DGTDEndorsement from '../../images/DGTD_Banner.jpg';
import HowardEndorsement from '../../images/Howard_Banner.jpg';
import CastenEndorsement from '../../images/Casten_Banner.jpg';
import StavaMurrayEndorsement from '../../images/Stava_Murray_Banner.jpg';
import YTDOEndorsement from '../../images/YTDO_Banner.png';

export default class Endorsements extends Component {
  render() {
    return (
      <div className='endorsementsPageContainer'>
        <div className='endorsementsTitleContainer'>
          <p className='endorsementsTitle'>Honored To Be Endorsed By</p>
        </div>
        <div className='endorsementsMainContainer'>
          <div className='endorserContainerTall1'>
            <div className='endorserTitleContainer'>
              <p className='endorserTitle'>IL Representative</p>
              <p className='endorserTitle'>Anne Stava-Murray</p>
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
            <div className='endorserTitleContainer'>
              <p className='endorserTitle'>IL Representative</p>
              <p className='endorserTitle'>Terra Costa Howard</p>
            </div>
          </div>
          <div className='endorserContainerTall1'>
            <div className='endorserTitleContainer'>
              <p className='endorserTitle'>US Representative</p>
              <p className='endorserTitle'>Sean Casten</p>
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
            <div className='endorserTitleContainer'>
              <p className='endorserTitle'>Downers Grove Township</p>
              <p className='endorserTitle'>Democrats</p>
            </div>
          </div>
          <div className='endorserContainerShort1'>
            <div className='endorserTitleContainer'>
              <p className='endorserTitle'>York Township</p>
              <p className='endorserTitle'>Democratic Organization</p>
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
            <div className='endorserTitleContainer'>
              <p className='endorserTitle'>US Senator</p>
              <p className='endorserTitle'>Dick Durbin</p>
            </div>
          </div>
          <div className='endorserContainerShort1'>
            <div className='endorserTitleContainer'>
              <p className='endorserTitle'>Lisle Township</p>
              <p className='endorserTitle'>Democratic Organization</p>
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
            <div className='endorserTitleContainer'>
              <p className='endorserTitle'>North Central Illinois</p>
              <p className='endorserTitle'>Labor Council ALF-CIO</p>
            </div>
          </div>
          <div className='endorserContainerShort1'>
            <div className='endorserTitleContainer'>
              <p className='endorserTitle'>Cynthia Borbas</p>
              <p className='endorserTitle'>Chair - DuPage Democrats</p>
            </div>
            <div className='endorserImgContainer'>
              <img
                className='endorserImg'
                src={CynthiaEndorsement}
                alt='Cynthia Borbas Logo'
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
