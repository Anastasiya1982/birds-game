import React from 'react';
import s from './Navbar.module.scss';


const Navbar =(props)=>{
       const birdsSectionArray=['Разминка','Воробьиные','Лесные птицы','Певчие птицы','Хищные птицы','Морские птицы'];
    return(
        <div className={s.sectionList}>
            {birdsSectionArray.map((section,index)=>{
              return  <div id={index}
                           key={index}
                           className={props.section===index ? ` ${s.section} ${s.sectionActive}`:` ${s.section}`}>{section}</div>
            })}

        </div>

    )
}
export default Navbar;
