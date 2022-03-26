import "./styles/App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Homepage from "./Homepage";
import Cart from "./Cart";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <header>
          <h1>Bird Brain Photos</h1>
          <nav>
              <Link to="/shopping-cart">Home</Link>
              <Link to="/cart">Cart</Link>
          </nav>
      </header>
      <Routes>
        <Route path="/shopping-cart" element={<Homepage />} />
        <Route path="/shopping-cart/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
