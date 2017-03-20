var express = require('express');
var app = new express();
var React = require('react');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');
// var GroceryItem = require('./models/GroceryItem.js');

require('babel-register')({
    presets: ['es2015', 'react']
});

// require('./database.js');


var parser = require('body-parser');
app.use(parser.json());
app.use(parser.urlencoded({extended: false}));

// var doc = [{
//     name:"ice cream"
//   },{
//     name:"waffles"
//   },{
//     name:"candy",
//     purchased:true
//   },{
//     name:"snarks"
//   }];


app.get('/',function(req,res){
	// res.render('./../app/index.ejs',{});
	var application = React.createFactory(require('./../app/components/GroceryItemList.jsx'));

  // GroceryItem.find(function(error, doc){
    var generated = ReactDOMServer.renderToString(application({
      items: doc
    }));

    res.render('./../app/index.ejs', {
      reactOutput: generated
    })
}).use(express.static(__dirname+'/../.tmp'))
.use('/bower_components',express.static(__dirname + '/../bower_components'))
.listen(7777);

require('./routes/items.js')(app);





