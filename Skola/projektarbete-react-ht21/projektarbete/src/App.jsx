import React from 'react';
import { useState } from 'react/cjs/react.development';
import './App.css';
import Hero from './Components/Sections/Hero';
import Ubisunt from './Components/Sections/Ubisunt';
import WeatherGuide from './Components/Sections/WeatherGuide';
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
    {img: imageTen, key: 1, caption: "In the middle of rush hour we had to get these photos for an upcomming theatershow. I was on parental leave but the job sounded to fun to pass down. While I directed the two actors wiht hoods over their heads, my then 1-yeard old daughter, played in the bakcground. A lot of people walked by. Nobody said anything."},
    {img: imageTwo, key: 2, caption: "While driving back from the Bergman museum in Fårö, Gotland i spotted theese fishing huts. Cliché as fuck..."},
    {img: imageThree, key: 3, caption: "I shot alot of actors over the years. It's a bit strange that actors often aren't very good at posing naturaly, instead they often wants direction on how to stand, and look. Sanne, is an amazingly talented actress that been seen in productions like the tv-series Bron.  She's one of few actors that can look sincere in a picture."},
    {img: imageFour, key: 4, caption: "Mattias a musician. A harmonica player. I shot this portrait of him a time after losing his son. Theres no more words to be said around this picture."},
    {img: imageFive, key: 5, caption: "A personal image. Made for myself. Driving back from my mom, I saw this house that I never seen. Got out, set up, pressed the shutter, drove off. A common ritual."},
    {img: imageSix, key: 6, caption: "Jmag's behid everything skateboardrelated in Sweden. Need a skatepard? Call Jmag! I shot a lot of photos of Jmag over the years, a lot of skateboard ads. While shoting this picture we had to carry the barrel from an nearby indutry, Jmag complained that his hands were itching after he carried the barrel. Maybe he's radioactive now..?"},
    {img: imageSeven, key: 7,  caption: "It's not easy raising children. Especially when you raise a daughter in sexist and often misogynic world. I often listen to the song Rebel Girl by Bikini Kill for some parental guidance. "}, 
    {img: imageEight, key: 8,  caption: "The only time I photographed north of Stockholm. The whole process of making an image becomes so much slower when it's minus fifteen degrees."},
    {img: imageNine, key: 9, caption: "Suddenly evertyhing aligns just perfectly and theres really nothing more to say than that. "}
  ]);



  return (
    <div className="App">

        <nav className="links">
          <Link to="/" className="link">Chapter 0</Link>
          <Link to="/ubisunt" className="link">Chapter 1</Link>
          <Link to="/gallery" className="link">Chapter 2</Link>
          <Link to="/reflections" className="link">Chapter 3</Link>
          <Link to="/weather" className="link">Chapter 4</Link>
         
  
        </nav>
        <Routes>
          <Route path="/" element={<Hero/>}/>
          <Route path="/Weather"  element={<WeatherGuide />}/>
          <Route path="/Reflections" element={ <Reflections images={images}/> } />
          <Route path="/Ubisunt" element={<Ubisunt />} />
          <Route path="/Gallery" element={<Gallery images={images}/>}/>
        </Routes>

    </div>
  );
}

export default App;
