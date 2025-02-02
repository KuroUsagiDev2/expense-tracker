import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:8000',
    withXSRFToken: true,
    withCredentials: true,
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/json',
    }
});

export async function getCsrfToken() {
    return api.get('/sanctum/csrf-cookie');
}

export default api;