import "./Header.scss";
import { NavLink } from "react-router-dom";

function Header() {
    return (
        <header className="header">
            <nav className="nav">
                <ul className="nav__list">
                    <li className="nav__item"><NavLink to="#">Skills</NavLink></li>
                    <li className="nav__item"><NavLink to="#">Projects</NavLink></li>
                    <li className="nav__item"><NavLink to="#">Contact</NavLink></li>
                </ul>
            </nav>
        </header>
    )
};

export default Header;