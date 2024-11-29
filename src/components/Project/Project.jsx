import "./Project.scss";
import { Link } from "react-router";

function Project({ title, stack, also, video, link, GitHub, description }) {
    // preview to play on hover over rectangle
    // link to GitHub or specify private repo

  return (
    <div className="project">
        <h3 className="project__title">{title}</h3>
        <p className="project__stack">Tech stack:{stack}</p>
        <p className="project__also">Also:{also}</p>
        <div className="project__preview">
            <video controls>
                <source src={video} type="" />
            </video>
        </div>
        <div className="buttons">
            <a href="#" className="project__link">{link}</a>
            <Link to="#" className="project__video">{video}</Link>
            <a href="#" className="project__code">{GitHub}</a>
        </div>
        <h4 className="project__overview">Overview</h4>
        <p className="project__description">{description}</p>
        {/* expandable section */}
        {/* expandable section */}
    </div>
  )
};

export default Project;