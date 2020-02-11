const Developer = require("../models/Developer");
const router = require("express").Router();
const bcrypt = require("bcryptjs");


router.route("/Signup").post((req, res) => {
    const {Username, Position, Password} = req.body;
    if(!Username){
        res.status(403).json("Invalid Fields")
    }
    if(!Position){
        res.status(403).json("Invalid Fields")
    }
    if(!Password){
        res.status(403).json("Invalid Fields")
    }

    Developer.find({
        Username: Username
    }, (err, prevDev) => {
        if(err){
            res.status(403).json("Something went wrong")
        } else if (prevDev){
            res.status(403).json("Account already created")
        }

        const newDeveloper = new Developer();
        newDeveloper.Username = Username;
        newDeveloper.Position = Position;
        newDeveloper.Password = newDeveloper.generateHash(Password);
        newDeveloper.save((err, developer) => {
            if(err){
                res.status(403).json("Server Error")
            }

            res.end("Account created")
        })
    })
})


router.route("/Signin").post((req, res) => {
    const {Username, Password} = req.body;

    if(!Username){
        res.status(403).json("Empty Field")
    }
    if(!Password){
        res.status(403).json("Empty Field")
    }


    Developer.find({
        Username: Username
    }, (err, dev) => {
        if(err){
            res.status(402).json("Server Error")
        }

        if(dev.length != 1){
            res.status(403).json("Invalid Login")
        }


        const developer = dev[0];
        if(!bcrypt.compare(Password, developer.Password)){
            res.status(403).json("Invalid Login")
        }

        req.session.user = {
            loggedIn: true
        }

        console.log(req.session)
        res.status(200).json(req.session)
    })
})


module.exports = router;