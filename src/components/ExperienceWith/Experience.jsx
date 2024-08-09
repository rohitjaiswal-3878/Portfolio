import React, { useState } from "react";
import "./index.css";
import { getSkills } from "../../apis/details";

function Experience() {
  const [skills, setSkills] = useState([]);

  const fetchSkills = async () => {
    const data = await getSkills();
    setSkills(data);
  };

  useState(() => {
    fetchSkills();
  }, []);

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
