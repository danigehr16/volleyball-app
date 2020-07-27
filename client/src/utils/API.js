import axios from "axios";

export default {
 
  // Gets the events with the given id
  getEvents: function() {
   return axios.get("/api/events");
  },
  getEvent: function(id){
    return axios.get("/api/events/" + id);
  },
  // Deletes the events with the given id
  deleteEvent: function(id) {
    return axios.delete("/api/events/" + id);
  },
  // Saves  events to the database
  saveEvent: function(eventData) {
    return axios.post("/api/events", eventData); 
  }
};