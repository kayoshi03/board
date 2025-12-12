import { CapibaraLogo } from "../capibara-logo/CapibaraLogo"
import "./index.scss"

export const Logotype = () => {
    return (
        <div className="logotype">
            <CapibaraLogo width={32} height={32}/>
            Capiboard
        </div>
    )
}