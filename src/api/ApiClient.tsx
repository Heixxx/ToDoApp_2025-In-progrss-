import axios from "axios";

// CONTEXT

const getToken = () => localStorage.getItem("token");

const ApiClient = axios.create({
    baseURL: "https://api.example.com",
    headers: {
        "Content-Type": "application/json",
    },
});

// Interceptor – automatycznie dodaje token do każdego zapytania
ApiClient.interceptors.request.use(
    (config) => {
        const token = getToken();
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

export default ApiClient;
