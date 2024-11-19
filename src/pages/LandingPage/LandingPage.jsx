import "./LandingPage.scss";
import Typed from "typed.js";

function LandingPage() {

    
    let typed = new Typed(".landing-page__header", {
        strings: ["Hi, I'm Cassie. 👋", "I'm a full-stack web developer.", "Welcome to my portfolio."],
        typeSpeed: 150,
        backSpeed: 150,
        loop: true    
    });

    return (
        <>
            <main className="landing-page">
                <section className="landing-page__content">
                    {/* <h1 className="landing-page__header"> */}
                        {/* Hi, I'm Cassie. 👋 <br className="landing-page__br--top"/> */}
                        {/* I'm a full-stack web developer. <br className="landing-page__br--bottom"/> */}
                        {/* Welcome to my portfolio. */}
                    {/* </h1> */}
                    <h1 className="landing-page__header"></h1>
                </section>
            </main>
        </>
    )
};

export default LandingPage;