import "./ContactPage.scss";
import { Link } from "react-router-dom";

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
                        <div className="contact-page__socials-icons">
                            <Link to="https://www.linkedin.com/in/cassie-k/"><img src="../../assets/icons/connection.png" alt="LinkedIn icon linking to LinkedIn profile"/></Link>
                            <Link to="https://medium.com/@cassiekumpula/about"><img src="../../assets/icons/medium.png" alt="Medium icon linking to Medium profile"/></Link>
                            <Link to="https://github.com/cassiek"><img src="../../assets/icons/github.png" alt="GitHub icon linking to GitHub profile"/></Link>
                        </div>
                        <div className="contact-page__email">
                            <img className="contact-page__email-icon" src="../../assets/icons/letter.png"/>
                            <Link className="contact-page__email-link" to="mailto:ckumpula123@gmail.com">ckumpula123@gmail.com</Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
};

export default ContactPage;