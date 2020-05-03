import React from "react";
import { Navbar, Nav, FormControl, Button, Form } from "react-bootstrap";

const MedosNav = () => {
  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="#home">
          <h2>Medos</h2>
        </Navbar.Brand>
      </Navbar>
    </div>
  );
};

export default MedosNav;
