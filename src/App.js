import "./App.css";
import Button from "./components/Button/Button";
import Flex from "./components/Flex/Flex";
import Header from "./components/Header/Header";
import Item from "./components/ItemListContainer/Item";

function App() {
  // respuesta a evento
  function handleImageClick() {
    console.log("Click en la imagen");
  }

  return (
    <>
      <Header />
      <div className="App">
        <header className="App-header">
          <p>Hola React</p>
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
            <Flex>
              <Button color="orange">Soy un children</Button>
              <Button color="darkgreen" text="Learn React" />
              <Button text="Click me" />
            </Flex>
          </a>

          <Flex>
            <Item
              price={200}
              title="Juego de Ajedrez"
              description="Lorem Ipsum"
              imgurl="https://http2.mlstatic.com/D_Q_NP_705846-MLA46245294663_062021-AB.webp"
            />

            {/*    <Item
              price={500}
              title="Juego de Mesa"
              description="Lorem Ipsum"
              imgurl="https://http2.mlstatic.com/D_Q_NP_712088-MLA44676313815_012021-AB.webp"
            />
            <Item
              price={900}
              title="Juego de Ciencia"
              description="Lorem Ipsum"
              imgurl="/img/ecociencia.webp"
            /> */}
          </Flex>
        </header>
      </div>
    </>
  );
}

export default App;
