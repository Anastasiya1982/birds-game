import axios from "axios";

const instance =  axios.create({
    baseURL:"https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/songbird/birds.js"
});

export const birdsApi = {
    getBirds() {
       return instance.get("");
    }
};
