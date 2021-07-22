import React from 'react';
import './Description.scss';
import Image from "../Image/Image";
import Title from "../Title/Title";
import DescriptionInfo from "./DescriptionInfo/DescriptionInfo";
import birdsData from "../../birdData";
import Subtitle from "../Subtitle/Subtitle";

const Details = ({selected, section}) => {


    return (
        selected==null ? <div
                className="instruction"
            >
                <div className='instruction__content'>Послушайте плеер.</div>
                <div className='instruction__content'>Выберите птицу из списка</div>
            </div>
            :(<div className='description-content'>
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

            </div>)

    );
};


export default Details;
