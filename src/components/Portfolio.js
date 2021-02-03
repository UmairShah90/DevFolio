import { motion } from "framer-motion";
import React from "react";
import "./../index.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const boxVariants = {
  hover: {
    scale: 1.06,
    transition: {
      type: "spring",
    },
  },
};
function Portfolio() {
  return (
    <section
      data-aos="fade-up"
      className="portfolio-container"
      name="portfolio"
      id="portfolio"
    >
      <h1 className="heading">Projects I have Built</h1>
      <div className="projects-container">
      {/* project 1: SpaceX App */}
      <motion.div
          className="projects"
          whileHover="hover"
          variants={boxVariants}
        >
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://spacex-corp.netlify.app/"
          >
            <div className="projects-images" id="spaceX"></div>
          </a>

          <div className="project-links">
            <div className="text">
              <h3>SpaceX App</h3>
            </div>

            <div className="icons">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/UmairShah90/SpaceX-App"
              >
                <i>
                  <FaGithub id="github" size={30} />{" "}
                </i>
              </a>

              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://spacex-corp.netlify.app/"
              >
                <i>
                  <FaExternalLinkAlt id="live" size={30} />{" "}
                </i>
              </a>
            </div>
          </div>
        </motion.div>
        {/* project 2: Cartoon Animation */}
        <motion.div
          className="projects"
          whileHover="hover"
          variants={boxVariants}
        >
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://myreactanimation.netlify.app/"
          >
            <div className="projects-images" id="cartoonAnimation"></div>
          </a>

          <div className="project-links">
            <div className="text">
              <h3>Cartoon Animation</h3>
            </div>

            <div className="icons">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/UmairShah90/React-Cartoon-Animation"
              >
                <i>
                  <FaGithub id="github" size={30} />{" "}
                </i>
              </a>

              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://myreactanimation.netlify.app/"
              >
                <i>
                  <FaExternalLinkAlt id="live" size={30} />{" "}
                </i>
              </a>
            </div>
          </div>
        </motion.div>
           {/* project 2: Timer Application */}
           <motion.div
          className="projects"
          whileHover="hover"
          variants={boxVariants}
        >
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://timer-app-tdd.netlify.app/"
          >
            <div className="projects-images" id="timer"></div>
          </a>

          <div className="project-links">
            <div className="text">
              <h3>Timer Application</h3>
            </div>

            <div className="icons">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/UmairShah90/Timer-App"
              >
                <i>
                  <FaGithub id="github" size={30} />{" "}
                </i>
              </a>

              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://timer-app-tdd.netlify.app/"
              >
                <i>
                  <FaExternalLinkAlt id="live" size={30} />{" "}
                </i>
              </a>
            </div>
          </div>
        </motion.div>
        {/* project 4: Corona Tracker */}
        <motion.div
          className="projects"
          whileHover="hover"
          variants={boxVariants}
        >
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="http://corona_virus_tracker.surge.sh/"
          >
            <div className="projects-images" id="coronaTracker"></div>
          </a>

          <div className="project-links">
            <div className="text">
              <h3>Corona Virus Tracker App</h3>
            </div>

            <div className="icons">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/UmairShah90/Corona-Virus-Tracker"
              >
                <i>
                  <FaGithub id="github" size={30} />{" "}
                </i>
              </a>

              <a
                rel="noopener noreferrer"
                target="_blank"
                href="http://corona_virus_tracker.surge.sh/"
              >
                <i>
                  <FaExternalLinkAlt id="live" size={30} />{" "}
                </i>
              </a>
            </div>
          </div>
        </motion.div>
        {/* project 2: Expense Tracker */}
        <motion.div
          className="projects"
          whileHover="hover"
          variants={boxVariants}
        >
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://yourexpense-tracker.netlify.app/"
          >
            <div className="projects-images" id="expenseTracker"></div>
          </a>

          <div className="project-links">
            <div className="text">
              <h3>Expense Tracker App</h3>
            </div>

            <div className="icons">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/UmairShah90/Expense-Tracker"
              >
                <i>
                  <FaGithub id="github" size={30} />{" "}
                </i>
              </a>

              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://your-expense-tracker.netlify.app/"
              >
                <i>
                  <FaExternalLinkAlt id="live" size={30} />{" "}
                </i>
              </a>
            </div>
          </div>
        </motion.div>
        {/* project 3: Todo App */}
        <motion.div
          className="projects"
          whileHover="hover"
          variants={boxVariants}
        >
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://umairshah90.github.io/Todo-App/"
          >
            <div className="projects-images" id="todoApp"></div>
          </a>

          <div className="project-links">
            <div className="text">
              <h3>Todo App Using JS</h3>
            </div>

            <div className="icons">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/UmairShah90/Todo-App"
              >
                <i>
                  <FaGithub id="github" size={30} />{" "}
                </i>
              </a>

              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://umairshah90.github.io/Todo-App/"
              >
                <i>
                  <FaExternalLinkAlt id="live" size={30} />{" "}
                </i>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Project 2 - Stop Watch */}
        <motion.div
          variants={boxVariants}
          whileHover="hover"
          className="projects"
        >
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://umairshah90.github.io/Stop-Watch/"
          >
            <div className="projects-images" id="stopWatch"></div>
          </a>

          <div className="project-links">
            <div className="text">
              <h3>Stop Watch</h3>
            </div>

            <div className="icons">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/UmairShah90/Stop-Watch"
              >
                <i>
                  <FaGithub id="github" size={30} />{" "}
                </i>
              </a>

              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://umairshah90.github.io/Stop-Watch/"
              >
                <i>
                  <FaExternalLinkAlt id="live" size={30} />{" "}
                </i>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Project 3 - Snake Game */}
        <motion.div
          variants={boxVariants}
          whileHover="hover"
          className="projects"
        >
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/UmairShah90/Snake-Game-Using-JavaScript"
          >
            <div className="projects-images" id="snakeGame"></div>
          </a>

          <div className="project-links">
            <div className="text">
              <h3>Snake Game Using JS</h3>
            </div>

            <div className="icons">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/UmairShah90/Snake-Game-Using-JavaScript"
              >
                <i>
                  <FaGithub id="github" size={30} />{" "}
                </i>
              </a>

              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://umairshah90.github.io/Snake-Game-Using-JavaScript/"
              >
                <i>
                  <FaExternalLinkAlt id="live" size={30} />{" "}
                </i>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Project - 4 Calculator App */}
        <motion.div
          variants={boxVariants}
          whileHover="hover"
          className="projects"
        >
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/UmairShah90/Calculator-App"
          >
            <div className="projects-images" id="calculator"></div>
          </a>

          <div className="project-links">
            <div className="text">
              <h3>Calculator App</h3>
            </div>

            <div className="icons">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/UmairShah90/Calculator-App"
              >
                <i>
                  <FaGithub id="github" size={30} />{" "}
                </i>
              </a>

              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://umairshah90.github.io/Calculator-App/"
              >
                <i>
                  <FaExternalLinkAlt id="live" size={30} />{" "}
                </i>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Project -5 Saylani Home Page */}
        <motion.div
          variants={boxVariants}
          whileHover="hover"
          className="projects"
        >
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/UmairShah90/SaylaniHomePage/tree/gh-pages"
          >
            <div className="projects-images" id="saylani"></div>
          </a>

          <div className="project-links">
            <div className="text">
              <h3>Saylani Home Page</h3>
            </div>

            <div className="icons">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/UmairShah90/SaylaniHomePage/tree/gh-pages"
              >
                <i>
                  <FaGithub id="github" size={30} />{" "}
                </i>
              </a>

              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://umairshah90.github.io/SaylaniHomePage/"
              >
                <i>
                  <FaExternalLinkAlt id="live" size={30} />{" "}
                </i>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://github.com/UmairShah90"
        className="button-links"
      >
        <button className="button">More Projects</button>
      </a>
    </section>
  );
}

export default Portfolio;
