const Router = require("express").Router();
const Announcement = require("./../models/Announcements");


Router.route("/AddAnnouncement").post((req, res) => {
    const {Title, Header, Description, Link} = req.body;
    const newAnnouncement = new Announcement();
    newAnnouncement.Title = Title;
    newAnnouncement.Header = Header;
    newAnnouncement.Description = Description;
    newAnnouncement.Link = Link;
    newAnnouncement.save((err, Announcement) => {
        if(err){
            console.log(err)
            res.status(403).json(err)
        } else {
            res.status(200).json(Announcement)
        }
    })
})

Router.route("/").get((req, res) => {
    Announcement.find({})
    .then(Announcements => res.status(200).json(Announcements))
    .catch(err => res.status(403).json(err))
})


module.exports = Router;