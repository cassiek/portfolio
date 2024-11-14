import "./Header.scss";

function Header() {
    return (
        <header className="header">
            <nav className="nav">
                <ul className="nav__list">
                    <li className="nav__item">Skills</li>
                    <li className="nav__item">Projects</li>
                    <li className="nav__item">Contact</li>
                </ul>
            </nav>
        </header>
    )
};

export default Header;