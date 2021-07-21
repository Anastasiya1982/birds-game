import React from 'react';
import './Quastion.scss';
import defaultImg from '../../assets/image/bird.jpg'
import Image from "../Image/Image";
import Title from "../Title/Title";
import birdsSount from '../../assets/audio/success.mp3'


const Quastion=(props)=>{
    return (
        <div className='question-container'>
                <Image image={!props.image ? defaultImg : props.image} alt={'img'}/>
            <div className='question-container__content'>
               <Title title={props.title}/>
                 <div className="question-container__content-audio">
                 <audio src={props.src} controls preload="auto" className='audio-item' />
                </div>
            </div>
        </div>
    )
}
export default Quastion
