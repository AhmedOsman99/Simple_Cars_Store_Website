import React from "react";
import { Button, Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export function ProductItem(props) {
  let { model, carName, src } = props;
  return (
    <div>
      <Card
        className="bg-dark text-light"
        style={{ width: "400px", padding: "30px", margin: "20px" }}
      >
        <Card.Img variant="top" src={src} />
        <Card.Body>
          <Card.Title>{carName}</Card.Title>
          <Card.Title className="text-info" style={{ fontSize: "16px" }}>
            {model}
          </Card.Title>
          <Card.Text>
            Some quick example text to build on the card title.
          </Card.Text>
          <NavLink className="pb-2 fs-2 text-info" style={{display:"block"}} to={`/products/${model}`}>
            <i class="bi bi-eye-fill"></i>
          </NavLink>
          <Button variant="light" style={{ width: "100px" }}>
            Buy
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
