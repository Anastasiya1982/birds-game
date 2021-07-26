import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";

import styles from  "./App.module.scss";

import {Header} from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import rightAudio from "./assets/audio/success.mp3";
import wrongAudio from "./assets/audio/fail.mp3";
import FinishGame from "./components/FinishGame/FinishGame";
import Game from "./components/Game/Game";
import {setMistake, resetMistakes,setScore, resetScore} from "./store/birdGameSlice";


function App() {
	const [section, setSection] = useState(0);
	const [randomId, setRandomId] = useState(0);
	const [win, setWin] = useState(false);
	const [isEndGame, setIsEndGame] = useState(false);
	const [selectBird, setSelectBird] = useState(null);

	const dispatch=useDispatch();

	useEffect(() => {
		setRandomId(getRandomId());
	}, [section]);

	function getRandomId() {
		const id = Math.floor((Math.random() * 6));
		// eslint-disable-next-line no-console
		console.log(`рандомно проигрывается аудио с id: ${id + 1}`);
		return id;
	}

    const setNewMistake=()=>dispatch(setMistake());
	const resetAllMistakes=()=>dispatch(resetMistakes());
	const getScore=()=>dispatch(setScore());
	const resetAllScore=()=>dispatch(resetScore());

	const selectAnswer = (id) => {
		let currentId = id - 1;
		setSelectBird(currentId);
		checkAnswer(currentId);
	};

	const checkAnswer = (id) => {
		const rightAnswer = new Audio(rightAudio);
		const wrongAnswer = new Audio(wrongAudio);
		if (id === randomId) {
			rightAnswer.play();
			setWin(true);
			setSelectBird(id);
		} else {
			wrongAnswer.play();
			setNewMistake();
		}
	};

	function goToNextLevel() {
		if (section === 5 && win) {
			getScore();
			endGame();

		} else {
			setSection(section => section + 1);
			getScore();
			resetAllMistakes();
			setWin(false);
			setSelectBird(null);
		}
	}

	function endGame() {
		setSection(-1);
		setIsEndGame(true);
		setWin(false);
		resetAllMistakes();
	}

	const startNewGame = () => {
		setIsEndGame(false);
		setSection(0);
		setWin(0);
		resetAllScore();
		resetAllMistakes();
		setSelectBird(null);
	};

	let btnLabel = section === 5 ? "Finish Game" : "Next level";


	return (
		<div className={styles.game}>
			<div className={styles.wrapper}>
				<Header />
				<Navbar section={section}/>
				{!isEndGame
					? <Game win={win}
						section={section}
						randomId={randomId}
						selectBird={selectBird}
						selectAnswer={selectAnswer}
						label={btnLabel}
						goToNextLevel={goToNextLevel}
						isEndGame={isEndGame}/>

					: <FinishGame win={win}
						startNewGame={startNewGame}
						isEndGame={isEndGame}
					/>
				}
			</div>
		</div>
	);
}

export default App;
