import logo from './logo.svg';
import './App.css';
import HomeScreen from "./screen/HomeScreen"
import ProductScreen from "./screen/ProductScreen"
import {Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="grid-container">
    <header className="row">
        <div className="cart.html">
            <a href="/">Webside</a>
        </div>
        <div className="signin.html">
            <a href="/signin">Sign In</a>
            <a href="/cart">Cart</a>
        </div>
    </header>
    <main>
    <Route path="/product/:id" component={ProductScreen}></Route>
      <Route path="/" exact component={HomeScreen}></Route>
    </main>
    <footer>
        all rigth reverved 
    </footer>
 </div>
  );
}

export default App;
