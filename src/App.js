import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { List } from "./components/List";
import Category from "./components/Category";

function App() {
  const myPizzaArray = [
    {
      name: "Chicken Ranch",
      price: 5,
      img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=1770&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      id: 1,
    },
    {
      name: "Pepperoni",
      price: 3,
      img: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&q=80&w=1776&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      id: 2,
    },
    {
      name: "Margherita",
      price: 2,
      img: "https://images.unsplash.com/photo-1600028068383-ea11a7a101f3?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      id: 3,
    },
  ];

  return (
    <div>
      <nav>
        <Link to={"/list"}>Menu</Link>
      </nav>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/list" element={<List list={myPizzaArray} />} />
        <Route path="/list/:id" element={<Category />} />
      </Routes>
    </div>
  );
}

export default App;
