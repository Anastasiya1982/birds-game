import React from 'react';
import './Quastion.scss';
import defaultImg from '../../assets/image/bird.jpg'
import Image from "../Image/Image";
import Title from "../Title/Title";
import birdsData from "../../birdData";



const Quastion=({win, section,randomId})=>{
    const imgSrc=win ? birdsData[section][randomId].image : defaultImg;
    const alt = win ? birdsData[section][randomId].name : 'imagOfBird';
    const title= win ? birdsData[section][randomId].name : '* * * * * *';

    return (
        <div className='question-container'>
                <Image image={imgSrc} alt={alt}/>
            <div className='question-container__content'>
               <Title title={title}/>
                 <div className="question-container__content-audio">
                 <audio src={birdsData[section][randomId].audio} controls preload="auto" className='audio-item' />
                </div>
            </div>
        </div>
    )
}
export default Quastion
