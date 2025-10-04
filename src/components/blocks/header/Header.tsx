import "./index.scss";

const Header = () => { 

    return (
        <header className="header">
            <div className="container">
                <div className="header__inner">
                    <div className="header__logo">CapiBoard</div>
                    <nav>
                        <a className="header__link" href="#">Home</a>
                        <a className="header__link" href="#">Dashboards</a>
                        <a className="header__link" href="#">Contacts</a>
                    </nav>
                    <div className="header__search">
                        <input type="search" placeholder="Search" />
                        <button>Search</button>
                    </div>
                    <div className="header__account">
                        <button>Sign In</button>
                        <button>Sign Up</button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;