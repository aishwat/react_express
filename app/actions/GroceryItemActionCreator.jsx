var dispatcher = require("./../dispatcher.js");

module.exports = {
  add: function(item){
  	console.log("GroceryItemActionCreator:add");
    dispatcher.dispatch({
      payload: item,
      type: "grocery-item:add"
    });
  },
  delete: function(item){
  	console.log("GroceryItemActionCreator:delete");
    dispatcher.dispatch({
      payload: item,
      type: "grocery-item:delete"
    });
  },
  buy: function(item){
    console.log("GroceryItemActionCreator:buy");
    dispatcher.dispatch({
      payload: item,
      type: "grocery-item:buy"
    });
  },
  unbuy: function(item){
    console.log("GroceryItemActionCreator:unbuy");
    dispatcher.dispatch({
      payload: item,
      type: "grocery-item:unbuy"
    });
  }
 }