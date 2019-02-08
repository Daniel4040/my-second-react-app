import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Data.css";

class Data extends Component {
  render() {
    return (
      <div className="data">
        <Container>
          <h1>Data</h1>
          <Row>
            <Col>
              <img />
              <h3 />
              <p />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Data;
