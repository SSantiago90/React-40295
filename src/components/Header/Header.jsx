import ToggleButton from "../ToggleButton/ToggleButton";

function Header() {
  const comision = "40295";

  function mostrarComision() {
    console.log("log");
    return `Bienvenida comisión ${comision}`;
  }

  //css in js
  const stylesH1 = {
    backgroundColor: "pink",
    padding: "10px",
    margin: "0 auto",
    textAlign: "center",
  };

  return (
    <div className="navbar">
      <h1 style={stylesH1}>{mostrarComision()} </h1>
      <ToggleButton icon="☀" />
    </div>
  );
}

export default Header;
