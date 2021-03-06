import { API_URL } from "../utils/constants";

export async function registerApiformData(formData){
    try {
        const url = `${API_URL}/auth/local/register`;
        const params = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        };
        const response = await fetch(url, params);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log('piki',error);
        return null;
    }
}

export async function loginApi(formData){
    try {
        const url = `${API_URL}/auth/local`;
        const params = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        };
        const response = await fetch(url, params);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error)
        return null;
    }
}

export async  function getMeApi(token) {
    try {
        const url = `${API_URL}/users/me`;
        const params = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        };
        const response = await fetch(url, params);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
}