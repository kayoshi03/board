import Link from "next/link"
import { FC, ReactNode } from "react"
import "./index.scss"

type Props = {
    children: ReactNode
    selector?: "primary" | "secondary" | "third" | undefined
    href: string
}

export const ButtonNav:FC<Props> = ({
    children, 
    selector,
    href 
    }) => {
    let defaultSelector = `btn btn-${selector}`;
    if(!selector) {
        defaultSelector = "btn btn-primary";
    }
    
    return (
        <Link
            href={href}
            type="button"
            className={defaultSelector} 
        >
                {children}
        </Link>
    )
}