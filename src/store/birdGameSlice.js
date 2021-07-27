import {createSlice} from "@reduxjs/toolkit";
import {birdsApi} from "../api";

// export const getBirdsData=createAsyncThunk(
//     "birdGame/getBirdsData",
//     async ()=>{
//         return fetch("https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/songbird/birds.js")
//             .then(res=>res.data);
//     }
// );

const birdGameSlice = createSlice({
    name: "birdGame",
    initialState: {
        birdsData:[],
        isLoading:false,
        initialScore:0,
        score:0,
        section:0,
        mistake:0,
        isWin:false,
        selectedBird:null,
        error:null
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
        },
        setIsLoading(state,action){
            state.status=action.payload.value;
        },
        setError(state,action){
            state.error=action.payload.value;
        }

    }
});


export const {setMistake, resetMistakes,setScore, resetScore,setIsWin, setBirdsData,setIsLoading,setError} = birdGameSlice.actions;

export const getBirdsData = () => dispatch => {
       dispatch(setIsLoading({value:true}));

    // send request for data
    //     fetch("https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/songbird/birds.js")

    birdsApi.getBirds()
      .then(res => res.json())
        .then((res) =>{
            const data=res.data;
            dispatch(setBirdsData({data:data}));
          }
        ).catch((err) => {
        dispatch(setError({value: err.toString()}));
        });

    dispatch(setIsLoading({value: false}));
};

export default birdGameSlice.reducer;
