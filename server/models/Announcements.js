const mongoose = require("mongoose");


const AnnouncementSchema = new mongoose.Schema({
    Title: {
        type: String,
        default: ""
    },
    Header: {
        type: String,
        default: ""
    },
    Description: {
        type: String,
        default: ""
    },
    Link: {
        type: String,
        default: ""
    }
})


module.exports = mongoose.model("Announcement", AnnouncementSchema)