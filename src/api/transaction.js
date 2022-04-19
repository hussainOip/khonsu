var express = require('express');
var Router = express.Router();
var transictionController = require('../controllers/transactionController')

// var router = function () {
//     return Router
// }
Router.post("/create", transictionController.create)

Router.get("/get/:id", transictionController.get)


module.exports = Router;