"use client"
import { Button } from "@/components/ui/button/Button"
import { useStore } from "@/store/zustand/store"

export const HeaderCabinet = ({user}:{user:string}) => {
    const {exit} = useStore()
    return (
        <div>
            <p>{user}</p>
            <Button click={exit}>Выйти</Button>
        </div>
    )
}