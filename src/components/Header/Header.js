import React from 'react';
import './Header.scss';
import Logo from "./Logo/Logo";
import Score from "../Score/Score";

export const Header=(props)=>{
    return(
        <div className='header'>
             <Logo/>
             <Score score={props.score}/>
        </div>
    )
}
