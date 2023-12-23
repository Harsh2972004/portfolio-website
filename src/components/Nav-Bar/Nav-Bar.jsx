import { useState } from "react";
import "./Nav-Bar.css";
import menu from "../../assets/images/menu.svg";
import close from "../../assets/images/x.svg";

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="nav-container">
      <a href="#" className="logo">
        Harsh.Dev
      </a>
      <div className="nav-links">
        <a href="#">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="navbar-menu">
        {toggleMenu ? (
          <img
            onClick={() => setToggleMenu(false)}
            className="menu-btn"
            src={close}
            alt="close"
          />
        ) : (
          <img
            onClick={() => setToggleMenu(true)}
            className="menu-btn"
            src={menu}
            alt="menu"
          />
        )}
        {toggleMenu && (
          <div className="navbar-menu_container scale-up-center">
            <div className="navbar-menu_container-links">
              <div className="navbar-menu-links">
                <a onClick={() => setToggleMenu(!toggleMenu)} href="#">
                  Home
                </a>
                <a onClick={() => setToggleMenu(!toggleMenu)} href="#about">
                  About
                </a>
                <a onClick={() => setToggleMenu(!toggleMenu)} href="#projects">
                  Projects
                </a>
                <a onClick={() => setToggleMenu(!toggleMenu)} href="#contact">
                  Contact
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
