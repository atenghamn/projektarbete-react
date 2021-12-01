import './App.css';
import Hero from './Components/Sections/Hero';
import ImageGallery from './Components/Sections/ImageGallery';
import WeatherGuide from './Components/Sections/WeatherGuide';

function App() {
  return (
    <div className="App">
      
      <Hero/>

      <WeatherGuide/>

      <ImageGallery/>
    </div>
  );
}

export default App;
