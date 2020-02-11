const mongoose = require("mongoose");


const ForumSchema = new mongoose.Schema({
    Title: {
        type: String,
        default: ""
    },
    Poster: {
        type: String,
        default: "Josef Walls"
    },
    Header: {
        type: String,
        default: ""
    },
    Content: {
        type: String,
        default: ""
    },
    Link:{
        type: String,
        default: ""
    },
    Views: {
        type: Number,
        default: 0
    },
    Replies: {
        type: String,
        default: ""
    }
})


module.exports = mongoose.model("Forum", ForumSchema)