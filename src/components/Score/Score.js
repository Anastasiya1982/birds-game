import React from "react";
import { useSelector } from "react-redux";

import styles from "./Score.module.scss";

const Score = () => {
    const scoreCount = useSelector((state) => state.birdsData.score);

    return (
        <div className={styles.score}>
            <span>Score: {scoreCount}</span>
        </div>
    );
};

export default Score;
