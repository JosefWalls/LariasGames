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
    console.log("All scenarios")
    Scenario.find({Category: "Scenario"})
    .then(scenarios => res.json(scenarios))
    .catch(err => res.json(err))
})

Router.route("/:scenario_id").get((req, res) => {
    const scenarioId = req.params.scenario_id; 
    console.log(scenarioId)
    Scenario.find({_id: scenarioId})
    .then(scenario => res.status(200).json(scenario))
    .catch(err => res.status(403).json(err))
})

Router.route("/Delete/:scenario_id").delete((req, res) => {
    const scenarioId = req.params.scenario_id;
    Scenario.deleteOne({_id: scenarioId})
    .then(res.status(200).json("Scenario Deleted"))
    .catch(err => res.json(403).json(err))
})

Router.route("/Edit/:scenario_id").put((req, res) => {
    console.log("hit")
    const scenarioId = req.params.scenario_id;
    const {Title, Description, Header, Images, Features, Publisher, Price, Link, Country} = req.body;
    Scenario.updateOne({_id: scenarioId}, {$set: {Title: Title, Description: Description, Header: Header, Publisher: Publisher, Price: Price, Link: Link, Country: Country}})
    .then(res.status(200).json("Scenario Pack Edited"))
    .catch(err => res.status(403).json(err))
})

module.exports = Router;