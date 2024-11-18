import "./ContactPage.scss";
import { Link } from "react-router-dom";
import LinkedIn from "../../assets/icons/connection.png";
import Medium from "../../assets/icons/medium.png";
import GitHub from "../../assets/icons/github.png";
import email from "../../assets/icons/email.png";

function ContactPage() {

    return (
        <main className="contact-page">
            <section className="contact-page__content">
                <h3 className="contact-page__header">Contact</h3>
                <div className="contact-page__text">
                    <p className="contact-page__description">
                        I am currently seeking a full-time software development or related role.
                        Please feel welcome to contact me to discuss code, collaborating on a project,
                        an opportunity, or even to expand your network, and I will be delighted to 
                        connect with you.
                    </p>
                    <div>
                        <p className="contact-page__CTA">Let's get in touch!</p>
                        <div className="socials-icons">
                            <Link to="https://www.linkedin.com/in/cassie-k/"><img src={LinkedIn} className="socials-icons__icon--linkedin" alt="LinkedIn icon linking to LinkedIn profile"/></Link>
                            <Link to="https://medium.com/@cassiekumpula/about"><img src={Medium} className="socials-icons__icon--medium" alt="Medium icon linking to Medium profile"/></Link>
                            <Link to="https://github.com/cassiek"><img src={GitHub} className="socials-icons__icon--github" alt="GitHub icon linking to GitHub profile"/></Link>
                        </div>
                        <div className="email">
                            <Link className="email__link" to="mailto:ckumpula123@gmail.com"><img className="email__icon" src={email}/>ckumpula123@gmail.com</Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
};

export default ContactPage;