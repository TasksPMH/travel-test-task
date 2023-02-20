import React from "react";
import peterburg from "../../../public/images/Photo 1.png";
import tbilisi from "../../../public/images/Photo 2.png";
import argentina from "../../../public/images/Photo 3.png";
import MyCard from "../MyCard/MyCard";
import "./OtherTours.scss";

function OtherTours() {
  const tours = [
    {
      image: peterburg,
      title: "St. Isaac's Cathedral in St. Petersburg",
      description: "One of the highest domed structures in the world.",
    },
    {
      image: tbilisi,
      title: "The Bridge of Peace, Tbilisi",
      description: "Arc-shaped pedestrian bridge made of glass and steel",
    },
    {
      image: argentina,
      title: "El Caminito del Rey, Argentina",
      description: "Tango, Open-air Museum, Painting, Art and History",
    },
  ];

  return (
    <div className="other-tours">
      <div className="other-tours__title">
        <h2>Other tours</h2>
      </div>
      <div className="cards other-tours__cards">
        {tours.map((item,index:number) => (
          <MyCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
}

export default OtherTours;