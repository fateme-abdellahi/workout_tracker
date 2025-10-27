import axios from "axios";

// change this to your Django backend address
const BASE_URL = "http://127.0.0.1:8000";

export const anonymus_user_api = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("access_token")}`
    },
});

export default api;