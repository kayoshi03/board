import { login } from "@/services/api/request/POST/auth";
import { create} from "zustand";

type Login = {
    email: string,
    password: string,
    checked?: boolean
}

export const useStore = create((store) => ({
    user: null,
    login: async(email: Login, password: Login) => {
        const res = await login(email, password)
        store({user: res.user.name})
    },
    exit: () => store({user:null})
}))