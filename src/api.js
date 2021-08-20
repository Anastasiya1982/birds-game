import axios from "axios";

const instance =  axios.create({
    baseURL:"https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/songbird/birds.js",

});
export const birdsApi = {
    getBirds() {
       return instance.get("");
    }
};

export const api =  axios.create({
    withCredentials:true,
    authUrl:"http://localhost:5000/api"
});

api.interceptors.request.use((config)=>{
    config.headers.Authorization=`Bearer ${localStorage.getItem("token")}`;
    return config;
});
