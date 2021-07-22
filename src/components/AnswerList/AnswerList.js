import React from 'react';
import s from './Answer.module.scss';
import birdsData from '../../birdData';
import AnswerItem from "./AnswerItem/AnswerItem";

const AnswerList = ({section, ...otherProps}) => {
    return (
        <div className={s.answerList}>
            {birdsData[section].map((el) => (
                <AnswerItem key={el.id}
                            id={el.id}
                            name={el.name}
                            section={section}
                            {...otherProps}
                />
            ))
            }
        </div>
    );
};


export default AnswerList;

