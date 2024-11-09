import axios from "axios";

export const AxiosClient = axios.create({
    baseURL : "https://codemate-api.onrender.com/api/v1/"
})