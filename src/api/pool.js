var express = require('express');
var Router = express.Router();
var poolController = require('../controllers/pooController')

// var router = function () {
//     return Router
// }
Router.post("/create", poolController.create)

Router.get("/get/:id", poolController.get)


module.exports = Router;