import Image from "next/image"

type Props = {
    width: number
    height: number
}

export const CapibaraLogo = ({
        width, 
        height
    }:Props) => {
    return (
        <Image 
            src="/logotype.png" 
            width={width} 
            height={height} 
            alt=""
        />
    )
}