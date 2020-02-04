const mongoose = require("mongoose");

const RouteSchema = new mongoose.Schema({
    Title: {
        type: String,
        default: ""
    },
    Country: {
        type: String,
        default: ""
    },
    Length: {
        type: Number,
        default: 0
    },
    Features: {
        type: Array,
        default: []
    },
    Scenarios: {
        type: Array,
        default: []
    },
    Publisher: {
        type: String,
        default: ""
    },
    Price: {
        type: Number,
        default: 0
    },
    Link: {
        type: String,
        default: ""
    },
    RollingStock: {
        type: String,
        default: ""
    }
})


module.exports = mongoose.model("Route", RouteSchema)