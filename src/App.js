import "./App.css";
import Category from "./components/Category";

function App() {
  const myPizzaArray = [
    {
      name: "Chicken Ranch",
      price: 5,
      img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=1770&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Pepperoni",
      price: 3,
      img: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&q=80&w=1776&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Margherita",
      price: 2,
      img: "https://images.unsplash.com/photo-1600028068383-ea11a7a101f3?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div className="container">
      {myPizzaArray.map((element) => {
        return (
          <Category
            key={element.price}
            header={element.name}
            price={element.price}
            img={element.img}
          />
        );
      })}
    </div>
  );
}

export default App;
