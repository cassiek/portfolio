import "./Project.scss";
import { Link } from "react-router-dom";
import lock from "../../assets/icons/lock_5107875.png";
import HTML from "../../assets/icons/HTML5.png";
import CSS from "../../assets/icons/CSS3.png";
import Sass from "../../assets/icons/Sass.png";
import JavaScript from "../../assets/icons/JavaScript.png";
import TypeScript from "../../assets/icons/TypeScript.png";
import ReactIcon from "../../assets/icons/React.png";

import Node from "../../assets/icons/Node.js.png";
import Express from "../../assets/icons/Express.png";
import Next from "../../assets/icons/Next.js.png";
import MySQL from "../../assets/icons/MySQL.png";
import Knex from "../../assets/icons/Knex.js.png";

import Git from "../../assets/icons/Git.png";
import GitHubIcon from "../../assets/icons/GitHubLargeIcon.png";
import npm from "../../assets/icons/NPM.png";
import Jira from "../../assets/icons/Jira.png";
import Heroku from "../../assets/icons/Heroku.png";
import Vercel from "../../assets/icons/Vercel.png";
import Postman from "../../assets/icons/Postman.png";
import Firebase from "../../assets/icons/Firebase.png";
import Photoshop from "../../assets/icons/Adobe Photoshop.png";
import Illustrator from "../../assets/icons/Adobe Illustrator.png";
import XD from "../../assets/icons/Adobe XD.png";
import Figma from "../../assets/icons/Figma.png";
import Jest from "../../assets/icons/Jest.png";
import StackOverflow from "../../assets/icons/Stack Overflow.png";
import ViteIcon from "../../assets/icons/Vite.js.png";
import VSCodeIcon from "../../assets/icons/Visual Studio Code.png";

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

    const icons = {
        HTML: HTML,
        CSS: CSS,
        Sass: Sass,
        JavaScript: JavaScript,
        TypeScript: TypeScript,
        React: ReactIcon,
        "Node.js": Node,
        "Express.js": Express,
        Next: Next,
        MySQL: MySQL,
        "Knex.js": Knex,
        Git: Git,
        GitHub: GitHubIcon,
        Jira: Jira,
        Heroku: Jira,
        Vercel: Vercel,
        Postman: Postman,
        Firebase: Firebase,
        Figma: Figma,
        StackOverflow: StackOverflow,
        Vite: ViteIcon,
    }

    let stackHeader;
    if (also.length > 0) {
        stackHeader = <h4 className="project__stack-header">Tech stack:</h4>;
    }

    let stackSection;
    if (stack.length > 0) {
        stackSection = <ul className="project__stack-list">
            {stack.map((item) => {
                if (item in icons == true) {
                    return <div className="project__stack-item-container"><li className="project__stack-item">{item}</li>
                        <img className="project__stack-icon" src={icons[item]}/>
                        </div>
                } else {
                    return <li className="project__stack-item">{item}</li>
                }
            })}
        </ul>
    }

    return (
        <div className="project">
            <h3 className="project__title">{title}</h3>
            <div className="project__tech-container">
                <div className="project__stack-container">
                    {stackHeader}
                    {stackSection}
                </div>
                <div className="project__also-container">
                    {alsoHeader}
                    {alsoSection}
                </div>
            </div>
            <div className="preview">
                <video controls className="preview__video-player" muted autoPlay loop >
                    <source src={video} type="video/mp4" />
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