import "../../styles.css";
import "./projects.css";
import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <>
      {/* <!---------------------------------- Project Section  -------------------------------------------------> */}
      <section id="projects">
        {/* <!------------Titles-------------> */}
        <p className="section__text__p1">Browse My Recent</p>
        <h1 className="title">Projects</h1>

        {/* <!------------Main Container-------------> */}
        <div className="experience-details-container">
          {/* <!------------Projects Container-------------> */}
          <div className="about-containers">
            {/* <!------------#1 Project Container-------------> */}
            <div className="details-container color-container">
              <div className="article-container">
                <img
                  src="./assets/project-1.png"
                  alt="Project 1"
                  className="project-img"
                />
              </div>
              <h2 className="experience-sub-title project-title">
                Class Projects
              </h2>
              <div className="btn-container">
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-color-2 project-btn project1-btn"
                >
                  See Projects
                </a>
              </div>

              {/* Testing Desc */}
              <div class="class1-text-container">
                {/* <!--  Class 1 Title --> */}
                <h2 class="">Physic</h2>
                {/* <!--  Class 1 Desc --> */}
                <div class="paragraph">
                    <p class="">Built for businesses. Create, manage, and scale custom training programs effortlessly. Navu360 empowers companies to simplify their training operations and achieve quantifiable development</p>
                </div>
                
                {/* <!--  Class 1 Feature --> */}
                <div class="feature">
                    {/* <!--  Class 1 Feature Title --> */}
                    <h3 class="">Features</h3>
                    {/* <!--  Class 1 Feature Lists--> */}
                    <ul>
                      <p><li>Single Sign On with Auth0</li></p>
                      <p><li>Single Sign On with Auth0</li></p>
                      <p><li>Single Sign On with Auth0</li></p>
                      <p><li>Single Sign On with Auth0</li></p>
                      <p><li>Single Sign On with Auth0</li></p>
                      <p><li>Single Sign On with Auth0</li></p>
                    </ul>
                </div>

              </div>

            </div>

            {/* <!------------#2 Project Container-------------> */}
            <div className="details-container color-container">
              <div className="article-container">
                <img
                  src="./assets/project-2.png"
                  alt="Project 2"
                  className="project-img"
                />
              </div>
              <h2 className="experience-sub-title project-title">
                Project Two
              </h2>
              <div className="btn-container">
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-color-2 project-btn"
                >
                  Github
                </a>
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-color-2 project-btn"
                >
                  Live Demo
                </a>
              </div>

              {/* Testing Desc */}
              <div class="class1-text-container">
                {/* <!--  Class 1 Title --> */}
                <h2 class="">Physic</h2>
                {/* <!--  Class 1 Desc --> */}
                <div class="paragraph">
                    <p class="">Built for businesses. Create, manage, and scale custom training programs effortlessly. Navu360 empowers companies to simplify their training operations and achieve quantifiable development</p>
                </div>
                
                {/* <!--  Class 1 Feature --> */}
                <div class="feature">
                    {/* <!--  Class 1 Feature Title --> */}
                    <h3 class="">Features</h3>
                    {/* <!--  Class 1 Feature Lists--> */}
                    <ul>
                      <p><li>Single Sign On with Auth0</li></p>
                      <p><li>Single Sign On with Auth0</li></p>
                      <p><li>Single Sign On with Auth0</li></p>
                      <p><li>Single Sign On with Auth0</li></p>
                      <p><li>Single Sign On with Auth0</li></p>
                      <p><li>Single Sign On with Auth0</li></p>
                    </ul>
                </div>

              </div>

            </div>

            {/* <!------------#3 Project Container-------------> */}
            <div className="details-container color-container">
              <div className="article-container">
                <img
                  src="./assets/project-3.png"
                  alt="Project 3"
                  className="project-img"
                />
              </div>
              <h2 className="experience-sub-title project-title">
                Project Three
              </h2>
              <div className="btn-container">
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-color-2 project-btn"
                >
                  Github
                </a>
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-color-2 project-btn"
                >
                  Live Demo
                </a>
              </div>

              {/* Testing Desc */}
              <div class="class1-text-container">
                {/* <!--  Class 1 Title --> */}
                <h2 class="">Physic</h2>
                {/* <!--  Class 1 Desc --> */}
                <div class="paragraph">
                    <p class="">Built for businesses. Create, manage, and scale custom training programs effortlessly. Navu360 empowers companies to simplify their training operations and achieve quantifiable development</p>
                </div>
                
                {/* <!--  Class 1 Feature --> */}
                <div class="feature">
                    {/* <!--  Class 1 Feature Title --> */}
                    <h3 class="">Features</h3>
                    {/* <!--  Class 1 Feature Lists--> */}
                    <ul>
                      <p><li>Single Sign On with Auth0</li></p>
                      <p><li>Single Sign On with Auth0</li></p>
                      <p><li>Single Sign On with Auth0</li></p>
                      <p><li>Single Sign On with Auth0</li></p>
                      <p><li>Single Sign On with Auth0</li></p>
                      <p><li>Single Sign On with Auth0</li></p>
                    </ul>
                </div>

              </div>

            </div>
          </div>
        </div>
        <Link to="/#contact" className="link">
          <img
            src="./assets/arrow.png"
            alt="Arrow icon"
            className="icon arrow"
          />
        </Link>
      </section>
    </>
  );
}
