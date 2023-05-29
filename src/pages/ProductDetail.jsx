import React from "react";
// import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { products } from "../modules/products";

export function ProductDetail() {
  let { model } = useParams();

  let data = products.find((p) => {
    return p.model === model;
  });

  return (
    // <Card className="bg-dark text-white">
    //   <Card.Img src={data.src} alt="Card image" style={{width:"300px", displa}}/>
    //   {/* <Card.ImgOverlay> */}
    //   <div style={{width:"300px"}}>
    //     <Card.Title>{data.carName}</Card.Title>
    //     <Card.Text>
    //       This is a wider card with supporting text below as a natural lead-in
    //       to additional content. This content is a little bit longer.
    //     </Card.Text>
    //     <Card.Text>Last updated 3 mins ago</Card.Text>
    //     {/* </Card.ImgOverlay> */}
    //   </div>
    // </Card>
    <div
      className="prod bg-dark text-light mt-5 mb-5 h-100
    "
    >
      <div className="d-flex align-item-center">
        <img
          src={data.src}
          alt=""
          className="mr-3"
          style={{ width: "500px" }}
        />
        <div className="p-5">
          <h1>{data.carName}</h1>
          <p className="text-info">{data.model}</p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates
            architecto voluptas ad, quibusdam quam et ipsa est cumque nam.
            Delectus iure rem deleniti officia aspernatur sunt doloremque quis
            ipsa odit.
          </p>
        </div>
      </div>
    </div>
  );
}
