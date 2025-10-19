"use client"
import { getDesks } from "@/api/request/GET/tasks"
import { Draggable, Droppable } from "@hello-pangea/dnd"
import { useEffect, useState } from "react"

export const Columns = ({ id, title }: { id: number, title: string }) => {
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const data = await getDesks(id)
            setTasks(data) 
        }
        fetchData()
    }, [id])

    return (
        <div className="column-wrapper">
            <h3>{title}</h3>
            <Droppable droppableId={`column-${id}`}>
                {(provided) => (
                    <div
                        className="task_list"
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                    >
                        {tasks?.data?.map((task: any, index: number) => (
                            <Draggable key={task.id} draggableId={`task-${task.id}`} index={index}>
                                {(provided) => (
                                    <div
                                        className="task"
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                    >
                                        {task.title}
                                    </div>
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                        <div className="add">
                            <p className="plus">+</p>
                            <p>Добавить задачу</p>
                        </div>
                    </div>
                )}
            </Droppable>
        </div>
    )
}
