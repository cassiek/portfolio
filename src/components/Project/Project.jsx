import "./Project.scss";
import { Link } from "react-router-dom";
import lock from "../../assets/icons/lock_5107875.png";

function Project({ title, stack, also, poster, video, live, GitHub, description, requirements }) {
    
    let gitHub;
    if (GitHub == true) {
        gitHub = <a className="buttons__code">{GitHub}</a>; 
    } else {
        gitHub = <div className="buttons__private-container"><p className="buttons__private-text">Private Repo</p><img className="buttons__private-icon" src={lock} /></div>;
    }

    let alsoHeader;
    if (also.length > 0) {
        alsoHeader = <h4 className="project__also-header">Also:</h4>;
    }

    let alsoSection;
    if (also.length > 0) {
        alsoSection = <ul className="project__also-list">
            {also.map((item) => {
                return (
                <li className="project__also-item">{item}</li>
                )
        })}
        </ul>
    }

    let stackSection = <ul className="project__stack-list">
        {stack.map((item) => {
            return <li className="project__stack-item">{item}</li>
        })}
    </ul>

    return (
        <div className="project">
            <h3 className="project__title">{title}</h3>
            <div className="project__tech-container">
                <div className="project__stack-container">
                    <h4 className="project__stack-header">Tech stack:</h4>
                    {stackSection}
                </div>
                <div className="project__also-container">
                    {alsoHeader}
                    {alsoSection}
                </div>
            </div>
            <div className="preview">
                <video controls className="preview__video-player" poster={poster}>
                    <source src={video} type="" />
                </video>
            </div>
            <div className="buttons">
                <Link to={video} className="buttons__preview">Video Preview</Link>
                <a href={live} target="_blank" className="buttons__link">Live Website</a>
                {gitHub}
            </div>
            <h4 className="project__description-header">Overview</h4>
            <p className="project__description">{description}</p>
            <h4 className="project__requirements-header">Requirements</h4>
            <p className="project__requirements">{requirements}</p>
        </div>
    );
}

export default Project;