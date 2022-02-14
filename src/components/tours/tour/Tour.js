function Tour({ data }) {
  return (
    <div className="card">
      <h2>{data.name}</h2>
      <img src={data.image} alt="Image"></img>
    </div>
  );
}

export default Tour;
