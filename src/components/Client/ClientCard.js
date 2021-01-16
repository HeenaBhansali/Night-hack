import React from "react";

const ClientCard = ({ imagePath, id }) => {
  return (
    <div className={`user user${id}`}>
          <div className="userDetails">
        <img src={imagePath} alt="" />
        <h2> Allen Jones</h2>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
  );
};

export default ClientCard;
