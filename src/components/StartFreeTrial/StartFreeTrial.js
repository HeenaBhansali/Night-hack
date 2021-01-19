import React from "react";
import Button from "../Button/Button";
import './startFreeTrial.css'

const StartFreeTrial = () => {
  return (
    <div className="startFreeTrial">
      <h1> Start your business journey with Soprano </h1>
      <p>
        Try Shopify for free, and explore all the tools and services you need to
        start, run, and grow your business.
      </p>
      <div className="steps">
        <div className="step">
          <img className="stepsImg" src="images/business.png" alt="" />
          <h4>Move Your Business Online</h4>
          <p>
            Create a business whether you've got a fresh idea or are looking for
            a new way to make money.
          </p>
        </div>
        <div className="step">
          <img className="stepsImg" src="images/switch.png" alt="" />
          <h4>Switch to Soprano</h4>
          <p>
            Bring your business to Soprano, no matter which ecommerce platform
            you're currently using.
          </p>
        </div>
        <div className="step">
          <img className="stepsImg" src="images/benefits.png" alt="" />
          <h4>Enjoy ur benefits</h4>
          <p>
            Get set up with the help of a trusted freelencer or agency from the
            Shopify Experts Marketplace.
          </p>
        </div>
      </div>
      <Button text={"Start Free Trial"} />
    </div>
  );
};

export default StartFreeTrial;
