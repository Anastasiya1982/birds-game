import React from 'react';
import logo from '../../../assets/image/logo.svg';
import s from './Logo.module.scss'


const Logo = () => (
    <div className={s.logo}>
        <img src={logo} alt="SongBird App Logo" className={s.logoImg} />
    </div>
);


export default Logo;
