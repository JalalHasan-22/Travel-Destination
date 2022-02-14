import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import NotFound from "./components/NotFound/NotFound";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import TourDetails from "./components/TourDetails/TourDetails";
const jsonData = require("./data/db.json");

function App() {
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<Home jsonData={jsonData} />} />
        <Route path="city/:id" element={<TourDetails jsonData={jsonData} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
