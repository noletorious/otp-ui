"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = RouteDescription;
var _coreUtils = _interopRequireDefault(require("@opentripplanner/core-utils"));
var _react = _interopRequireDefault(require("react"));
var _routeLongName = _interopRequireDefault(require("../defaults/route-long-name"));
var S = _interopRequireWildcard(require("../styled"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
const {
  getLegRouteShortName
} = _coreUtils.default.itinerary;
function RouteDescription({
  leg,
  LegIcon
}) {
  const routeShortName = getLegRouteShortName(leg);
  return /*#__PURE__*/_react.default.createElement(S.LegDescriptionForTransit, null, /*#__PURE__*/_react.default.createElement(S.LegIconAndRouteShortName, null, /*#__PURE__*/_react.default.createElement(S.LegIconContainer, null, /*#__PURE__*/_react.default.createElement(LegIcon, {
    leg: leg
  })), routeShortName && /*#__PURE__*/_react.default.createElement(S.LegDescriptionRouteShortName, null, routeShortName)), /*#__PURE__*/_react.default.createElement(S.LegDescriptionRouteLongName, null, /*#__PURE__*/_react.default.createElement(_routeLongName.default, {
    leg: leg
  })));
}
//# sourceMappingURL=route-description.js.map