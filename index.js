var express = require('express');
var bodyParser = require('body-parser');
var ejsLayouts = require('express-ejs-Layouts')
var app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: false}));
app.use(ejsLayouts);

app.get('/', function(req,res){
	res.send("home page is here!");
});

app.get("/contact", function(req, res){
	res.send("this is my contacts page");
	// res.render("contact");
});

app.get("/about", function(req, res){
	res.send("this is my abouts page");
	// res.render("about");
});


app.listen(3000);
