import "./App.css";
import Menu from "./components/Menu/Menu";

const products = [
  {
    id: 1,
    type: "drink",
    description: "Agua",
    price: 120,
  },
  {
    id: 2,
    type: "drink",
    description: "Cafe",
    price: 200,
  },
  {
    id: 3,
    type: "drink",
    description: "Jugo",
    price: 200,
  },
  {
    id: 4,
    type: "drink",
    description: "Gaseosa",
    price: 250,
  },
  {
    id: 5,
    type: "food",
    description: "Alfajor",
    price: 150,
  },
  {
    id: 6,
    type: "food",
    description: "MigaMiga",
    price: 350,
  },
  {
    id: 7,
    type: "food",
    description: "Tostado",
    price: 450,
  },
  {
    id: 8,
    type: "food",
    description: "Barrita de cereal",
    price: 140,
  },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>VIANDAS BAR APP</h2>
        <Menu products={products} />
      </header>
    </div>
  );
}

export default App;
