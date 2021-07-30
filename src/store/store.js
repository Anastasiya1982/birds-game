import {combineReducers, configureStore} from "@reduxjs/toolkit";
import birdsDataReducer from "./birdGameSlice";
import loginReducer from "./loginSlice";



const rootReducer=combineReducers({
	birdsData: birdsDataReducer,
	loginData:loginReducer
});

export const store= configureStore({
	reducer: rootReducer,
});
