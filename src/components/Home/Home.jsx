import "./home.css";
import homeImg from "../../assets/images/man1.png";
import html from "../../assets/images/html5-logo.png";
import css from "../../assets/images/CSS3_logo-removebg.png";
import js from "../../assets/images/javascript-logo.png";
import reactIcon from "../../assets/images/react-icon1.png";
import tailwind from "../../assets/images/tailwind-css-2-removebg-preview.png";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="heading-container">
          <h1>Front-End Web Developer 👋</h1>
          <p>
            Hi, I am Harshpreet Singh. A passionate Front-End Web Developer
            based in New Delhi, India. 📍
          </p>
          <div>
            <a
              href="https://www.linkedin.com/in/harshpreet-singh-b51b83266/"
              target="_blank"
            >
              <BsLinkedin className="linkedin-logo socials" fontSize="28px" />
            </a>
            <a href="https://github.com/Harsh2972004" target="_blank">
              <BsGithub className="github-logo socials" fontSize="28px" />
            </a>
          </div>
        </div>
        <img src={homeImg} alt="home" />
      </div>
      <div className="tech-container">
        <h2>Tech Stack |</h2>
        <img className="web-lang-icons" src={html} alt="html" />
        <img className="web-lang-icons" src={css} alt="css" />
        <img className="web-lang-icons" src={js} alt="js" />
        <img className="web-lang-icons react" src={reactIcon} alt="react" />
        <img className="web-lang-icons" src={tailwind} alt="tailwind" />
      </div>
    </>
  );
};

export default Home;
