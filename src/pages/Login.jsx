import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export function Login() {
  // let

  let [form, setForm] = useState({
    username: undefined,
    age: undefined,
  });
  
  let navigate = useNavigate()
  let submitAction = (event) => {
    event.preventDefault();
    if (form.username === null && form.age === null) {
      navigate('/products')
    }
  };

  let operationHandler = (event) => {
    if (
      event.target.name === "username" &&
      event.target.value.length < 4 &&
      event.target.value.length !== 0
    ) {
      setForm({
        ...form,
        username: "User Name must be lessthan 4 characters",
      });
    } else if (
      event.target.name === "age" &&
      isNaN(Number(event.target.value))
    ) {
      setForm({
        ...form,
        age: "Age must be a number",
      });
    } else if (event.target.value.length === 0){
      setForm({
        ...form,
        [event.target.name]: undefined,
      });
    } else {
      setForm({
        ...form,
        [event.target.name]: null,
      });
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center h-100 p-5 m-5">
      <Form className="form " onSubmit={submitAction}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>User Name</Form.Label>
          <Form.Control
            onChange={operationHandler}
            type="text"
            name="username"
            placeholder="User Name"
            className="username w-100"
            autoComplete="off"
          />
          <Form.Text className="text-danger">{form.username}</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={operationHandler}
            type="text"
            name="age"
            placeholder="age"
            className="age w-100 "
          />

          <Form.Text className="text-danger">{form.age}</Form.Text>
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
}
