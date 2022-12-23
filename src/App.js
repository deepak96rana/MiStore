
import { BrowserRouter as Router , Route, Routes} from 'react-router-dom';
import './App.css';
import Heading from './Components/Heading';
import HotAccesoriesmenu from './Components/HotAccesoriesmenu';
import HotAccessories from './Components/HotAccessories';
import Navbar from './Components/Navbar';
import Offers from './Components/Offers';
import Prenavbar from './Components/Prenavbar';
import Slider from './Components/Slider';
import Starproduct from './Components/Starproduct';
import  data from "./Data/data.json";

function App() {
  return (
   <Router>
   
    <Prenavbar/>
    <Navbar/>
    <Slider start={data.banner.start}/>
    <Offers offers ={data.offer}/>
    <Heading text ="STAR PRODUCT"/>
    <Starproduct starproduct={data.starProduct}/>
    <Heading text ="HOT ACCESSORIES"/>
    <HotAccesoriesmenu/>

    <Routes>
    <Route exact path='/music' element={ <HotAccessories music = {data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music}/>} />
    
    <Route exact path='/smartDevice' element={ <HotAccessories smartDevice = {data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice}/>} />
    <Route exact path='/home' element={ <HotAccessories home = {data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home}/>} />
    <Route exact path='/lifestyle' element={ <HotAccessories lifeStyle = {data.hotAccessories.lifeStyle} lifeStyleCover={data.hotAccessoriesCover.lifeStyle}/>} />
    <Route exact path='/mobileAccessories' element={ <HotAccessories mobileAccessories= {data.hotAccessories.mobileAccessories} smartDeviceCover={data.hotAccessoriesCover.mobileAccessories}/>} />
    
    </Routes>
   
    
    </Router>
   
     
  );
}

export default App;
