import React from "react";
import Header from "../Header/Header";
import "./aboutMe.css";

const AboutMe = () => {
  return (
    <div>
      <Header />
      <div className="aboutMe">
        <section>
          <img src="/images/heena (1).jpg" alt="" />
          <div>
            <h1>Hello!</h1>
            <h3>I'm Heena.</h3>
            <p className="description">
              I'm Frontend Developer currently working in I graduated with a
              bachelor's degree in Computer Science and Engineering from Eshan
              College of Engineering, Mathura, Uttar Pradesh in 2017. I worked
              as a Student Developer in Geekskool, Bangalore for 10 months from
              May 2019 to Feb 2020. I worked on projects with technologies
              including HTML , CSS, Javascript, React.js, Vue.js, Redux,
              Node.js, Express.js, PostgreSQL and Redis. I am currently working
              as a Frontend Developer in AllianceTech, Chennai from March 2020
              on <a href="https://rebelbase.co/">RebelBase</a> application. 
              My area of expertise include: JavaScript, Node.js, HTML, CSS, Styled
              Components, React, Redux, Vue.js, Express.js, PostgreSQL, Redis,
              WebSocket, Storybook, Cypress, Jest
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutMe;
