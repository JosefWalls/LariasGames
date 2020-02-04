const Router = require("express").Router();
const Route = require("./../models/Route");

Router.route("/Add").post((req, res) => {
    const {Title, Country, Length, Features, Scenarios, Publisher, Price, Link, RollingStock} = req.body;
    const newRoute = new Route();
    newRoute.Title = Title;
    newRoute.Country = Country;
    newRoute.Length = Length;
    newRoute.Features = Features;
    newRoute.Scenarios = Scenarios;
    newRoute.Publisher = Publisher;
    newRoute.Price = Price;
    newRoute.Link = Link;
    newRoute.RollingStock = RollingStock;
    newRoute.save((err, Route) => {
        if(err){
            res.status(403).json(err)
        } else {
            res.status(200).json(Route)
        }

        res.json("Route succesfully added")
    })
})


module.exports = Router;