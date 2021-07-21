import React from 'react';
import './Header.scss';
import Logo from "./Logo/Logo";
import Score from "../Score/Score";

export const Header=()=>{
    return(
        <div className='header'>
             <Logo/>
             <Score/>
        </div>
    )
}
