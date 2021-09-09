import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Forms from "./Forms";
import { useState } from "react";
import { Container, Card } from "react-bootstrap";

function App() {
  //hook to check if form is submitted

  //Bootstrap framework is used to style
  //Form component is used to render Form Input fields and Form Success Message

  return (
    <div className="App">
      <Container fluid id="container">
        <Card>
          <Card.Body>
            <Card.Title className="title text-center display-4 m-4">
              Simple Form
            </Card.Title>
            <Forms />
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default App;
