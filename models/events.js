const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    title: { type: String, required: true},
    date: { type: Date, default: Date.now, require: true},
    // for start and end time i want to put in a drop down box
    description: { type: String, }
    // would like to add location
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;