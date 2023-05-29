import React from "react";
import { products } from "../modules/products";
import { ProductItem } from "./ProductItem";

export function MyProducts(props) {
  if (props.text === "") {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
        }}
      >
        {products.map((item) => {
          return (
            <ProductItem
              key={item.model}
              model={item.model}
              carName={item.carName}
              src={item.src}
            />
          );
        })}
      </div>
    );
  } else {
    // if (products.description !== undefined && products.description.includes(props.text)) {
    // Perform your logic

    let newArray = products.filter((word) => {
      return (
        (word.description !== undefined &&
        word.description.includes(props.text) )||
        (word.model !== undefined &&
        word.model.includes(props.text))
      );
    });
    // console.log(newArray);
    if (newArray.length > 0) {
      return (
        <div>
          {newArray.map((item) => {
            return (
              <ProductItem
                key={item.model}
                model={item.model}
                carName={item.carName}
                src={item.src}
              />
            );
          })}
          {console.log(props.text)}
        </div>
      );
    } else if (newArray.length === 0) {
      return (
        <div style={{ padding: "105px" }}>
          <h1>Not found</h1>
        </div>
      );
    }
  }
  // }
}
