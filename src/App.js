import React, {useState} from 'react';
import './App.scss';
import {Header} from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Quastion from "./components/Quastion/Quastion";

function App() {
    const [section,setSection]=useState(0)


  return (
    <div className="game">
        <div className='wrapper'>
         <Header/>
         <Navbar section={section}/>
         <Quastion />
        </div>

    </div>
  );
}

export default App;
