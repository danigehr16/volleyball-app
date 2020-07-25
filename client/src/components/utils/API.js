import axios from "axios";

export default {
 
  // Gets the events with the given id
  getScheduleEvents: function() {
   return axios.get("/api/scheduleEvents");
  },
  getScheduleEvents: function(id){
    return axios.get("/api/scheduleEvents" + id);
  },
  // Deletes the events with the given id
  deleteScheduleEvents: function(id) {
    return axios.delete("/api/scheduleEvents/" + id);
  },
  // Saves  events to the database
  postScheduleEvents: function(scheduleEventsData) {
    return axios.post("/api/scheduleEvents", scheduleEventsData); 
  }
};