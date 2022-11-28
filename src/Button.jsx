import PropTypes from "prop-types";

export function Button({ text, name}) {
  if (!text) {
    console.error("El texto es requerido");
  }

  return (
    <button onClick={function () {
      console.log('Hola Mundo')
    }}>
      {text} - {name}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

// Una forma de poner un valor por defecto
Button.defaultProps = {
  name: "Some User",
};
