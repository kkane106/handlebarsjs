var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
// require handlebars
var handlebars = require('express-handlebars')
// set default layout
.create({defaultLayout: 'application'});

// set handlebars as the templating engine
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

// path to static resources (ie. css/js)
app.use(express.static(__dirname + '/public'));

var about = require('./lib/about.js');
var contact = require('./lib/contact.js');

// very basic example, responding with a full page of content in HTML
// look to 'views/index.handlebars'
app.get("/", function(req,res){
	console.log("index");
	res.render('index');
});

/* 
More robust templating. Refer to the "lib/about.js" script where
the json passed to the "views/about.handlebars" template is stored.
This json corresponds to the template's mustache notation, and dynamically
fills in content...including, the title for the page (this is located within
the 'views/layouts/application.handlebars' layout)
*/
app.get("/about", function(req,res){
	console.log("about", {page : about.getAbout()});
	res.render('about', {page : about.getAbout()});
});

/*
Even more robust in functionality, here we use three mustache brackets to
include actual HTML in our template. Passing a full form to the template 
with json and including a page specific script helper.

All the helper is doing at the moment is preventing the form from being
submitted and printing out the message the user entered to the console...but
it should give you an appreciation for what is possible with this method.
*/
app.get("/contact", function(req,res){
	console.log("contact", {page : contact.getContact()});
	res.render("contact", {page : contact.getContact()});
});

// How to use a different (or in this case no) layout
app.get('/noLayout', function(req,res){
	res.render('noLayout', {layout:null});
});

// This route shows that you can use alternate layout templates
app.get('/landingPage', function(req,res){
	res.render('landing', {layout: 'landingPage'});
});

// Error handling routes

// 404
app.use(function(req,res){
	res.status(404);
	res.render('404');
});

// 500
app.use(function(err,req,res,next){
	console.error(err.stack);
	res.status(500);
	res.render('500');
});

app.listen(3000, function(req,res){
	console.log("handlebars example listening on 3000");
});