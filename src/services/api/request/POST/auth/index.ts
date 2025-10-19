import api from "@/api/interceptors"
import { UserLogin, UserLogoutSchema, UserLoginSchema, UserLogout, UserRegister, UserRegisterSchema } from "@/types/user"


export const login = async (data:UserLogin) => {
    const parsed = UserLoginSchema.parse(data)
    const res = await api.post("user/login", parsed)
    return res.data
} 
export const register = async (data:UserRegister) => {
    const parsed = UserRegisterSchema.parse(data)
    const res = await api.post("user/register", parsed)
    return res.data

}
export const logout = async (data:UserLogout) => {
    const parsed = UserLogoutSchema.parse(data)
    const res = await api.post("user/logout", parsed)
    return res.data
}
export const getUser = async () => {
    const res = await api.get("user/getUser", )
    return res.data
}