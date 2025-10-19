import {Button} from "@/components";
import { NameProject } from "@/constants";
import HeaderLink from "./HeaderLink";
import "./index.scss";
const Header = () => { 
    return (
        <header className="header">
            <div className="container">
                <div className="header__inner">
                    <div className="header__logo">{NameProject}</div>
                    <HeaderLink/>
                    <div className="header__account">
                        <Button>Войти</Button>
                        <Button>Зарегестироваться</Button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;