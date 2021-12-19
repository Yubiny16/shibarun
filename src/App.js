import './App.css';
import React, { useState, useEffect } from 'react'
import { Link } from "react-scroll";
// import {ReactComponent as EcosystemDiagram} from './res/ecosystem_diagram.svg';
// import {ReactComponent as RoadmapDiagram} from './res/roadmap_diagram.svg';
// import {ReactComponent as FeaturesDiagram} from './res/features_diagram.svg';
import EcosystemDiagram from './res/ecosystem_diagram.svg';
import RoadmapDiagram from './res/roadmap_diagram.svg';
import FeaturesDiagram from './res/features_diagram.svg';
import ShibaTrio from './res/shiba_trio.png';
import LargeLogo from './res/logo_large.png';
import SmallLogo from './res/logo_small.png';
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
          offset={-100} duration={500}><img src={SmallLogo} alt="Shiba Run Logo"/>
        </Link>
        {width > 1024 ?
          <div className="header-links">
            <Link className="header-item" activeClass="active" to="features" spy={true} smooth={true} offset={-100}duration={500}>Features</Link>
            <Link className="header-item" activeClass="active" to="ecosystem" spy={true} smooth={true} offset={-100} duration={500} >Ecosystem</Link>
            <Link className="header-item" activeClass="active" to="roadmap" spy={true} smooth={true} offset={-100} duration={500}>Roadmap</Link>
            <img className="header-item header-social-btn" src={DiscordLogo} alt="Discord Btn" />
            <img className="header-item header-social-btn" src={TwitterLogo} alt="Twitter Btn" />
            <button className="header-item whitepaper-btn" href="https://yubiny16.gitbook.io/shiba-run-whitepaper/">Whitepaper</button>
          </div> :
          <div className="header-links">
            <img className="header-item header-item-mobile header-social-btn" src={DiscordLogo} alt="Discord Btn" />
            <img className="header-item header-item-mobile header-social-btn" src={TwitterLogo} alt="Twitter Btn" />
            <button className="whitepaper-btn header-item header-item-mobile  whitepaper-btn-mobile" href="https://yubiny16.gitbook.io/shiba-run-whitepaper/">Whitepaper</button>
          </div>
        }
      </div>
      <div id="main" className="main-container">
        <div className="main-content-wrapper main-text-wrapper">
          <div className="main-logo-wrapper">
            <img src={LargeLogo} alt="Shiba Run Logo" />
          </div>
            {width > 1024 ? 
              <div className="main-description">
                <p className="main-paragraph">Shibarun is a digital dog racing P2E game where anyone can own, race, and breed NFT Shibas!</p>
                <button className="primary-btn">MINT SOON!</button>
              </div> :
              <div className="main-description main-description-mobile">
                <p className="main-paragraph main-paragraph-mobile">Shibarun is a digital dog racing P2E game where anyone can own, race, and breed NFT Shibas!</p>
                <button className="primary-btn primary-btn-mobile">MINT SOON!</button>
              </div>
            }
        </div>
        <div className="main-content-wrapper">
          <img src={ShibaTrio} alt="Image of three shibas" />
        </div>
      </div>
      <div id="welcome" className="welcome-container">
        <div className="welcome-content-wrapper">
          <img src={ShibaTrio} alt="Image of three shibas" />
        </div>
        <div className="welcome-content-wrapper welcome-text-wrapper">
          {width > 1024 ? 
            <div className="welcome-descriptions">
              <h2 className="welcome-section-title">WELCOME!</h2>
              <p className="welcome-paragraph">
                Shibarun is a play to earn (P2E)
                tokens based on their game play
                tokens based on their was she all
                their meme-inspired non-fungible
                token (NFT) Shibas.
              </p> 
            </div>:
            <div className="welcome-descriptions">
              <h2 className="welcome-section-title welcome-section-title-mobile">WELCOME!</h2>
              <p className="welcome-paragraph welcome-paragraph-mobile">
                Shibarun is a play to earn (P2E)
                tokens based on their game play
                tokens based on their was she all
                their meme-inspired non-fungible
                token (NFT) Shibas.
              </p> 
            </div>
          }
        </div>
      </div>
      <div id="features" className="features-container">
        <img src={FeaturesDiagram} alt="Features Diagram" />
        {/* <FeaturesDiagram id="features" /> */}
      </div>
      <div id="ecosystem" className="ecosystem-container">
        <img src={EcosystemDiagram} alt="Features Diagram" />
        {/* <EcosystemDiagram id="ecosystem" /> */}
      </div>
      <div id="roadmap" className="roadmap-container">
        <img src={RoadmapDiagram} alt="Features Diagram" />
        {/* <RoadmapDiagram id="roadmap" /> */}
      </div>
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
