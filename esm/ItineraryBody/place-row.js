import _defineProperty from "@babel/runtime/helpers/defineProperty";
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import coreUtils from "@opentripplanner/core-utils";
import React from "react";
import { FormattedMessage, useIntl } from "react-intl";
import DefaultTimeColumnContent from "../defaults/time-column-content";
import AccessLegBody from "../AccessLegBody";
import * as S from "../styled";
import TransitLegBody from "../TransitLegBody";
import AccessibilityRating from "./accessibility-rating";
import { defaultMessages } from "../util";
function getLegPlaceName(leg, isDestination, PlaceName, config) {
  // NOTE: Previously there was a check for itineraries that changed vehicles
  // at a single stop, which would render the stop place the same as the
  // interline stop. However, this prevents the user from being able to click
  // on the stop viewer in this case, which they may want to do in order to
  // check the real-time arrival information for the next leg of their journey.
  var interline = !!(!isDestination && leg.interlineWithPreviousLeg);
  var place = isDestination ? _objectSpread({}, leg.to) : _objectSpread({}, leg.from);
  var placeName = /*#__PURE__*/React.createElement(PlaceName, {
    config: config,
    interline: interline,
    place: place
  });
  return {
    interline: interline,
    place: place,
    placeName: placeName
  };
}

/*
  TODO: Wondering if it's possible for us to destructure the time
  preferences from the config object and avoid making the props list so long
*/
export default function PlaceRow(_ref) {
  var accessibilityScoreGradationMap = _ref.accessibilityScoreGradationMap,
    AlertBodyIcon = _ref.AlertBodyIcon,
    AlertToggleIcon = _ref.AlertToggleIcon,
    alwaysCollapseAlerts = _ref.alwaysCollapseAlerts,
    config = _ref.config,
    defaultFareSelector = _ref.defaultFareSelector,
    diagramVisible = _ref.diagramVisible,
    followsTransit = _ref.followsTransit,
    frameLeg = _ref.frameLeg,
    isDestination = _ref.isDestination,
    lastLeg = _ref.lastLeg,
    leg = _ref.leg,
    LegIcon = _ref.LegIcon,
    legIndex = _ref.legIndex,
    LineColumnContent = _ref.LineColumnContent,
    mapillaryCallback = _ref.mapillaryCallback,
    mapillaryKey = _ref.mapillaryKey,
    nextLeg = _ref.nextLeg,
    PlaceName = _ref.PlaceName,
    RouteDescription = _ref.RouteDescription,
    RouteDescriptionFooter = _ref.RouteDescriptionFooter,
    setActiveLeg = _ref.setActiveLeg,
    setLegDiagram = _ref.setLegDiagram,
    setViewedTrip = _ref.setViewedTrip,
    showAgencyInfo = _ref.showAgencyInfo,
    showAlertEffectiveDateTimeText = _ref.showAlertEffectiveDateTimeText,
    showApproximateAccessLegTravelTimes = _ref.showApproximateAccessLegTravelTimes,
    showElevationProfile = _ref.showElevationProfile,
    showLegIcon = _ref.showLegIcon,
    showMapButtonColumn = _ref.showMapButtonColumn,
    showViewTripButton = _ref.showViewTripButton,
    _ref$TimeColumnConten = _ref.TimeColumnContent,
    TimeColumnContent = _ref$TimeColumnConten === void 0 ? DefaultTimeColumnContent : _ref$TimeColumnConten,
    toRouteAbbreviation = _ref.toRouteAbbreviation,
    TransitLegSubheader = _ref.TransitLegSubheader,
    TransitLegSummary = _ref.TransitLegSummary;
  // NOTE: Previously there was a check for itineraries that changed vehicles
  // at a single stop, which would render the stop place the same as the
  // interline stop. However, this prevents the user from being able to click
  // on the stop viewer in this case, which they may want to do in order to
  // check the real-time arrival information for the next leg of their journey.
  var _getLegPlaceName = getLegPlaceName(leg, isDestination, PlaceName, config),
    interline = _getLegPlaceName.interline,
    place = _getLegPlaceName.place,
    placeName = _getLegPlaceName.placeName;
  var _ref2 = nextLeg ? getLegPlaceName(nextLeg, false, PlaceName, config) : {},
    _ref2$interline = _ref2.interline,
    nextLegInterlines = _ref2$interline === void 0 ? false : _ref2$interline,
    _ref2$placeName = _ref2.placeName,
    nextPlaceName = _ref2$placeName === void 0 ? undefined : _ref2$placeName;
  var legDestination = nextPlaceName || /*#__PURE__*/React.createElement(PlaceName, {
    config: config,
    place: leg.to
  });

  // OTP2 marks both bikes and scooters as BIKESHARE in the vertextype
  // To get the right label, we need to fix scooters to be "VEHICLERENTAL"
  place.vertexType = leg.mode === "SCOOTER" && !isDestination ? "VEHICLERENTAL" : place.vertexType;
  var intl = useIntl();
  var viewOnMapMessage = intl.formatMessage({
    defaultMessage: defaultMessages["otpUi.ItineraryBody.viewOnMap"],
    description: "Text describing the view-on-map button",
    id: "otpUi.ItineraryBody.viewOnMap"
  });
  return /*#__PURE__*/React.createElement(S.PlaceRowWrapper, {
    className: "place-row-wrapper ".concat(leg.transitLeg ? "transit" : "", " ").concat(interline ? "interline" : "", " ").concat(leg.rentedBike ? "rented-bike" : ""),
    key: legIndex || "destination-place"
  }, /*#__PURE__*/React.createElement(S.LineColumn, null, /*#__PURE__*/React.createElement(LineColumnContent, {
    interline: interline,
    isDestination: isDestination,
    lastLeg: lastLeg,
    leg: leg,
    LegIcon: LegIcon,
    legIndex: legIndex,
    toRouteAbbreviation: toRouteAbbreviation
  })), /*#__PURE__*/React.createElement(S.PlaceHeader, null, /*#__PURE__*/React.createElement(S.PlaceName, {
    "aria-hidden": true,
    className: "place-row-place-name"
  }, placeName)), /*#__PURE__*/React.createElement(S.TimeColumn, null, /*#__PURE__*/React.createElement(TimeColumnContent, {
    isDestination: isDestination,
    leg: leg
  }), !isDestination && leg.accessibilityScore !== null && leg.accessibilityScore > -1 &&
  /*#__PURE__*/
  // TODO: Reorder markup so accessibility info doesn't fall between time and destination.
  React.createElement(AccessibilityRating, {
    gradationMap: accessibilityScoreGradationMap,
    isLeg: true,
    score: leg.accessibilityScore
  })), /*#__PURE__*/React.createElement(S.InvisibleAdditionalDetails, null, interline ? placeName : !isDestination ? /*#__PURE__*/React.createElement(FormattedMessage, {
    description: "Add starting location for access legs",
    id: "otpUi.TransitLegBody.fromLocation",
    values: {
      location: placeName
    }
  }) : /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "otpUi.TransitLegBody.arriveAt",
    defaultMessage: defaultMessages["otpUi.TransitLegBody.arriveAt"],
    description: "Identifies end of the trip to screenreaders",
    values: {
      place: placeName
    }
  })), /*#__PURE__*/React.createElement(S.PlaceDetails, {
    className: "place-details ".concat(leg.transitLeg ? "transit" : "")
  }, !isDestination && (leg.transitLeg ?
  /*#__PURE__*/
  /* This is a transit leg */
  React.createElement(TransitLegBody, {
    AlertBodyIcon: AlertBodyIcon,
    AlertToggleIcon: AlertToggleIcon,
    alwaysCollapseAlerts: alwaysCollapseAlerts,
    defaultFareSelector: defaultFareSelector,
    leg: leg,
    legDestination: legDestination,
    LegIcon: LegIcon,
    legIndex: legIndex,
    nextLegInterlines: nextLegInterlines,
    RouteDescription: RouteDescription,
    RouteDescriptionFooter: RouteDescriptionFooter,
    setActiveLeg: setActiveLeg,
    setViewedTrip: setViewedTrip,
    showAgencyInfo: showAgencyInfo,
    showAlertEffectiveDateTimeText: showAlertEffectiveDateTimeText,
    showViewTripButton: showViewTripButton,
    timeZone: config.homeTimezone,
    TransitLegSubheader: TransitLegSubheader,
    TransitLegSummary: TransitLegSummary,
    transitOperator: coreUtils.route.getTransitOperatorFromLeg(leg, config.transitOperators)
  }) :
  /*#__PURE__*/
  /* This is an access (e.g. walk/bike/etc.) leg */
  React.createElement(AccessLegBody, {
    config: config,
    diagramVisible: diagramVisible,
    followsTransit: followsTransit,
    leg: leg,
    LegIcon: LegIcon,
    legIndex: legIndex,
    mapillaryCallback: mapillaryCallback,
    mapillaryKey: mapillaryKey,
    setActiveLeg: setActiveLeg,
    setLegDiagram: setLegDiagram,
    showApproximateTravelTime: showApproximateAccessLegTravelTimes,
    showElevationProfile: showElevationProfile,
    showLegIcon: showLegIcon,
    TransitLegSubheader: TransitLegSubheader
  }))), showMapButtonColumn && /*#__PURE__*/React.createElement(S.MapButtonColumn, {
    hideBorder: "true"
  }, /*#__PURE__*/React.createElement(S.MapButton, {
    "aria-label": viewOnMapMessage,
    onClick: function onClick() {
      return frameLeg({
        isDestination: isDestination,
        leg: leg,
        legIndex: legIndex,
        place: place
      });
    },
    title: viewOnMapMessage
  }, /*#__PURE__*/React.createElement(S.MapIcon, {
    title: viewOnMapMessage
  }))));
}
//# sourceMappingURL=place-row.js.map