import React, {useEffect, useState} from 'react';
import './App.scss';
import {Header} from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Quastion from "./components/Quastion/Quastion";
import AnswerList from "./components/AnswerList/AnswerList";
import Description from "./components/Description/Description";
import Button from "./components/Button/Button";
import birdsData from "./birdData";
import rightAudio from './assets/audio/success.mp3';
import wrongAudio from './assets/audio/fail.mp3';

function App() {
    const [section,setSection]=useState(0);
    const [score,setScore]=useState(0);
    const [randomId,setRandomId]=useState(0);
    const [win, setWin]=useState(false);

    useEffect(()=>{
        setRandomId(getRandomId())
    })
    function getRandomId(){
        const id = Math.floor((Math.random() * 6));
        console.log(`Правильный ответ: ${id+1}`);
        return id;
    }

    const selectAnswer=(id)=>{
        checkAnswer(id);
    }

    const checkAnswer=(id)=>{
       const rightAnswer=new Audio(rightAudio);
       const wrongAnswer=new Audio(wrongAudio);
       if(id-1 === randomId){
           rightAnswer.play();
           setWin(true);
           setSection(section=>section+1)
       }else{
           wrongAnswer.play();
       }
    }


    const btnLabel = section === 5 ? 'Закончить игру' : 'Следующий' +
        ' вопрос';

  return (
      <div className="game">
          <div className='wrapper'>
              <Header score={score}/>
              <Navbar section={section}/>
              <Quastion src={birdsData[section][randomId].audio}/>
              <div className='answer'>
                  <AnswerList section={1} selectAnswer={selectAnswer} randomId={randomId}/>
                  <Description selected={1} section={1}/>
              </div>
              <Button label={btnLabel} win={win}/>
          </div>
      </div>
  );
}

export default App;
