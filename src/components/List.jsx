import React from "react";
import Category from "./Category";
export const List = ({ list }) => {
  return (
    <div className="container">
      {list.map((element) => {
        return (
          <Category
            key={element.price}
            header={element.name}
            price={element.price}
            img={element.img}
            id={element.id}
          />
        );
      })}
    </div>
  );
};
