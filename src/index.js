import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1>Counter: {counter}</h1>

      <button onClick={() => setCounter(counter + 10)}>Sumar</button>

      <button onClick={() => setCounter(counter - 10)}>Restar</button>

      <button onClick={() => setCounter(0)}>Reiniciar</button>
    </div>
  );
}

function SaveInput() {
  const [mensaje, setMensaje] = useState("");
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("Render");
  }, [counter]);

  return (
    <div>
      <input onChange={(e) => setMensaje(e.target.value)} />
      <button onClick={() => alert("El mensaje es: " + mensaje)}>Save</button>

      <hr />

      <h1>Counter: {counter}</h1>

      <button onClick={() => setCounter(counter + 10)}>Sumar</button>
    </div>
  );
}

root.render(
  <>
    <SaveInput />
  </>
);
