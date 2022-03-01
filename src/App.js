import './App.css';
import React, { useState, useEffect } from 'react'
import { Link } from "react-scroll";
// import {ReactComponent as EcosystemDiagram} from './res/ecosystem_diagram.svg';
// import {ReactComponent as RoadmapDiagram} from './res/roadmap_diagram.svg';
// import {ReactComponent as FeaturesDiagram} from './res/features_diagram.svg';

import ShibasSection from './res/backgrounds/shibaBackgroundImage.png';
import StadiumSection from './res/backgrounds/stadiumBackgroundImage.png';
import FeaturesSection from './res/backgrounds/featuresBackgroundImage.png';
import EcosystemSection from './res/backgrounds/ecosystemBackgroundImage.png';
import RoadmapSection from './res/backgrounds/roadmapBackgroundImage.png';
import TeamSection from './res/backgrounds/teamBackgroundImage.png';

import ShibasSectionMobile from './res/backgrounds_mobile/shibaSection.png';
import StadiumSectionMobile from './res/backgrounds/stadiumBackgroundImage.png';
import FeaturesSectionMobile from './res/backgrounds/featuresBackgroundImage.png';
import EcosystemSectionMobile from './res/backgrounds/ecosystemBackgroundImage.png';
import RoadmapSectionMobile from './res/backgrounds/roadmapBackgroundImage.png';
import TeamSectionMobile from './res/backgrounds/teamBackgroundImage.png';

//components
import TeamCard from './components/teamCard';
import RoadmapCard from './components/roadmapCard';
import StadiumCard from './components/stadiumCard';
import FeatureCard from './components/featureCard';

//images
import MainShibas from './res/shibas/dogs_main.png';
import MintButton from './res/buttons/MintButton.png';
import shiba01 from './res/shibas/shiba_01.png';
import shiba02 from './res/shibas/shiba_02.png';
import shiba03 from './res/shibas/shiba_03.png';
import shiba04 from './res/shibas/shiba_04.png';
import shiba05 from './res/shibas/shiba_05.png';

import shibaCard1 from './res/shibaSection/shibaCard1.png';

//shiba
import running_animation from './res/shibas/running.gif'

//stadium
import stadiumImage from './res/stadiumSection/stadiumImage.png';

//feature
import feature1 from './res/featureSection/feature1.png';
import feature2 from './res/featureSection/feature2.png';
import feature3 from './res/featureSection/feature3.png';

//ecosystem
import ecosystem1 from './res/ecosystemSection/ecosystem1.png';

//roadmap
import roadmap01 from './res/roadmap/01.png';
import roadmap02 from './res/roadmap/02.png';
import roadmap03 from './res/roadmap/03.png';
import roadmap04 from './res/roadmap/04.png';


import MainLogo from './res/logos/main_logo.png';
import SecondaryLogo from './res/logos/secondary_logo.png';
import DiscordLogo from './res/discord_logo.png';
import TwitterLogo from './res/twitter_logo.png';

import DiscordLogoColor from './res/logos/discord_color_logo.png';
import TwitterLogoColor from './res/logos/twitter_color_logo.png';


function App() {
  const [width, setWindowWidth] = useState(0)
   useEffect(() => { 

     updateDimensions();

     window.addEventListener("resize", updateDimensions);
     return () => 
       window.removeEventListener("resize",updateDimensions);
    }, [])
    const updateDimensions = () => {
      const width = window.innerWidth
      setWindowWidth(width)
    }

  return (
    <div className="app">
      <div id="main" className="main-container" style={width <= 1024 ? {height: 'auto', width: '100%', paddingBottom: 150} : { paddingBottom: 200}}>
        <div className="header">
          {width > 1024 ?
            <React.Fragment>
              <Link className="header-logo" activeClass="active" to="main" spy={true} smooth={true}
                offset={-100} duration={500}><img src={SecondaryLogo} alt="Shiba Run Logo"/>
              </Link>
              <div className="header-links" style={{}}>
                <Link className="header-item" activeClass="active" to="shibas" spy={true} smooth={true} offset={-100}duration={500}>NFT Shibas</Link>
                <Link className="header-item" activeClass="active" to="stadiums" spy={true} smooth={true} offset={-100}duration={500}>NFT Stadiums</Link>
                <Link className="header-item" activeClass="active" to="features" spy={true} smooth={true} offset={-100} duration={500} >Features</Link>
                <Link className="header-item" activeClass="active" to="ecosystem" spy={true} smooth={true} offset={-100} duration={500}>Ecosystem</Link>
                <Link className="header-item" activeClass="active" to="roadmap" spy={true} smooth={true} offset={-100} duration={500}>Roadmap</Link>
                <Link className="header-item" activeClass="active" to="team" spy={true} smooth={true} offset={-100} duration={500}>Core Team</Link>
              </div> 
              <div className="header-buttons">
                <a href="https://discord.gg/shibarun"><img className="header-item header-social-btn" src={DiscordLogoColor} alt="Discord Btn" /></a>
                <a href="https://twitter.com/ShibaRunProject"><img className="header-item header-social-btn" src={TwitterLogoColor} alt="Twitter Btn" /></a>
                <a className="header-item whitepaper-btn" href="https://shiba-run.gitbook.io/shiba-run-whitepaper/">Whitepaper</a>
              </div>
            </React.Fragment>
            :
            <React.Fragment>
            </React.Fragment>
          }
        </div>
        <div className="main-content-wrapper">
        {width > 1024 ?
          <React.Fragment>
            <img style={{width: "400px"}} src={MainLogo} alt="Main logo" />
            <div className="main-description aller-bold" style={{fontSize: '19px'}}>
              Shiba Run is a P2E Digital Dog Racing Game Where Players Own, Race, and Breed NFT Shibas!
            </div>
            <div>
              <img className="mint-button" src={MintButton} alt="Mint Button" />
              <img style={{width: 300, display: 'block', margin: 'auto'}} src={MainShibas} alt="main shibas"/>
            </div>
          </React.Fragment>:
          <React.Fragment>
            <img style={{width: "250px"}} src={MainLogo} alt="Main logo" />
            <div className="main-description aller-bold" style={{fontWeight: 'bold', fontSize: '12px', width: 250, marginTop: 20, marginBottom: 20}}>
              Shiba Run is a P2E Digital Dog Racing Game Where Players Own, Race, and Breed NFT Shibas!
            </div>
            <div>
              <img className="mint-button" style={{width: 190}} src={MintButton} alt="Mint Button" />
              <img style={{width: 200, display: 'block', margin: 'auto'}} src={MainShibas} alt="main shibas"/>
            </div>
          </React.Fragment>
        }
        </div>
      </div>
      {/* SHIBA SECTION */}
      {width > 1024 ?
        <div id="shibas" className="shibas-container" style={{width: '100%'}}>
          <img src={ShibasSection} alt="shibas background" />
        </div> :
        <div id="shibas" className="shibas-container" style={{width: '100%', backgroundColor: '#E2FAFF', textAlign: 'center'}}>
          <div style={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center'}}>
            <div className="aller-display" style={{color: '#3C2507', fontSize: 50, marginTop: 80, marginBottom: 26, fontWeight: 'bold'}}>NFT SHIBA</div>
            <div className="aller-rg" style={{width: '70%', color: '#8B7561'}}>Shiba Run is a play-to-earn (P2E) dog racing game where players earn $Bark tokens based on their game play.</div>
          </div>
          <img src={running_animation} style={{width: 300, margin: 'auto', marginBottom: 50, marginTop: 50}} />
          {/* <div className="mobile-scroller" style={{marginBottom: 0}}>
            <img src={shibaCard1} style={{width: 300, marginLeft: 40}} />
            <img src={shibaCard1} style={{width: 300}} />
            <img src={shibaCard1} style={{width: 300}} />
            <img src={shibaCard1} style={{width: 300}} />
          </div> */}
        </div>
      }
      {/* Stadium SECTION */}
      {width > 1024 ?
        <div id="stadiums" className="stadiums-container" style={{width: '100%'}}>
          <img src={StadiumSection} alt="stadiums background" />
        </div> :
        <div id="stadiums" className="stadiums-container">
          <div style={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center'}}>
            <div className="aller-display" style={{color: '#2C7751', fontSize: 50, marginTop: 80, marginBottom: 80, fontWeight: 'bold'}}>NFT STADIUMS</div>
            <img src={stadiumImage} />
            <div className="mobile-scroller" style={{marginBottom: 0, marginTop: 40}}>
              <StadiumCard style={{ padding: 50, backgroundColor: '#FFF8EE', 
                boxShadow: "1px 3px 1px #C4C4C4", width: 250, height: 300, borderRadius: 20, textAlign: 'left', marginLeft: 20 }}
                number={'01'}
                title={'Ownership'}
                description={'All shiba races are held in NFT \
                Stadiums owned by players. These \
                Stadiums will be airdropped to Gen0 Shiba holders before the launch \
                of the game.'}
              />
              <StadiumCard style={{ padding: 50, backgroundColor: '#FFF8EE', 
                boxShadow: "1px 3px 1px #C4C4C4", width: 250, height: 300, borderRadius: 20, textAlign: 'left' }}
                number={'01'}
                title={'Properties'}
                description={'Each stadium has properties like location,terrain type, distance, and number of lanes.'}
              />
              <StadiumCard style={{ padding: 50, backgroundColor: '#FFF8EE', 
                boxShadow: "1px 3px 1px #C4C4C4", width: 250, height: 300, borderRadius: 20, textAlign: 'left' }}
                number={'01'}
                title={'Shiba Racing'}
                description={'The racing algorithm is based on specific attributes of NFT Shibas and the Stadium as well as the interplay between the players to make the races fair, unpredictable and dynamic.'}
              />
            </div>
          </div>
        </div>
      }
      {/* Features SECTION */}
      {width > 1024 ?
        <div id="features" className="features-container" style={{width: '100%'}}>
          <img src={FeaturesSection} alt="features background" />
        </div>:
        <div id="features" className="features-container" style={{width: '100%'}}>
          <div style={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center'}}>
            <div style={{color: '#155A0A', fontSize: 50, marginTop: 80, marginBottom: 80, fontWeight: 'bold'}}>Features</div>
            <div style={{display: 'flex', flexDirection: 'column'}}>
              <FeatureCard 
                image={feature1} 
                title={'BREEDING'} 
                style={{ 
                  width: 300, 
                  height: 400, 
                  backgroundColor: 'white', 
                  borderRadius: 15, 
                  margin: 'auto', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  justifyContent: 'center', 
                  alignItems: 'center',
                  marginBottom: 50
                }}
                textStyle={{color: '#26E39B', fontSize: 24, fontWeight: 'bold', marginTop: 20}} 
                description={'Breed the next champion NFT shiba by mating two shibas together!'} 
              />
              <FeatureCard 
                image={feature2} 
                title={'SHIBA ACADEMY'} 
                style={{ 
                  width: 300, 
                  height: 400, 
                  backgroundColor: 'white', 
                  borderRadius: 15, 
                  margin: 'auto', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  justifyContent: 'center', 
                  alignItems: 'center',
                  marginBottom: 50
                }}
                textStyle={{color: '#FB9534', fontSize: 24, fontWeight: 'bold', marginTop: 20}}
                description={'Train your shibas by staking them to \
                different sets of training pools!'}
              />
              <FeatureCard 
                image={feature3} 
                title={'MARKETPLACE'} 
                style={{ 
                  width: 300, 
                  height: 400, 
                  backgroundColor: 'white', 
                  borderRadius: 15, 
                  margin: 'auto', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginBottom: 50
                }}
                textStyle={{color: '#197BF2', fontSize: 24, fontWeight: 'bold', marginTop: 20}}
                description={'Buy and sell NFTs via in-game marketplace or \
                any other secondary NFT marketplaces!'} 
              />
            </div>
          </div>
        </div>
      }
      {/* Ecosystem SECTION */}
      {width > 1024 ?
      <div id="ecosystem" className="ecosystem-container" style={{width: '100%'}}>
        <img src={EcosystemSection} alt="ecosystem background" />
      </div> :
      <div id="ecosystem" className="ecosystem-container" style={{width: '100%', backgroundColor: '#F6FFEF'}}>
        <div style={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center'}}>
          <div className="aller-display" style={{color: '#155A0A', fontSize: 50, marginTop: 80, marginBottom: 80, fontWeight: 'bold'}}>Ecosystem</div>
          <img src={ecosystem1} style={{margin: 'auto', marginBottom: 100}} />
        </div>
      </div>
      }
      {width > 1024 ?
      <div id="roadmap" className="roadmap-container" style={{width: '100%'}}>
        <div style={{ paddingTop: 150, paddingBottom: 150, marginLeft: 100, marginRight: 100}}>
          <div className="aller-display" style={{color: '#997343', fontSize: 50, alignSelf: 'flex-start', marginBottom: 80}}>ROADMAP</div>
          <div style={{display: 'flex'}}>
            <RoadmapCard
              style={{display: 'flex', flexDirection: 'column', width: 300, margin: 20}}
              image={roadmap01}
              title={'PHASE 00'}
              milestones={['Game Concept Creation', 'Whitepaper Creation', 'Shiba Run Website Launch', 'Social Media Launch', 'Gen0 Shiba NFT Presale', '$Bark token creation', 'NFT Shiba & $Bark Staking Pools Unlocked']}
            />
            <RoadmapCard
              style={{display: 'flex', flexDirection: 'column', width: 300, margin: 20, marginTop: 100}}
              image={roadmap02}
              title={'PHASE 01'}
              milestones={['Implement Breeding Smart Contracts', 'Simulation Race', 'Airdrop NFT Stadiums to Gen0 holders', 'Shiba Run BETA Launch for Gen0 Holders']}
            />
            <RoadmapCard
              style={{display: 'flex', flexDirection: 'column', width: 300, margin: 20}}
              image={roadmap03}
              title={'PHASE 02'}
              milestones={['Official Launch of Shiba Run', 'NFT Marketplace Open', 'Addition of NFT Skins & items']}
            />
            <RoadmapCard
              style={{display: 'flex', flexDirection: 'column', width: 300, margin: 20, marginTop: 100}}
              image={roadmap04}
              title={'PHASE 03'}
              milestones={['Release iOS & Android', 'Integrate 3rd Party Betting Solution', 'Ads Services Integration']}
            />
          </div>
        </div>
      </div> :
      <div id="roadmap" className="roadmap-container" >
        <div style={{paddingLeft: 20, paddingRight: 20, paddingTop: 120, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <div className="aller-display" style={{color: '#997343', fontSize: 50, marginBottom: 80}}>ROADMAP</div>
          <div>
            <RoadmapCard
              style={{display: 'flex', flexDirection: 'column'}}
              image={roadmap01}
              title={'PHASE 00'}
              milestones={['Game Concept Creation', 'Whitepaper Creation', 'Shiba Run Website Launch', 'Social Media Launch', 'Gen0 Shiba NFT Presale', '$Bark token creation', 'NFT Shiba & $Bark Staking Pools Unlocked']}
            />
            <RoadmapCard
              style={{marginTop: 25, marginLeft: 120, display: 'flex', flexDirection: 'column' }}
              image={roadmap02}
              title={'PHASE 01'}
              milestones={['Implement Breeding Smart Contracts', 'Simulation Race', 'Airdrop NFT Stadiums to Gen0 holders', 'Shiba Run BETA Launch for Gen0 Holders']}
            />
            <RoadmapCard
              style={{marginTop: 25, display: 'flex', flexDirection: 'column'}}
              image={roadmap03}
              title={'PHASE 02'}
              milestones={['Official Launch of Shiba Run', 'NFT Marketplace Open', 'Addition of NFT Skins & items']}
            />
            <RoadmapCard
              style={{marginTop: 25, marginLeft: 120, display: 'flex', flexDirection: 'column'}}
              image={roadmap04}
              title={'PHASE 03'}
              milestones={['Release iOS & Android', 'Integrate 3rd Party Betting Solution', 'Ads Services Integration']}
            />
          </div>
        </div>
      </div>
      }
      {width > 1024 ? 
      <div id="team" className="team-container">
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', paddingTop:150, marginLeft: 100, marginRight: 100 }}>
          <div className="aller-display" style={{color: '#236363', fontSize: 50, alignSelf: 'flex-start', marginBottom: 80, fontWeight: 'bold'}}>CORE TEAM</div>
          <div style={{}}>
            <div style={{display:'flex', flexDirection: 'row'}}>
              <TeamCard 
                image={shiba01} 
                name={'WHY.BE'} 
                title={'Project Manager'} 
                description={'Graduated from Yale University, Why.be is a serial entrepreneur with strong technical background and work experience in both BD and Product. Why.be is the project manager for Shiba Run.'} 
              />
              <TeamCard 
                image={shiba02} 
                name={'HARURU'} 
                title={'Blockchain Specialist'} 
                description={'Graduated from Stanford University, Haruru has been a crypto-enthusiast / on-chain analyst since 2017. Haruru is in charge of the tokenomics andthe launch of the $Bark token.'} 
              />
              <TeamCard 
                image={shiba03} 
                name={'TURRET'} 
                title={'Project Manager'} 
                description={'Graduated from Yale University, Why.be is a serial entrepreneur with strong technical background and work experience in both BD and Product. Why.be is the project manager for Shiba Run.'} 
              />
            </div>
            <div style={{display:'flex', flexDirection: 'row', marginBottom: 700}}>
              <TeamCard 
                image={shiba04} 
                name={'KIMCH ARTIST'} 
                title={'Art Director'} 
                description={'Kimch Premium Artist is a 3D graphic designer whohad worked at globally top-tier gaming companies.Kimch Premium Artist is the head art directorfor Shiba Run.'} 
              />
              <TeamCard 
                image={shiba05} 
                name={'JAYPEE'} 
                title={'Software Developer'} 
                description={'Graduated from Stanford with B.S in Computer Science andM.S in Statistics in 2017. Jaypee had worked at LinkedIn as a software developer until joining the Shiba Run Team as the head software developer.'} 
              />
            </div>
          </div>
        </div>
      </div> :
      <div id="team" className="team-container" >
        <div style={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <div className="aller-display" style={{color: '#236363', fontSize: 50, marginTop: 80, fontWeight: 'bold'}}>CORE TEAM</div>
          <div className="mobile-scroller">
            <TeamCard 
              image={shiba01} 
              name={'WHY.BE'} 
              title={'Project Manager'} 
              description={'Graduated from Yale University, Why.be is a serial entrepreneur with strong technical background and work experience in both BD and Product. Why.be is the project manager for Shiba Run.'} 
            />
            <TeamCard 
              image={shiba02} 
              name={'HARURU'} 
              title={'Blockchain Specialist'} 
              description={'Graduated from Stanford University, Haruru has been a crypto-enthusiast / on-chain analyst since 2017. Haruru is in charge of the tokenomics andthe launch of the $Bark token.'} 
            />
            <TeamCard 
              image={shiba03} 
              name={'TURRET'} 
              title={'Project Manager'} 
              description={'Communicator with expertise in strategic brand marketing. Turret has been active in the blockchain community since 2017 and is the head admin at one of the biggest NFT forums in South Korea'} 
            />
            <TeamCard 
              image={shiba04} 
              name={'KIMCH ARTIST'} 
              title={'Art Director'} 
              description={'Kimch Premium Artist is a 3D graphic designer whohad worked at globally top-tier gaming companies.Kimch Premium Artist is the head art directorfor Shiba Run.'} 
            />
            <TeamCard 
              image={shiba05} 
              name={'JAYPEE'} 
              title={'Software Developer'} 
              description={'Graduated from Stanford with B.S in Computer Science andM.S in Statistics in 2017. Jaypee had worked at LinkedIn as a software developer until joining the Shiba Run Team as the head software developer.'} 
            />
          </div>
        </div>
      </div>
      }
      <div className='community-container' style={{backgroundColor: '#4B3119', height: 250, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <div style={{width: '80%', display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: 50}}>
            <img src={SecondaryLogo} alt="Shiba Run Logo" style={{width: 150, marginRight: 80}}/>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
              <div style={{fontSize: 15, color: 'white', marginBottom: 20, fontWeight: 'bold'}}>JOIN OUR COMMUNITY</div>
              <div style={{flexDirection: 'row', display: 'flex'}}>
                <img style={{marginRight: 30, width: 35}} className="header-social-btn" src={DiscordLogo} alt="Discord Btn" />
                <img style={{width: 35}} className="header-social-btn" src={TwitterLogo} alt="Discord Btn" />
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
