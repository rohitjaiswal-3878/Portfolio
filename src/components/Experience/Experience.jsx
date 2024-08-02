import React from "react";
import "./index.css";

function Experience() {
  const experienceURL = [
    "https://cdn.iconscout.com/icon/free/png-512/free-mongodb-3-1175138.png?f=webp&w=512",
    "https://cdn.iconscout.com/icon/free/png-512/free-express-8-1175029.png?f=webp&w=512",
    "https://cdn.iconscout.com/icon/free/png-512/free-react-1-282599.png?f=webp&w=512",
    "https://cdn.iconscout.com/icon/free/png-512/free-nodejs-2-226035.png?f=webp&w=512",
    "https://cdn.iconscout.com/icon/free/png-512/free-css-131-722685.png?f=webp&w=512",
    "https://cdn.iconscout.com/icon/free/png-512/free-javascript-3521515-2945018.png?f=webp&w=512",
    "https://cdn.iconscout.com/icon/free/png-512/free-mysql-6-226028.png?f=webp&w=512",
    "https://cdn.iconscout.com/icon/free/png-512/free-redux-3521674-2945118.png?f=webp&w=512",
    "https://cdn.iconscout.com/icon/free/png-512/free-git-5285243-4406680.png?f=webp&w=512",
  ];
  return (
    <div className="experience">
      <div className="experience-container">
        <h1>Experience with</h1>
        <div className="experience-skills">
          {experienceURL.map((exp, index) => (
            <div key={index} className="skills">
              <img src={exp} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
