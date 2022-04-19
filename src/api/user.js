var express = require('express');
var Router = express.Router();
var userController = require('../controllers/userController')

// var router = function () {
//     return Router
// }
Router.post("/create", userController.create)

Router.get("/get/:id", userController.get)


module.exports = Router;