import "./SkillsPage.scss";

function SkillsPage() {
    
    return (
        <main className="skills-page">
            <section className="skills-page__content">
                <h3 className="skills-page__header">Skills</h3>
                <div className="skills-page__skills">
                    <ul className="skill-ul">
                        <h4 className="skill-ul__header">Font-end</h4>
                        <li className="skill-ul__item">HTML</li>
                        <li className="skill-ul__item">CSS</li>
                        <li className="skill-ul__item">Sass</li>
                        <li className="skill-ul__item">JavaScript</li>
                        <li className="skill-ul__item">TypeScript</li>
                        <li className="skill-ul__item">React</li>
                        <li className="skill-ul__item">Responsive Design</li>
                    </ul>
                    <ul className="skill-ul">
                        <h4 className="skill-ul__header">Back-end</h4>
                        <li className="skill-ul__item">Node.js</li>
                        <li className="skill-ul__item">Express.js</li>
                        <li className="skill-ul__item">Next.js</li>
                        <li className="skill-ul__item">MySQL</li>
                        <li className="skill-ul__item">Knex.js</li>
                        <li className="skill-ul__item">Web APIs</li>
                        <li className="skill-ul__item">RESTful APIs</li>
                    </ul>
                    <ul className="skill-ul">
                        <h4 className="skill-ul__header">Other</h4>
                        <li className="skill-ul__item">Git</li>
                        <li className="skill-ul__item">GitHub</li>
                        <li className="skill-ul__item">Command Line</li>
                        <li className="skill-ul__item">Scrum & Jira</li>
                        <li className="skill-ul__item">Heroku</li>
                        <li className="skill-ul__item">Netlify</li>
                        <li className="skill-ul__item">Postman</li>
                        <li className="skill-ul__item">Firebase</li>
                        <li className="skill-ul__item">Figma</li>
                        <li className="skill-ul__item">Jest</li>
                        <li className="skill-ul__item">Vitest</li>
                    </ul>
                </div>
            </section>
        </main>
    )
};

export default SkillsPage;