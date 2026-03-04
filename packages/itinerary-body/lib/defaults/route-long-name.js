"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = RouteLongName;
var _coreUtils = _interopRequireDefault(require("@opentripplanner/core-utils"));
var _react = _interopRequireDefault(require("react"));
var _reactIntl = require("react-intl");
var _stringSimilarity = require("string-similarity");
var S = _interopRequireWildcard(require("../styled"));
var _util = require("../util");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
const {
  getLegRouteLongName
} = _coreUtils.default.itinerary;
/**
 * Helper function to format the "to" separator.
 */
function toPrefix(contents) {
  return /*#__PURE__*/_react.default.createElement(S.LegDescriptionHeadsignPrefix, null, contents);
}
function RouteLongName({
  className,
  leg,
  style
}) {
  const {
    headsign: otp1Headsign,
    trip
  } = leg;
  const headsign = (trip === null || trip === void 0 ? void 0 : trip.tripHeadsign) || otp1Headsign;
  const routeLongName = getLegRouteLongName(leg);
  // Hide route long name if it contains similar information to the headsign
  const hideRouteLongName = (0, _stringSimilarity.compareTwoStrings)(headsign || "", routeLongName || "") > 0.25 || !routeLongName;
  return /*#__PURE__*/_react.default.createElement("span", {
    className: className,
    style: style
  }, !hideRouteLongName && headsign ? /*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage, {
    defaultMessage: _util.defaultMessages["otpUi.TransitLegBody.routeDescription"],
    description: "Displays the route name and destination",
    id: "otpUi.TransitLegBody.routeDescription",
    values: {
      headsign,
      routeName: routeLongName,
      toPrefix
    }
  }) : headsign || routeLongName);
}
//# sourceMappingURL=route-long-name.js.map