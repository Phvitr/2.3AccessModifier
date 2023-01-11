"use strict";
exports.__esModule = true;
var Product_1 = require("./Product");
var Productmanagement_1 = require("./Productmanagement");
var laptop = new Product_1.Product("Laptop", 20000);
var iphone = new Product_1.Product("Iphone", 10000);
var productManager = new Productmanagement_1.ProductManager();
productManager.add = laptop;
productManager.add = iphone;
console.log(productManager.getAll);