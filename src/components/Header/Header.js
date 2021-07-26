import React from "react";
import styles from "./Header.module.scss";
import Logo from "./Logo/Logo";
import Score from "../Score/Score";

export const Header=()=>{
	return(
		<div className={styles.header}>
			<Logo/>
			<Score />
		</div>
	);
};
