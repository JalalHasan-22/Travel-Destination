import "./Tours.css";

function Tours({ name, imgSrc }) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <img src={imgSrc} alt="Image"></img>
    </div>
  );
}

export default Tours;
