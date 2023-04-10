import React from "react";
import "./list.css";

const List = ({ title, active, setSelected, id }) => {
  return (
    <li
      className={active ? "portfoliolist active" : "portfoliolist"}
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
  );
};

export default List;
