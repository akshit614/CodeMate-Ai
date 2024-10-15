import axios from "axios";

export const AxiosClient = axios.create({
    baseURL : "http://localhost:2300/api/v1/"
})