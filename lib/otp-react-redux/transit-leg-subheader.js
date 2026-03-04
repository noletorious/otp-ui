"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TransitLegSubheader;
var _coreUtils = _interopRequireDefault(require("@opentripplanner/core-utils"));
var _react = _interopRequireDefault(require("react"));
var _reactIntl = require("react-intl");
var S = _interopRequireWildcard(require("../styled"));
var _util = require("../util");
var _viewStopButton = _interopRequireDefault(require("./view-stop-button"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
const {
  getDisplayedStopCode,
  isFlex
} = _coreUtils.default.itinerary;
function TransitLegSubheader({
  leg,
  onStopClick
}) {
  const {
    from
  } = leg;
  // Prevent rendering subheader for access legs without a stop ID
  if (!(from !== null && from !== void 0 && from.stopId)) return null;
  return /*#__PURE__*/_react.default.createElement(S.PlaceSubheader, {
    className: "transit-leg-subheader"
  }, getDisplayedStopCode(from) && /*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage, {
    defaultMessage: _util.defaultMessages["otpUi.TransitLegBody.stopId"],
    description: "Displays the stop ID",
    id: "otpUi.TransitLegBody.stopId",
    values: {
      stopId: getDisplayedStopCode(from)
    }
  }), !isFlex(leg) && /*#__PURE__*/_react.default.createElement(_viewStopButton.default, {
    onStopClick: onStopClick,
    stop: from.stop,
    stopCode: getDisplayedStopCode(from)
  }));
}
//# sourceMappingURL=transit-leg-subheader.js.map