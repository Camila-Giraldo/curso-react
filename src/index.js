import React from "react";
import ReactDOM from "react-dom/client";
// import { Greeting, UserCard } from "./Greeting";
// import Product, { Navbar } from "./Product";
import { Button } from "./Button";
import { TaskCard } from "./Task";
// import { Saludar } from "./Saludar";

const root = ReactDOM.createRoot(document.getElementById("root"));

let handleChange = (event) => {
  console.log(event.target.value);
};

root.render(
  <>
    <TaskCard ready={true} />
    <Button text="Hola" />

    <input onChange={handleChange} />

    <form
      onSubmit={(e) => {
        e.preventDefault();
        alert('Enviado')
      }}
    >
      <h1>Registro de Usuario</h1>
      <button>Send</button>
    </form>
  </>
);
