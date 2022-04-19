var express = require('express');
var Router = express.Router();
var investmentController = require('../controllers/investmentController')

// var router = function () {
//     return Router
// }
Router.post("/create", investmentController.create)

Router.get("/get/:id", investmentController.get)


module.exports = Router;