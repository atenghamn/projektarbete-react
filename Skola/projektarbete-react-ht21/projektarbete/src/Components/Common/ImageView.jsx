import "./ImageView.css";
import React from "react";

const ImageView = ({img, key}) => {



    return (
        <div className="image-bg">
            <img src={img.img} alt="" key={img.key} className="bigImage"/>
            <p className="image-des">{img.caption}</p>

        </div>
    );

};

export default ImageView;