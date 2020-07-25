
import React, { Component } from "react";
import Jumbotron from "../Jumbotron/index";
import API from "../utils/API";
import DeleteBtn from "../DeleteBtn/index";
import { Col, Row, Container } from "../Grid/index";
import { List, ListItem } from "../List/index";
import { Input, TextArea, FormBtn } from "../Form/form";

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
    API.getScheduleEvents()
      .then(res => this.setState({ scheduleEvents: res.data, title: "", date: "", synopsis: "" }))
      .catch(err => console.log(err));
  };

  deleteEvents = id => {
    API.deleteScheduleEvents(id)
    .then(res => this.loadEvents())
    .catch(err => console.log(err));
  };

  handleInputChange = events => {
    const {name, value} = events.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if(this.state.title && this.state.date){
      API.postScheduleEvents({
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
            <Jumbotron>
              <h1> KineticNRG Calendar <b>Add/Modify or delete an event</b></h1>
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
                  Submit Event</FormBtn>
            </form>
            </Col>

        </Row>
      </Container>
    );
  }
}

export default Events;
