"use strict";
exports.__esModule = true;
exports.mongoConnect = void 0;
var mongoose_1 = require("mongoose");
var MONGO_OPTIONS = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};
var MONGO_HOST = 'mongodb://localhost:27017/plataforma-netglobe';
function mongoConnect() {
    mongoose_1["default"]
        .connect(MONGO_HOST, MONGO_OPTIONS)
        .then(function () {
        console.log('mongo connected');
    })["catch"](function (err) {
        console.log(err);
    });
}
exports.mongoConnect = mongoConnect;
