import React from "react";

import styles from "./Description.module.scss";

import Image from "../Image/Image";
import Title from "../Title/Title";
import Subtitle from "../Subtitle/Subtitle";
import birdsData from "../../birdData";



const Description = ({selectBird, section}) => {

	return (
		!selectBird ? <div
			className={styles.instruction}
		>
			<div className={styles.instructionContent}>Послушайте плеер.</div>
			<div className={styles.instructionContent}>Выберите птицу из списка</div>
		</div>
			:(<div className={styles.descriptionContent}>
				<div className={styles.preview}>
					<Image
						image={birdsData[section][selectBird].image}
						alt={birdsData[section][selectBird].name}
					/>
					<div className={styles.previewInfo}>
						<Title title={birdsData[section][selectBird].name}/>
						<Subtitle subtitle={birdsData[section][selectBird].species}/>
						<audio src={birdsData[section][selectBird].audio} controls preload="auto" className={styles.audioItem}/>
					</div>
				</div>
				<p className={styles.description}>
					{birdsData[section][selectBird].description}
			    </p>

			</div>)

	);
};


export default Description;
