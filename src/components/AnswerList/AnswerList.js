import React from 'react';
import './Answer.scss';
import birdsData from '../../birdData';
import AnswerItem from "./AnswerItem/AnswerItem";

const AnswerList = ({ section, selectAnswer }) => {

    return (
        <div className="answer-list">
            {birdsData[section].map((el,index) => (
               <AnswerItem key={el.index}
                           id={el.id}
                           name={el.name}
               />
            ))
            }
        </div>
    );
};


export default AnswerList;

