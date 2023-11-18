import { useState, useEffect } from "react";

export default function Category({ header, price, img }) {
  let [count, setMycount] = useState(1);
  let [addToCart, setAddtoCart] = useState("Add to cart");
  useEffect(() => {
    alert(`your total is ${price * count} $`);
  }, [addToCart]);

  let handleClickPlus = () => {
    setMycount((prevState) => {
      return prevState + 1;
    });
  };
  let handleClickMinus = () => {
    setMycount((prevState) => {
      if (prevState !== 0) return prevState - 1;
    });
  };

  let handleAddToCart = () => {
    setAddtoCart("Added!");
  };

  return (
    <div className="card">
      <img src={img} alt="" />
      <h1>{header}</h1>
      <p>{price}</p>
      <div
        style={{
          display: "flex",
          gap: 10,
          alignItems: "center",
          fontSize: 20,
          fontWeight: "bold",
        }}
      >
        <span onClick={handleClickMinus}> -</span>
        <p>{count}</p> <span onClick={handleClickPlus}> +</span>
      </div>
      <button onClick={handleAddToCart}>{addToCart}</button>
    </div>
  );
}
