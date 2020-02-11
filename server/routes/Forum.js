const Forum = require("../models/Forum");
const Router = require("express").Router();


Router.route("/CreateForum").post((req, res) => {
    const {Title, Header, Content, Links} = req.body;
    const newForum = new Forum();
    newForum.Title = Title;
    newForum.Header = Header;
    newForum.Content = Content;
    newForum.Links = Links;
    newForum.save((err, forum) => {
        if(err){
            res.status(403).json(err)
        } else {
            res.status(200).json(forum)
        }
    })
})

Router.route("/").get((req, res) => {
    console.log("Forum hit")
    Forum.find({})
    .then(ActiveForums => res.status(200).json(ActiveForums))
    .catch(err => res.status(403).json(err))
})

Router.route("/:forum_id").get((req, res) => {
    const forumId = req.params.forum_id;
    Forum.find({_id: forumId})
    .then(forum => res.status(200).json(forum))
    .catch(err => res.status(403).json(err))
})

module.exports = Router;