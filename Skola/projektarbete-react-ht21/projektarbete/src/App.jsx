import React from 'react';
import { useState } from 'react/cjs/react.development';
import './App.css';
import Hero from './Components/Sections/Hero';
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
import imageTen from "./Components/Images/_DSF8438.jpg";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Gallery from './Components/Sections/Gallery';
import Reflections from './Components/Sections/Reflections';
import  {
  BrowserRouter as Router,
  Routes,
  Route, 
  Link
} from "react-router-dom";


function App() {


  const [images, setImages] = useState([
    {img: imageTen, caption: "Test"},
    {img: imageTwo, caption: "Test"},
    {img: imageThree, caption: "Test"},
    {img: imageFour, caption: "Test"},
    {img: imageFive, caption: "Test"},
    {img: imageSix, caption: "Test"},
    {img: imageSeven, caption: "Test"}, 
    {img: imageEight, caption: "Test"},
    {img: imageNine, caption: "Test"}
  ]);



  return (
    <div className="App">

<nav>
          <Link to="/">Home</Link>
          <Link to="./Components/Sections/Reflections">Reflections</Link>
        </nav>
      <Routes>
        <Route path="Home"  element={<App />}/>
        <Route path="Reflections" element={<Reflections images={images}/>} />
    </Routes>
      
      <Hero/>
      <Ubisunt/>

      <Gallery images={images}/>

      <WeatherGuide/>

    </div>
  );
}

export default App;
