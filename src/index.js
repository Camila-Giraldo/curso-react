import React from "react";
import ReactDOM from "react-dom/client";
import { Greeting, UserCard } from "./Greeting";
import Product, { Navbar } from "./Product";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <UserCard
      name="Ryan Ray"
      amount={3000}
      married={true}
      points={[12, 34, 1]}
      address={{ street: "123 Main Street", city: "New York" }}
      greet={function () {
        alert("Hello");
      }}
    />
    <UserCard
      name="Joe McMillan"
      amount={10000}
      married={false}
      points={[4, 12, 23]}
      address={{ street: "34 12 Billboard", city: "California" }}
      greet={function () {
        alert("Hello");
      }}
    />
  </>
);
