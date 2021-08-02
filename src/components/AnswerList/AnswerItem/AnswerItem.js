import React, { useEffect, useState } from "react";
import cnBind from "classnames/bind";

import styles from "./AnswerItem.module.scss";

const cx = cnBind.bind(styles);

const AnswerItem = (props) => {
    const [isSelected, setIsSelected] = useState(false);

    useEffect(() => {
        setIsSelected(false);
    }, [props.section]);

    const classesForBtn = cx(styles.radioBtn, {
        reset: !isSelected,
        correct: isSelected && props.id - 1 === props.randomId,
        incorrect: isSelected && props.id - 1 !== props.randomId,
    });

    const selectAnswer = () => {
        props.selectAnswer(props.id);
        setIsSelected(true);
    };

    return (
        <div className={styles.answerItem} key={props.id} onClick={selectAnswer} id={props.id}>
            <span className={classesForBtn} />
            {props.name}
        </div>
    );
};

export default AnswerItem;
