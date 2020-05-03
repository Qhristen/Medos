import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faBars } from "@fortawesome/free-solid-svg-icons";
import { ListGroup, Card, Toast, Form } from "react-bootstrap";

const Todo = ({ todo, index, completed, deleteTodo, handleClick }) => {
  const [showA, setShowA] = useState(true);
  const toggleShowA = () => setShowA(deleteTodo);

  return (
    <div
      style={{ textDecoration: todo.isCompleted ? "line-through" : "none" }}
      className="mt-3"
    >
      <Toast show={showA} onClose={toggleShowA} onClick={handleClick}>
        <Toast.Header>
          <FontAwesomeIcon
            icon={faCoffee}
            className="medos-icon"
            style={{ margin: "7px" }}
          />
          <strong className="mr-auto">{todo.tittle}</strong>
          <small>
            {" "}
            <Form.Check
              type="checkbox"
              onChange={() => completed(index)}
            />{" "}
          </small>
        </Toast.Header>
        <Toast.Body>
          <p>{todo.text}</p>
        </Toast.Body>
      </Toast>
    </div>
  );
};

export default Todo;
