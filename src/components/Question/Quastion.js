import React from "react";

import styles from "./Quastion.module.scss";
import defaultImg from "../../assets/image/bird.jpg";
import Image from "../Image/Image";
import Title from "../Title/Title";

import birdsData from "../../birdData";
import {useSelector} from "react-redux";

const Question=({win, section,randomId})=>{
	const data=useSelector(state =>state.birdsData.birdsData );
	console.log(data);

	const imgSrc=win ? birdsData[section][randomId].image : defaultImg;
	const alt = win ? birdsData[section][randomId].name : "imagOfBird";
	const title= win ? birdsData[section][randomId].name : "* * * * * *";

	return (
		<div className={styles.questionContainer}>
			<Image image={imgSrc} alt={alt}/>
			<div className={styles.content}>
				<Title title={title}/>
				<div className={styles.contentAudio}>
					<audio src={birdsData[section][randomId].audio} controls preload="auto" className={styles.audioItem} />
				</div>
			</div>
		</div>
	);
};
export default Question;
