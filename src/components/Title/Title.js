import React from 'react';
import s from './Title.module.scss';

const Title = (props) => (
    <h3 className={s.title}>
        {props.title}
    </h3>
);

export default Title;
