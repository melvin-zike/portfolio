import React from "react";
import "./product.css";
import port1 from "../../img/portf.png";

const Product = ({ img, link }) => {
  return (
    <div className="p">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <a className="img-a" href={link} target="_blank" rel="noreferrer">
        <img src={img} alt="" className="p-image" />
      </a>
      <p className="img-text">
        simply dummy text of the printing and typesetting industry. Lorem Ipsum
        has been the industry's standard dummy text ever since the 1500s, when
        an unknown printer took a galley of type and scrambled it to make
      </p>
    </div>
  );
};

export default Product;
