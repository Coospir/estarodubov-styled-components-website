import './App.css'
import { BrowserRouter as Router } from "react-router-dom"
import { GlobalStyle } from "./globalStyles";
import Hero from "./components/Hero/Hero";
import { productData, productDataTwo } from "./components/Products/data"
import Products from "./components/Products/Products";
import Feature from "./components/Feature/Feature";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Hero/>
      <Products heading='Choose your favourite' data={productData}/>
      <Products heading='Mmm.. Desserts' data={productDataTwo}/>
      <Feature/>
      <Footer/>
    </Router>
  );
}

export default App;
