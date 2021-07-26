import React from "react";

import styles from "./Logo.module.scss";

import logo from "../../../assets/image/logo.svg";



const Logo = () => (
	<div className={styles.logo}>
		<img src={logo} alt="SongBird App Logo" className={styles.logoImg} />
	</div>
);


export default Logo;
