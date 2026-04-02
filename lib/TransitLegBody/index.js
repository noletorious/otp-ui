"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "AlertsBody", {
  enumerable: true,
  get: function () {
    return _alertsBody.default;
  }
});
Object.defineProperty(exports, "IntermediateStops", {
  enumerable: true,
  get: function () {
    return _intermediateStops.default;
  }
});
Object.defineProperty(exports, "ViewTripButton", {
  enumerable: true,
  get: function () {
    return _viewTripButton.default;
  }
});
exports.default = void 0;
var _coreUtils = _interopRequireDefault(require("@opentripplanner/core-utils"));
var _react = _interopRequireWildcard(require("react"));
var _reactAnimateHeight = _interopRequireDefault(require("react-animate-height"));
var _reactIntl = require("react-intl");
var _defaults = require("../defaults");
var S = _interopRequireWildcard(require("../styled"));
var _util = require("../util");
var _alertsBody = _interopRequireDefault(require("./alerts-body"));
var _intermediateStops = _interopRequireDefault(require("./intermediate-stops"));
var _viewTripButton = _interopRequireDefault(require("./view-trip-button"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
const maximumAlertCountToShowUncollapsed = 2;

/**
 * Helper function that assembles values for flex pickup/dropoff messages.
 */
function getFlexMessageValues(info) {
  var _info$latestBookingTi, _info$contactInfo, _info$contactInfo2;
  // There used to be a variable `hasLeadTime` here. This should be brought back
  // if the leadTime check is ever to be more than just checking the value of
  // daysPrior (which can be done within react-intl)
  // This will allow for displaying how many _hours_ before a trip it must be booked

  const leadDays = info === null || info === void 0 || (_info$latestBookingTi = info.latestBookingTime) === null || _info$latestBookingTi === void 0 ? void 0 : _info$latestBookingTi.daysPrior;
  const phoneNumber = info === null || info === void 0 || (_info$contactInfo = info.contactInfo) === null || _info$contactInfo === void 0 ? void 0 : _info$contactInfo.phoneNumber;
  const bookingUrl = info === null || info === void 0 || (_info$contactInfo2 = info.contactInfo) === null || _info$contactInfo2 === void 0 ? void 0 : _info$contactInfo2.bookingUrl;
  let action = /*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage, {
    defaultMessage: _util.defaultMessages["otpUi.ItineraryBody.flexCallAhead"],
    description: "For calling ahead.",
    id: "otpUi.ItineraryBody.flexCallAhead"
  });
  if (phoneNumber) {
    action = /*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage, {
      defaultMessage: _util.defaultMessages["otpUi.ItineraryBody.flexCallNumber"],
      description: "For calling a phone number.",
      id: "otpUi.ItineraryBody.flexCallNumber",
      values: {
        phoneNumber
      }
    });
  }
  if (bookingUrl) {
    action = /*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage, {
      defaultMessage: _util.defaultMessages["otpUi.ItineraryBody.flexBookingUrl"],
      description: "For booking via phone number.",
      id: "otpUi.ItineraryBody.flexBookingUrl",
      values: {
        bookingUrl,
        // eslint-disable-next-line react/display-name
        link: contents => /*#__PURE__*/_react.default.createElement("a", {
          href: bookingUrl
        }, contents)
      }
    });
  }
  return {
    action,
    advanceNotice: leadDays > 0 ? /*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage, {
      defaultMessage: _util.defaultMessages["otpUi.ItineraryBody.flexAdvanceNotice"],
      description: "Advance notice for flex service.",
      id: "otpUi.ItineraryBody.flexAdvanceNotice",
      values: {
        leadDays
      }
    }) : ""
  };
}
class TransitLegBody extends _react.Component {
  constructor(props) {
    super(props);
    this.onToggleStopsClick = () => {
      const {
        stopsExpanded
      } = this.state;
      this.setState({
        stopsExpanded: !stopsExpanded
      });
    };
    this.onToggleAlertsClick = () => {
      const {
        alertsExpanded
      } = this.state;
      this.setState({
        alertsExpanded: !alertsExpanded
      });
    };
    this.onSummaryClick = () => {
      const {
        leg,
        legIndex,
        setActiveLeg
      } = this.props;
      setActiveLeg(legIndex, leg);
    };
    this.state = {
      alertsExpanded: false,
      stopsExpanded: false
    };
  }
  render() {
    var _leg$alerts, _leg$from, _leg$from2, _leg$to, _leg$to2;
    const {
      AlertBodyIcon,
      AlertToggleIcon = S.DefaultAlertToggleIcon,
      alwaysCollapseAlerts,
      defaultFareSelector,
      intl,
      leg,
      legDestination,
      LegIcon,
      nextLegInterlines,
      RouteDescription,
      RouteDescriptionFooter,
      setViewedTrip,
      showAgencyInfo,
      showAlertEffectiveDateTimeText,
      showViewTripButton,
      timeZone,
      TransitLegSubheader,
      TransitLegSummary,
      transitOperator
    } = this.props;
    const {
      agencyBrandingUrl,
      agencyName,
      agencyUrl,
      alerts
    } = leg;
    const {
      alertsExpanded,
      stopsExpanded
    } = this.state;
    const isReservationRequired = _coreUtils.default.itinerary.isReservationRequired(leg);

    // If the config contains an operator name, prefer that one over the
    // one provided by OTP
    const transitOperatorName = (transitOperator === null || transitOperator === void 0 ? void 0 : transitOperator.name) || agencyName;

    // If the config contains an operator with a logo URL, prefer that over the
    // one provided by OTP (which is derived from agency.txt#agency_branding_url)
    const logoUrl = transitOperator && transitOperator.logo ? transitOperator.logo : agencyBrandingUrl;
    const shouldCollapseDueToAlertCount = ((_leg$alerts = leg.alerts) === null || _leg$alerts === void 0 ? void 0 : _leg$alerts.length) > maximumAlertCountToShowUncollapsed;
    // The alerts expansion triangle is shown when `!shouldOnlyShowAlertsExpanded`.
    // `!leg.alerts` is needed here so the triangle isn't shown when there are 0 alerts.
    const shouldOnlyShowAlertsExpanded = !(shouldCollapseDueToAlertCount || alwaysCollapseAlerts) || !leg.alerts;
    const expandAlerts = alertsExpanded || shouldOnlyShowAlertsExpanded;
    const legCost = defaultFareSelector && _coreUtils.default.itinerary.getLegCost(leg, defaultFareSelector.mediumId, defaultFareSelector.riderCategoryId);
    const alertLabelContents = /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(AlertToggleIcon, null), " ", /*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage, {
      defaultMessage: _util.defaultMessages["otpUi.TransitLegBody.alertsHeader"],
      description: "Number of alerts header",
      id: "otpUi.TransitLegBody.alertsHeader",
      values: {
        alertCount: alerts === null || alerts === void 0 ? void 0 : alerts.length
      }
    }));
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, TransitLegSubheader && /*#__PURE__*/_react.default.createElement(TransitLegSubheader, {
      leg: leg
    }), /*#__PURE__*/_react.default.createElement(S.LegBody, null, /*#__PURE__*/_react.default.createElement(S.LegClickable, null, /*#__PURE__*/_react.default.createElement(S.LegDescription, null, /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement(S.InvisibleAdditionalDetails, null, " - ", /*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage, {
      defaultMessage: _util.defaultMessages["otpUi.TransitLegBody.ride"],
      description: "Prompt to ride a transit vehicle.",
      id: "otpUi.TransitLegBody.ride"
    })), /*#__PURE__*/_react.default.createElement(RouteDescription, {
      leg: leg,
      LegIcon: LegIcon,
      transitOperator: transitOperator
    }), /*#__PURE__*/_react.default.createElement(S.InvisibleAdditionalDetails, null, " - ", nextLegInterlines ? legDestination : /*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage, {
      defaultMessage: _util.defaultMessages["otpUi.TransitLegBody.disembarkAt"],
      description: "Prompt to exit a transit vehicle.",
      id: "otpUi.TransitLegBody.disembarkAt",
      values: {
        legDestination
      }
    }))), /*#__PURE__*/_react.default.createElement(S.LegClickableButton, {
      className: "transit-leg-button",
      onClick: this.onSummaryClick
    }, /*#__PURE__*/_react.default.createElement(S.InvisibleAdditionalDetails, null, /*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage, {
      defaultMessage: _util.defaultMessages["otpUi.TransitLegBody.zoomToLeg"],
      description: "Identifies behavior of button",
      id: "otpUi.TransitLegBody.zoomToLeg"
    }))))), RouteDescriptionFooter && /*#__PURE__*/_react.default.createElement(RouteDescriptionFooter, {
      leg: leg
    }), /*#__PURE__*/_react.default.createElement("div", {
      className: "transit-leg-details-wrapper"
      // Creates a group of leg details for screenreaders after the initial leg description.
      ,
      "aria-label": intl.formatMessage({
        defaultMessage: _util.defaultMessages["otpUi.TransitLegBody.legDetails"],
        description: "Identifies this section as trip leg details",
        id: "otpUi.TransitLegBody.legDetails"
      }),
      role: "group"
    }, showAgencyInfo && /*#__PURE__*/_react.default.createElement(S.AgencyInfo, {
      className: "agency-info"
    }, /*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage, {
      defaultMessage: _util.defaultMessages["otpUi.TransitLegBody.operatedBy"],
      description: "Tells which agency operates the service",
      id: "otpUi.TransitLegBody.operatedBy",
      values: {
        agencyLink: /*#__PURE__*/_react.default.createElement("a", {
          "aria-label": intl.formatMessage({
            id: "otpUi.TransitLegBody.agencyExternalLink"
          }, {
            agencyName
          }),
          href: agencyUrl || "#",
          rel: "noopener noreferrer",
          target: "_blank"
        }, transitOperatorName, logoUrl && /*#__PURE__*/_react.default.createElement("img", {
          alt: "",
          src: logoUrl,
          height: 25
        }))
      }
    })), isReservationRequired && leg.pickupBookingInfo && /*#__PURE__*/_react.default.createElement(S.CallAheadWarning, null, /*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage, {
      defaultMessage: _util.defaultMessages["otpUi.ItineraryBody.flexPickupMessage"],
      description: "Instructions for booking and boarding the flex (on-demand) transit service.",
      id: "otpUi.ItineraryBody.flexPickupMessage",
      values: getFlexMessageValues(leg.pickupBookingInfo)
    })), (alerts === null || alerts === void 0 ? void 0 : alerts.length) > 0 && (shouldOnlyShowAlertsExpanded ? /*#__PURE__*/_react.default.createElement(S.TransitAlertDiv, {
      className: "alert-toggle"
    }, alertLabelContents) : /*#__PURE__*/_react.default.createElement(S.TransitAlertToggle, {
      "aria-expanded": expandAlerts,
      className: "alert-toggle",
      onClick: this.onToggleAlertsClick
    }, alertLabelContents, /*#__PURE__*/_react.default.createElement(S.CaretToggle, {
      expanded: alertsExpanded
    }), /*#__PURE__*/_react.default.createElement(S.InvisibleAdditionalDetails, null, /*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage, {
      defaultMessage: _util.defaultMessages["otpUi.TransitLegBody.expandDetails"],
      description: "Screen reader text added to expand steps",
      id: "otpUi.TransitLegBody.expandDetails"
    })))), /*#__PURE__*/_react.default.createElement(_reactAnimateHeight.default, {
      duration: 500,
      height: expandAlerts ? "auto" : 0
    }, /*#__PURE__*/_react.default.createElement(_alertsBody.default, {
      agencyName: agencyName,
      alerts: leg.alerts,
      AlertIcon: AlertBodyIcon,
      showAlertEffectiveDateTimeText: showAlertEffectiveDateTimeText,
      timeZone: timeZone
    })), leg.intermediateStops && leg.intermediateStops.length > 0 && /*#__PURE__*/_react.default.createElement(S.TransitLegDetails, {
      className: "transit-leg-details"
    }, /*#__PURE__*/_react.default.createElement(S.TransitLegDetailsHeader, null, /*#__PURE__*/_react.default.createElement(TransitLegSummary, {
      leg: leg,
      onClick: this.onToggleStopsClick,
      stopsExpanded: stopsExpanded
    }), showViewTripButton && /*#__PURE__*/_react.default.createElement(_viewTripButton.default, {
      fromIndex: (_leg$from = leg.from) === null || _leg$from === void 0 ? void 0 : _leg$from.stopIndex,
      fromStopId: leg === null || leg === void 0 || (_leg$from2 = leg.from) === null || _leg$from2 === void 0 ? void 0 : _leg$from2.stopId,
      setViewedTrip: setViewedTrip,
      toIndex: (_leg$to = leg.to) === null || _leg$to === void 0 ? void 0 : _leg$to.stopIndex,
      toStopId: leg === null || leg === void 0 || (_leg$to2 = leg.to) === null || _leg$to2 === void 0 ? void 0 : _leg$to2.stopId,
      tripId: leg.tripId
    })), /*#__PURE__*/_react.default.createElement(_reactAnimateHeight.default, {
      duration: 500,
      height: stopsExpanded ? "auto" : 0
    }, /*#__PURE__*/_react.default.createElement(S.TransitLegExpandedBody, null, /*#__PURE__*/_react.default.createElement(_intermediateStops.default, {
      stops: leg.intermediateStops
    }), (legCost === null || legCost === void 0 ? void 0 : legCost.price) && /*#__PURE__*/_react.default.createElement(S.TransitLegFare, null, /*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage, {
      defaultMessage: _util.defaultMessages["otpUi.TransitLegBody.fare"],
      description: "Describes the fare for a leg",
      id: "otpUi.TransitLegBody.fare",
      values: {
        fare: /*#__PURE__*/_react.default.createElement(_reactIntl.FormattedNumber, {
          currency: legCost.price.currency.code,
          currencyDisplay: "narrowSymbol"
          // This isn't a "real" style prop
          // eslint-disable-next-line react/style-prop-object
          ,
          style: "currency",
          value: legCost.price.amount
        })
      }
    })))), leg.averageWait && /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage, {
      defaultMessage: _util.defaultMessages["otpUi.TransitLegBody.typicalWait"],
      description: "Describes the typical wait for a transit leg",
      id: "otpUi.TransitLegBody.typicalWait",
      values: {
        waitTime: /*#__PURE__*/_react.default.createElement(_defaults.Duration, {
          seconds: leg.averageWait
        })
      }
    }))))));
  }
}
var _default = exports.default = (0, _reactIntl.injectIntl)(TransitLegBody);
//# sourceMappingURL=index.js.map