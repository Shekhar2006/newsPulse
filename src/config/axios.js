import axios from "axios";
import { env } from "./env.js";

const api = axios.create({
    baseURL: env.newsdataBaseUrl,
    timeout: 10000,
});

export default api;