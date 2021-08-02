import React from "react";

import styles from "./Image.module.scss";

const Image = ({ image, alt }) => (
    <div className={styles.birdImg}>
        <img src={image} alt={alt} />
    </div>
);

export default Image;
