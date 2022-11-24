export function TaskCard() {
  // Esta es una de las maneras para ingresar estilos en React
  const cardStyles = { background: "#202020", color: "#fff", padding: "20px" };

  const titleStyles = { fontWeight: "lighter" };

  return (
    <div style={cardStyles}>
      <h1 style={titleStyles}>Mi primer tarea</h1>
      <p>Tarea realizada</p>
    </div>
  );
}
