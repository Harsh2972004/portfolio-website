import ProjectCard1 from "../project-card/ProjectCard";
import "./project.css";
import projectDetails from "./projectDetails";

const Projects = () => {
  return (
    <div id="projects" className="projects-container">
      <h2 className="portfolio-head">Portfolio</h2>
      <h2 className="portfolio-text">
        Each project is a unique piece of development.
      </h2>
      <div>
        {projectDetails.map((p, i) => {
          return (
            <ProjectCard1
              image={p.image}
              title={p.title}
              text={p.text}
              code={p.code}
              demo={p.demo}
              index={i}
              key={i}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
