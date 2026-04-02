"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = AlertsBody;
var _dateFns = require("date-fns");
var _dateFnsTz = require("date-fns-tz");
var _coreUtils = _interopRequireDefault(require("@opentripplanner/core-utils"));
var _react = _interopRequireDefault(require("react"));
var _reactIntl = require("react-intl");
var _ExternalLinkAlt = require("@styled-icons/fa-solid/ExternalLinkAlt");
var S = _interopRequireWildcard(require("../styled"));
var _util = require("../util");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
const {
  getUserTimezone,
  getCurrentDate
} = _coreUtils.default.time;
/**
 * Displays today/yesterday/tomorrow in the correct language.
 */
function AlertDay({
  dayDiff
}) {
  switch (dayDiff) {
    case -1:
      return /*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage, {
        defaultMessage: _util.defaultMessages["otpUi.TransitLegBody.AlertsBody.yesterday"],
        description: "Yesterday",
        id: "otpUi.TransitLegBody.AlertsBody.yesterday"
      });
    case 0:
      return /*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage, {
        defaultMessage: _util.defaultMessages["otpUi.TransitLegBody.AlertsBody.today"],
        description: "Today",
        id: "otpUi.TransitLegBody.AlertsBody.today"
      });
    case 1:
      return /*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage, {
        defaultMessage: _util.defaultMessages["otpUi.TransitLegBody.AlertsBody.tomorrow"],
        description: "Tomorrow",
        id: "otpUi.TransitLegBody.AlertsBody.tomorrow"
      });
    default:
      // Not used.
      return null;
  }
}
function AlertsBody({
  agencyName,
  alerts,
  AlertIcon = S.DefaultAlertBodyIcon,
  showAlertEffectiveDateTimeText = true,
  timeZone = getUserTimezone()
}) {
  if (typeof alerts !== "object") return null;
  return /*#__PURE__*/_react.default.createElement(S.TransitAlerts, {
    className: "alert-body"
  }, alerts.sort((a, b) => b.effectiveStartDate - a.effectiveStartDate).map(({
    alertDescriptionText: description,
    alertHeaderText: header,
    alertUrl,
    effectiveStartDate
  }, i) => {
    // If alert is effective as of +/- one day, use today, tomorrow, or
    // yesterday with time. Otherwise, use long date format.
    // The difference is expressed in calendar days based on the agency's time zone.
    // Note: Previously, we used moment.diff(..., "days"), which reports the number of whole 24-hour periods
    // between two timestamps/dates (not considering timezones or daylight time changes).
    const today = (0, _dateFnsTz.toDate)(getCurrentDate(timeZone));
    const compareDate = (0, _dateFnsTz.utcToZonedTime)(new Date(effectiveStartDate), timeZone);
    const dayDiff = (0, _dateFns.differenceInCalendarDays)(compareDate, today);
    return /*#__PURE__*/_react.default.createElement(S.TransitAlert, {
      key: i
    }, /*#__PURE__*/_react.default.createElement(S.TransitAlertIconContainer, null, /*#__PURE__*/_react.default.createElement(AlertIcon, null)), header && /*#__PURE__*/_react.default.createElement(S.TransitAlertHeader, null, header), /*#__PURE__*/_react.default.createElement(S.TransitAlertBody, null, description), /*#__PURE__*/_react.default.createElement(S.TransitAlertEffectiveDate, null, showAlertEffectiveDateTimeText && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, Math.abs(dayDiff) <= 1 ? /*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage, {
      defaultMessage: _util.defaultMessages["otpUi.TransitLegBody.AlertsBody.effectiveTimeAndDate"],
      description: "Text with the time and date an alert takes effect",
      id: "otpUi.TransitLegBody.AlertsBody.effectiveTimeAndDate",
      values: {
        dateTime: effectiveStartDate * 1000,
        day: /*#__PURE__*/_react.default.createElement(AlertDay, {
          dayDiff: dayDiff
        })
      }
    }) : /*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage, {
      defaultMessage: _util.defaultMessages["otpUi.TransitLegBody.AlertsBody.effectiveDate"],
      description: "Text with the date an alert takes effect",
      id: "otpUi.TransitLegBody.AlertsBody.effectiveDate",
      values: {
        dateTime: effectiveStartDate * 1000
      }
    })), (alertUrl === null || alertUrl === void 0 ? void 0 : alertUrl.trim()) && /*#__PURE__*/_react.default.createElement(S.TransitAlertExternalLink, {
      href: alertUrl,
      target: "_blank"
    }, /*#__PURE__*/_react.default.createElement(_ExternalLinkAlt.ExternalLinkAlt, {
      height: 10
    }), agencyName ? /*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage, {
      defaultMessage: _util.defaultMessages["otpUi.TransitLegBody.AlertsBody.alertLinkText"],
      description: "Describes how link directs to agency website",
      id: "otpUi.TransitLegBody.AlertsBody.alertLinkText",
      values: {
        agency: agencyName
      }
    }) : /*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage, {
      defaultMessage: _util.defaultMessages["otpUi.TransitLegBody.AlertsBody.noAgencyAlertLinkText"],
      description: "Describes how link directs to agency website, but does not name agency",
      id: "otpUi.TransitLegBody.AlertsBody.noAgencyAlertLinkText"
    }), /*#__PURE__*/_react.default.createElement(S.InvisibleAdditionalDetails, null, " ", /*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage, {
      id: "otpUi.TransitLegBody.AlertsBody.linkOpensNewWindow"
    })))));
  }));
}
//# sourceMappingURL=alerts-body.js.map