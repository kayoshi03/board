import Button from "@/components/UI/button/Button";
import "./index.scss";

const Header = () => { 

    return (
        <header className="header">
            <div className="container">
                <div className="header__inner">
                    <div className="header__logo">CapiBoard</div>
                    <nav>
                        <a className="header__link" href="/">Home</a>
                        <a className="header__link" href="/dashboards">Dashboards</a>
                        <a className="header__link" href="#">Contacts</a>
                    </nav>
                    <div className="header__search">
                        <input type="search" placeholder="Search" />
                        <button>Search</button>
                    </div>
                    <div className="header__account">
                        <Button>Sign In</Button>
                        <Button>Sign Up</Button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;