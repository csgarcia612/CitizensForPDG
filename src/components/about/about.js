import React, { Component } from 'react';
import './about.scss';
import headshot from '../../images/PDG_Headshot1.jpg';
import coupleImg from '../../images/Paula_Larry1.jpg';
import pdgGroup3 from '../../images/PDG_Group3.jpg';
import communityGarden1 from '../../images/Community_Garden1.jpg';
import communityGarden2 from '../../images/Community_Garden2.jpg';
import communityGarden3 from '../../images/Community_Garden3.jpg';
import pads1 from '../../images/PADS1.jpg';
import packLeader from '../../images/packLeader.jpg';
import roadwayPetition from '../../images/roadwayPetition.jpg';
import hsoLogo from '../../images/HSOLogo.png';

export default class About extends Component {
  render() {
    return (
      <div className='aboutPageContainer'>
        <div className='bioContainer'>
          <div className='bioTitleContainer'>
            <p className='bioTitle'>Meet Paula</p>
          </div>
          <div className='mobileBioSectionContainer'>
            <div className='mobileBioImgContainer'>
              <img
                className='mobileBioImg'
                src={headshot}
                alt='Paula Deacon Garcia headshot'
              />
            </div>
            <div className='mobileBioParagraphContainer'>
              <p className='mobileBioParagraph'>
                Paula has lived in Lisle for the majority of her life and now
                even resides 4 houses away from her childhood home.
              </p>
              <p className='mobileBioParagraph'>
                She has been happily married to her husband, Larry, for 36 years
                after first meeting while they were both attending college, and
                has proudly raised 2 children, Chris and Amanda, who are both
                grown and living full lives themselves. Her daughter Amanda has
                also started her own family with her husband Brandon, and has
                added 2 spectacular grandchildren to Paula’s life.
              </p>
              <p className='mobileBioParagraph'>
                When not volunteering or working Paula is an avid gardener and
                lover of all animals.
              </p>
            </div>
          </div>
          <div className='mobileBioSectionContainer'>
            <div className='mobileBioImgContainer'>
              <img
                className='mobileBioImg'
                src={coupleImg}
                alt='Paula with her husband Larry'
              />
            </div>
            <div className='mobileBioParagraphContainer'>
              <p className='mobileBioParagraph'>
                Paula attended Lisle schools for her early education and after
                graduating from Lisle Senior High School, she attended college
                at Illinois State University where she received her Bachelor’s
                Degree in Communication/Public Relations.
              </p>
              <p className='mobileBioParagraph'>
                For the past 20 years, Paula has worked for a local municipality
                in the Development Services Department (Building Department),
                now reorganized as the Customer Service Department. While at
                work, Paula’s primary responsibility is to be a facilitator for
                the residents who come in with questions regarding building
                permits, codes, and other general municipality questions. Paula
                also has experience as a Certified Floodplain Manager and used
                her knowledge and skills to assist residents affected by the
                floods that have occurred over the past decade.
              </p>
            </div>
          </div>
          <div className='bioSectionContainer'>
            <div className='bioImgContainer'>
              <img
                className='bioImg'
                src={headshot}
                alt='Paula Deacon Garcia headshot'
              />
            </div>
            <div className='bioParagraphContainer'>
              <p className='bioParagraph'>
                Paula has lived in Lisle for the majority of her life and now
                even resides 4 houses away from her childhood home.
              </p>
              <p className='bioParagraph'>
                She has been happily married to her husband, Larry, for 36 years
                after first meeting while they were both attending college, and
                has proudly raised 2 children, Chris and Amanda, who are both
                grown and living full lives themselves. Her daughter Amanda has
                also started her own family with her husband Brandon, and has
                added 2 spectacular grandchildren to Paula’s life.
              </p>
              <p className='bioParagraph'>
                When not volunteering or working Paula is an avid gardener and
                lover of all animals.
              </p>
            </div>
          </div>
          <div className='bioSectionContainer'>
            <div className='bioParagraphContainer'>
              <p className='bioParagraph'>
                Paula attended Lisle schools for her early education and after
                graduating from Lisle Senior High School, she attended college
                at Illinois State University where she received her Bachelor’s
                Degree in Communication/Public Relations.
              </p>
              <p className='bioParagraph'>
                For the past 20 years, Paula has worked for a local municipality
                in the Development Services Department (Building Department),
                now reorganized as the Customer Service Department. While at
                work, Paula’s primary responsibility is to be a facilitator for
                the residents who come in with questions regarding building
                permits, codes, and other general municipality questions. Paula
                also has experience as a Certified Floodplain Manager and used
                her knowledge and skills to assist residents affected by the
                floods that have occurred over the past decade.
              </p>
            </div>
            <div className='bioImgContainer'>
              <img
                className='bioImg'
                src={coupleImg}
                alt='Paula and her husband Larry'
              />
            </div>
          </div>
          <div className='mobileBioSectionContainer2'>
            <div className='mobileBioParagraphContainer2'>
              <p className='mobileBioParagraph2'>
                Paula’s extensive experience in being a facilitator will be an
                asset to the DuPage County Board as she takes the time to listen
                to the needs and problems of the citizens of the county and
                works diligently to find effective ways to solve them.
              </p>
            </div>
            <div className='mobileBioImgContainer2'>
              <img
                className='mobileBioImg2'
                src={pdgGroup3}
                alt='Paula speaking with friends and neighbors'
              />
            </div>
            <div className='mobileBioParagraphContainer2'>
              <p className='mobileBioParagraph2'>
                Paula loves living in a neighborhood where people care about
                each other and do not hesitate to drop everything and help
                someone in need. She truly desires to continue to help people
                and to bring that level of caring to the county level.
              </p>
            </div>
          </div>
          <div className='bioSectionContainer2'>
            <div className='bioParagraphContainer2'>
              <p className='bioParagraph2'>
                Paula’s extensive experience in being a facilitator will be an
                asset to the DuPage County Board as she takes the time to listen
                to the needs and problems of the citizens of the county and
                works diligently to find effective ways to solve them.
              </p>
            </div>
            <div className='bioImgContainer2'>
              <img
                className='bioImg2'
                src={pdgGroup3}
                alt='Paula speaking with friends and neighbors'
              />
            </div>
            <div className='bioParagraphContainer2'>
              <p className='bioParagraph2'>
                Paula loves living in a neighborhood where people care about
                each other and do not hesitate to drop everything and help
                someone in need. She truly desires to continue to help people
                and to bring that level of caring to the county level.
              </p>
            </div>
          </div>
        </div>
        <span className='separator' />
        <div className='philanthropyContainer'>
          <div className='philanthropyTitleContainer'>
            <p className='philanthropyTitle'>Community Involvement</p>
          </div>
          <div className='mobilePhilanthropySectionContainer'>
            <div className='mobilePhilanthropyImgContainer'>
              <div className='mobileImgRow1'>
                <img
                  className='mobilePhilanthropyImg'
                  src={communityGarden1}
                  alt='Paula and a volunteer gardener at the community garden'
                />
                <img
                  className='mobilePhilanthropyImg'
                  src={communityGarden2}
                  alt='Paula with boxes of harvested vegetables from the community garden'
                />
              </div>
              <div className='mobileImgRow2'>
                <img
                  className='mobilePhilanthropyImg'
                  src={communityGarden3}
                  alt='Paula and volunteers receiving an award for work done at the community garden'
                />
              </div>
            </div>
            <div className='mobilePhilanthropyParagraphContainer'>
              <p className='mobilePhilanthropyParagraph'>
                Starting around 3 years ago, Paula became a co-chair of the
                Lisle Township Food Pantry Vegetable Garden. At the time the
                garden was in need of some additional TLC and thanks to the
                volunteers who gave their time, the garden was producing in no
                time.
              </p>
              <p className='mobilePhilanthropyParagraph'>
                All harvested vegetables are donated to the Food Pantry that
                helps families in need and makes sure they are able to eat fresh
                vegetables. Year after year Paula has been so proud of the hard
                work put into the garden and how much it produces for people in
                need.
              </p>
              <p className='mobilePhilanthropyParagraph'>
                In 2018 alone, the garden produced over 1,600 pounds of fresh
                vegetables. Due to the success of the garden, as a
                representative of all of the volunteers, Paula received multiple
                awards. In 2019, the Village of Lisle awarded the Community
                Recognition Award and the Lisle Township awarded the Township
                Recognition Award.
              </p>
            </div>
          </div>
          <div className='mobilePhilanthropySectionContainer'>
            <div className='mobilePhilanthropyImgContainer'>
              <img
                className='mobilePhilanthropyImg'
                src={pads1}
                alt='Paula and a friend going through training at PADS (Public Action to Deliver Shelter)'
              />
            </div>
            <div className='mobilePhilanthropyParagraphContainer'>
              <p className='mobilePhilanthropyParagraph'>
                Paula has proudly been a volunteer for PADS (Public Action to
                Deliver Shelter) for 20+ years. During her volunteer times Paula
                worked to assist people who have ended up in a very difficult
                life situation. She helped set up eating and sleeping areas at
                the host location, prepared food ahead of time, served meals,
                and cleaned up at the end of the event.
              </p>
            </div>
          </div>
          <div className='mobilePhilanthropySectionContainer'>
            <div className='mobilePhilanthropyImgContainer'>
              <img
                className='mobilePhilanthropyImg'
                src={hsoLogo}
                alt='HSO (Home and School Organization) Logo'
              />
            </div>
            <div className='mobilePhilanthropyParagraphContainer'>
              <p className='mobilePhilanthropyParagraph'>
                Paula took part in the Lisle HSO (Home and School Organization)
                for 18 years and during her time there she served on numerous
                committees. The Fine Arts Committee worked to provide
                educational cultural experiences to students. The Clothing and
                Toy Resale Committee organized a twice a year resale event that
                was always a huge success. Paula also served on the Senior
                Banquet Committee and Senior Scholarship Committee.
              </p>
              <p className='mobilePhilanthropyParagraph'>
                Paula is also involved in her church and volunteered as a Sunday
                School Teacher while her children were younger. During this time
                she taught children in between the grades of elementary school
                and junior high school.
              </p>
            </div>
          </div>
          <div className='mobilePhilanthropySectionContainer'>
            <div className='mobilePhilanthropyImgContainer2'>
              <img
                className='mobilePhilanthropyImg2'
                src={packLeader}
                alt='Paula in uniform as a Cub Scouts den mother'
              />
            </div>
            <div className='mobilePhilanthropyParagraphContainer'>
              <p className='mobilePhilanthropyParagraph'>
                During her children’s younger ages Paula volunteered as a pack
                leader in the Cub Scouts and Girl Scouts. She worked to help
                guide the children in her care to be the best version of
                themselves at the time and helped prepare them for life as they
                grew up.
              </p>
            </div>
          </div>
          <div className='mobilePhilanthropySectionContainer'>
            <div className='mobilePhilanthropyImgContainer2'>
              <img
                className='mobilePhilanthropyImg2'
                src={roadwayPetition}
                alt='Paula speaking at a Village of Lisle board meeting'
              />
            </div>
            <div className='mobilePhilanthropyParagraphContainer'>
              <p className='mobilePhilanthropyParagraph'>
                In 1994, as a concerned mother and citizen, Paula took notice of
                the poor quality and safety of the roads in her neighborhood. So
                she organized a petition to ask the Village of Lisle to use the
                same roadway maintenance materials and technique on all roads
                across the entire village, instead of having different programs
                for different income neighborhoods. Paula collected signatures
                and spoke in front of the village board to bring change to a
                much needed situation.
                <br />
                Thanks to this hard work the village implemented a street
                rehabilitation program which is still in effect today.
              </p>
            </div>
          </div>
          <div className='philanthropySectionContainer'>
            <div className='philanthropyImgContainer'>
              <div className='imgRow1'>
                <img
                  className='philanthropyImg'
                  src={communityGarden1}
                  alt='Paula and a volunteer gardener at the community garden'
                />
                <img
                  className='philanthropyImg'
                  src={communityGarden2}
                  alt='Paula with boxes of harvested vegetables from the community garden'
                />
              </div>
              <div className='imgRow2'>
                <img
                  className='philanthropyImg'
                  src={communityGarden3}
                  alt='Paula and volunteers receiving an award for work done at the community garden'
                />
              </div>
            </div>
            <div className='philanthropyParagraphContainer'>
              <p className='philanthropyParagraph'>
                Starting around 3 years ago, Paula became a co-chair of the
                Lisle Township Food Pantry Vegetable Garden. At the time the
                garden was in need of some additional TLC and thanks to the
                volunteers who gave their time, the garden was producing in no
                time.
              </p>
              <p className='philanthropyParagraph'>
                All harvested vegetables are donated to the Food Pantry that
                helps families in need and makes sure they are able to eat fresh
                vegetables. Year after year Paula has been so proud of the hard
                work put into the garden and how much it produces for people in
                need.
              </p>
              <p className='philanthropyParagraph'>
                In 2018 alone, the garden produced over 1,600 pounds of fresh
                vegetables. Due to the success of the garden, as a
                representative of all of the volunteers, Paula received multiple
                awards. In 2019, the Village of Lisle awarded the Community
                Recognition Award and the Lisle Township awarded the Township
                Recognition Award.
              </p>
            </div>
          </div>
          <div className='philanthropySectionContainer'>
            <div className='philanthropyParagraphContainer'>
              <p className='philanthropyParagraph'>
                Paula has proudly been a volunteer for PADS (Public Action to
                Deliver Shelter) for 20+ years. During her volunteer times Paula
                worked to assist people who have ended up in a very difficult
                life situation. She helped set up eating and sleeping areas at
                the host location, prepared food ahead of time, served meals,
                and cleaned up at the end of the event.
              </p>
            </div>
            <div className='philanthropyImgContainer'>
              <img
                className='philanthropyImg'
                src={pads1}
                alt='Paula and a friend going through training at PADS (Public Action to Deliver Shelter)'
              />
            </div>
          </div>
          <div className='philanthropySectionContainer'>
            <div className='philanthropyImgContainer'>
              <img
                className='philanthropyImg'
                src={hsoLogo}
                alt='HSO (Home and School Organization) Logo'
              />
            </div>
            <div className='philanthropyParagraphContainer'>
              <p className='philanthropyParagraph'>
                Paula took part in the Lisle HSO (Home and School Organization)
                for 18 years and during her time there she served on numerous
                committees. The Fine Arts Committee worked to provide
                educational cultural experiences to students. The Clothing and
                Toy Resale Committee organized a twice a year resale event that
                was always a huge success. Paula also served on the Senior
                Banquet Committee and Senior Scholarship Committee.
              </p>
              <p className='philanthropyParagraph'>
                Paula is also involved in her church and volunteered as a Sunday
                School Teacher while her children were younger. During this time
                she taught children in between the grades of elementary school
                and junior high school.
              </p>
            </div>
          </div>
          <div className='philanthropySectionContainer'>
            <div className='philanthropyParagraphContainer'>
              <p className='philanthropyParagraph'>
                During her children’s younger ages Paula volunteered as a pack
                leader in the Cub Scouts and Girl Scouts. She worked to help
                guide the children in her care to be the best version of
                themselves at the time and helped prepare them for life as they
                grew up.
              </p>
            </div>
            <div className='philanthropyImgContainer2'>
              <img
                className='philanthropyImg2'
                src={packLeader}
                alt='Paula in uniform as a Cub Scouts den mother'
              />
            </div>
          </div>
          <div className='philanthropySectionContainer'>
            <div className='philanthropyImgContainer2'>
              <img
                className='philanthropyImg2'
                src={roadwayPetition}
                alt='Paula speaking at a Village of Lisle board meeting'
              />
            </div>
            <div className='philanthropyParagraphContainer'>
              <p className='philanthropyParagraph'>
                In 1994, as a concerned mother and citizen, Paula took notice of
                the poor quality and safety of the roads in her neighborhood. So
                she organized a petition to ask the Village of Lisle to use the
                same roadway maintenance materials and technique on all roads
                across the entire village, instead of having different programs
                for different income neighborhoods. Paula collected signatures
                and spoke in front of the village board to bring change to a
                much needed situation.
                <br />
                Thanks to this hard work the village implemented a street
                rehabilitation program which is still in effect today.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
