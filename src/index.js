import React from "react";
import ReactDOM from "react-dom/client";
import { Greeting, UserCard } from "./Greeting";
// Se importa todo el módulo Product, no de forma individual como se hacía con las funciones de Greeting.
import Product, { Navbar } from "./Product";

const root = ReactDOM.createRoot(document.getElementById("root"));

// Nota importante: Se puede agregar a los componentes de React la extensión .jsx como preferencia del desarrollador para diferenciar qué es código JS y cuál hace parte de React

root.render(
  <>
    <Greeting />
    <UserCard />
    <Product />
    <Navbar />
  </>
);
