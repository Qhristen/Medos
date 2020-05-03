import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FormControl,
  Container,
  Jumbotron,
  Row,
  Col,
  Button,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import Todo from "./Todo";

import ViewTodoForm from "./ViewTodoForm";

const Home = () => {
  const [modalShow, setModalShow] = useState(false);

  const [todos, setTodos] = useState([
    {
      tittle: "My first Post",
      text: "This is my first post in Medos",
      isCompleted: false,
    },
  ]);

  const addTodo = (tittle, text) => {
    const newTodo = [{ tittle, text }, ...todos];
    setTodos(newTodo);
    handleClose();
  };

  const completed = (index) => {
    const newTodo = [...todos];
    newTodo[index].isCompleted = true;
    setTodos(newTodo);
  };

  const deleteTodo = (index) => {
    const newTodo = [...todos];
    newTodo.splice(index, 1);
    setTodos(newTodo);
  };

  const handleClick = () => {
    setModalShow(false);
  };

  const [show, setShow] = useState(false);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const updateSearch = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };
  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
  };
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Container className="con">
        <div className="container">
          {/* <FontAwesomeIcon
            icon={faPlusCircle}
            onClick={handleShow}
            className="font-prop mt-3 mb-3"
          /> */}
        </div>

        <ViewTodoForm
          show={modalShow}
          onHide={() => setModalShow(false)}
          show={show}
          handleClose={handleClose}
          addTodo={addTodo}
        />
        <div style={{ float: "left" }}>
          {todos.map((todo, index) => (
            <Todo
              key={index}
              index={index}
              todo={todo}
              completed={completed}
              deleteTodo={deleteTodo}
              handleClick={handleClick}
            />
          ))}
        </div>

        <FontAwesomeIcon
          icon={faPlusCircle}
          onClick={handleShow}
          style={{ float: "right", fontSize: "400px" }}
          className="font-prop mt-3 mb-3"
        />
      </Container>
    </div>
  );
};

export default Home;
