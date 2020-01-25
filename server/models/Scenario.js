const mongoose = require("mongoose");

const ScenarioSchema = new mongoose.Schema({
    Title: {
        type: String,
        default: ""
    },
    Category: {
        type: String,
        default: ""
    },
    Description: {
        type: String,
        default: ""
    },
    Header: {
        type: String,
        default: ""
    },
    Images: {
        type: Array,
        default: []
    },
    Features: {
        type: [],
        default: []
    },
    Publisher: {
        type: String,
        default: ""
    },
    Date: {
        type: Date,
        default: new Date()
    },
    Price: {
        type: Number,
        default: 0
    },
    Link: {
        type: String,
        default: ""
    },
    Country: {
        type: String,
        default: ""
    }
})


module.exports = mongoose.model("Scenario", ScenarioSchema);