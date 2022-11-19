import "./App.css";

function App() {
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

  // respuesta a evento
  function handleImageClick() {
    console.log("Click en la imagen");
  }

  return (
    <>
      {/* soy un comentario */}
      <div>
        <h1 style={stylesH1}>{mostrarComision()} </h1>
      </div>
      <div className="App">
        <header className="App-header">
          <p>Hola Comisión {comision}</p>
          <p>{1 + 2 + 3}</p>
          <br />
          <img
            onClick={handleImageClick}
            src="https://www.patterns.dev/img/reactjs/react-logo@3x.svg"
            alt="React Logo"
          />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </>
  );
}

export default App;
