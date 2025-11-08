"use client"
import { Button } from "@/components"
import {useState } from "react"
import { Modal } from "../../modal/Modal"
import { createDashboard } from "@/services/api/request/POST/dashboard"
import { useMutation, useQueryClient } from "react-query"


export const AddProject = () => {
    const [show, setShow] = useState(false)
    const [title, setTitle] = useState("")
    const id = Number(process.env.NEXT_PUBLIC_CURRENT_USER)
    const queryClient = useQueryClient()
    const mutation = useMutation({
        mutationFn: createDashboard,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ["projects"]})
            setShow(false)
        }
    })

    const handleClick = () => {
        mutation.mutate({title: title, user_id: id})
    }

    return ( 
        <>
            <Button click={() => setShow(true)}>+ Создать проект</Button>
            {
                show ? 
                <Modal setShow={setShow}>
                    <div className="modal__header">
                        <h1>Создать проект</h1>
                    </div>
                    <div className="modal__body">
                        <input name="title" value={title} onChange={(e) => setTitle(e.target.value)}/>
                        <Button click={() => handleClick()}>Создать проект</Button>
                    </div>
                </Modal> : 
                <></>
            }
        </>
    )
}