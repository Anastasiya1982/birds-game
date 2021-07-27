import {combineReducers, configureStore} from "@reduxjs/toolkit";
import birdsDataReducer from "./birdGameSlice";


const rootReducer=combineReducers({
	birdsData: birdsDataReducer
});

export const store= configureStore({
	reducer: rootReducer,
});
