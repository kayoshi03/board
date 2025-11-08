"use client"
import { queryClient } from "@/store/reactQuery/queryClient"
import { ReactNode } from "react"
import { QueryClientProvider } from "react-query"

interface Props {
    children: ReactNode
}

export const Provider = ({children}:Props) => {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}