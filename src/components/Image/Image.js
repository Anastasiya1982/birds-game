import React from 'react';
import './Image.scss';


const Image = ({ image, alt }) => (
    <div className="bird-img">
         <img  src={image} alt={alt}/>
    </div>
);


export default Image;
