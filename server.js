//Dependencies express/body-parser/path
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
//app
var app = express();
var PORT = process.env.PORT || 8080;

//Data parse for express
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/vnd.api+json"}));

//Route file path
require("./app/routing/apiroutes.js")(app);
require("./app/routing/htmlroutes.js")(app);

//Where is the server listening
app.listen(PORT, function (){
    console.log("App is live on PORT: " + PORT);
});