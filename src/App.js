import './App.css';
import FeaturedCarousel from './Component/FeaturedCarousel';
import Header from './Component/Header';
import MarketUpdateSlider from './Component/MarketUpdateSlider';
import Navbar from './Component/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Sidebar from './Component/Sidebar';
import NewsSection from './Component/NewsSection';
import Footer from './Component/Footer';
import MarketReleasesExample from './Component/MarketReleaseExample';
import PressReleaseExample from './Component/PressReleaseExample';
import VideoSection from './Component/VideoSection/VideoSection';
import CryptoInDepthSection from './Component/CryptoInDepthSection ';
import PressRelease2 from './Component/PressRelease2';

const News = () => <div className="p-4 text-xl">News Page</div>;
// other dummy components...

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Navbar />
        <MarketUpdateSlider/>
        {/* <FeaturedCarousel/> */}
{/* <Sidebar/> */}
<NewsSection/>
<PressRelease2/>
{/* <MarketReleasesExample/>
<PressReleaseExample/> */}
<CryptoInDepthSection/>
<VideoSection/>

<Footer/>
        <Routes>
          <Route path="/news" element={<News />} />

          <Route path="/indices" element={<div className="p-4 text-xl">Indices Page</div>} />

          {/* add other routes */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
