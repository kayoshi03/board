import { PAGES } from "@/config/routes";
import Link from "next/link";

const HeaderLink = () => {

    return (
        <nav>
            <Link className="header__link" href={PAGES.HOME.url}>{PAGES.HOME.pathname}</Link>
            <Link className="header__link" href={PAGES.PROJECT.url}>{PAGES.PROJECT.pathname}</Link>
        </nav>
    )
}

export default HeaderLink;