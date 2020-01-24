const Products = require("../models/Product");
const Router = require("express").Router();

Router.route("/Add").post((req, res) => {
    console.log("Add hitted")
    const {Title, Category, Description, Header, Images, Features, Publisher, Price, Link} = req.body;
    const newProduct = new Products();
    newProduct.Title = Title;
    newProduct.Category = Category;
    newProduct.Description = Description;
    newProduct.Images = Images;
    newProduct.Features = Features;
    newProduct.Publisher = Publisher;
    newProduct.Price = Price;
    newProduct.Link = Link;
    newProduct.Header = Header;
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
    console.log("gettign")
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

Router.route("/Scenarios/:country").get((req, res) => {
    const country = req.params.country;
    Products.find({Country: country})
    .then(scenarios => res.status(200).json(scenarios))
    .catch(err => res.status(403).json(err))
})

Router.route("/Delete/:product_id").delete((req, res) => {
    Products.deleteOne({_id: req.params.product_id})
    .then(res => res.json("Product deleted"))
    .catch(err => res.json(err))
})

module.exports = Router;