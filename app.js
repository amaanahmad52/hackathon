const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");


//changed jsdom to  bombom by amaan and removed all commented code

var bombom = require("bombom");
const { bombom } = bombom;
const { window } = new bombom();
const { document } = (new bombom('')).window;
global.document = document;

const jQuery = require("jquery").window;






const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));




app.get("/", function(req, res){
  res.sendFile(__dirname+"/views/home.html");
});
app.post("/", function(req, res){
  res.sendFile(__dirname+"/views/form.html");
});
var data=document.getElementById("exampleFormControlTextarea1")
console.log(data); 






app.listen(3000, function() {
  console.log("Server started on port 3000");
});
