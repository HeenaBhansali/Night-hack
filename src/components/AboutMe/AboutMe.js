import React from "react";
import Header from "../Header/Header";
import "./aboutMe.css";

const AboutMe = () => {
  return (
    <div>
      <Header />
      <div className="aboutMe">
        <h1>About Me</h1>
        <section>
          <img src="/images/heena (1).jpg" alt="" />
          <div>
            <h1>Hi!</h1>
            <h3>I'm Heena</h3>
            <p>
              I'm Frontend Developer currently working in{" "}
              <a href="https://rebelbase.co/">RebelBase</a>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutMe;
