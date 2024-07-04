import axios from "axios"
const api = axios.create()

const emailChecker = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
const isEmail = (userdata) => {
    return emailChecker.test(userdata)
}

const register = async (userData) => {
    try {
        const response = await api.post(`/api/v1/users/register`, userData)
        console.log(response)
        return response
    }
    catch (error) {
        throw error.response.data
    }
}

const login = async (userData) => {
    try {
        const response = await api.post("/api/v1/users/login", userData)
        return response
    } catch (error) {
        throw error.response.data
    }
}
const logoutUser = async () => {
    try {
        const response = await api.post("/api/v1/users/logout")
        return response
    } catch (error) {
        throw error.response.data
    }
}
const updateUser = async (data) => {
    try {
        const response = await api.post("/api/v1/users/update", data)
        return response
    }
    catch {
        throw error.response.data
    }
}

const refreshAccessToken = async () => {
    try {
        const response = await api.post("/api/v1/users/refreshtoken", { withCredentials: true })
        return response

    } catch (error) {
        throw error
    }
}

const changePassword = async (data) => {
    try {
        const response = await api.post("/api/v1/users/changepassword", data)
        return response
    } catch (error) {
        throw error.response.data
    }
}

const isLoggedIn = async () => {
    try {
        const response = await api.post("api/v1/users/checkauth")
        return response.data.data.user
    }
    catch (error) {
        throw error.response.data
    }
}

const uploadImage = async (data) => {
    try {
        console.log(data);
        const response = await api.post("api/v1/users/uploadimage", data, { headers: { "Content-Type": 'multipart/form-data' } })
        return response.data.data.user
    } catch (error) {
        throw error.response.data
    }
}

const reportSubmit = async (data) => {
    try {
        const response = await api.post("api/v1/users/report", data)
        return response.data.data
    } catch (error) {
        throw error.response.data
    }
}

const followaccount = async (userId) => {
    try {
        const response = await api.post(`/api/v1/users/follow/${userId}`)
        return response.data.data
    } catch (error) {
        throw error.response.data
    }
}

const checkfollowing = async (userId) => {
    try {
        const response = await api.get(`/api/v1/users/isfollowing/${userId}`)
        return response.data.data
    } catch (error) {
        throw error.response.data
    }
}

//* using the interceptor function that helps to manage request before they are middlewares

import { store } from "../store/store"
import { setunAuthenticated } from "../store/authSlice"

api.interceptors.response.use(
    response => response,
    async error => {
        const originalRequest = error.config
        if (error.response.status === 401 && !originalRequest._retry) {

            try {
                originalRequest._retry = true
                await refreshAccessToken()
                return api(originalRequest)
            }
            catch (error) {
                if (error.response.status === 402) {
                    try {
                        store.dispatch(setunAuthenticated())

                    } catch (error) {
                        throw error
                    }
                }

            }
        }

        else {
            throw error
        }
    }

)
export {
    checkfollowing,
    register,
    login,
    isEmail,
    logoutUser,
    updateUser,
    changePassword,
    isLoggedIn,
    uploadImage,
    reportSubmit,
    followaccount
}
