import React from "react";
import { useSelector } from "react-redux";
import cnBind from "classnames/bind";

import AnswerItem from "./AnswerItem/AnswerItem";

import styles from "./Answer.module.scss";

const cx = cnBind.bind(styles);

const AnswerList = ({ isPlayerWin, ...otherProps }) => {
    const birdsData = useSelector((state) => state.birdsData.birdsData);
    let currentSection = useSelector((state) => state.birdsData.section);

    const classes = cx(styles.answerList, {
        disabled: isPlayerWin,
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
