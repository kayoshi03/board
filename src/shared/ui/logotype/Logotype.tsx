import { constants } from "@/shared/constants"
import { CapibaraLogo } from "../capibara-logo/CapibaraLogo"
import Link from "next/link"
import "./index.scss"

export const Logotype = () => {
    return (
        <Link href={"/"} className="logotype">
            <CapibaraLogo 
                width={32} 
                height={32}
            />
            {constants.APP_NAME}
        </Link>
    )
}