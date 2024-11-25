import "./LandingPage.scss";
import { ReactTyped } from "react-typed";
import Emoji from "../../components/Emoji/Emoji.jsx";

function LandingPage() {

    
    //<Emoji label="wave" symbol="👋" />
    //strings: ["Hi, I'm Cassie. 👋", "I'm a full-stack web developer.", "Welcome to my portfolio."],
    

    return (
        <>
            <main className="landing-page">
                <section className="landing-page__content">

                    <ReactTyped 
                        strings={["Hi, I'm Cassie.", "I'm a full-stack web developer.", "Welcome to my portfolio."]}
                        typeSpeed={50}
                        backSpeed={40}
                        loop
                        className="landing-page__header"
                        showCursor={true}
                    >
                    </ReactTyped>
                    
                </section>
            </main>
        </>
    )
};

export default LandingPage;