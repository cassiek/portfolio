import "./LandingPage.scss";
import { ReactTyped } from "react-typed";

function LandingPage() {

    

    //strings: ["Hi, I'm Cassie. 👋", "I'm a full-stack web developer.", "Welcome to my portfolio."],
    //let waveEmoji = "👋";

    return (
        <>
            <main className="landing-page">
                <section className="landing-page__content">

                    <ReactTyped 
                        strings={["Hi, I'm Cassie. ", "I'm a full-stack web developer.", "Welcome to my portfolio."]}
                        typeSpeed={60}
                        backSpeed={50}
                        loop
                        className="landing-page__header"
                    >
                        <h1 className="landing-page__header"></h1>
                    </ReactTyped> 

                </section>
            </main>
        </>
    )
};

export default LandingPage;