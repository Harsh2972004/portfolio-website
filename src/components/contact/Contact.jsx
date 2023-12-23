import "./contact.css";
import { BsMailbox2 } from "react-icons/bs";

const Contact = () => {
  return (
    <div id="contact" className="contact-container">
      <h2 className="contact-heading">Contact</h2>
      <h2>Hit me up if you wanna work with me! 👇</h2>
      <a href="mailto:harshpreet2972004@gmail.com">
        <div className="mail-container">
          <BsMailbox2 fontSize="35px" color="#0077b6" />
          <div className="mail-heading">
            <h3>Mail</h3>
            <p>harshpreet2972004@gmail.com</p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Contact;
