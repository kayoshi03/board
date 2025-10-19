"use client"
import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd"
import { Columns } from "../column/Columns"
import { useState } from "react"
import { dnd } from "@/api/request/POST/dnd"
import "./index.scss"

export const Desk = ({ col }: { col: any[] }) => {
    const [items, setItems] = useState(col.sort((a, b) => a.order - b.order))

    const onDragEnd = async (result: any) => {
        const { source, destination } = result
        if (!destination) return

        const updated = Array.from(items)
        const [moved] = updated.splice(source.index, 1)
        updated.splice(destination.index, 0, moved)

        // Обновляем порядок
        const reordered = updated.map((item, index) => ({
            ...item,
            order: index
        }))

        await dnd(reordered)
        setItems(reordered)
    }

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="desk" direction="horizontal" type="COLUMN">
                {(provided) => (
                    <div
                        className="desk"
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        style={{ display: 'flex', gap: '16px' }}
                    >
                        {items.map((item, index) => (
                            <Draggable key={item.id} draggableId={`column-${item.id}`} index={index}>
                                {(provided) => (
                                    <div
                                        className="column"
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                    >
                                        <Columns id={item.id} title={item.title} />
                                    </div>
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    )
}
