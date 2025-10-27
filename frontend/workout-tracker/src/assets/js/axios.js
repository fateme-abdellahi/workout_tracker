import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000";


// api for user with no credentials
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


// get a new token for user with expired token
export const api_refresh = async () => {

    const tempAxios = axios.create({
        baseURL: BASE_URL,
        headers: {
            "Content-Type": "application/json",
        },
    })
    try {
        const res = await tempAxios.post("/auth/api/token/refresh/", {
            refresh: localStorage.getItem("refresh_token")
        })
        const data = res.data
        localStorage.setItem("refresh_token", data.refresh)
        localStorage.setItem("access_token", data.access)
        return res.status
    }
    catch (err) {
        return err.status
    }
}

// fetch data with expiration token handling
export const requestToApi = async (endpoint, method, data = null) => {
    try {
        let res
        if (method === 'post') {
            res = await api.post(endpoint, data)
        } else if (method === 'get') {
            res = await api.get(endpoint)
        } else if (method === 'delete') {
            res = await api.delete(endpoint)
        } else if (method === 'put') {
            res = await api.put(endpoint, data)
        }
        return {
            data: res.data,
            status: res.status
        }
    } catch (err) {
        if (err.status === 401) {
            if (!localStorage.getItem("refresh_token") || !localStorage.getItem("access_token")) {
                return {
                    status: 401,
                }
            }
            const authStatus = await api_refresh()
            if (authStatus === 200) {
                let fetchedData
                try {
                    if (method === 'post') {
                        fetchedData = await api.post(endpoint, data)
                        return {
                            ...fetchedData,
                            status: fetchedData.status,
                            data: fetchedData.data
                        }
                    } else if (method === 'get') {
                        fetchedData = await api.get(endpoint)
                        return {
                            ...fetchedData,
                            status: fetchedData.status,
                            data: fetchedData.data
                        }
                    }
                    else if (method === 'put') {
                        fetchedData = await api.put(endpoint, data)
                        return {
                            ...fetchedData,
                            status: fetchedData.status,
                            data: fetchedData.data
                        }
                    }
                    else if (method === 'delete') {
                        fetchedData = await api.delete(endpoint)
                        return {
                            ...fetchedData,
                            status: fetchedData.status,
                            data: fetchedData.data
                        }
                    }
                } catch (err) {
                    return {
                        status: err.status,
                        data: err.data
                    }
                }
            } else {
                return {
                    ...authStatus,
                    status: authStatus.status
                }
            }
        }
        return {
            ...err,
            data: err.response?.data,
            status: err.status
        }
    }
}
