import React from 'react';
import logo from '../../../assets/image/logo.svg';
import './Logo.scss'


const Logo = () => (
    <div className="logo">
        <img src={logo} alt="SongBird App Logo" className='logo__img' />
    </div>
);


export default Logo;
