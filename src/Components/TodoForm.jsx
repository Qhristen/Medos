import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState("");

  const [msg, setMsg] = useState("");
  const HandleSubmmit = (e) => {
    e.preventDefault();
    addTodo(title, msg);
  };
  console.log(title, msg);

  return (
    <div>
      <Form onSubmit={HandleSubmmit}>
        <Form.Group>
          <Form.Control
            type="text"
            name="tittle"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-3"
            placeholder="Tittle"
          />
          <Form.Control
            as="textarea"
            type="text"
            name="msg"
            rows="8"
            value={msg}
            placeholder="What's on your mind!!!"
            onChange={(e) => setMsg(e.target.value)}
          />
        </Form.Group>
        <Button style={{ float: "right" }} variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default TodoForm;
