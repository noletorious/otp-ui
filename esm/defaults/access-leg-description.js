import _defineProperty from "@babel/runtime/helpers/defineProperty";
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import React from "react";
import { FormattedMessage, useIntl } from "react-intl";
import coreUtils from "@opentripplanner/core-utils";
import * as S from "../styled";
import { defaultMessages, getPlaceName } from "../util";
import Distance from "./default-distance";
var _coreUtils$time = coreUtils.time,
  ensureAtLeastOneMinute = _coreUtils$time.ensureAtLeastOneMinute,
  toHoursMinutesSeconds = _coreUtils$time.toHoursMinutesSeconds;
/**
 * Gets the summary mode in the ambient language.
 */
export function getSummaryMode(leg, intl) {
  switch (leg.mode) {
    case "BICYCLE":
      return intl.formatMessage({
        defaultMessage: defaultMessages["otpUi.AccessLegBody.summaryMode.bike"],
        description: "Bike to somewhere",
        id: "otpUi.AccessLegBody.summaryMode.bike"
      });
    case "BICYCLE_RENT":
      return intl.formatMessage({
        defaultMessage: defaultMessages["otpUi.AccessLegBody.summaryMode.bikeshare"],
        description: "Bikeshare to somewhere",
        id: "otpUi.AccessLegBody.summaryMode.bikeshare"
      });
    case "CAR":
      return leg.rideHailingEstimate ? intl.formatMessage({
        defaultMessage: defaultMessages["otpUi.AccessLegBody.summaryMode.carHail"],
        description: "Ride in a car/taxi to somewhere",
        id: "otpUi.AccessLegBody.summaryMode.carHail"
      }) : intl.formatMessage({
        defaultMessage: defaultMessages["otpUi.AccessLegBody.summaryMode.carDrive"],
        description: "Drive somewhere",
        id: "otpUi.AccessLegBody.summaryMode.carDrive"
      });
    case "MICROMOBILITY":
    case "MICROMOBILITY_RENT":
    case "SCOOTER":
      return intl.formatMessage({
        defaultMessage: defaultMessages["otpUi.AccessLegBody.summaryMode.escooter"],
        description: "Use an e-scooter",
        id: "otpUi.AccessLegBody.summaryMode.escooter"
      });
    case "WALK":
      return intl.formatMessage({
        defaultMessage: defaultMessages["otpUi.AccessLegBody.summaryMode.walk"],
        description: "Walk to somewhere",
        id: "otpUi.AccessLegBody.summaryMode.walk"
      });
    default:
      return leg.mode;
  }
}

/**
 * Renders leg description text, e.g. "Walk 0.5 mi to..."
 * while letting others style the mode and place text.
 */
export default function AccessLegDescription(_ref) {
  var className = _ref.className,
    config = _ref.config,
    leg = _ref.leg,
    style = _ref.style;
  var intl = useIntl();
  var companies = config.companies,
    formatDuration = config.formatDuration,
    units = config.units;
  var from = leg.from,
    distance = leg.distance,
    duration = leg.duration,
    to = leg.to;
  // Replace the Vertex Type for BIKESHARE with VEHICLE as we do not know that
  // it is a bike yet because that information is in the next leg with OTP2.
  var toPlace = _objectSpread(_objectSpread({}, to), {}, {
    vertexType: to.vertexType === "BIKESHARE" ? "VEHICLE" : to.vertexType
  });
  var modeContent = getSummaryMode(leg, intl);
  var placeContent = /*#__PURE__*/React.createElement(S.LegDescriptionPlace, null, getPlaceName(toPlace, companies, intl));
  var durationSeconds = ensureAtLeastOneMinute(duration);

  // TODO: is this causing issues with TNC legs? Do walk legs leading to a TNC
  // trip really have the same `to.stopId` as `from.stopId`?
  var isTransferLeg = to.stopId === from.stopId;
  return (
    /*#__PURE__*/
    // Return an HTML element which is passed a className (and style props)
    // for styled-components support.
    React.createElement("span", {
      className: "".concat(className || "", " ").concat(isTransferLeg && distance === 0 ? "transfer-leg" : "walk-leg"),
      style: style
    }, distance > 0 ? /*#__PURE__*/React.createElement(FormattedMessage, {
      defaultMessage: "{mode} {distance} to {place}",
      description: "Summarizes an access leg, including distance",
      id: "otpUi.AccessLegBody.summaryAndDistance",
      values: {
        distance: /*#__PURE__*/React.createElement(Distance, {
          meters: distance,
          units: units
        }),
        // This is not used by the default string,
        // but supplying it allows a user who is overriding the string to use it
        // This relies on `formatDuration` being passed into the itinerary body config.
        // That method is used to generate the duration string.
        duration: formatDuration && formatDuration(durationSeconds, intl, false),
        mode: modeContent,
        place: placeContent
      }
    }) : isTransferLeg ? /*#__PURE__*/React.createElement(FormattedMessage, {
      defaultMessage: "Transfer, wait {duration}",
      description: "Summarizes a transfer leg",
      id: "otpUi.AccessLegBody.transfer",
      values: {
        duration: intl.formatMessage({
          id: "otpUi.ItineraryBody.common.durationShort"
        }, _objectSpread({
          approximatePrefix: false
        }, toHoursMinutesSeconds(durationSeconds)))
      }
    }) : /*#__PURE__*/React.createElement(FormattedMessage, {
      defaultMessage: "{mode} to {place}",
      description: "Summarizes an access leg",
      id: "otpUi.AccessLegBody.summary",
      values: {
        mode: modeContent,
        place: placeContent
      }
    }))
  );
}
//# sourceMappingURL=access-leg-description.js.map