import React from 'react'
import "./Home.css";

const Home = () => {
  return (
    <>
    <div className="about-container">
      <div className="about-content">
        <div className="about-image">
          <img src="https://global.discourse-cdn.com/business6/uploads/zoomdeveloper/original/3X/b/3/b383df5a391544eba871146584fe42a3c0d08489.png" alt="User" />
        </div>
        <div className="about-text">
          <h2>ABOUT ME</h2>
          <p>
            I am a passionate web developer with expertise in full stack development using MERN.
            I enjoy creating interactive and user-friendly web applications.
          </p>
          <p>
            In my free time, I like to explore new technologies and contribute to open-source projects.
            I believe in continuous learning and strive to stay updated with the latest industry trends.
          </p>
          <a href="#"  className="resume-button">
            Download Resume
          </a>
        </div>
      </div>
      </div>
    </>
  )
}

export default Home