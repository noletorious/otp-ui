"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = AccessLegDescription;
exports.getSummaryMode = getSummaryMode;
var _react = _interopRequireDefault(require("react"));
var _reactIntl = require("react-intl");
var _coreUtils = _interopRequireDefault(require("@opentripplanner/core-utils"));
var S = _interopRequireWildcard(require("../styled"));
var _util = require("../util");
var _defaultDistance = _interopRequireDefault(require("./default-distance"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
const {
  ensureAtLeastOneMinute,
  toHoursMinutesSeconds
} = _coreUtils.default.time;
/**
 * Gets the summary mode in the ambient language.
 */
function getSummaryMode(leg, intl) {
  switch (leg.mode) {
    case "BICYCLE":
      return intl.formatMessage({
        defaultMessage: _util.defaultMessages["otpUi.AccessLegBody.summaryMode.bike"],
        description: "Bike to somewhere",
        id: "otpUi.AccessLegBody.summaryMode.bike"
      });
    case "BICYCLE_RENT":
      return intl.formatMessage({
        defaultMessage: _util.defaultMessages["otpUi.AccessLegBody.summaryMode.bikeshare"],
        description: "Bikeshare to somewhere",
        id: "otpUi.AccessLegBody.summaryMode.bikeshare"
      });
    case "CAR":
      return leg.rideHailingEstimate ? intl.formatMessage({
        defaultMessage: _util.defaultMessages["otpUi.AccessLegBody.summaryMode.carHail"],
        description: "Ride in a car/taxi to somewhere",
        id: "otpUi.AccessLegBody.summaryMode.carHail"
      }) : intl.formatMessage({
        defaultMessage: _util.defaultMessages["otpUi.AccessLegBody.summaryMode.carDrive"],
        description: "Drive somewhere",
        id: "otpUi.AccessLegBody.summaryMode.carDrive"
      });
    case "MICROMOBILITY":
    case "MICROMOBILITY_RENT":
    case "SCOOTER":
      return intl.formatMessage({
        defaultMessage: _util.defaultMessages["otpUi.AccessLegBody.summaryMode.escooter"],
        description: "Use an e-scooter",
        id: "otpUi.AccessLegBody.summaryMode.escooter"
      });
    case "WALK":
      return intl.formatMessage({
        defaultMessage: _util.defaultMessages["otpUi.AccessLegBody.summaryMode.walk"],
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
function AccessLegDescription({
  className,
  config,
  leg,
  style
}) {
  const intl = (0, _reactIntl.useIntl)();
  const {
    companies,
    formatDuration,
    units
  } = config;
  const {
    from,
    distance,
    duration,
    to
  } = leg;
  // Replace the Vertex Type for BIKESHARE with VEHICLE as we do not know that
  // it is a bike yet because that information is in the next leg with OTP2.
  const toPlace = {
    ...to,
    vertexType: to.vertexType === "BIKESHARE" ? "VEHICLE" : to.vertexType
  };
  const modeContent = getSummaryMode(leg, intl);
  const placeContent = /*#__PURE__*/_react.default.createElement(S.LegDescriptionPlace, null, (0, _util.getPlaceName)(toPlace, companies, intl));
  const durationSeconds = ensureAtLeastOneMinute(duration);

  // TODO: is this causing issues with TNC legs? Do walk legs leading to a TNC
  // trip really have the same `to.stopId` as `from.stopId`?
  const isTransferLeg = to.stopId === from.stopId;
  return (
    /*#__PURE__*/
    // Return an HTML element which is passed a className (and style props)
    // for styled-components support.
    _react.default.createElement("span", {
      className: `${className || ""} ${isTransferLeg && distance === 0 ? "transfer-leg" : "walk-leg"}`,
      style: style
    }, distance > 0 ? /*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage, {
      defaultMessage: "{mode} {distance} to {place}",
      description: "Summarizes an access leg, including distance",
      id: "otpUi.AccessLegBody.summaryAndDistance",
      values: {
        distance: /*#__PURE__*/_react.default.createElement(_defaultDistance.default, {
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
    }) : isTransferLeg ? /*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage, {
      defaultMessage: "Transfer, wait {duration}",
      description: "Summarizes a transfer leg",
      id: "otpUi.AccessLegBody.transfer",
      values: {
        duration: intl.formatMessage({
          id: "otpUi.ItineraryBody.common.durationShort"
        }, {
          approximatePrefix: false,
          ...toHoursMinutesSeconds(durationSeconds)
        })
      }
    }) : /*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage, {
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