import React, {useEffect, useState} from 'react';
import './AnswerItem.scss';


const AnswerItem = (props) => {
    const [style,setStyle]=useState('');

    const selectAnswer=()=>{
        props.selectAnswer(props.id);
        if((props.id-1) === props.randomId){
            setStyle('correct');
        }else{
            setStyle('incorrect')
        }
    }

    return (
                <div className="answer-item"
                     key={props.id}
                     onClick={selectAnswer}
                     id={props.id}
                >
                    <span className={ `radioBtn ${style}`}/>
                    {props.name}
                </div>

    );
};


export default AnswerItem;
