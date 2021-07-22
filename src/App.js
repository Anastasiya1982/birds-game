import React, {useEffect, useState} from 'react';
import './App.scss';
import {Header} from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Quastion from "./components/Quastion/Quastion";
import AnswerList from "./components/AnswerList/AnswerList";
import Description from "./components/Description/Description";
import Button from "./components/Button/Button";
import rightAudio from './assets/audio/success.mp3';
import wrongAudio from './assets/audio/fail.mp3';
import FinishGame from "./components/FinishGame/FinishGame";

function App() {
    const [section,setSection]=useState(0);
    const [score,setScore]=useState(0);
    const [randomId,setRandomId]=useState(0);
    const [win, setWin]=useState(false);
    const [mistake,setMistake]=useState(0);
    const [isEndGame,setIsEndGame]=useState(false);
    const [selectBird,setSelectBird]=useState(0);


    useEffect(()=>{
        setRandomId(getRandomId())
    },[section]);
    useEffect(()=>{

    })

    function getRandomId(){
        const id = Math.floor((Math.random() * 6));
        console.log(`рандомно проигрывается аудио с id: ${id+1}`);
        return id;
    }

    const selectAnswer=(id)=>{
        let currentId=id-1
        setSelectBird(currentId);
        checkAnswer(currentId);
    }

    const checkAnswer=(id)=>{
       const rightAnswer=new Audio(rightAudio);
       const wrongAnswer=new Audio(wrongAudio);
       if(id === randomId){
           rightAnswer.play();
           setWin(true);
           setSelectBird(id);
       }else{
           wrongAnswer.play();
           setMistake((mistake)=>mistake+1);
       }
    }

    function goToNextLevel(){
        console.log(section)
        if(section > 5){
            setSection(-1);
            alert('finish game')
            setIsEndGame(true);
            setWin(false);

        }else{
            setSection(section=>section+1);
            setScore(score=>score+5-mistake);
            setWin(false);
            setMistake(0);
            setSelectBird(0);
        }
     }
     // const endGame=()=>{
     //     setIsEndGame(true);
     //     setWin(false);
     // }

     const startNewGame=()=>{
         setIsEndGame(false);
         setSection(0);
         setWin(0);
         setScore(0);
         setMistake(0);
     }

   let btnLabel = section === 5 ? 'Finish Game' : 'Next level';


  return (
      <div className="game">
          <div className='wrapper'>
              <Header score={score}/>
              <Navbar section={section}/>
              {!isEndGame ?
                  (<div className='game-field'>
                      <Quastion win={win} section={section} randomId={randomId}/>
                      <div className='answer'>
                          <AnswerList section={section} selectAnswer={selectAnswer} randomId={randomId} win={win}/>
                          <Description section={section} selected={selectBird}/>
                      </div>
                      <Button label={btnLabel} win={win} action={goToNextLevel} isEndGame={isEndGame}/>

                  </div>)
                  : <FinishGame win={win} action={startNewGame} score={score} isEndGame={isEndGame}/>
              }
          </div>
      </div>
  );
}

export default App;
