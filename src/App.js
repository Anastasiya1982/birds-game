import React, {useState} from 'react';
import './App.scss';
import {Header} from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Quastion from "./components/Quastion/Quastion";
import AnswerList from "./components/AnswerList/AnswerList";
import Description from "./components/Description/Description";
import Button from "./components/Button/Button";

function App() {
    const [section,setSection]=useState(0)
    const btnLabel = section === 5 ? 'Закончить игру' : 'Следующий' +
        ' вопрос';

  return (
      <div className="game">
          <div className='wrapper'>
              <Header/>
              <Navbar section={section}/>
              <Quastion/>
              <div className='answer'>
                  <AnswerList section={1}/>
                  <Description selected={1} section={1}/>
              </div>
              <Button label={btnLabel}/>
          </div>
      </div>
  );
}

export default App;
