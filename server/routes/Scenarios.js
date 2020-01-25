const Scenario = require("../models/Scenario");
const Router = require("express").Router();

Router.route("/Add").post((req, res) => {
    console.log("Add hitted")
    const {Title, Category, Description, Header, Images, Features, Publisher, Price, Link, Country} = req.body;
    const newScenario = new Scenario();
    newScenario.Title = Title;
    newScenario.Category = Category;
    newScenario.Description = Description;
    newScenario.Images = Images;
    newScenario.Features = Features;
    newScenario.Publisher = Publisher;
    newScenario.Price = Price;
    newScenario.Link = Link;
    newScenario.Header = Header;
    newScenario.Country = Country;
    newScenario.save((err, product) => {
        if(err){
            res.status(403).json(err)
        } else {
            res.status(200).json(product)
        }

        res.end("Product Submitted")
    })
})


Router.route("/").get((req, res) => {
    console.log("gettign")
    Scenario.find({Category: "Scenario"})
    .then(scenarios => res.json(scenarios))
    .catch(err => res.json(err))
})

Router.route("/Routes").get((req, res) => {
    Scenario.find({Category: "Route"})
    .then(routes => res.json(routes))
    .catch(err => res.json(err))
})

Router.route("/Filter/:country").get((req, res) => {
    const country = req.params.country;
    console.log(country)
    Scenario.find({Country: country})
    .then(scenarios => res.status(200).json(scenarios))
    .catch(err => res.status(403).json(err))
})

Router.route("/Delete/:product_id").delete((req, res) => {
    Scenario.deleteOne({_id: req.params.product_id})
    .then(res => res.json("Product deleted"))
    .catch(err => res.json(err))
})

module.exports = Router;