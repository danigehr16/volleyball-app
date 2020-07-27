const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/KineticNRG Sports App"
);


const eventSeed = [
    {
        title: "Volleybll Tryouts",
        date: "11/21/2020",
        synopsis: "Please bring your shoes, water bottle, lunch, and paperwork. tryouts will take place from 8am-3pm."
    }
];

db.Event
    .remove({})
    .then(() => db.Event.collection.insertMany(eventSeed))
    .then(data =>{
        console.log(data.result.n + " Events inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    })