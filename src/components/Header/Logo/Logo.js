import React from "react";
import { Link } from "react-router-dom";

import logo from "../../../assets/image/logo.svg";

import styles from "./Logo.module.scss";

const Logo = () => (
    <div className={styles.logo}>
        <Link to="/">
            <img src={logo} alt="SongBird App Logo" className={styles.logoImg} />
        </Link>
    </div>
);

export default Logo;
