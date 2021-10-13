import axios from "axios";
import { toast } from "react-toastify";
import { createSlice } from "@reduxjs/toolkit";

import { api } from "../api";
import { setError } from "./birdGameSlice";

import defaultAvatar from "../assets/image/userIcon.png";

const TIME_FOR_CLOSE = 10000;
const loginSlice = createSlice({
    name: "loginData",
    initialState: {
        isLoading: false,
        isUserLogin: false,
        users: [],
        user: {},
        userAvatar: defaultAvatar,
        error: null,
        activationLink: null,
    },
    reducers: {
        setIsActivated(state, action) {
            state.isActivated = action.payload;
        },
        setIsUserLogin(state, action) {
            state.isUserLogin = action.payload;
        },
        setUser(state, action) {
            state.user = action.payload.data;
        },
        updateUser(state, action) {
            state.user = action.payload.data;
        },
        setIsLoading(state, action) {
            state.isLoading = action.payload;
        },
        setAvatar(state, action) {
            state.userAvatar = action.payload.data;
        },
        setError(state, action) {
            state.error = action.payload.status;
        },
        setActivationLink(state, action) {
            state.activationLink = action.payload;
        },
    },
});

export const { setIsUserLogin, setUser, setIsLoading, setAvatar, setActivationLink } = loginSlice.actions;

export const login = (email, password) => (dispatch) => {
    dispatch(setIsLoading(true));
    api.post("http://localhost:5000/api/login", { email, password })
        .then((res) => {
            localStorage.setItem("token", res.data.accessToken);
            console.log("response in login", res);
            dispatch(setUser({ data: res.data.user }));
            dispatch(setIsUserLogin(true));
        })
        .catch((err) => {
            toast.warn(`${err.response.status}! ${err.response.data}`, { autoClose: TIME_FOR_CLOSE });
            dispatch(setError({ value: err.response.status }));
        });
    dispatch(setIsLoading(false));
};

export const logout = () => (dispatch) => {
    api.post("http://localhost:5000/api/logout")
        .then((res) => {
            console.log(res);
            localStorage.removeItem("token");
            dispatch(setUser({}));
            dispatch(setIsUserLogin(false));
            toast.warn("you are out of the game... to start playing again, you need to log in", {
                autoClose: TIME_FOR_CLOSE,
            });
        })
        .catch((err) => {
            dispatch(setError(err.message));
        });
};

export const registration = (name, email, password) => (dispatch) => {
    dispatch(setIsLoading(true));
    api.post("http://localhost:5000/api/registration", { name, email, password })
        .then((res) => {
            toast("you need to confirm link on mail", { autoClose: false });
            localStorage.setItem("token", res.data.accessToken);
            dispatch(setUser({ data: res.data.user }));
            dispatch(setActivationLink(res.data.user.isActivated));
        })
        .catch((err) => {
            if (err.response.status === 500) toast.warn("something wrong with connection... try later again");
        });
    dispatch(setIsLoading(false));
};

export const checkAuthUser = () => (dispatch) => {
    axios
        .get("http://localhost:5000/api/refresh", { withCredentials: true })
        .then((res) => {
            localStorage.setItem("token", res.data.accessToken);
            dispatch(setUser({ data: res.data.user }));
            dispatch(setIsUserLogin(true));
        })
        .catch((err) => {
            dispatch(setError(err.message));
        });
};
export const updateUser = (id, name, email, password) => (dispatch) => {
    let token = localStorage.getItem("token");
    axios
        .put(
            "http://localhost:5000/api/update",
            { id, name, email, password },
            {
                withCredentials: true,
                headers: {
                    authorization: "Bearer " + token,
                },
            }
        )
        .then((res) => {
            dispatch(setUser({ data: res.data.user }));
            toast(`${res.status} User is successfully update`);
        })
        .catch((err) => {
            dispatch(setError(err.message));
        });
};

export const uploadAvatar = (data) => (dispatch) => {
    let token = localStorage.getItem("token");
    axios
        .post("http://localhost:5000/api/upload", data, {
            withCredentials: true,
            headers: {
                "content-type": "multipart/form-data",
                authorization: "Bearer " + token,
            },
        })
        .then((res) => {
            dispatch(setAvatar({ data: res.data.path }));
        })
        .catch((err) => {
            dispatch(setError(err.message));
        });
};

export default loginSlice.reducer;
