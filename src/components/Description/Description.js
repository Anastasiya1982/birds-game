import React from 'react';
import './Description.scss';
import Image from "../Image/Image";
import Title from "../Title/Title";
import DescriptionInfo from "./DescriptionInfo/DescriptionInfo";
import birdsData from "../../birdData";
import birdsSount from "../../assets/audio/success.mp3";
import Subtitle from "../Subtitle/Subtitle";

const Details = ({ selected, id, section }) => {
    const styleTip = {
        display: selected ? 'none' : 'block',
    };

    const elem=(
        <div className='description-content'>
            <div className='description-content__preview'>
                <Image
                    image={birdsData[section][1].image}
                    alt={birdsData[section][1].name}
                />
                <div className='description-content__preview-info'>
                    <Title title={birdsData[section][1].name}/>
                    <Subtitle subtitle={birdsData[section][1].species}/>
                    <audio src={birdsSount} controls preload="auto" className='audio-item'/>
                </div>

            </div>

            <DescriptionInfo text={birdsData[section][1].description}/>

        </div>
    )




    return (
           selected ? elem
                :<div
                    className="instruction"
                    style={styleTip}
                >
                    <div className='instruction__content' >Послушайте плеер.</div>
                    <div className='instruction__content'>Выберите птицу из списка</div>
                </div>

    );
};



export default Details;
