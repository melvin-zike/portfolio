import logo from "./logo.svg";
import "./App.css";
import Intro from "./components/introduction/Intro";
import About from "./components/about/About";
import ProductList from "./components/productlist/ProductList";
import Contact from "./components/contact/Contact";
import Toggle from "./components/toggle/Toggle";
import { ThemeContext } from "./context";
import { useContext } from "react";

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#000" : "white",
        color: darkMode && "white",
      }}
    >
      <Intro />
      <About />
      <ProductList />
      <Contact />
      <Toggle />
    </div>
  );
}

export default App;
