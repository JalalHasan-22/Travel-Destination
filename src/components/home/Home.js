import Tours from "../tours/Tours";
import "./Home.css";

function Home({ jsonData }) {
  return (
    <div className="home">
      <Tours jsonData={jsonData} />
    </div>
  );
}

export default Home;
