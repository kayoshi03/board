import { ReactNode } from "react"
import "./index.scss"

type Props = {
    children: ReactNode
    selector?: "primary" | "secondary" | "third" | undefined
    disabled?: boolean
    handler?: () => void
}

export const Button = ({children, selector, disabled, handler}:Props) => {
    let defaultSelector = `btn btn-${selector}`;
    if(!selector) {
        defaultSelector = "btn btn-primary";
    }
    
    return (
        <button 
            className={defaultSelector} 
            onClick={handler} 
            disabled={disabled}
        >
                {children}
        </button>
    )
}