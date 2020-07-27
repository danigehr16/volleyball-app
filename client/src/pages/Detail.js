import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid/index";
import Jumbotron from "../components/Jumbotron";
import API from "../components/utils/API";

class Detail extends Component {
  state = {
    event: {}
  };
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getScheduleEvent(this.props.match.params.id)
      .then(res => this.setState({ event: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                {this.state.event.title} by {this.state.event.date}
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>Event Description</h1>
              <p>
                {this.state.event.synopsis}
              </p>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to the Calendar</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Detail;
