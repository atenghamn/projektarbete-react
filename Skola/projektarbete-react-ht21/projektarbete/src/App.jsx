import { useState } from 'react/cjs/react.development';
import './App.css';
import Hero from './Components/Sections/Hero';
import ImageGallery from './Components/Sections/ImageGallery';
import Ubisunt from './Components/Sections/Ubisunt';
import WeatherGuide from './Components/Sections/WeatherGuide';
import imageOne from "./Components/Images/_dsf5999.jpg";
import imageTwo from "./Components/Images/_DSF4569.jpg";
import imageThree from "./Components/Images/_DSF4934.jpg";
import imageFour from "./Components/Images/_DSF5230.jpg";
import imageFive from "./Components/Images/_DSF7595.jpg";
import imageSix from "./Components/Images/_DSF8929.jpg";
import imageSeven from "./Components/Images/_S1A1981.jpg";
import imageEight from "./Components/Images/_S1A4762.jpg";
import imageNine from "./Components/Images/_S1A8116.jpg";

function App() {


  const [images, setImages] = useState([]);
  return (
    <div className="App">
      
      <Hero/>
      <Ubisunt/>


      <WeatherGuide/>

      <ImageGallery/>
    </div>
  );
}

export default App;
