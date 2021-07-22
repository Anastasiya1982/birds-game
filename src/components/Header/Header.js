import React from 'react';
import s from './Header.module.scss';
import Logo from "./Logo/Logo";
import Score from "../Score/Score";

export const Header=(props)=>{
    return(
        <div className={s.header}>
             <Logo/>
             <Score score={props.score}/>
        </div>
    )
}
