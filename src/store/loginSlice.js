import {createSlice} from "@reduxjs/toolkit";
import {api}from "../api";
import {setError} from "./birdGameSlice";
import axios from "axios";

const loginSlice = createSlice({
    name: "loginData",
    initialState: {
        isLoading:false,
        isUserLogin: false,
        users:[],
        user:{}
    },
    reducers: {
        setIsUserLogin(state, action) {
            state.isUserLogin = action.payload;
        },
        setUser(state,action){
            state.user=action.payload;
        },
        setIsLoading(state,action){
            state.isLoading=action.payload;
        }
    }
});

export const {setIsUserLogin,setUser,setIsLoading} = loginSlice.actions;


export const login = (email, password) => dispatch => {
    dispatch(  setIsLoading(true));
    api.post("http://localhost:5000/api/login", {email, password})
        .then(res => {
            console.log(res.data);
            localStorage.setItem("token", res.data.accessToken);
            dispatch(setUser({data:res.data.user}));
            dispatch(setIsUserLogin(true));
        })
        .catch(err => {
            dispatch(setError({value: err.message}));
        });
    dispatch(  setIsLoading(false));
};

export const logout = () => dispatch => {
    api.post("http://localhost:5000/api/logout")
        .then(res => {
            console.log(res.data);
            localStorage.removeItem("token");
            dispatch(setUser({}));
            dispatch(setIsUserLogin(false));
        })
        .catch(err => {
            dispatch(setError({value: err.message}));
        });
};

export const registration=(email, password)=>dispatch=> {
    dispatch(  setIsLoading(true));
    api.post("http://localhost:5000/api/registration", {email, password})
        .then(res => {
            localStorage.setItem("token", res.data.accessToken);
            dispatch(setUser({data:res.data.user}));
            dispatch(setIsUserLogin(true));
        })
        .catch(err => {
            dispatch(setError({value: err.message}));
        });
    dispatch(setIsLoading(false));
};


export const checkAuthUser=()=>dispatch=>{
       axios.get("http://localhost:5000/api/refresh",{withCredentials:true})
           .then(res => {
               localStorage.setItem("token", res.data.accessToken);
               dispatch(setUser({data:res.data.user}));
               dispatch(setIsUserLogin(true));
           })
           .catch(err => {
               dispatch(setError({value: err.message}));
           });
};

export default loginSlice.reducer;
