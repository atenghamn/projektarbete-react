import React, { Component } from "react";


const Reflections = ({images, children}) => {

console.log("KOmmer jag hit?");


    return (
        <div>
          

            <div className="thumbs">
            {(images.map(image => (
              <img src={image.img} className="imgSmll"/>
              
            )))}
          </div>




        </div>
    )
};

export default Reflections;