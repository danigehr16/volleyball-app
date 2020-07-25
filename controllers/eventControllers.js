const db = require("../models");

// defining methods for the eventController
module.exports = {
    findAll: function(req, res){
        db.scheduleEvent
            .find(req.query)
            .sort({ date: -1})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    findById: function(req, res) {
        db.scheduleEvent
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    create: function(req, res) {
        db.scheduleEvent
            .create(req,body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    update: function(req, res){
        db.scheduleEvent
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    remove: function(req, res) {
        db.scheduleEvent  
            .findById({ _id: req.params.id})
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};