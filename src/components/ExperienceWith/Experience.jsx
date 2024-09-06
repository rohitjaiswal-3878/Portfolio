import React, { useState } from "react";
import "./index.css";
import { getSkills } from "../../apis/details";

function Experience() {
  const [skills, setSkills] = useState([
    {
      iconURL:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/255px-HTML5_logo_and_wordmark.svg.png",
      title: "HTML",
    },
    {
      iconURL:
        "https://www.google.com/imgres?q=CSS%20icon&imgurl=https%3A%2F%2Fstatic-00.iconduck.com%2Fassets.00%2Fcss-3-icon-726x1024-610441pl.png&imgrefurl=https%3A%2F%2Ficonduck.com%2Ficons%2F94188%2Fcss-3&docid=6v7-6hDbT2tKpM&tbnid=5ml0sTq67lhHOM&vet=12ahUKEwjuw__91a6IAxXz6jgGHdy_N3cQM3oECGkQAA..i&w=726&h=1024&hcb=2&ved=2ahUKEwjuw__91a6IAxXz6jgGHdy_N3cQM3oECGkQAA",
      title: "CSS",
    },
    {
      iconURL: "",
      title: "JavaScript",
    },
    {
      iconURL: "",
      title: "React",
    },
    {
      iconURL: "",
      title: "Node JS",
    },
    {
      iconURL: "",
      title: "MongoDB",
    },
    {
      iconURL: "",
      title: "Express JS",
    },
    {
      iconURL: "",
      title: "Java",
    },
    {
      iconURL: "",
      title: "MySql",
    },
    {
      iconURL: "",
      title: "Git",
    },
    {
      iconURL: "",
      title: "Github",
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
