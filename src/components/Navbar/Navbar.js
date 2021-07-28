import React from "react";
import styles from "./Navbar.module.scss";
import {useSelector} from "react-redux";

const Navbar =()=>{
	const birdsSectionArray=useSelector(state => state.birdsData.birdsSectionArray);
    let currentSection=useSelector(state => state.birdsData.section);

	return(
		<div className={styles.sectionList}>
			{birdsSectionArray.map((section,index)=>{
				return  <div id={index}
					key={index}
					className={currentSection === index ? ` ${styles.section} ${styles.sectionActive}`:` ${styles.section}`}>{section}</div>;
			})}

		</div>

	);
};
export default Navbar;
