import React from 'react';
import "./ImageViewSmall.css";


const ImageViewSmall = ({img}) => {



    return (
        <div className="image-sml">
            <img src={img} alt="picture" className="smlImage"/>

        </div>
    );

};

export default ImageViewSmall;