import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import "./TourDetails.css";
function TourDetails({ jsonData }) {
  const params = useParams();
  const [clickedTour] = jsonData.filter((city) => city.id === params.id);
  const [showText, setShowText] = useState(false);
  //   let dynamicStr = clickedTour.info.slice(0, 150);

  const toggleText = () => {
    setShowText(!showText);
  };
  return (
    <div className="detailView">
      <h2>{clickedTour.name}</h2>
      <img src={clickedTour.image}></img>
      <p>
        {!showText ? clickedTour.info.slice(0, 150) + "..." : clickedTour.info}
        <span className="btn-show-more" onClick={toggleText}>
          {!showText ? "Read More" : "Read Less"}
        </span>
      </p>
      <p>Price:{clickedTour.price}$</p>
    </div>
  );
}

export default TourDetails;
