import { setServerCookie } from "@/services/actions/server"
import api from "@/services/api/interceptors"

type Login = {
    email: string,
    password: string,
    checked?: boolean
}

export const login = async (email, password) => {
    const res = await api.post("api/user/login", {
        email,
        password,
        checked: true
    })
    if(res.data.access_token){
        localStorage.setItem("token", res.data.access_token)
        await setServerCookie(res.data.access_token);
        return res.data
    }
    else {
        throw new Error("No access token")
    }
} 
export const register = async (data) => {

    const res = await api.post("api/user/register", data)
    return res.data

}
export const logout = async (data) => {

    const res = await api.post("api/user/logout", data)
    return res.data
}
export const getUser = async () => {
    const res = await api.get("api/user/getUser")
    return res.data
}