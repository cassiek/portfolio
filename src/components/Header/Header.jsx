import "./Header.scss";
import { NavLink } from "react-router-dom";

function Header() {
    return (
        <header className="header">
            <nav className="nav">
                <ul className="nav__list">
                    <li><NavLink to="/skills" className="nav__item">Skills</NavLink></li>
                    <li><NavLink to="/projects" className="nav__item">Projects</NavLink></li>
                    <li><NavLink to="/contact" className="nav__item">Contact</NavLink></li>
                </ul>
            </nav>
        </header>
    )
};

export default Header;