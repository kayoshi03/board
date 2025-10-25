"use client"
import { Button } from "@/components"
import { useEffect, useState } from "react"
import { Modal } from "../../modal/Modal"
import { createDashboard } from "@/services/api/request/POST/dashboard"

export const AddProject = () => {

    const [show, setShow] = useState(false)
    const [title, setTitle] = useState("")

    const fetch = async() => {
        const post = {
            title,
            user_id: process.env.NEXT_PUBLIC_CURRENT_USER
        }
        const res = await createDashboard(post)
        console.log(res)
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
                        <Button click={() => fetch()}>Создать проект</Button>
                    </div>
                </Modal> : 
                <></>
            }
        </>
    )
}