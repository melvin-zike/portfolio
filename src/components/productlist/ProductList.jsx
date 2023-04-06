import React from "react";
import Product from "../product/Product";
import "./productlist.css";
import { products } from "../../data";

const ProductList = () => {
  return (
    <div>
      <div className="p1">
        <div className="p1-text">
          <h1 className="p1-title">Create & Inspire. Its Melvin</h1>
          <p className="p1-desc">
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s,
          </p>
        </div>
        <div className="p1-list">
          {products.map((pro) => (
            <Product key={pro.id} img={pro.img} link={pro.link} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
