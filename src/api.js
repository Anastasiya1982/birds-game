import axios from "axios";

const instance = axios.create({
    baseURL:"https://raw.githubusercontent.com/Anastasiya1982/birdsData/master/birds.json"
});
export const birdsApi = {
    getBirds() {
        return instance.get("");
    },
};

export const api = axios.create({
    withCredentials: true,
    authUrl: "http://localhost:5000/api",
});

api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
    return config;
});

api.interceptors.response.use(
    (config) => {
        return config;
    },
    async (error) => {
        const originalRequest = error.config;
        if (error.response.status === 401 && error.config && !error.config._isRetry) {
            originalRequest._isRetry = true;
            try {
                const response = await axios.get("http://localhost:5000/api/refresh", { withCredentials: true });
                localStorage.setItem("token", response.data.accessToken);
                return api.request(originalRequest);
            } catch (e) {
                console.log(e);
            }
        }
        throw error;
    }
);
