import "./ContactPage.scss";
import { Link } from "react-router-dom";
import LinkedIn from "../../assets/icons/linkedin.png";
import Medium from "../../assets/icons/medium-brands-solid.svg";
import GitHub from "../../assets/icons/github.png";
import email from "../../assets/icons/email.png";

function ContactPage() {

    return (
        <main className="contact-page">
            <section className="contact-page__content">
                <h3 className="contact-page__header">Contact</h3>
                <div className="contact-page__text">
                    <p className="contact-page__description">
                        I am currently seeking a software development or related role.
                        You are welcome to contact me to discuss code, collaborating on a project,
                        an opportunity, or even to expand your network, and I will be delighted to 
                        connect with you.
                    </p>
                    <div>
                        <p className="contact-page__CTA">Let's get in touch!</p>
                        <div className="socials-icons">
                            <Link to="https://www.linkedin.com/in/cassie-k/" className="socials-icons__linkedin"></Link>
                            <Link to="https://medium.com/@cassiekumpula/about" className="socials-icons__medium"></Link>
                            <Link to="https://github.com/cassiek" className="socials-icons__github"></Link>
                        </div>
                        <div className="email">
                            <Link className="email__icon" to="mailto:ckumpula123@gmail.com"></Link><Link className="email__link" to="mailto:ckumpula123@gmail.com">ckumpula123@gmail.com</Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
};

export default ContactPage;