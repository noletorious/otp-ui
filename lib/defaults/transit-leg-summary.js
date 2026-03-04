"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TransitLegSummary;
var _react = _interopRequireDefault(require("react"));
var _reactIntl = require("react-intl");
var _coreUtils = _interopRequireDefault(require("@opentripplanner/core-utils"));
var S = _interopRequireWildcard(require("../styled"));
var _util = require("../util");
var _duration = _interopRequireDefault(require("./duration"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
const {
  ensureAtLeastOneMinute
} = _coreUtils.default.time;

/**
 * This is a clickable component that summarizes the leg (travel time, stops
 * passed). On click it will expand and show the list of intermediate stops.
 */
function TransitLegSummary({
  leg,
  onClick,
  stopsExpanded
}) {
  var _leg$intermediateStop;
  const durationSeconds = ensureAtLeastOneMinute(leg.duration);
  return /*#__PURE__*/_react.default.createElement(S.TransitLegSummary, {
    onClick: onClick
  }, /*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage, {
    defaultMessage: _util.defaultMessages["otpUi.TransitLegBody.rideDurationAndStops"],
    description: "Describes ride duration and number of stops",
    id: "otpUi.TransitLegBody.rideDurationAndStops",
    values: {
      duration: /*#__PURE__*/_react.default.createElement(_duration.default, {
        seconds: durationSeconds
      }),
      numStops: (((_leg$intermediateStop = leg.intermediateStops) === null || _leg$intermediateStop === void 0 ? void 0 : _leg$intermediateStop.length) || 0) + 1
    }
  }), leg.intermediateStops && /*#__PURE__*/_react.default.createElement(S.CaretToggle, {
    expanded: stopsExpanded
  }), /*#__PURE__*/_react.default.createElement(S.InvisibleAdditionalDetails, null, /*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage, {
    defaultMessage: _util.defaultMessages["otpUi.TransitLegBody.expandDetails"],
    description: "Screen reader text to expand stops",
    id: "otpUi.TransitLegBody.expandDetails"
  })));
}
//# sourceMappingURL=transit-leg-summary.js.map