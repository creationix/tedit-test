"use strict";

var Point = require("point");
var add = require('./math/add');
var p = new Point(3, 4);
console.log("Point", p);
console.log("3 + 4", add(3, 4));
