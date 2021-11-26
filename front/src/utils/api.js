import axios from "axios";

const baseApi = axios.create({
    baseURL: process.env.BACKEND_URL,
});

export default baseApi;