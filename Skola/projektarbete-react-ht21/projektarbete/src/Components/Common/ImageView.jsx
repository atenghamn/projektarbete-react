import "./ImageView.css";


const ImageView = ({img, description}) => {



    return (
        <div className="image-bg">
            <img src={img} alt="picture" className="bigImage"/>
            <p className="image-des">{description}</p>

        </div>
    );

};

export default ImageView;