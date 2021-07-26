import React from "react";
import styles from "./Navbar.module.scss";

const Navbar =(props)=>{
	const birdsSectionArray=["Разминка","Воробьиные","Лесные птицы","Певчие птицы","Хищные птицы","Морские птицы"];

	return(
		<div className={styles.sectionList}>
			{birdsSectionArray.map((section,index)=>{
				return  <div id={index}
					key={index}
					className={props.section === index ? ` ${styles.section} ${styles.sectionActive}`:` ${styles.section}`}>{section}</div>;
			})}

		</div>

	);
};
export default Navbar;
