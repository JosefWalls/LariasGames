const Products = require("../models/Product");
const Router = require("express").Router();

Router.route("/Add").post((req, res) => {
    const {Title, Category, Description, Images, Features, Publisher, Price, Link} = req.body;
    const newProduct = new Products();
    newProduct.Title = Title;
    newProduct.Category = Category;
    newProduct.Description = Description;
    newProduct.Images = Images;
    newProduct.Features = Features;
    newProduct.Publisher = Publisher;
    newProduct.Price = Price;
    newProduct.Link = Link;
    newProduct.save((err, product) => {
        if(err){
            res.status(403).json(err)
        } else {
            res.status(200).json(product)
        }

        res.end("Product Submitted")
    })
})


Router.route("/Scenarios").get((req, res) => {
    Products.find({Category: "Scenario"})
    .then(scenarios => res.json(scenarios))
    .catch(err => res.json(err))
})

Router.route("/Routes").get((req, res) => {
    Products.find({Category: "Route"})
    .then(routes => res.json(routes))
    .catch(err => res.json(err))
})

Router.route("/").get((req, res) => {
    Products.find()
    .then(allProducts => res.json(allProducts))
    .catch(err => res.json(err))
})

module.exports = Router;