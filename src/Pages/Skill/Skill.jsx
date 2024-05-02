import React from "react";
import "./Skill.css";

const skills = [
  {
    title: "HTML",
    image:
      "https://ik.imagekit.io/satzz/Skills/html.jpg?updatedAt=1692426725986",
    skillValue: 85,
  },
  {
    title: "CSS",
    image:
      "https://ik.imagekit.io/satzz/Skills/css.png?updatedAt=1692426726161",
    skillValue: 80,
  },
  {
    title: "JavaScript",
    image:
      "https://ik.imagekit.io/satzz/Skills/js.avif?updatedAt=1692426725293",
    skillValue: 85,
  },
  {
    title: "React JS",
    image:
      "https://ik.imagekit.io/satzz/Skills/react.png?updatedAt=1692426725362",
    skillValue: 75,
  },
  {
    title: "Node JS",
    image:
      "https://ik.imagekit.io/satzz/Skills/node-js.jpg?updatedAt=1692426725169",
    skillValue: 65,
  },
  {
    title: "Express Js",
    image:
      "https://ik.imagekit.io/satzz/Skills/expressJs.png?updatedAt=1692426724978",
    skillValue: 75,
  },
  {
    title: "Mongo DB",
    image:
      "https://ik.imagekit.io/satzz/Skills/mongodb.png?updatedAt=1692426724809",
    skillValue: 70,
  },
  {
    title: "Bootstrap CSS",
    image:
      "https://ik.imagekit.io/satzz/Skills/BootstrapCss.png?updatedAt=1692426726151",
    skillValue: 80,
  },
];

const Skill = () => {
  return (
    <>
      <div className="skills-section">
        {/* <h2>Skills</h2> */}
        <div className="skill-cards">
          {skills.map((skill, index) => (
            <div key={index}>
              <div className="skill-card">
                <img src={skill.image} alt={skill.title} />
                <input
                  className="range-slider"
                  type="range"
                  value={skill.skillValue}
                  readOnly
                />
                <div>
                  {skill.title}{" "}
                  <span className="skill-value">{skill.skillValue} %</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="skills">
        <h3>Skills in Details</h3>
        <ol className="list">
          <li className="item">
            <h2> Front-End :</h2>
            <span>
              HTML, CSS, JavaScript, ReactJS, BootStrap CSS, React Native Basics
            </span>
          </li>
          <li className="item">
            <h2>Back-End :</h2>
            <span>NodeJS, ExpressJS, MongoDB, SQL Basics</span>
          </li>
          <li className="item last-item">
            <h2>Programming Languages :</h2>
            <span>JavaScript, Basics of (Java, Python, C, C++)</span>
          </li>
        </ol>
      </div>
    </>
  );
};

export default Skill;
