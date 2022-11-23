function Product() {
  return (
    <div>
      <h1>Producto</h1>
    </div>
  );
}

// También se puede exportar individualmente.
export function Navbar() {
  return <nav>Navigation</nav>;
}

// El export default permite que al momento de importar en otro archivo, se exporte todo el módulo.
export default Product;
