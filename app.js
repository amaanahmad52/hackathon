const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");


var jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM();
const { document } = (new JSDOM('')).window;
global.document = document;

const jQuery = require("jquery").window;






const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));



/*app.get("/", function(req, res){
  res.sendFile(__dirname+"/views/home.html");
});*/
app.get("/", function(req, res){
  res.sendFile(__dirname+"/views/home.html");
});
app.post("/", function(req, res){
  res.sendFile(__dirname+"/views/form.html");
});
var data=document.getElementById("exampleFormControlTextarea1")
console.log(data); 




/*app.get("/about", function(req, res){
  res.render("about", {aboutContent: aboutContent});
});

app.get("/contact", function(req, res){
  res.render("contact", {contactContent: contactContent});
});

app.get("/compose", function(req, res){
  res.render("compose");
});

app.post("/compose", function(req, res){
  const post = {
    title: req.body.postTitle,
    content: req.body.postBody
  };

  posts.push(post);

  res.redirect("/");

});*/



/*$(function () {
  $('[data-toggle="popover"]').popover();
  
  $('#cvc').on('click', function(){
    if ( $('.cvc-preview-container').hasClass('hide') ) {
      $('.cvc-preview-container').removeClass('hide');
    } else {
      $('.cvc-preview-container').addClass('hide');
    }    
  });
  
});*/



/*$jnoConflict()
var $j = jQuery.noConflict();

$j(document).ready(function() {
	$j('[data-toggle="popover"]').popover();
});*/

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
