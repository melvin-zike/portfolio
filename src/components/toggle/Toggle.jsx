import React, { useContext } from "react";
import { ThemeContext } from "../../context";
import "./toggle.css";
// import Sun from "../../img/sun.png";
// import Moon from "../../img/moon.png";

const Toggle = () => {
  const theme = useContext(ThemeContext);

  const handleClick = () => {
    theme.dispatch({ type: "TOGGLE" });
  };

  return (
    <div className="t">
      <img
        src="https://static.vecteezy.com/system/resources/previews/009/663/724/original/sun-sun-ray-icon-transparent-free-png.png"
        alt=""
        className="t-icon"
      />
      <img
        src="https://static.vecteezy.com/system/resources/previews/017/177/956/original/flat-moon-icon-on-transparent-background-free-png.png"
        alt=""
        className="t-icon"
      />
      <div
        className="t-button"
        onClick={handleClick}
        style={{ left: theme.state.darkMode ? 0 : 25 }}
      ></div>
    </div>
  );
};

export default Toggle;
