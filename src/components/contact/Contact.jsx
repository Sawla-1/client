import "../../styles.css";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <>
    {/* <!------------------------------------- Contact Section  ----------------------------------------------> */}
    <section id="contact">

                              {/* <!-----------Titles----------> */}

      <p class="section__text__p1">Get in Touch</p>
      <h1 class="title">Contact Me</h1>

                              {/* <!-----------Main Container----------> */}

      <div class="contact-info-upper-container">

                              {/* <!-----------Social Media(LS)----------> */}

        <div class="contact-info-container">
          <img
            src="./assets/email.png"
            alt="Email icon"
            class="icon contact-icon email-icon"
          />
          <p><Link to="mailto:ncboyboyboy@gmail.com" className="linkLogo">ncboyboyboy@gmail.com</Link></p>
        </div>

                              {/* <!-----------Social Media(RS)----------> */}

        <div class="contact-info-container">
          <img
            src="./assets/linkedin.png"
            alt="LinkedIn icon"
            class="icon contact-icon"
          />
          <p><Link to="https://www.linkedin.com/in/nc-boy-81826b277/" className="linkLogo">LinkedIn</Link></p>
        </div>
      </div>
    </section>
    {/* <!---------------------------------- ------------------------  ----------------------------------------> */}

</>
  )
}
