
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



const path = require('path'); // Usually moved to the start of file

app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, '../build/index.html'));
});

const ScenarioRouter = require("./routes/Scenarios");
const DeveloperRouter = require("./routes/Developer");
const RouteRouter = require("./routes/Route");

app.use("/Scenarios", ScenarioRouter);
app.use("/Developer", DeveloperRouter);
app.use("/Routes", RouteRouter);


app.listen(4040, () => console.log("Port 4040"))