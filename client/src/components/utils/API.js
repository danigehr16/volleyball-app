import axios from "axios";

export default {
 
  // Gets the events with the given id
  getScheduleEvents: function() {
   return axios.get("/api/events");
  },
  getScheduleEvent: function(id){
    return axios.get("/api/events/" + id);
  },
  // Deletes the events with the given id
  deleteScheduleEvents: function(id) {
    return axios.delete("/api/events/" + id);
  },
  // Saves  events to the database
  saveScheduleEvents: function(scheduleEventsData) {
    return axios.post("/api/events", scheduleEventsData); 
  }
};