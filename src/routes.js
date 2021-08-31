"use strict";
exports.__esModule = true;
var express_1 = require("express");
var routes = (0, express_1.Router)();
var client_1 = require("./controllers/client");
routes.get('/', client_1["default"].getAllClients);
routes.post('/', client_1["default"].createNewClient);
exports["default"] = routes;
