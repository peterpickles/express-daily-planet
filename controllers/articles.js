var express = require("express");
var router = express.Router();
db = require("../models");
var app = express();

router.get("/", function(req,res){
	db.dailyplanet.findAll().then(function(createdArticles){
		res.render("article/index", {results: createdArticles});
	});
});

router.get("/:id", function(req, res){
	db.dailyplanet.findById(req.params.id).then(function(article){
		res.render("articles/show", {result: article});
	});
});

// app.post 

module.exports = router;