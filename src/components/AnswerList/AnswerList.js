import React from "react";
import { useSelector } from "react-redux";

import AnswerItem from "./AnswerItem/AnswerItem";

import cnBind from "classnames/bind";
import styles from "./Answer.module.scss";
const cx = cnBind.bind(styles);

const AnswerList = ({ win, ...otherProps }) => {
    const birdsData = useSelector((state) => state.birdsData.birdsData);
    let currentSection = useSelector((state) => state.birdsData.section);

    const classes = cx(styles.answerList, {
        disabled: win,
    });
    return (
        <div className={classes}>
            {birdsData[currentSection].map((el) => (
                <AnswerItem key={el.id} id={el.id} name={el.name} section={currentSection} {...otherProps} />
            ))}
        </div>
    );
};

export default AnswerList;
