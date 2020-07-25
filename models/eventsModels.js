const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    title: { type: String, required: true},
    date: { type: Date, default: Date.now, require: true},
    // for start and end time i want to put in a drop down box
    synopsis: String
    // would like to add location
});

const scheduleEvents = mongoose.model("Scheduled Events", eventSchema);

module.exports = scheduleEvents;