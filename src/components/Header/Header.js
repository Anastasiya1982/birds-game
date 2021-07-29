import React from "react";
import styles from "./Header.module.scss";
import Logo from "./Logo/Logo";
import Score from "../Score/Score";
import Menu from "./Menu/Menu";

export const Header=()=>{
	return(
		<div className={styles.header}>
			<Logo/>
			<Score />
			<Menu/>
		</div>
	);
};
