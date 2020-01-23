require("dotenv").config();
const session = require("express-session");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const massive = require("massive");

app.use(express.json());
app.use(cors());

const uri = process.env.AUTH_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("Database Connected")
})

app.use(session({
    secret: "LariasGames",
    saveUninitialized: true,
    resave: false
}))

const ProductRouter = require("./routes/Products");
const DeveloperRouter = require("./routes/Developer");

app.use("/Product", ProductRouter);
app.use("/Developer", DeveloperRouter);


app.listen(4040, () => console.log("Port 4040"))