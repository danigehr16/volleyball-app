import axios from "axios";

export default {
  // Gets all events
  getEvents: function() {
    return axios.get("/");
  },
  // Gets the events with the given id
  getEvents: function(id) {
    return axios.get("/api/events/" + id);
  },
  // Deletes the events with the given id
  deleteEvents: function(id) {
    return axios.delete("/api/events/" + id);
  },
  // Saves a events to the database
  saveEvents: function(eventData) {
    return axios.post("/api/events", eventData);
  }
};