import React, { useEffect, useState } from "react";
import "./index.css";
import { getExperience } from "../../apis/details";

function Exp() {
  const [experiences, setExperiences] = useState([]);
  const fetchExperience = async () => {
    const data = await getExperience();
    data.reverse();
    setExperiences(data);
  };

  useEffect(() => {
    fetchExperience();
  }, []);

  return (
    <div className="job-experience">
      <div className="job-experience-container">
        <h1>Experience</h1>
        <div className="job-experiences">
          {experiences.map((exp, index) => (
            <div className="exp-details" key={index}>
              <div className="exp-details-heading">
                <p>
                  <img src={exp.iconURL} alt="company icon" />
                  <span>
                    {exp.position} at {exp.companyName}
                  </span>
                </p>
                <p className="exp-details-period">
                  {new Date(exp.startDate).toLocaleString("default", {
                    month: "short",
                    year: "numeric",
                  })}{" "}
                  -{" "}
                  {exp.endDate == "on"
                    ? "present"
                    : new Date(exp.endDate).toLocaleString("default", {
                        month: "short",
                        year: "numeric",
                      })}
                </p>
              </div>
              <p className="exp-details-description">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Exp;
