import "./Footer.scss";
import { Link } from "react-router-dom";
import LinkedIn from "../../assets/icons/linkedin.png";
import darkLinkedIn from "../../assets/icons/linkedin-drkpurple.png";
import GitHub from "../../assets/icons/github.png";
import darkGitHub from "../../assets/icons/github-drkpurple.png";
import email from "../../assets/icons/email.png";
import darkEmail from "../../assets/icons/email-drkpurple.png";


function Footer() {
    return (
        <footer className="footer">
            <Link to="https://www.linkedin.com/in/cassie-k/" className="footer__linkedin-icon"></Link>
            <Link to="https://github.com/cassiek" className="footer__github-icon"></Link>
            <Link to="mailto:ckumpula123@gmail.com" className="footer__email-icon"></Link>
            <p className="footer__bullet-point">•</p>
            <p className="footer__copyright">Cassandra Kumpula © 2024</p>
        </footer>
    ) 
};

export default Footer;