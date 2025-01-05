import "./LandingPage.scss";
import Emoji from "../../components/Emoji/Emoji.jsx";
import { TypeAnimation } from "react-type-animation";

function LandingPage() {

    return (
        <main className="landing-page">
            <section className="landing-page__content">
                <h1 className="landing-page__header"> 
                    <TypeAnimation
                        sequence={[
                            "Hi, I'm Cassie. 👋",
                            700,
                            "I'm a full-stack web developer.",
                            700,
                            "Welcome to my portfolio.",
                            700,
                        ]}
                        speed={70}
                        wrapper="span"
                        cursor={true}
                        repeat={Infinity}
                        className="landing-page__type-animation"
                    />
                </h1>                            
            </section>
        </main>
    )
};

export default LandingPage;