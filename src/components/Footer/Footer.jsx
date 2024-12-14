import "./Footer.scss";
import { Link } from "react-router-dom";
import LinkedIn from "../../assets/icons/linkedin.png";
import GitHub from "../../assets/icons/github.png";
import email from "../../assets/icons/email.png";


function Footer() {
    return (
        <footer className="footer">
            <Link to="https://www.linkedin.com/in/cassie-k/"><img src={LinkedIn} className="footer__linkedin-icon" alt="LinkedIn icon linking to LinkedIn profile"/></Link>
            <Link to="https://github.com/cassiek"><img src={GitHub} className="footer__github-icon" alt="GitHub icon linking to GitHub profile"/></Link>
            <Link to="mailto:ckumpula123@gmail.com"><img className="footer__email-icon" src={email}/></Link>
            <p className="footer__copyright">
                Cassandra Kumpula © 2024
            </p>
        </footer>
    ) 
};

export default Footer;