import React from 'react';
import s from './Subtitle.module.scss';

const Subtitle = ({ subtitle }) => (
    <div className={s.subtitle}>
        {subtitle}
    </div>
);



export default Subtitle;
