import axios from "axios";

export default {
  // Gets all events
  getEvents: function() {
    return axios.get("/");
  },
  // Gets the events with the given id
  getEvents: function(_id) {
    return axios.get("/api/events" + _id);
  },
  // Deletes the events with the given id
  deleteEvents: function(_id) {
    return axios.delete("/api/events" + _id);
  },
  // Saves a events to the database
  saveEvents: function(eventData) {
    return axios.post("/api/events", eventData);
  }
};