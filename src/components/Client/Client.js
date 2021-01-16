import React from "react";
import ClientCard from "./ClientCard";
import './client.css'

const Client = () => {
  const users = [
      {
        id:1,
      userImage: "images/client1.png",
    },
      {
        id:2,
      userImage: "images/client2.png",
    },
  ];
  return (
    <div className="client">
      <h1>What Clients say about our product</h1>
      <div className="cards">
        {users.map((user) => (
            <ClientCard key={user.id} imagePath={user.userImage} id={user.id}/>
        ))}
      </div>
    </div>
  );
};

export default Client;
