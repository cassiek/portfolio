import "./SkillsPage.scss";

function SkillsPage() {
    
    return (
        <main className="skills-page">
            <section className="skills-page__content">
                <h3 className="skills-page__header">Skills</h3>
                <div className="skills-page__skills">
                    <ul className="front-end">
                        <h4 className="front-end__header">Font-end</h4>
                        <li className="front-end__item">HTML</li>
                        <li className="front-end__item">CSS</li>
                        <li className="front-end__item">Sass</li>
                        <li className="front-end__item">JavaScript</li>
                        <li className="front-end__item">TypeScript</li>
                        <li className="front-end__item">React</li>
                        <li className="front-end__item">Responsive Design</li>
                    </ul>
                    <ul className="back-end">
                        <h4 className="back-end__header">Back-end</h4>
                        <li className="back-end__item">Node.js</li>
                        <li className="back-end__item">Express.js</li>
                        <li className="back-end__item">Next.js</li>
                        <li className="back-end__item">MySQL</li>
                        <li className="back-end__item">Knex.js</li>
                        <li className="back-end__item">Web APIs</li>
                        <li className="back-end__item">RESTful APIs</li>
                    </ul>
                    <ul className="other">
                        <h4 className="other__header">Other</h4>
                        <li className="other__item">Git</li>
                        <li className="other__item">GitHub</li>
                        <li className="other__item">Command Line</li>
                        <li className="other__item">Scrum & Jira</li>
                        <li className="other__item">Heroku</li>
                        <li className="other__item">Netlify</li>
                        <li className="other__item">Postman</li>
                        <li className="other__item">Firebase</li>
                        <li className="other__item">Figma</li>
                        <li className="other__item">Jest</li>
                        <li className="other__item">Vitest</li>
                    </ul>
                </div>
            </section>
        </main>
    )
};

export default SkillsPage;