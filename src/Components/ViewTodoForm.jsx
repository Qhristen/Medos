import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import TodoForm from "./TodoForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faBars } from "@fortawesome/free-solid-svg-icons";

const ViewTodoForm = ({ addTodo, handleClose, show }) => {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Medos Post</Modal.Title>
          <FontAwesomeIcon icon={faCoffee} className="medos-icon" />
        </Modal.Header>
        <Modal.Body>
          <TodoForm addTodo={addTodo} />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ViewTodoForm;
