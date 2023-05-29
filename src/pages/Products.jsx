import React from "react";
import { MyProducts } from "../components/MyProducts";

export function Products(props) {
  return (
    <div>
      <h2 className="title p-5">Our Cars</h2>
      <MyProducts text={props.text}/>
    </div>
  );
}
