import "./Tours.css";
import Tour from "./tour/Tour";
import { Link } from "react-router-dom";

function Tours({ jsonData }) {
  const handleClick = () => {};

  return jsonData.map((city) => (
    <Link key={city.id} to={`city/${city.id}`} onClick={handleClick}>
      <Tour data={city} />
    </Link>
  ));
}

export default Tours;
