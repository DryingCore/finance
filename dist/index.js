"use strict";
exports.__esModule = true;
var Init_js_1 = require("./ui/Init.js");
var VerifyResponse_js_1 = require("./utils/VerifyResponse.js");
(0, Init_js_1.Init)().then(function (res) { return (0, VerifyResponse_js_1.VerifyResponse)(res); });
