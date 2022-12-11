import axios from "axios";

const omdbAPI = "http://www.omdbapi.com/";

const axiosInstance = axios.create({
    baseURL: omdbAPI,
})

export { axiosInstance };
