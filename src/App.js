import "./App.css";
import Header from "./components/Header/Header";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <>
      <Header />
      <div className="App">
        <header className="App-header">
          <ItemListContainer />
        </header>
      </div>
    </>
  );
}

export default App;
