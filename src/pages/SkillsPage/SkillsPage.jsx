import "./SkillsPage.scss";
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

function SkillsPage() {
    
    return (
        <main className="skills-page">
            <section className="skills-page__content">
                <h3 className="skills-page__header">Skills</h3>
                <div className="skills-page__skills">
                    <ul className="front-end">
                        <h4 className="front-end__header">Font-end</h4>
                        <div className="front-end__item-container">
                            <li className="front-end__item">HTML</li>
                            <img className="front-end__icon" src={HTML} /> 
                        </div>
                        <div className="front-end__item-container">
                            <li className="front-end__item">CSS</li>
                            <img className="front-end__icon" src={CSS} />
                        </div>
                        <div className="front-end__item-container">
                            <li className="front-end__item">Sass</li>
                            <img className="front-end__icon" src={Sass} />
                        </div>
                        <div className="front-end__item-container">
                            <li className="front-end__item">JavaScript</li>
                            <img className="front-end__icon" src={JavaScript} />
                        </div>
                        <div className="front-end__item-container">
                            <li className="front-end__item">TypeScript</li>
                            <img className="front-end__icon" src={TypeScript} />
                        </div>
                        <div className="front-end__item-container">
                            <li className="front-end__item">React</li>
                            <img className="front-end__icon" src={ReactIcon} />
                        </div>
                        <li className="front-end__item">Responsive Design</li>
                    </ul>
                    <ul className="back-end">
                        <h4 className="back-end__header">Back-end</h4>
                        <div className="back-end__item-container">
                            <li className="back-end__item">Node.js</li>
                            <img className="back-end__icon" src={Node} />
                        </div>
                        <div className="back-end__item-container">
                            <li className="back-end__item">Express.js</li>
                            <img className="back-end__icon" src={Express} />
                        </div>
                        <div className="back-end__item-container">
                            <li className="back-end__item">Next.js</li>
                            <img className="back-end__icon" src={Next} />
                        </div>
                        <div className="back-end__item-container">
                            <li className="back-end__item">MySQL</li>
                            <img className="back-end__icon" src={MySQL} />
                        </div>
                        <div className="back-end__item-container">
                            <li className="back-end__item">Knex.js</li>
                            <img className="back-end__icon" src={Knex} />
                        </div>
                        <li className="back-end__item">Web APIs</li>
                        <li className="back-end__item">RESTful APIs</li>
                    </ul>
                    <ul className="other">
                        <h4 className="other__header">Other</h4>
                        <div className="other__item-container">
                            <li className="other__item">Git</li>
                            <img className="other__icon" src={Git} />
                        </div>
                        <div className="other__item-container">
                            <li className="other__item">GitHub</li>
                            <img className="other__icon" src={GitHubIcon} />
                        </div>
                        <li className="other__item">Command Line</li>
                        <div className="other__item-container">
                            <li className="other__item">npm</li>
                            <img className="other__icon" src={npm} />
                        </div>
                        <div className="other__item-container">
                            <li className="other__item">Vite.js</li>
                            <img className="other__icon" src={ViteIcon} />
                        </div>
                        <div className="other__item-container">
                            <li className="other__item">VSCode</li>
                            <img className="other__icon" src={VSCodeIcon} />
                        </div>
                        <div className="other__item-container">
                            <li className="other__item">Scrum & Jira</li>
                            <img className="other__icon" src={Jira} />
                        </div>
                        <li className="other__item">Netlify</li>
                        <li className="other__item">Render</li>
                        <div className="other__item-container">
                            <li className="other__item">Heroku</li>
                            <img className="other__icon" src={Heroku} />
                        </div>
                        <div className="other__item-container">
                            <li className="other__item">Vercel</li>
                            <img className="other__icon" src={Vercel} />
                        </div>
                        <div className="other__item-container">
                            <li className="other__item">Firebase</li>
                            <img className="other__icon" src={Firebase} />
                        </div>
                        <div className="other__item-container">
                            <li className="other__item">Postman</li>
                            <img className="other__icon" src={Postman} />
                        </div>
                        <div className="other__item-container">
                            <li className="other__item">Jest</li>
                            <img className="other__icon" src={Jest} />
                        </div>
                        <li className="other__item">Vitest</li>
                        <div className="other__item-container">
                            <li className="other__item">Stack Overflow</li>
                            <img className="other__icon" src={StackOverflow} />
                        </div>
                        <div className="other__item-container">
                            <li className="other__item">Figma</li>
                            <img className="other__icon" src={Figma} />
                        </div>
                        <div className="other__item-container">
                            <li className="other__item">Photoshop</li>
                            <img className="other__icon" src={Photoshop} />
                        </div>
                        <div className="other__item-container">
                            <li className="other__item">Illustrator</li>
                            <img className="other__icon" src={Illustrator} />
                        </div>
                        <div className="other__item-container">
                            <li className="other__item">Adobe XD</li>
                            <img className="other__icon" src={XD} />
                        </div>
                    </ul>
                </div>
            </section>
        </main>
    )
};

export default SkillsPage;