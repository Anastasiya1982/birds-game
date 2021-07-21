import React from 'react';
import './Score.scss';

const Score = ({ score }) => (
    <div className="score">
       <span>Score: {score}</span>
    </div>
);



export default Score;
