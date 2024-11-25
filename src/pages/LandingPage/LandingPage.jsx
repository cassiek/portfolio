import "./LandingPage.scss";
import Typewriter from "../../components/Typewriter/Typewriter.jsx";
import Emoji from "../../components/Emoji/Emoji.jsx";
import { TypeAnimation } from "react-type-animation";

function LandingPage() {

    
    //<Emoji label="wave" symbol="👋" />
    //strings: ["Hi, I'm Cassie. 👋", "I'm a full-stack web developer.", "Welcome to my portfolio."],
    let wave = <Emoji label="wave" symbol="👋"></Emoji>

    return (
        <>
            <main className="landing-page">
                <section className="landing-page__content">

                    <h1 className="landing-page__header"> 
                        <TypeAnimation
                            sequence={[
                                "Hi, I'm Cassie. 👋",
                                900,
                                "I'm a full-stack web developer.",
                                900,
                                "Welcome to my portfolio.",
                                900
                            ]}
                            wrapper="span"
                            cursor={true}
                            repeat={Infinity}
                        />
                    </h1>                            
                    
                </section>
            </main>
        </>
    )
};

export default LandingPage;