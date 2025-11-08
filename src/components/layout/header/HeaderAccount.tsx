"use client"
import { Button } from "@/components"
import { useStore } from "@/store/zustand/store"

export const HeaderAccount = () => {
    const {login} = useStore()
    return (
        <div className="header__account">
            <Button click={() => login("123@gmail.com", "123456")}>Войти</Button>
            <Button>Зарегестироваться</Button>
        </div>
    )
}