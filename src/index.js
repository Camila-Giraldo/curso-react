import React from "react";
import ReactDOM from "react-dom/client";
// import { Greeting, UserCard } from "./Greeting";
// import Product, { Navbar } from "./Product";
import { Button } from "./Button";
import { TaskCard } from "./Task";
// import { Saludar } from "./Saludar";
import { Posts } from "./Posts";

const root = ReactDOM.createRoot(document.getElementById("root"));

let handleChange = (event) => {
  console.log(event.target.value);
};

root.render(
  <>
    <Posts />
  </>
);
