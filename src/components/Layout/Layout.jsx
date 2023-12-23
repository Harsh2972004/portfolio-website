import Home from "../Home/Home";
import NavBar from "../Nav-Bar/Nav-Bar";
import About from "../about/About";
import Contact from "../contact/Contact";
import Projects from "../projects/Projects";

const Layout = () => {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default Layout;
