import React, { Component } from "react";
import "./Gallery.css"
import { SRLWrapper } from "simple-react-lightbox";


const Gallery = ({images}) => {


    return (
      
      <SRLWrapper>
        <div className="background">
        <h1 className="g-title">GALLERY</h1>
        <div className="gallery-container"> 
          <div className="thumbs">
            {(images.map(image => (
              <img src={image.img} className="imgSmll"/>
              
            )))}
          </div>

      </div>
     </div>
      </SRLWrapper>
    );
  }


export default Gallery;