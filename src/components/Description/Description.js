import React from 'react';
import './Description.scss';
import Image from "../Image/Image";
import Title from "../Title/Title";
import DescriptionInfo from "./DescriptionInfo/DescriptionInfo";
import birdsData from "../../birdData";
import Subtitle from "../Subtitle/Subtitle";

const Details = ({selected, section}) => {
    const styleTip = {
        display: selected == null ? 'none' : 'block',
    };

    const elem = (
        <div className='description-content'>
            <div className='description-content__preview'>
                <Image
                    image={birdsData[section][selected].image}
                    alt={birdsData[section][selected].name}
                />
                <div className='description-content__preview-info'>
                    <Title title={birdsData[section][selected].name}/>
                    <Subtitle subtitle={birdsData[section][selected].species}/>
                    <audio src={birdsData[section][selected].audio} controls preload="auto" className='audio-item'/>
                </div>

            </div>

            <DescriptionInfo text={birdsData[section][selected].description}/>

        </div>
    )

    return (
        selected ? elem
            : <div
                className="instruction"
                style={styleTip}
            >
                <div className='instruction__content'>Послушайте плеер.</div>
                <div className='instruction__content'>Выберите птицу из списка</div>
            </div>

    );
};


export default Details;
