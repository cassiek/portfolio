import "./Project.scss";
import { Link } from "react-router-dom";


function Project({ title, stack, also, video, live, GitHub, description }) {
    // preview to play on hover over rectangle
    // link to GitHub or specify private repo
    // get data from json, put it in an array
    
  return (
    <div className="project">
        <h3 className="project__title">{title}Title</h3>
        <p className="project__stack">Tech stack:{stack}</p>
        <p className="project__also">Also:{also}</p>
        <div className="project__preview">
            <video controls className="project__video-player">
                <source src={video} type="" />
            </video>
        </div>
        <div className="buttons">
            <a href={live} className="buttons__link">Live Website</a>
            <Link to={video} className="buttons__preview">Video Preview</Link>
            {}
            <a href={GitHub} className="buttons__code">View Code on GitHub</a>
            <p className="buttons__private">Private Repo</p>
        </div>
        <h4 className="project__overview">Overview</h4>
        <p className="project__description">{description}description</p>
        <div className="project__expandable">label</div>
        <div className="project__expandable">label</div>
    </div>
  )
};

export default Project;