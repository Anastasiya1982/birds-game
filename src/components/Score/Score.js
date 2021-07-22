import React from 'react';
import s from './Score.module.scss';

const Score = ({ score }) => (
    <div className={s.score}>
       <span>Score: {score}</span>
    </div>
);



export default Score;
