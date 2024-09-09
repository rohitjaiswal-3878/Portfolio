import React, { useState } from "react";
import "./index.css";
import quizzie from "../../assets/Projects/t1.png";
import notesTaking from "../../assets/Projects/t2.png";
import findJob from "../../assets/Projects/t3.png";

import { MdArrowOutward } from "react-icons/md";

function Projects() {
  const [projects, setProjects] = useState([
    {
      thumbnail: quizzie,
      url: "https://quiz-app-rohit-jaiswal.vercel.app/",
      title: "Quizzie",
    },
    {
      thumbnail: notesTaking,
      url: "https://react-notes-taking-app.vercel.app/",
      title: "Notes Taking App",
    },
    {
      thumbnail: findJob,
      url: "https://669a748abe9d4f65253f3583--rohitjaiswal-find-jobs.netlify.app/",
      title: "Find Job",
    },
  ]);

  return (
    <div className="projects">
      <div className="projects-container">
        <h1>projects</h1>

        <div className="projects-data">
          {projects.map((project, index) => (
            <div className="project" key={index}>
              <img src={project.thumbnail} alt="thumbail" />
              <a href={project.url} target="_blank">
                <div className="project-details">
                  <div>
                    <span>Click here to visit</span>
                    <p>{project.title}</p>
                  </div>
                  <MdArrowOutward />
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
