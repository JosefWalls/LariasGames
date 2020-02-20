
require("dotenv").config();
const sessions = require("express-session");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const massive = require("massive");


app.use(cors());

const uri = process.env.AUTH_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("Database Connected")
})


app.use(express.static(`${__dirname}/../build`));

app.use(sessions({
    secret: "Autoclone",
    saveUninitialized: true,
    resave: false
}))

app.use(express.json());


const ScenarioRouter = require("./routes/Scenarios");
const DeveloperRouter = require("./routes/Developer");
const RouteRouter = require("./routes/Route");
const AnnouncementRouter = require("./routes/Announcement");
const ForumRouter = require("./routes/Forum");

app.use("/Scenarios", ScenarioRouter);
app.use("/Developer", DeveloperRouter);
app.use("/Routes", RouteRouter);
app.use("/Announcements", AnnouncementRouter);
app.use("/Forum", ForumRouter);


app.listen(80, () => console.log("Port 80"))