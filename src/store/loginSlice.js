import {createSlice} from "@reduxjs/toolkit";

const loginSlice = createSlice({
    name: "loginData",
    initialState: {
        isUserLogin: false
    },
    reducers: {
        setIsUserLogin(state, action) {
            state.isUserLogin = action.payload;
        }
    }
});

export const {setIsUserLogin} = loginSlice.actions;

export default loginSlice.reducer;
