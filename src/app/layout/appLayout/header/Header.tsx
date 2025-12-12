import { ButtonNav, LinkNav, Logotype } from "@/shared/ui"
import { FC } from "react"
import "./index.scss"

export const Header:FC = () => {

    return (
        <header className="header">
            <div className="container">
                <div className="header__wrapper">
                    <Logotype/>
                    <div className="header__nav">
                        <LinkNav href="/app" title="Home"/>
                        <LinkNav href="/app/projects" title="Projects"/>
                        <ButtonNav selector="primary" 
                            href="/login"
                        >
                            Sign in
                        </ButtonNav>
                    </div>
                </div>
            </div>
        </header>
    )
}