import "./ProjectsPage.scss";
import Project from "../../components/Project/Project.jsx";

function ProjectsPage() {
    // get a list of projects
  return (
    <main className="projects-page">
        <section className="projects-page__content">
            <h3 className="projects-page__header">Projects</h3>
            <Project
            title=""
            stack=""
            also=""
            video=""
            live=""
            GitHub=""
            description=""
            /// expandable sections
            />
        </section>
    </main>
  )
};

export default ProjectsPage;