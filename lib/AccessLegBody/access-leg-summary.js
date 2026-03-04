"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = AccessLegSummary;
var _react = _interopRequireDefault(require("react"));
var _reactIntl = require("react-intl");
var _defaults = require("../defaults");
var _util = require("../util");
var S = _interopRequireWildcard(require("../styled"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
function AccessLegSummary({
  config,
  leg,
  LegIcon,
  onSummaryClick,
  showLegIcon
}) {
  return /*#__PURE__*/_react.default.createElement(S.LegClickable, null, /*#__PURE__*/_react.default.createElement(S.LegDescription, null, /*#__PURE__*/_react.default.createElement(S.LegIconAndRouteShortName, null, showLegIcon && /*#__PURE__*/_react.default.createElement(S.LegIconContainer, null, /*#__PURE__*/_react.default.createElement(LegIcon, {
    leg: leg
  }))), /*#__PURE__*/_react.default.createElement(S.InvisibleAdditionalDetails, null, " - "), /*#__PURE__*/_react.default.createElement(_defaults.AccessLegDescription, {
    config: config,
    leg: leg
  }), /*#__PURE__*/_react.default.createElement(S.LegClickableButton, {
    onClick: onSummaryClick
  }, /*#__PURE__*/_react.default.createElement(S.InvisibleAdditionalDetails, null, /*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage, {
    defaultMessage: _util.defaultMessages["otpUi.TransitLegBody.zoomToLeg"],
    description: "Identifies behavior of button",
    id: "otpUi.TransitLegBody.zoomToLeg"
  })))));
}
//# sourceMappingURL=access-leg-summary.js.map