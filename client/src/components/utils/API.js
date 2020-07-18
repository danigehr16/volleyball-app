import axios from "axios";

export default {
  // Gets all events
  getEvents: function() {
    return axios.get("/");
  },
  // Gets the events with the given id
  getEvents: function(id) {
<<<<<<< HEAD
    return axios.get("/api/events" + id);
=======
    return axios.get("/api/events" + "id");
>>>>>>> db34e857b5ba4f3c3b6d35436e5cc5ebe5c28801
  },
  // Deletes the events with the given id
  deleteEvents: function(findById) {
    return axios.delete("/api/events" + findById);
  },
  // Saves a events to the database
  saveEvents: function(eventData) {
    return axios.post("/api/events", eventData);
  }
};