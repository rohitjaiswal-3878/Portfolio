import React, { useEffect, useState } from "react";
import "./index.css";
import projectThumbnail1 from "../../assets/thumb1.png";
import projectThumbnail2 from "../../assets/thumb2.png";
import { MdArrowOutward } from "react-icons/md";
import { getProjects } from "../../apis/details";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProjects = async () => {
    const data = await getProjects();
    setProjects(data);
    setLoading(!loading);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div className="projects">
      <div className="projects-container">
        <h1>projects</h1>
        {loading ? (
          <div className="loader" style={{ marginTop: "20px" }}></div>
        ) : (
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
        )}
      </div>
    </div>
  );
}

export default Projects;
