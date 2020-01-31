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

module.exports = Router;