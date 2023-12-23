import "./about.css"
import workspace from "../../assets/images/workspace.webp"

const About = () => {
  return (
    <div id="about" className="about-container">
        <img className="work-img" src={workspace} alt="workspace" />
        <div className="text-container">
            <h2>About Me</h2>
            <h1>A dedicated Front-End Developer</h1>
            <p>I possess an impressive arsenal of skills in HTML, CSS, javascript, React and Tailwind. I excel in designing and mantaining a responsive website that offers a smooth user experience. My expertise lies in crafting dynamics, engaging interface and optimized code using cutting-edge development tools and techniques. I am also a team player who thrives in collabrating with cross-functional teams to produce outstanding web applications.</p>
        </div>
    </div>
  )
}

export default About