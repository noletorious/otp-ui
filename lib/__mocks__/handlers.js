"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _msw = require("msw");
var _mapillary = _interopRequireDefault(require("./mapillary.json"));
// This faked endpoint will always return the same ID
var _default = exports.default = [_msw.http.get("https://graph.mapillary.com/images", () => {
  return new Response(JSON.stringify(_mapillary.default));
})];
//# sourceMappingURL=handlers.js.map