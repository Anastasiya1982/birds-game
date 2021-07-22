import React from 'react';
import s from './Quastion.module.scss';
import defaultImg from '../../assets/image/bird.jpg'
import Image from "../Image/Image";
import Title from "../Title/Title";
import birdsData from "../../birdData";



const Quastion=({win, section,randomId})=>{
    const imgSrc=win ? birdsData[section][randomId].image : defaultImg;
    const alt = win ? birdsData[section][randomId].name : 'imagOfBird';
    const title= win ? birdsData[section][randomId].name : '* * * * * *';

    return (
        <div className={s.questionContainer}>
                <Image image={imgSrc} alt={alt}/>
            <div className={s.content}>
               <Title title={title}/>
                 <div className={s.contentAudio}>
                 <audio src={birdsData[section][randomId].audio} controls preload="auto" className={s.audioItem} />
                </div>
            </div>
        </div>
    )
}
export default Quastion;
