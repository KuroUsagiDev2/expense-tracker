import api, { getCsrfToken } from "./axios";

export async function login(email: string, password: string) {
    await getCsrfToken();
    return api.post("/login", { email, password });
}

export async function logout() {
    await getCsrfToken();
    return api.post("/logout");
}

export async function register(name:string, email: string, password: string, password_confirmation: string) {
    await getCsrfToken();
    return api.post("/register", { name, email, password, password_confirmation });
}

export async function getUser() {
    return api.get("/api/user");
}