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
      description:
        "Developed a full-stack web application that allows users to create, share, and take interactive quizzes, supporting both Q&A and poll formats.",
      skills: ["React", "Mongo", "Express"],
      title: "Quizzie",
    },
    {
      thumbnail: notesTaking,
      url: "https://react-notes-taking-app.vercel.app/",
      description:
        "It's a web application built using React where you can create different groups and store notes. This app keeps the timestamp of when each note was created. The data remains intact in local storage..",
      skills: ["React", "LocalStorage", "JavaScript"],
      title: "Notes Taking App",
    },
    {
      thumbnail: findJob,
      url: "https://669a748abe9d4f65253f3583--rohitjaiswal-find-jobs.netlify.app/",
      description:
        "The project features comprehensive functionality including user login and registration, creating job postings, viewing job listings, editing job details, searching and filtering job posts, and logout capability. It encompasses full CRUD operations to manage job postings effectively..",
      skills: ["React", "Mongo", "Express"],
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
              <div
                className="project-img-details"
                style={{
                  flexDirection: index % 2 == 0 ? "" : "row-reverse",
                }}
              >
                <img
                  src={project.thumbnail}
                  alt="thumbail"
                  style={{
                    borderTopRightRadius: index % 2 != 0 ? "15px" : "",
                    borderTopLeftRadius: index % 2 == 0 ? "15px" : "0px",
                  }}
                />
                <div className="project-description">
                  <p>{project.description}</p>
                  <ul className="project-skills">
                    {project.skills.map((skill, index) => (
                      <li key={index}>{skill}</li>
                    ))}
                  </ul>
                </div>
              </div>
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
