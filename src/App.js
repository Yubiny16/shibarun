import './App.css';
import React, { useState, useEffect } from 'react'
import { Link } from "react-scroll";
// import {ReactComponent as EcosystemDiagram} from './res/ecosystem_diagram.svg';
// import {ReactComponent as RoadmapDiagram} from './res/roadmap_diagram.svg';
// import {ReactComponent as FeaturesDiagram} from './res/features_diagram.svg';
import EcosystemDiagram from './res/ecosystem_diagram.svg';
import RoadmapDiagram from './res/roadmap_diagram.svg';
import FeaturesDiagram from './res/features_diagram.svg';
import TeamDiagram from './res/team_diagram.svg';

import ShibaLookingUp from './res/shibas/shiba_looking_up.png';

import Solana from './res/solana.png';
import Shibas from './res/shibas/test.svg';
import ShibaTrio from './res/shiba_trio.png';
import LargeLogo from './res/logo_large.png';

import DiscordLogo from './res/discord_logo.png';
import TwitterLogo from './res/twitter_logo.png';

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
      <div className="header">
        <Link className="header-logo" activeClass="active" to="main" spy={true} smooth={true}
          offset={-100} duration={500}><img src={LargeLogo} alt="Shiba Run Logo"/>
        </Link>
        {width > 1024 ?
          <div className="header-links">
            <Link className="header-item" activeClass="active" to="about" spy={true} smooth={true} offset={-100}duration={500}>About</Link>
            <Link className="header-item" activeClass="active" to="features" spy={true} smooth={true} offset={-100}duration={500}>Features</Link>
            <Link className="header-item" activeClass="active" to="ecosystem" spy={true} smooth={true} offset={-100} duration={500} >Ecosystem</Link>
            <Link className="header-item" activeClass="active" to="roadmap" spy={true} smooth={true} offset={-100} duration={500}>Roadmap</Link>
            <Link className="header-item" activeClass="active" to="team" spy={true} smooth={true} offset={-100} duration={500}>Team</Link>
            <a href="https://discord.gg/shibarun"><img className="header-item header-social-btn" src={DiscordLogo} alt="Discord Btn" /></a>
            <a href="https://twitter.com/ShibaRunProject"><img className="header-item header-social-btn" src={TwitterLogo} alt="Twitter Btn" /></a>
            <a className="header-item whitepaper-btn" href="https://shiba-run.gitbook.io/shiba-run-whitepaper/">Whitepaper</a>
          </div> :
          <div className="header-links">
            <img className="header-item header-item-mobile header-social-btn" src={DiscordLogo} alt="Discord Btn" />
            <img className="header-item header-item-mobile header-social-btn" src={TwitterLogo} alt="Twitter Btn" />
            <a className="whitepaper-btn header-item header-item-mobile  whitepaper-btn-mobile" href="https://shiba-run.gitbook.io/shiba-run-whitepaper/">Whitepaper</a>
          </div>
        }
      </div>
      {width > 1024 ? 
        <div id="welcome" className="welcome-container welcome-scrolling-image-container">
          <div className="welcome-scrolling-image"></div>
          <div className="welcome-content-wrapper">
            <div className="welcome-image-wrapper">
              <img src={ShibaTrio} alt="Image of three shibas" />
            </div>
            <div className="welcome-descriptions">
              <h2 className="welcome-section-title">WELCOME!</h2>
              <p className="welcome-paragraph">
                Shiba Run is a play-to-earn (P2E) dog racing game where players earn $Bark tokens based on their game play. Players compete in shiba races with their meme-inspired NFT Shibas!
              </p> 
              <button className="primary-btn">MINT SOON!</button>
              <div className="welcome-solana"><img src={Solana} /></div>
            </div> 
          </div>  
        </div> : 
        <div id="welcome" className="welcome-container welcome-scrolling-image-container">
          <div className="welcome-scrolling-image welcome-scrolling-image-mobile"></div>
          <div className="welcome-content-wrapper">
            <div  className="welcome-image-wrapper ">
              <img src={ShibaTrio} alt="Image of three shibas" />
            </div>
            <div className="welcome-descriptions">
              <h2 className="welcome-section-title welcome-section-title-mobile">WELCOME!</h2>
              <p className="welcome-paragraph welcome-paragraph-mobile">
                Shiba Run is a play-to-earn (P2E) dog racing game where players earn $Bark tokens based on their game play. Players compete in shiba races with their meme-inspired NFT Shibas!
              </p> 
              <button className="primary-btn primary-btn-mobile">MINT SOON!</button>
              <div className="welcome-solana"><img src={Solana} /></div>
            </div>
          </div>
        </div>
      }
      {width > 1024 ? 
      <div id="about" className="main-container main-container">
        <div className="main-content-wrapper main-text-wrapper">
          <div className="main-logo-wrapper">
            <h2 className="about-section-title">About</h2>
          </div>
          <div className="main-description">
            <p className="main-paragraph">Shiba Run is a P2E digital dog racing game where players own, race, and breed NFT Shibas!</p>
            {/* <button className="primary-btn">MINT SOON!</button> */}
          </div>
        </div>
        <div className="main-content-wrapper">
          <img src={Shibas} alt="Image of three shibas" />
        </div>
      </div> : 
      <div id="main" className="main-container main-container-mobile">
        <div className="main-content-wrapper main-text-wrapper">
          <div className="main-logo-wrapper">
          <h2 className="about-section-title about-section-title-mobile">About</h2>
          </div>
          <div className="main-description main-description-mobile">
            <p className="main-paragraph main-paragraph-mobile">Shiba Run is a P2E digital dog racing game where players own, race, and breed NFT Shibas!</p>
            {/* <button className="primary-btn primary-btn-mobile">MINT SOON!</button> */}
          </div>
        </div>
        <div className="main-content-wrapper">
          <img src={Shibas} alt="Image of three shibas" />
        </div>
      </div>
      }
      {width > 1024 ? 
        <div id="features" className="features-container">
          <img src={FeaturesDiagram} alt="Features Diagram" />
        </div> :
        <div id="features" className="features-container features-container-mobile">
          <img src={FeaturesDiagram} alt="Features Diagram" />
        </div>
      }
      {width > 1024 ? 
        <div id="ecosystem" className="ecosystem-container">
          <img src={EcosystemDiagram} alt="Ecosystem Diagram" />
        </div> :
        <div id="ecosystem" className="ecosystem-container ecosystem-container-mobile">
          <img src={EcosystemDiagram} alt="Ecosystem Diagram" />
        </div>
      }
      {width > 1024 ? 
        <div id="roadmap" className="roadmap-container">
          <img src={RoadmapDiagram} alt="Features Diagram" />
        </div> :
        <div id="roadmap" className="roadmap-container roadmap-container-mobile">
          <img src={RoadmapDiagram} alt="Features Diagram" />
        </div>
      }
      {width > 1024 ? 
        <div id="team" className="team-container">
          <img src={TeamDiagram} alt="Features Diagram" />
        </div> :
        <div id="team" className="team-container team-container-mobile">
          <img src={TeamDiagram} alt="Team Diagram" />
        </div>
      }
      <div id="community" className="community">
        <div className="community-logo-wrapper">
          <img src={LargeLogo} alt="Shiba Run Logo" />
        </div>
        <div className="community-links-wrapper">
          <a href="https://discord.com/" target="_blank" className="community-link">
            <img src={DiscordLogo} alt="Shiba Run Logo" />
          </a>
          <a href="https://twitter.com/" target="_blank" className="community-link">
            <img src={TwitterLogo} alt="Shiba Run Logo" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
