import "./styles/App.css";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div className="App">
      <header>
        <h1>Bird Brain Photos</h1>
        <nav>
          <Link to="/shopping-cart">Home</Link>
          <Link to="cart">Cart</Link>
        </nav>
      </header>
    </div>
  );
}

export default Homepage;
