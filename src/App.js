import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router";

import { Header } from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import FinishGame from "./components/FinishGame/FinishGame";
import Game from "./components/Game/Game";
import LogIn from "./components/LogIn/Login";
import SignUp from "./components/SignUp/SignUp";
import Account from "./components/Account/Account";
import { checkAuthUser } from "./store/loginSlice";
import Preloader from "./components/Preloader/Preloader";
import {
    setMistake,
    resetMistakes,
    setScore,
    resetScore,
    setSelectedBird,
    setIsWin,
    getBirdsData,
    setSection,
    resetCurrentSection,
    setIsGameOver,
} from "./store/birdGameSlice";

import rightAudio from "./assets/audio/success.mp3";
import wrongAudio from "./assets/audio/fail.mp3";

import styles from "./App.module.scss";

function App() {
    const [randomId, setRandomId] = useState(0);
    const win = useSelector((state) => state.birdsData.isWin);
    const isInit = useSelector((state) => state.birdsData.isInit);
    const section = useSelector((state) => state.birdsData.section);
    const isEndGame = useSelector((state) => state.birdsData.isGameOver);
    const isLoading = useSelector((state) => state.loginData.isLoading);
    const itemsInSection = useSelector((state) => state.birdsData.itemsInSection);

    const dispatch = useDispatch();

    useEffect(() => {
        if (localStorage.getItem("token")) {
            dispatch(checkAuthUser());
        }
    }, []);

    useEffect(() => {
        dispatch(getBirdsData());
    }, [dispatch]);

    useEffect(() => {
        setRandomId(getRandomId());
    }, [section]);

    if (isLoading) {
        return <Preloader />;
    }
    function getRandomId() {
        const id = Math.floor(Math.random() * itemsInSection);
        return id;
    }

    const setNewMistake = () => dispatch(setMistake());
    const resetAllMistakes = () => dispatch(resetMistakes());
    const getScore = () => dispatch(setScore());
    const resetAllScore = () => dispatch(resetScore());
    const setIsUserWin = ({ value }) => dispatch(setIsWin({ value }));
    const setCurrentSection = () => dispatch(setSection());
    const resetSection = () => dispatch(resetCurrentSection());
    const setIsEndGame = ({ value }) => dispatch(setIsGameOver({ value }));
    const setSelectBird = ({ id }) => dispatch(setSelectedBird({ id }));

    const selectAnswer = (id) => {
        let currentId = id - 1;
        setSelectBird({ id: currentId });
        checkAnswer(currentId);
    };

    const checkAnswer = (id) => {
        const rightAnswer = new Audio(rightAudio);
        const wrongAnswer = new Audio(wrongAudio);
        if (id === randomId) {
            rightAnswer.play();
            setIsUserWin({ value: true });
            setSelectBird({ id: id });
            getScore();
        } else {
            wrongAnswer.play();
            setNewMistake();
        }
    };

    function goToNextLevel() {
        if (section === 5 && win) {
            endGame();
        } else if (win) {
            setCurrentSection();
            resetAllMistakes();
            setIsUserWin({ value: false });
            setSelectBird({ id: null });
        }
    }

    function endGame() {
        setCurrentSection();
        setIsEndGame({ value: true });
        setIsUserWin({ value: false });
        resetAllMistakes();
    }

    const startNewGame = () => {
        setIsEndGame({ value: false });
        resetSection();
        setIsUserWin({ value: false });
        resetAllScore();
        resetAllMistakes();
        setSelectBird({ id: null });
    };

    return (
        <div className={styles.game}>
            <div className={styles.wrapper}>
                <Header />
                <Switch>
                    <Route path="/login" component={LogIn} />
                    <Route path="/signup" component={SignUp} />
                    <Route exact path="/account" component={Account} />
                    {!isInit ? (
                        <Preloader />
                    ) : (
                        <Route
                            exact
                            path="/"
                            render={() => (
                                <>
                                    <Navbar />
                                    {!isEndGame ? (
                                        <Game
                                            randomId={randomId}
                                            selectAnswer={selectAnswer}
                                            goToNextLevel={goToNextLevel}
                                        />
                                    ) : (
                                        <FinishGame startNewGame={startNewGame} />
                                    )}
                                </>
                            )}
                        />
                    )}
                </Switch>
            </div>
        </div>
    );
}

export default App;
