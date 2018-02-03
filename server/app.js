// import files and packages up here
var express = require("express");
var app = express();
var morgan = require("morgan");
var fs = require("fs");
var path = require("path");
//console.log(require("./data.json"));
var data = require("./data.json");

// create your express server below
var app;
app.use(morgan("dev"));

app.use(morgan("common", {
    stream: fs.createWriteStream(path.join(__dirname, "access.log"), { flags: "a" })
}));

// add your routes and middleware below
app.get("/", function (reg, res) {
    res.send("Top Spots Page")
});

app.get("/data", function (req, res) {
    res.send(data);
});





// finally export the express application
module.exports = app;


