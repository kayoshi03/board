import { UserLogin, UserLogoutSchema, UserLoginSchema, UserLogout, UserRegister, UserRegisterSchema } from "@/types/user"
import axios from "axios"

export const login = async (data:UserLogin) => {
    const parsed = UserLoginSchema.parse(data)
    const res = await axios.post("user/login", parsed)
    return res.data
} 
export const register = async (data:UserRegister) => {
    const parsed = UserRegisterSchema.parse(data)
    const res = await axios.post("user/register", parsed)
    return res.data

}
export const logout = async (data:UserLogout) => {
    const parsed = UserLogoutSchema.parse(data)
    const res = await axios.post("user/logout", parsed)
    return res.data
}
export const getUser = async () => {
    const res = await axios.get("user/getUser", )
    return res.data
}