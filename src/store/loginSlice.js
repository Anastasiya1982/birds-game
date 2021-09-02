import {createSlice} from "@reduxjs/toolkit";
import {api}from "../api";
import {setError} from "./birdGameSlice";
import axios from "axios";
import defaultAvatar from "../assets/image/userIcon.png";
import {toast} from "react-toastify";


const loginSlice = createSlice({
    name: "loginData",
    initialState: {
        isLoading:false,
        isActivated:false,
        isUserLogin: false,
        users:[],
        user:{},
        userAvatar:defaultAvatar,
        error: null
    },
    reducers: {
        setIsActivated(state,action){
            state.isUserSignUp=action.payload;
        },
        setIsUserLogin(state, action) {
            state.isUserLogin = action.payload;
        },
        setUser(state,action){
            state.user=action.payload.data;
        },
        updateUser(state, action){
            state.user=action.payload.data
        },
        setIsLoading(state,action){
            state.isLoading=action.payload;
        },
        setAvatar(state,action){
            state.userAvatar=action.payload;
        },
        setError(state, action) {
            state.error = action.payload.status;
        },

    }
});

export const {setIsUserLogin,setUser,setIsLoading,setIsActivated, setAvatar} = loginSlice.actions;


export const login = (email, password) => dispatch => {
    dispatch(  setIsLoading(true));
    api.post("http://localhost:5000/api/login", {email, password})
        .then(res => {
            localStorage.setItem("token", res.data.accessToken);
            console.log(res.data.user);
            dispatch(setUser({data:res.data.user}));
            dispatch(setIsUserLogin(true));
        })
        .catch(err => {
            toast.warn("OOPS...there is no such user.. please register your account",{ autoClose:10000 });
            dispatch(setError({value: err.response.status}));
        });
    dispatch(  setIsLoading(false));
};

export const logout = () => dispatch => {
    api.post("http://localhost:5000/api/logout")
        .then(res => {
            console.log(res)
            localStorage.removeItem("token");
            dispatch(setUser({}));
            dispatch(setIsUserLogin(false));
        })
        .catch(err => {
            dispatch(setError(err.message));
        });
    toast.warn("you are out of the game... to start playing again, you need to log in",{ autoClose: 7000 });
};

export const registration=(email, password)=>dispatch=> {
    dispatch(  setIsLoading(true));
    api.post("http://localhost:5000/api/registration", {email, password})
        .then(res => {
            localStorage.setItem("token", res.data.accessToken);
            dispatch(setUser({data:res.data.user}));
            dispatch(setIsActivated(true));
            console.log(res.status);

        })
        .catch(err => {
            if(err.response.status===400)toast.warn(`${err.response.status}! Sorry  but  user with such mail is already exist.. Enter another email`,{ autoClose: 7000 });
            else if(err.response.status===500) toast.warn("something wrong with connection... try later again");
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
               dispatch(setError( err.message));
           });
};
export const updateUser=(id,email, password)=>dispatch=>{
    axios.patch(`http://localhost:5000/api/${id}`,{email, password})
        .then(res=>{
            console.log("YYYEEEEE");
            dispatch(setUser({data:res.data.user}))
        }).catch(err => {
        dispatch(setError( err.message));
    });
}


export default loginSlice.reducer;
