import React, {useEffect} from 'react';
import './Navbar.scss';

const Navbar =(props)=>{
    useEffect(()=>{
       const section=document.querySelectorAll('.section');
       section.forEach((sec,index)=>{
           sec.classList.remove('section__active');
           if(index===props.section){
               sec.classList.add('section__active');
           }
       })
    })
    return(
        <div className="section-list">
            <div className="section section__active">Разминка</div>
            <div className="section">Воробьиные</div>
            <div className="section">Лесные птицы</div>
            <div className="section">Певчие птицы</div>
            <div className="section">Хищные птицы</div>
            <div className="section">Морские птицы</div>
        </div>

    )
}
export default Navbar;
