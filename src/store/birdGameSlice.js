import {createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const resUrl="https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/songbird/birds.js";

const fetchData = async () => {
    const result = await axios.get(resUrl);
    const birdsData=result.data;
    return  {
        birdsData:birdsData
    };
};
const birdsDataArr=fetchData();


const birdGameSlice = createSlice({
    name: "birdGame",
    initialState: {
        birdsData:birdsDataArr,
        score:0,
        section:0,
        mistake:0,
        win:false,
        selectedBird:null
    },
    reducers: {
        setScore(state) {
            state.score=state.score + 5 - state.mistake;
        },
        resetScore(state){
            state.score=0;
        },
       setMistake(state){
            state.mistake=state.mistake+1;
       },
        resetMistakes(state){
            state.mistake=0;
        },

    }
});


export const {setMistake, resetMistakes,setScore, resetScore} = birdGameSlice.actions;
export default birdGameSlice.reducer;
