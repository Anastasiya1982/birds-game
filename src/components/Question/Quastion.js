import React from "react";
import { useSelector } from "react-redux";

import Image from "../Image/Image";
import Title from "../Title/Title";
import defaultImg from "../../assets/image/bird.jpg";

import styles from "./Quastion.module.scss";

const Question = ({ win, randomId }) => {
    const birdsData = useSelector((state) => state.birdsData.birdsData);
    let currentSection = useSelector((state) => state.birdsData.section);

    const imgSrc = win ? birdsData[currentSection][randomId].image : defaultImg;
    const alt = win ? birdsData[currentSection][randomId].name : "imagOfBird";
    const title = win ? birdsData[currentSection][randomId].name : "* * * * * *";

    return (
        <div className={styles.questionContainer}>
            <Image image={imgSrc} alt={alt} />
            <div className={styles.content}>
                <Title title={title} />
                <div className={styles.contentAudio}>
                    <audio
                        src={birdsData[currentSection][randomId].audio}
                        controls
                        preload="auto"
                        className={styles.audioItem}
                    />
                </div>
            </div>
        </div>
    );
};
export default Question;
