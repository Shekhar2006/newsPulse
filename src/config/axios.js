import axios from "axios";
import { env } from "./env.js";

const api = axios.create({
    baseURL: env.gnewsBaseUrl,
    timeout: 10000,
});

export default api;