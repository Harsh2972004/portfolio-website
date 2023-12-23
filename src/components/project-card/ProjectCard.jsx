import "./projectCard.css";
import { BsGithub, BsFillLaptopFill } from "react-icons/bs";

const ProjectCard1 = ({ image, title, text, code, demo, index }) => {
  function createProject(title, text, code, demo) {
    return (
      <div className="project-details">
        <h2>{title}</h2>
        <p>{text}</p>
        <div>
          <a href={code} target="_blank">
            <BsGithub fontSize="28px" /> <span>code</span>
          </a>
          <a href={demo} target="_blank">
            <BsFillLaptopFill fontSize="28px" /> <span>Demo</span>
          </a>
        </div>
      </div>
    );
  }

  function checkResAndRender() {
    let mql = window.matchMedia("(max-width: 600px)");
    if (mql.matches) {
      return (
        <>
          <img src={image} alt={image} />
          {createProject(title, text, code, demo)}
          {console.log(mql.matches)}
        </>
      );
    } else {
      return (
        <>
          {createProject(title, text, code, demo)}
          {console.log(mql.matches)}
          <img src={image} alt={image} />
        </>
      );
    }
  }

  return (
    <div className="project-container">
      {index % 2 === 0 ? (
        <>
          <img src={image} alt={image} />
          {createProject(title, text, code, demo)}
        </>
      ) : (
        checkResAndRender()
      )}
    </div>
  );
};

export default ProjectCard1;
