
import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron/index";
import DeleteBtn from "../components/DeleteBtn/index";
import { Col, Row, Container } from "../components/Grid/index";
import { List, ListItem } from "../components/List/index";
import { Input, TextArea, FormBtn } from "../components/Form";
import API from "../utils/API";
import { Link } from "react-router-dom";


class Events extends Component {
  state = {
    scheduleEvent: [],
    title: "",
    date: "",
    synopsis: ""
  };

  componentDidMount() {
    this.loadEvents();
  }



  loadEvents = () => {
    API.getEvents()
      .then(res => this.setState({scheduleEvent: res.data, title: "", date: "", synopsis: ""}))
      .catch(err => console.log(err));
      
  };

  deleteEvent = id => {
    API.deleteEvent(id)
      .then(res => this.loadEvents())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.date) {
      API.saveEvent({
        title: this.state.title,
        date: this.state.date,
        synopsis: this.state.synopsis

      })
        .then(res => this.loadEvents())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron style={{fontFamily: "fantasy"}}>
              <h1>Input your Event</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Title (required)"
              />

              <Input
                value={this.state.date}
                onChange={this.handleInputChange}
                name="date"
                placeholder="Date (required)"
              />

              <TextArea
                value={this.state.synopsis}
                onChange={this.handleInputChange}
                name="synopsis"
                placeholder="Details (Optional)"
              />

              <FormBtn
                disabled={!(this.state.date && this.state.title)}
                onClick={this.handleFormSubmit}
              >
                Submit Event
                </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Current Events</h1>
            </Jumbotron>
            {this.state.scheduleEvent.length ? (
              <List>
                {this.state.scheduleEvent.map(event => (
                  <ListItem key={event._id}>
                    <Link to={"/event/" + event._id}>
                      <strong>
                        {event.title} by {event.date}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteEvent(event._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
                <h3>No Resuts to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Events;
