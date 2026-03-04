"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "AccessibilityRating", {
  enumerable: true,
  get: function () {
    return _accessibilityRating.default;
  }
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _accessibilityRating = _interopRequireDefault(require("./accessibility-rating"));
var _placeRow = _interopRequireDefault(require("./place-row"));
var S = _interopRequireWildcard(require("../styled"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
function noop() {}
function defaultRouteAbbr(arg) {
  return arg.toString();
}
const ItineraryBody = ({
  accessibilityScoreGradationMap,
  AlertBodyIcon,
  AlertToggleIcon,
  alwaysCollapseAlerts = false,
  className,
  config,
  defaultFareSelector,
  diagramVisible,
  frameLeg = noop,
  itinerary,
  LegIcon,
  LineColumnContent,
  mapillaryCallback,
  mapillaryKey,
  PlaceName,
  RouteDescription,
  RouteDescriptionFooter,
  routingType = "ITINERARY",
  setActiveLeg,
  setLegDiagram,
  setViewedTrip,
  showAgencyInfo,
  showAlertEffectiveDateTimeText,
  showApproximateAccessLegTravelTimes,
  showElevationProfile,
  showLegIcon,
  showMapButtonColumn = true,
  showViewTripButton,
  TimeColumnContent,
  toRouteAbbreviation = defaultRouteAbbr,
  TransitLegSubheader,
  TransitLegSummary
}) => {
  /*
    TODO: replace component should update logic? companies is simply used to
    trigger a rerender of this component itinerary is also another criteria
    that is used to trigger a rerender but has more reuse than companies here
  */
  const rows = [];
  let followsTransit = false;
  let lastLeg;
  let nextLeg;
  itinerary.legs.forEach((leg, i) => {
    const isLastLeg = i === itinerary.legs.length - 1;
    nextLeg = isLastLeg ? undefined : itinerary.legs[i + 1];
    function createPlaceRow(isDestination) {
      // Create a row containing this leg's start place and leg traversal details
      rows.push(/*#__PURE__*/_react.default.createElement(_placeRow.default, {
        accessibilityScoreGradationMap: accessibilityScoreGradationMap,
        AlertToggleIcon: AlertToggleIcon,
        AlertBodyIcon: AlertBodyIcon,
        alwaysCollapseAlerts: alwaysCollapseAlerts
        // eslint-disable-next-line react/no-array-index-key
        ,
        key: i + (isDestination ? 1 : 0),
        config: config,
        defaultFareSelector: defaultFareSelector,
        diagramVisible: diagramVisible,
        followsTransit: followsTransit,
        frameLeg: frameLeg,
        isDestination: isDestination,
        lastLeg: lastLeg,
        leg: leg,
        LegIcon: LegIcon,
        legIndex: i,
        LineColumnContent: LineColumnContent,
        mapillaryCallback: mapillaryCallback,
        mapillaryKey: mapillaryKey,
        nextLeg: nextLeg,
        PlaceName: PlaceName,
        RouteDescription: RouteDescription,
        RouteDescriptionFooter: RouteDescriptionFooter,
        routingType: routingType,
        setActiveLeg: setActiveLeg,
        setLegDiagram: setLegDiagram,
        setViewedTrip: setViewedTrip,
        showApproximateAccessLegTravelTimes: showApproximateAccessLegTravelTimes,
        showAgencyInfo: showAgencyInfo,
        showAlertEffectiveDateTimeText: showAlertEffectiveDateTimeText,
        showElevationProfile: showElevationProfile,
        showLegIcon: showLegIcon,
        showMapButtonColumn: showMapButtonColumn,
        showViewTripButton: showViewTripButton,
        TimeColumnContent: TimeColumnContent,
        toRouteAbbreviation: toRouteAbbreviation,
        TransitLegSubheader: TransitLegSubheader,
        TransitLegSummary: TransitLegSummary
      }));
    }
    createPlaceRow(false);
    // If this is the last leg, create a special PlaceRow for the destination only.
    if (isLastLeg) {
      createPlaceRow(true);
    }
    if (leg.transitLeg) followsTransit = true;
    lastLeg = leg;
  });
  return /*#__PURE__*/_react.default.createElement(S.ItineraryBody, {
    className: className
  }, rows);
};
var _default = exports.default = ItineraryBody;
//# sourceMappingURL=index.js.map