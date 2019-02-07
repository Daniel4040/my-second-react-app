import React, { Component } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import "./Headline.css";

class Headline extends Component {
  render() {
    return (
      <div className="intro-section">
        <div className="overlay" />
        <Container className="container">
          <Row>
            <Col>
              <p>Details On The Legends</p>
              <p>
                <Button tag="a" color="success" size="large" href={"#"}>
                  Show Me
                </Button>
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Headline;
