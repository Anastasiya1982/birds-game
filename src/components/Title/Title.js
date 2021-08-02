import React from "react";
import styles from "./Title.module.scss";

const Title = ({ title }) => <h3 className={styles.title}>{title}</h3>;

export default Title;
