"use client"
import { NameProject } from "@/constants";
import HeaderLink from "./HeaderLink";
import { HeaderAccount } from "./HeaderAccount";
import "./index.scss";
import { useStore } from "@/store/zustand/store";
import { HeaderCabinet } from "./HeaderCabinet";
const Header = () => { 
    const {user} = useStore()
    return (
        <header className="header">
            <div className="container">
                <div className="header__inner">
                    <div className="header__logo">{NameProject}</div>
                    <HeaderLink/>
                    {
                        user ? <HeaderCabinet user={user}/> : <HeaderAccount/>
                    }
                </div>
                
            </div>
        </header>
    );
}

export default Header;