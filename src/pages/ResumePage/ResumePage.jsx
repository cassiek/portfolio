import "./ResumePage.scss";
import resume from "../../assets/resume/Cassie Kumpula Portfolio Resume.pdf";

// <object /> works in Firefox, Safari, Chrome
function ResumePage() {
    return (
        <main className="resume-page">
            <section className="resume-page__content">
                <h3 className="resume-page__header">Resumé</h3>
                <object data={resume} type="application/pdf" className="resume-page__pdf"></object> 
            </section>
        </main>
    )
};

export default ResumePage;
