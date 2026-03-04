"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CustomPlaceName = CustomPlaceName;
exports.CustomTimeColumnContent = CustomTimeColumnContent;
exports.CustomTransitLegSummary = CustomTransitLegSummary;
exports.StyledItineraryBody = void 0;
exports.WrappedOtpRRTransitLegSubheader = WrappedOtpRRTransitLegSubheader;
exports.customToRouteAbbreviation = customToRouteAbbreviation;
var _react = _interopRequireDefault(require("react"));
var _reactIntl = require("react-intl");
var _actions = require("storybook/actions");
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _ExclamationTriangle = require("@styled-icons/fa-solid/ExclamationTriangle");
var _buildingBlocks = _interopRequireDefault(require("@opentripplanner/building-blocks"));
var _ = _interopRequireDefault(require(".."));
var _transitLegSubheader = _interopRequireDefault(require("../otp-react-redux/transit-leg-subheader"));
var ItineraryBodyClasses = _interopRequireWildcard(require("../styled"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
const {
  red,
  grey
} = _buildingBlocks.default;
function CustomPlaceName({
  place
}) {
  return `🎉✨🎊 ${place.name} 🎉✨🎊`;
}

/**
 * Custom component, for illustration purposes only, for displaying the time and other info
 * of the given leg in the time column of the ItineraryBody -> PlaceRow component.
 */
function CustomTimeColumnContent({
  isDestination,
  leg
}) {
  const time = isDestination ? leg.endTime : leg.startTime;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("span", {
    style: {
      color: red[700]
    }
  }, /*#__PURE__*/_react.default.createElement(_reactIntl.FormattedTime, {
    value: time
  }))), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      fontSize: "80%",
      lineHeight: "1em"
    }
  }, /*#__PURE__*/_react.default.createElement(_ExclamationTriangle.ExclamationTriangle, {
    style: {
      height: "1em"
    }
  }), " Delayed xx\xA0min."));
}
function customToRouteAbbreviation(route) {
  if (route.toString().length < 3) {
    return route.toString();
  }
  return undefined;
}
function CustomTransitLegSummary({
  leg,
  onClick,
  stopsExpanded
}) {
  return /*#__PURE__*/ /* eslint-disable jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events */_react.default.createElement("div", {
    onClick: onClick
  }, leg.duration && /*#__PURE__*/_react.default.createElement("span", null, "Ride for a custom duration of ", (leg.duration / 60).toFixed(3), " minutes"), leg.intermediateStops && /*#__PURE__*/_react.default.createElement("span", null, ` (${leg.intermediateStops.length + 1} stops)`, /*#__PURE__*/_react.default.createElement(ItineraryBodyClasses.CaretToggle, {
    expanded: stopsExpanded
  })));
}
const StyledItineraryBody = exports.StyledItineraryBody = (0, _styledComponents.default)(_.default).withConfig({
  displayName: "demos__StyledItineraryBody",
  componentId: "sc-1ckuiy0-0"
})(["", "{background-color:pink;}", "{color:", ";font-size:14px;padding-right:4px;padding-top:1px;text-align:right;vertical-align:top;width:60px;}"], ItineraryBodyClasses.LegBody, ItineraryBodyClasses.TimeColumn, grey[700]);
function WrappedOtpRRTransitLegSubheader({
  leg
}) {
  return /*#__PURE__*/_react.default.createElement(_transitLegSubheader.default, {
    leg: leg,
    onStopClick: (0, _actions.action)("Transit Stop Click")
  });
}
//# sourceMappingURL=index.js.map