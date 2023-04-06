import logo from "./logo.svg";
import "./App.css";
import Intro from "./components/introduction/Intro";
import About from "./components/about/About";
import ProductList from "./components/productlist/ProductList";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <div>
      <Intro />
      <About />
      <ProductList />
      <Contact />
    </div>
  );
}

export default App;
