"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = LineColumnContent;
var _coreUtils = _interopRequireDefault(require("@opentripplanner/core-utils"));
var _locationIcon = _interopRequireDefault(require("@opentripplanner/location-icon"));
var _react = _interopRequireDefault(require("react"));
var _reactIntl = require("react-intl");
var _RouteBadge = _interopRequireDefault(require("../RouteBadge"));
var S = _interopRequireWildcard(require("../styled"));
var _util = require("../util");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
const {
  getLegRouteLongName,
  getLegRouteShortName
} = _coreUtils.default.itinerary;

/**
 * Gets the travel mode in the ambient language.
 */
function getTravelMode(modeId, intl) {
  switch (modeId) {
    case "BICYCLE":
      return intl.formatMessage({
        defaultMessage: _util.defaultMessages["otpUi.ItineraryBody.travelByMode.bike"],
        description: "Travel by bike",
        id: "otpUi.ItineraryBody.travelByMode.bike"
      });
    case "CAR":
      return intl.formatMessage({
        defaultMessage: _util.defaultMessages["otpUi.ItineraryBody.travelByMode.car"],
        description: "Travel by car",
        id: "otpUi.ItineraryBody.travelByMode.car"
      });
    case "MICROMOBILITY":
    case "SCOOTER":
      return intl.formatMessage({
        defaultMessage: _util.defaultMessages["otpUi.ItineraryBody.travelByMode.escooter"],
        description: "Travel by e-scooter",
        id: "otpUi.ItineraryBody.travelByMode.escooter"
      });
    case "WALK":
      return intl.formatMessage({
        defaultMessage: _util.defaultMessages["otpUi.ItineraryBody.travelByMode.walk"],
        description: "Travel by walking",
        id: "otpUi.ItineraryBody.travelByMode.walk"
      });
    default:
      return modeId;
  }
}
function LineColumnContent({
  interline,
  isDestination,
  leg,
  LegIcon,
  toRouteAbbreviation
}) {
  const {
    mode,
    routeColor,
    transitLeg
  } = leg;
  const intl = (0, _reactIntl.useIntl)();
  const travelByMessage = intl.formatMessage({
    defaultMessage: _util.defaultMessages["otpUi.ItineraryBody.travelBy"],
    description: "Instructs to travel using a mode",
    id: "otpUi.ItineraryBody.travelBy"
  }, {
    mode: getTravelMode(mode, intl)
  });
  const routeShortName = getLegRouteShortName(leg);
  return /*#__PURE__*/_react.default.createElement(S.LegLine, null, !isDestination && /*#__PURE__*/_react.default.createElement(S.InnerLine, {
    mode: mode,
    routeColor: routeColor
  }), /*#__PURE__*/_react.default.createElement(S.LineBadgeContainer, null, !interline && !isDestination && transitLeg && /*#__PURE__*/_react.default.createElement(_RouteBadge.default, {
    abbreviation: toRouteAbbreviation(parseInt(routeShortName, 10) || routeShortName),
    color: routeColor,
    name: getLegRouteLongName(leg) || ""
  }), !interline && !isDestination && !transitLeg && /*#__PURE__*/_react.default.createElement(S.AccessBadge, {
    "aria-label": travelByMessage,
    mode: mode,
    routeColor: routeColor
  }, /*#__PURE__*/_react.default.createElement(LegIcon, {
    leg: leg,
    title: travelByMessage,
    width: "66%"
  })), isDestination && /*#__PURE__*/_react.default.createElement(S.Destination, null, /*#__PURE__*/_react.default.createElement(_locationIcon.default, {
    size: 25,
    type: "to"
  }))));
}
//# sourceMappingURL=line-column-content.js.map