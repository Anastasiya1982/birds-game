import React, {useState} from 'react';
import './AnswerItem.scss';


const AnswerItem = (props) => {

    const checkAnswer=()=>{
        console.log('click',props.id)
    }

    return (
                <div className="answer-item"
                    key={props.id}
                    onClick={checkAnswer}
                >
                    <span className={ `radioBtn ${props.checked ? 'correct' : 'incorrect'}`}   />
                    {props.name}
                </div>

    );
};


export default AnswerItem;
