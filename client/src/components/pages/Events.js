
import React, { Component } from "react";
import Jumbotron from "../Jumbotron/index";
import API from "../utils/API";
import DeleteBtn from "../DeleteBtn/index";
import { Col, Row, Container } from "../Grid/index";
import { List, ListItem } from "../List/index";
import { Input, TextArea, FormBtn } from "../Form/form";

class Events extends Component {
  state = {
    Events: []
  };

  componentDidMount() {
    this.loadEvents();
  }

  loadEvents = () => {
    API.getEvents()
      .then(res => this.setState({ Events: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Add/Modify or delete an event</h1>
            </Jumbotron>
            <form>
              <Input name="title" placeholder="Title (required)" />
              <Input name="date" placeholder="Date (required)" />
              <TextArea name="synopsis" placeholder="Synopsis (Optional)" />
              <FormBtn>Submit Event</FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Books On My List</h1>
            </Jumbotron>
            {this.state.events.length ? (
              <List>
                {this.state.events.map(events => (
                  <ListItem key={events._id}>
                    <a href={"/models/events.js" + events._id}>
                      <strong>
                        {Events.title} by {Events.date}
                      </strong>
                    </a>
                    <DeleteBtn />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Events;
