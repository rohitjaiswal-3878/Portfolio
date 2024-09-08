import React, { useState } from "react";
import "./index.css";
import htmlIcon from "../../assets/Skills/html.png";
import cssIcon from "../../assets/Skills/css.png";
import jsIcon from "../../assets/Skills/js.png";
import reactIcon from "../../assets/Skills/react.png";
import expressIcon from "../../assets/Skills/express.png";
import mongoIcon from "../../assets/Skills/mongo.png";
import nodeIcon from "../../assets/Skills/node.png";
import gitIcon from "../../assets/Skills/git.png";
import githubIcon from "../../assets/Skills/github.png";
import mysqlIcon from "../../assets/Skills/mysql.png";
import javaIcon from "../../assets/Skills/java.png";

function Experience() {
  const [skills, setSkills] = useState([
    {
      iconURL: htmlIcon,
      title: "HTML",
    },
    {
      iconURL: cssIcon,
      title: "CSS",
    },
    {
      iconURL: jsIcon,
      title: "JS",
    },
    {
      iconURL: reactIcon,
      title: "React",
    },
    {
      iconURL: expressIcon,
      title: "Express",
    },
    {
      iconURL: mongoIcon,
      title: "Mongo",
    },
    {
      iconURL: nodeIcon,
      title: "Node",
    },
    {
      iconURL: gitIcon,
      title: "Git",
    },
    {
      iconURL: githubIcon,
      title: "Github",
    },
    {
      iconURL: mysqlIcon,
      title: "MySql",
    },
    {
      iconURL: javaIcon,
      title: "Java",
    },
  ]);

  return (
    <div className="experience">
      <div className="experience-container">
        <h1>Experience with</h1>
        <div className="experience-skills">
          {skills.map((skill, index) => (
            <div key={index} className="skills">
              <img src={skill.iconURL} alt={skill.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
