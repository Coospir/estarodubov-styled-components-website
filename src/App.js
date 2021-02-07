import './App.css'
import { BrowserRouter as Router } from "react-router-dom"
import { GlobalStyle } from "./globalStyles";
import Hero from "./components/Hero/Hero";
import { productData } from "./components/Products/data"
import Products from "./components/Products/Products";

function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Hero/>
      <Products heading='Choose your favourite' data={productData}/>
    </Router>
  );
}

export default App;
