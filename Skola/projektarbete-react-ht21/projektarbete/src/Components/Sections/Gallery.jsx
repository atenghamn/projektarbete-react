import React, { Component } from "react";
import "./Gallery.css"
import imageOne from "./../Images/_dsf5999.jpg";
import imageTwo from "./../Images/_DSF4569.jpg";
import imageThree from "./../Images/_DSF4934.jpg";
import imageFour from "./../Images/_DSF5230.jpg";
import imageFive from "./../Images/_DSF7595.jpg";
import imageSix from "./../Images/_DSF8929.jpg";
import imageSeven from "./../Images/_S1A1981.jpg";
import imageEight from "./../Images/_S1A4762.jpg";
import imageNine from "./../Images/_S1A8116.jpg";
import { SRLWrapper } from "simple-react-lightbox";


const Gallery = ({images}) => {


    return (
      <SRLWrapper>
        <div className="gallery-container"> 
          <div className="thumbs">
            {(images.map(image => (
              <img src={image.img} className="imgSmll"/>
            )))}
          </div>
      </div>

      </SRLWrapper>
    );
  }


export default Gallery;