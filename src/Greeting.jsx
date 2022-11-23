// Props en react son propiedades que puede tener el componente similar a los atributos de HTML
export function Greeting({ title, name = "User" }) {
  return (
    <h1>
      {title}, dice {name}
    </h1>
  );
}

export function UserCard({ name, amount, married, address, greet }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>💲{amount}</p>
      <p>{married ? "Casado" : "Soltero"}</p>
      <ul>
        <li>Ciudad: {address.city}</li>
        <li>Calle: {address.street}</li>
      </ul>
    </div>
  );
}
