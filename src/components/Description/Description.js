import React from "react";

import styles from "./Description.module.scss";

import Image from "../Image/Image";
import Title from "../Title/Title";
import Subtitle from "../Subtitle/Subtitle";
import birdsData from "../../birdData";



const Description = ({selected, section}) => {

	return (
		selected===null ? <div
			className={styles.instruction}
		>
			<div className={styles.instructionContent}>Послушайте плеер.</div>
			<div className={styles.instructionContent}>Выберите птицу из списка</div>
		</div>
			:(<div className={styles.descriptionContent}>
				<div className={styles.preview}>
					<Image
						image={birdsData[section][selected].image}
						alt={birdsData[section][selected].name}
					/>
					<div className={styles.previewInfo}>
						<Title title={birdsData[section][selected].name}/>
						<Subtitle subtitle={birdsData[section][selected].species}/>
						<audio src={birdsData[section][selected].audio} controls preload="auto" className={styles.audioItem}/>
					</div>
				</div>
				<p className={styles.description}>
					{birdsData[section][selected].description}
			    </p>

			</div>)

	);
};


export default Description;
