import React from "react";
import'./subscribe.css'

const Subscribe = () => {
  return (
    <div className="subscribe">
      <div>
        <h1>Subscribe our newsletter</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="email">
        <input type="email" placeholder="Email Address" />
        <button>Get Access</button>
      </div>
    </div>
  );
};

export default Subscribe;
