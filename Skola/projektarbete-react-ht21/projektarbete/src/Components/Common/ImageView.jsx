import "./ImageView.css";
import React from "react";

const ImageView = ({img}) => {



    return (
        <div className="image-bg">
            <img src={img.img} alt="picture" className="bigImage"/>
            <p className="image-des">{img.caption}</p>

        </div>
    );

};

export default ImageView;