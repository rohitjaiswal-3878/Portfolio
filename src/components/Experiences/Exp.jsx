import React from "react";
import "./index.css";

function Exp() {
  const experiences = [
    {
      iconURL:
        "https://cdn4.iconfinder.com/data/icons/logos-brands-7/512/google_logo-google_icongoogle-512.png",
      position: "Lead Software Engineer",
      companyName: "Google",
      startDate: "Nov 2019",
      endDate: "Present",
      description:
        "As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google's core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide.",
    },
    {
      iconURL:
        "https://www.freepnglogos.com/uploads/apple-logo-png/image-apple-logo-trubetskoy-fisher-wiki-8.png",
      position: "Junior Software Engineer",
      companyName: "Apple",
      startDate: "Jan 2016",
      endDate: "Dec 2017",
      description:
        "During my tenure at Apple, I held the role of Software Architect, where I played a key role in shaping the architecture of mission-critical software projects. Responsible for designing scalable and efficient systems, I provided technical leadership to a cross-functional team.",
    },
    {
      iconURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR86kDWkquaiBSCj1nHaJTsCTNlVPH0GR4H2w&s",
      position: "Software Engineer",
      companyName: "Meta",
      startDate: "Jan 2017",
      endDate: "Oct 2019",
      description:
        "At Meta, I served as a  Software Engineer, focusing on the design and implementation of backend systems for the social media giant's dynamic platform. Working on projects that involved large-scale data processing and user engagement features, I leveraged my expertise to ensure seamless functionality and scalability.",
    },
  ];
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
                  {exp.startDate} - {exp.endDate}
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
