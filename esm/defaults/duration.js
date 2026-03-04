import _defineProperty from "@babel/runtime/helpers/defineProperty";
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import coreUtils from "@opentripplanner/core-utils";
import React from "react";
import { FormattedMessage } from "react-intl";
import { defaultMessages } from "../util";
/**
 * This is a clickable component that summarizes the leg (travel time, stops
 * passed). On click it will expand and show the list of intermediate stops.
 */
export default function Duration(_ref) {
  var seconds = _ref.seconds,
    showApproximatePrefix = _ref.showApproximatePrefix;
  return /*#__PURE__*/React.createElement(FormattedMessage, {
    defaultMessage: defaultMessages["otpUi.ItineraryBody.common.durationShort"],
    description: "Duration in abbreviated hours (if over one hour) and minutes",
    id: "otpUi.ItineraryBody.common.durationShort",
    values: _objectSpread(_objectSpread({}, coreUtils.time.toHoursMinutesSeconds(seconds)), {}, {
      approximatePrefix: showApproximatePrefix
    })
  });
}
//# sourceMappingURL=duration.js.map