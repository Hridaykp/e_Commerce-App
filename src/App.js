import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductCard from './components/ProductCard';
import CartPage from "./components/CartPages"
function App() {
  return (
      <div className="App">
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<ProductCard/>} />
        <Route exact path="/cart" element ={<CartPage/>} />
      </Routes>
    </div>
    
  );
}

export default App;
