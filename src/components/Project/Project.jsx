import "./Project.scss";
import { Link } from "react-router-dom";
import lock from "../../assets/icons/lock_5107875.png";

function Project({ title, stack, also, video, live, GitHub, description, requirements }) {

    // add to project mapping
    let gitHub;
    if (GitHub == true) {
        gitHub = <a href={GitHub} className="buttons__code">View Code on GitHub</a>;
    } else {
        gitHub = <p className="buttons__private">Private Repo <img src={lock} /></p>;
    }

    // add to project mapping
    let alsoSection;
    if (also == true) {
        alsoSection = <div className="project__also-container"><p className="project__also">Also: </p><ul>
            {also.map((item) => {
                return <li className="project__also-item">{item}</li>
            })}
        </ul>
        </div>
    } else {
        alsoSection = null;
    }

    // add to project mapping
    //let stackSection = <ul className="project__stack-section">
        //{stack.map((item) => {
            //return <li className="project__stack-item">{item}</li>
        //})}
    //</ul>



    return (
        <div className="project">
            <h3 className="project__title">{title}</h3> 
            <p className="project__stack">Tech stack:</p>
            
            
            <div className="project__preview">
                <video controls className="project__video-player">
                    <source src={video} type="" />
                </video>
            </div>
            {lock}
            <div className="buttons">
                
                <a className="buttons__link">Live Website</a>
                <Link to={video} className="buttons__preview">Video Preview</Link>
                
            </div>
            <h4 className="project__overview">Overview</h4>
            <p className="project__description">{description}</p>
            <h4 className="project__requirements-header">Requirements</h4>
            <p className="project__requirements">{requirements}</p>
        </div>
    );
}

export default Project;