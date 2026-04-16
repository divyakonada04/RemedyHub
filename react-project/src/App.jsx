import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import SkinRemedies from './pages/SkinRemedies';
import HairRemedies from './pages/HairRemedies';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Search from './components/Search';
import GuidePage from './pages/GuidePage';
import './App.css';

function App()
{
  return(
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/skin" element={<SkinRemedies/>}/>
        <Route path="/hair" element={<HairRemedies/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/search" element={<Search/>}/>
        <Route path="/guide" element={<GuidePage/>}/>
      </Routes>
    </div>
  )
}
export default App;