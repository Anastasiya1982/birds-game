import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const getBirdsData=createAsyncThunk(
    "birdGame/getBirdsData",
    async ()=>{
        return fetch("https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/songbird/birds.js")
            .then(res=>res.data);
    }
);

const birdGameSlice = createSlice({
    name: "birdGame",
    initialState: {
        birdsData:[],
        status:null,
        initialScore:0,
        score:0,
        section:0,
        mistake:0,
        isWin:false,
        selectedBird:null
    },
    extraReducers: {
        [getBirdsData.pending]: (state) => {
            state.status = "loading";
        },
        [getBirdsData.fulfilled]: (state, { payload }) => {
            state.birdsData = payload;
            state.status = "success";
        },
        [getBirdsData.rejected]: (state) => {
            state.status = "failed";
        }
    },
    reducers: {
        setBirdsData(state,action){
            state.birdsData=action.payload.data;
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
        setIsWin(state,action){
            state.isWin=action.payload.value;
        }

    }
});


export const {setMistake, resetMistakes,setScore, resetScore,setIsWin, setBirdsData} = birdGameSlice.actions;
export default birdGameSlice.reducer;
