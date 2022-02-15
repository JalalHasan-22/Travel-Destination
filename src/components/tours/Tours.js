import "./Tours.css";
import Tour from "./tour/Tour";
import { Link } from "react-router-dom";

function Tours({ jsonData }) {
  return jsonData.map((city) => (
    <Link key={city.id} to={`city/${city.id}`}>
      <Tour data={city} />
    </Link>
  ));
}

export default Tours;
