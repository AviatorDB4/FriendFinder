//Dependencies express/body-parser/path
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
//app function
var app = express();
var PORT = process.env.PORT || 8080;

//Data parsing for express
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extend: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/vnd.api+json"}));

//Route
require("./app/routing/apiroutes.js")(app);
require("./app/routing/htmlroutes.js")(app);

//Server is listening
app.listen(PORT, function (){
    console.log("App is live on PORT: " + PORT);
});