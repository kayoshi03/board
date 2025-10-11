"use client"
import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd"
import { Columns } from "../column/Columns"
import { useState } from "react"
import { dnd } from "@/api/request/POST/dnd"
import { title } from "process"

export const Desk = ({col}:{col:[]}) => {
    const [items, setItems] = useState(col);
    const onDragEnd = async(result: any) => {
        const { source, destination } = result
        if (!destination) return
        if (source.index === destination.index && source.droppableId === destination.droppableId) return
        const updated = Array.from(items);
        const [moved] = updated.splice(source.index, 1);
        updated.splice(destination.index, 0, moved);
        const payload = updated.map((col) => ({id: col.id, title: col.title, order: col.order}))
        await dnd(payload)
        setItems(updated);
    }

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="desk" direction="horizontal">
                {(provided) => (
                <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    style={{ display: 'flex', gap: '1rem' }} // горизонтальный layout
                    >
                    {items.map((item: any, index: number) => (
                        <Draggable key={item.id} draggableId={item.id.toString()} index={index}>
                        {(provided) => (
                            <div
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