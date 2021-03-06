import React from "react";
import { useSelector } from "react-redux";

import Image from "../Image/Image";
import Title from "../Title/Title";
import Subtitle from "../Subtitle/Subtitle";

import styles from "./Description.module.scss";

const Description = () => {
    const birdsData = useSelector((state) => state.birdsData.birdsData);
    let currentSection = useSelector((state) => state.birdsData.section);
    const selectBird = useSelector((state) => state.birdsData.selectedBird);

    return !selectBird && selectBird !== 0 ? (
        <div className={styles.instruction}>
            <div className={styles.instructionContent}>Послушайте плеер.</div>
            <div className={styles.instructionContent}>Выберите птицу из списка</div>
        </div>
    ) : (
        <div className={styles.descriptionContent}>
            <div className={styles.preview}>
                <Image
                    image={birdsData[currentSection][selectBird].image}
                    alt={birdsData[currentSection][selectBird].name}
                />
                <div className={styles.previewInfo}>
                    <Title title={birdsData[currentSection][selectBird].name} />
                    <Subtitle subtitle={birdsData[currentSection][selectBird].species} />
                    <audio
                        src={birdsData[currentSection][selectBird].audio}
                        controls
                        preload="auto"
                        className={styles.audioItem}
                    />
                </div>
            </div>
            <p className={styles.description}>{birdsData[currentSection][selectBird].description}</p>
        </div>
    );
};

export default Description;
