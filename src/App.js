import './App.css';
import {ReactComponent as EcosystemDiagram} from './res/ecosystem_diagram.svg';
import {ReactComponent as RoadmapDiagram} from './res/roadmap_diagram.svg';
import {ReactComponent as FeaturesDiagram} from './res/features_diagram.svg';
import ShibaTrio from './res/shiba_trio.png';
import LargeLogo from './res/logo_large.png';
import SmallLogo from './res/logo_small.png';
import DiscordLogo from './res/discord_logo.png';
import TwitterLogo from './res/twitter_logo.png';

function App() {
  return (
    <div className="app">
      <div className="header">
        <div className="header-logo">
          <img src={SmallLogo} alt="Shiba Run Logo" />
        </div>
        <div className="header-links">
          <a href="#welcome">Welcome</a>
          {/* <a href="#features">Features</a>
          <a href="#ecosystem">Ecosystem</a>
          <a href="#roadmap">Roadmap</a>
          <a href="#Community">Community</a>
          <a href="#">Whitepaper</a> */}
        </div>
      </div>
      <div className="welcome-container">
        <div className="welcome-content-wrapper welcome-text-wrapper">
          <div className="welcome-logo-wrapper">
            <img src={LargeLogo} alt="Shiba Run Logo" />
          </div>
          <div className="welcome-descriptions">
            <p>Shibarun is a digital dog racing P2E game where anyone can own, race, and breed NFT Shibas!</p>
            <button>MINT SOON!</button>
          </div>
        </div>
        <div className="welcome-content-wrapper">
          <img src={ShibaTrio} alt="Image of three shibas" />
        </div>
      </div>
      <div id="welcome" className="welcome-container">
        <div className="welcome-content-wrapper">
          <img src={ShibaTrio} alt="Image of three shibas" />
        </div>
        <div className="welcome-content-wrapper welcome-text-wrapper">
          <div className="welcome-descriptions">
            <h2>WELCOME!</h2>
            <p>
              Shibarun is a play to earn (P2E)
              tokens based on their game play
              tokens based on their was she all
              their meme-inspired non-fungible
              token (NFT) Shibas.
            </p>
          </div>
        </div>
      </div>
      <FeaturesDiagram id="features" />
      <EcosystemDiagram id="ecosystem" />
      <RoadmapDiagram id="roadmap" />
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
