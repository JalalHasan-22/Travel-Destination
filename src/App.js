import "./App.css";
import Home from "./components/home/Home";
const jsonData = require("./data/db.json");

function App() {
  return <Home jsonData={jsonData} />;
}

export default App;
