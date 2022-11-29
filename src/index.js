import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

let handleChange = (event) => {
  console.log(event.target.value);
};

const users = [
  {
    id: 1,
    name: "Raúl",
    image: "https://robohash.org/User2",
  },
  {
    id: 2,
    name: "Samantha",
    image: "https://robohash.org/User2",
  },
  {
    id: 3,
    name: "Marcos",
    image: "https://robohash.org/User2",
  },
];

root.render(
  <>
    {users.map((user, i) => {
      return (
        <div key={i}>
          <h1>{user.name}</h1>
          <img src={user.image} />
        </div>
      );
    })}
  </>
);
