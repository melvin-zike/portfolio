import React, { useEffect, useState } from "react";
import Product from "../product/Product";
import "./productlist.css";
import {
  fullstack,
  mobile,
  blockchain,
  html,
  javascript,
  reactjs,
} from "../../data";
import List from "../list/List";

const ProductList = () => {
  const [selected, setSelected] = useState("fullstack");
  const [data, setData] = useState([]);

  const portfolio = [
    {
      id: "fullstack",
      title: "Fullstack",
    },
    {
      id: "javascript",
      title: "Javascript",
    },
    {
      id: "html",
      title: "HTML",
    },
    {
      id: "reactjs",
      title: "Reactjs",
    },
    {
      id: "blockchain",
      title: "Blockchain",
    },
    {
      id: "mobile",
      title: "React-native",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "fulstack":
        setData(fullstack);
        break;
      case "javascript":
        setData(javascript);
        break;
      case "blockchain":
        setData(blockchain);
        break;
      case "reactjs":
        setData(reactjs);
        break;
      case "mobile":
        setData(mobile);
        break;
      case "html":
        setData(html);
        break;
      default:
        setData(fullstack);
    }
  }, [selected]);

  return (
    <div>
      <div className="p1">
        <div className="p1-text">
          <h1 className="p1-title">Portfolio, Create & Inspire.</h1>
          <ul className="p1-desc portfolio">
            {portfolio.map((item) => (
              <List
                title={item.title}
                id={item.id}
                active={selected === item.id}
                setSelected={setSelected}
              />
            ))}
          </ul>
        </div>
        <div className="p1-list">
          {data.map((pro) => (
            <Product key={pro.id} img={pro.img} link={pro.link} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
