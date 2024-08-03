import React from "react";
import "./index.css";
import projectThumbnail1 from "../../assets/thumb1.png";
import projectThumbnail2 from "../../assets/thumb2.png";
import { MdArrowOutward } from "react-icons/md";

function Projects() {
  const projects = [
    {
      thumbnail: projectThumbnail1,
      name: "html tutorial",
    },
    {
      thumbnail: projectThumbnail2,
      name: "css tutorial",
    },
  ];
  return (
    <div className="projects">
      <div className="projects-container">
        <h1>projects</h1>
        <div className="projects-data">
          {projects.map((project, index) => (
            <div className="project" key={index}>
              <img src={project.thumbnail} alt="thumbail" />
              <div className="project-details">
                <div>
                  <span>Click here to visit</span>
                  <p>{project.name}</p>
                </div>
                <MdArrowOutward />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
