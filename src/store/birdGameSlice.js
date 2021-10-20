import { createSlice } from "@reduxjs/toolkit";

import { birdsApi } from "../api";

const   birdsSectionArray= ["Разминка", "Воробьиные", "Лесные птицы", "Певчие птицы", "Хищные птицы", "Морские птицы"];

const birdGameSlice = createSlice({
    name: "birdGame",
    initialState: {
        birdsData: [],
        birdsSectionArray: birdsSectionArray,
        sectionsLength: birdsSectionArray.length-1,
        isInit: false,
        isLoading: true,
        initialScore: 0,
        score: 0,
        section: 0,
        mistake: 0,
        isWin: false,
        selectedBird: null,
        isGameOver: false,
        error: null,
        itemsInSection: null,
    },
    reducers: {
        setBirdsData(state, action) {
            state.birdsData = action.payload.data;
        },
        setIsInit(state, action) {
            state.isInit = action.payload.value;
        },
        setSection(state) {
            state.section = state.section + 1;
        },
        resetCurrentSection(state) {
            state.section = 0;
        },
        setSelectedBird(state, action) {
            state.selectedBird = action.payload.id;
        },
        setScore(state) {
            state.score = state.score + 5 - state.mistake;
        },
        resetScore(state) {
            state.score = 0;
        },
        setMistake(state) {
            state.mistake = state.mistake + 1;
        },
        resetMistakes(state) {
            state.mistake = 0;
        },
        setIsWin(state, action) {
            state.isWin = action.payload;
        },
        setIsBirdsDataLoading(state, action) {
            state.isLoading = action.payload;
        },
        setError(state, action) {
            state.error = action.payload.value;
        },
        setIsGameOver(state, action) {
            state.isGameOver = action.payload;
        },
        setItemsInSection(state, action) {
            state.itemsInSection = action.payload;
        },
        setSectionLength(state, action) {
            state.sectionLength = action.payload;
        },
    },
});

export const {
    setMistake,
    resetMistakes,
    setScore,
    resetScore,
    setIsWin,
    setBirdsData,
    setIsBirdsDataLoading,
    setError,
    setSection,
    setIsInit,
    resetCurrentSection,
    setIsGameOver,
    setItemsInSection,
    setSelectedBird,
    setSectionLength,
} = birdGameSlice.actions;

export const getBirdsData = () => (dispatch) => {
    dispatch(setIsBirdsDataLoading(true));  

    birdsApi
        .getBirds()
        .then((res) => {
            const data = res.data;
            const newData = data;
            dispatch(setBirdsData({ data: newData }));
            dispatch(setItemsInSection(newData[0].length));           
            dispatch(setIsInit({ value: true }));
        })
        .catch((err) => {
            dispatch(setError({ value: err.message }));
        });

    dispatch(setIsBirdsDataLoading(false));
};

export default birdGameSlice.reducer;
