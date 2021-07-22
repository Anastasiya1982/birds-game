import React from 'react';
import s from './Image.module.scss';


const Image = ({ image, alt }) => (
    <div className={s.birdImg}>
         <img  src={image} alt={alt}/>
    </div>
);


export default Image;
