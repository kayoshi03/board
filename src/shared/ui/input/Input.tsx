import "./index.scss"

type Props = {
    type: "email" | 
        "password" | 
        "search" | 
        "text"
    value?: string | undefined
    placeholder?: string | undefined
}

export const Input = ({
        type, 
        value, 
        placeholder
    }:Props) => {
    
    return (
        <input className="ipt"
            type={type} 
            value={value}
            placeholder={placeholder}
         />
    )
}