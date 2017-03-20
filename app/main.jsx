var React = require('react');
var ReactDOM = require('react-dom');
console.log("Hello from jsx");

var GroceryItemList = require('./components/GroceryItemList.jsx');
var GroceryItemStore = require('./stores/GroceryItemStore.jsx');
var initial = GroceryItemStore.getItems();

function render(){
	ReactDOM.render(<GroceryItemList items={initial}/>, app);
}

GroceryItemStore.onChange(function(items){
	console.log("GroceryItemStore.onChange");
	initial = items;
	render();
})
render();