import React from "react";

import Logo from "./Logo/Logo";
import Score from "../Score/Score";
import Menu from "./Menu/Menu";

import styles from "./Header.module.scss";

export const Header = () => {
    return (
        <div className={styles.header}>
            <Logo />
            <Score />
            <Menu />
        </div>
    );
};
