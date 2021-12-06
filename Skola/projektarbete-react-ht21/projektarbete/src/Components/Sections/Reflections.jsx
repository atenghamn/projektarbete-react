import React from "react";
import ImageView from "../Common/ImageView";
import "./Reflections.css";



const Reflections = ({images}) => {

    return (
        <div className="ref-bg"> 
          
            <div className="smlOnes">
              <h1 className="refTitle">REFLECTIONS</h1>
              {(images.map(image => (

                <div key={image.key} className="imgContainer">

                <ImageView img={image}></ImageView>
                </div>
                
              )))}
          </div>

        </div>
    )
};

export default Reflections;