import React, {useState} from 'react';
import './App.scss';
import {Header} from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Quastion from "./components/Quastion/Quastion";
import AnswerList from "./components/AnswerList/AnswerList";
import Description from "./components/Description/Description";

function App() {
    const [section,setSection]=useState(0)


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
          </div>
      </div>
  );
}

export default App;
