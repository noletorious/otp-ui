"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = IntermediateStops;
var _react = _interopRequireDefault(require("react"));
var S = _interopRequireWildcard(require("../styled"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
function IntermediateStops({
  stops
}) {
  return /*#__PURE__*/_react.default.createElement(S.IntermediateStops, null, stops.map((stop, k) => /*#__PURE__*/_react.default.createElement(S.StopRow, {
    key: k
  }, /*#__PURE__*/_react.default.createElement(S.StopMarker, null, "\u2022"), /*#__PURE__*/_react.default.createElement(S.StopName, null, stop.name))));
}
//# sourceMappingURL=intermediate-stops.js.map