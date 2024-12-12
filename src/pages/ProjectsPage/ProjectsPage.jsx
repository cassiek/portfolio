import "./ProjectsPage.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import Project from "../../components/Project/Project.jsx";

const API_URL = import.meta.env.VITE_HOSTED_URL;


function ProjectsPage() {
    const [projects, setProjects] = useState([]);

    // get a list of projects
    useEffect(() => {
        async function getProjects() {
            try {
                const response = await axios.get(API_URL);
                setProjects(response.data);
            } catch(error) {
                console.error(error);
            }
        }
        getProjects();
    }, []);
    

    return (
    <main className="projects-page">
        <section className="projects-page__content">
            <h3 className="projects-page__header">Projects</h3>
            <ul>
                {projects.map((project) => {
                    return (
                        <Project 
                        title={project.title}
                        stack={project.stack}
                        also={project.also}
                        video={project.video}
                        live={project.live}
                        GitHub={project.GitHub}
                        description={project.description}
                        requirements={project.requirements}
                        />
                    );
                }
                )}
            </ul>
        </section>
    </main>
  )
};

export default ProjectsPage;