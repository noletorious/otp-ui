"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _icons = require("@opentripplanner/icons");
var _react = _interopRequireWildcard(require("react"));
var _actions = require("storybook/actions");
var _ = _interopRequireDefault(require(".."));
var _lineColumnContent = _interopRequireDefault(require("../defaults/line-column-content"));
var _placeName = _interopRequireDefault(require("../defaults/place-name"));
var _routeDescription = _interopRequireDefault(require("../defaults/route-description"));
var _routeDescriptionFooter = require("./route-description-footer");
var _transitLegSummary = _interopRequireDefault(require("../defaults/transit-leg-summary"));
var _demos = require("../demos");
var _itineraryBody = _interopRequireDefault(require("../otp-react-redux/itinerary-body"));
var _config = _interopRequireDefault(require("../__mocks__/config.json"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore FIXME: Create TypeScript types for the icons package.

class ItineraryBodyDefaultsWrapper extends _react.Component {
  constructor(props) {
    super(props);
    this.setLegDiagram = leg => {
      this.setState({
        diagramVisible: leg
      });
    };
    this.state = {
      diagramVisible: null
    };
  }
  render() {
    const {
      alwaysCollapseAlerts,
      defaultFareSelector,
      hideDrivingDirections = false,
      itinerary,
      LegIcon = _icons.TriMetLegIcon,
      LineColumnContent,
      metric,
      PlaceName,
      RouteDescription,
      RouteDescriptionFooter = undefined,
      showAgencyInfo,
      showAlertEffectiveDateTimeText = true,
      showApproximateAccessLegTravelTimes = false,
      showLegIcon,
      showMapButtonColumn = true,
      showViewTripButton,
      styledItinerary,
      TimeColumnContent,
      toRouteAbbreviation = r => {
        var _r$toString;
        return r === null || r === void 0 || (_r$toString = r.toString()) === null || _r$toString === void 0 ? void 0 : _r$toString.substr(0, 2);
      },
      TransitLegSubheader,
      TransitLegSummary,
      AlertToggleIcon,
      AlertBodyIcon
    } = this.props;
    const {
      diagramVisible
    } = this.state;
    let ItineraryBodyComponent;
    switch (styledItinerary) {
      case "pink-legs":
        ItineraryBodyComponent = _demos.StyledItineraryBody;
        break;
      case "otp-rr":
        ItineraryBodyComponent = _itineraryBody.default;
        break;
      default:
        ItineraryBodyComponent = _.default;
    }
    _config.default.itinerary = {
      hideDrivingDirections
    };
    _config.default.units = metric ? "metric" : undefined;
    return /*#__PURE__*/_react.default.createElement(ItineraryBodyComponent, {
      AlertBodyIcon: AlertBodyIcon,
      AlertToggleIcon: AlertToggleIcon,
      alwaysCollapseAlerts: alwaysCollapseAlerts,
      config: _config.default,
      defaultFareSelector: defaultFareSelector,
      diagramVisible: diagramVisible,
      frameLeg: (0, _actions.action)("frameLeg"),
      itinerary: itinerary,
      LegIcon: LegIcon,
      LineColumnContent: LineColumnContent || _lineColumnContent.default,
      mapillaryKey: "fake key, but ok because the api response is also fake",
      PlaceName: PlaceName || _placeName.default,
      RouteDescription: RouteDescription || _routeDescription.default,
      RouteDescriptionFooter: RouteDescriptionFooter || _routeDescriptionFooter.DefaultRouteDescriptionFooter,
      routingType: "ITINERARY",
      setActiveLeg: (0, _actions.action)("setActiveLeg"),
      setLegDiagram: this.setLegDiagram,
      setViewedTrip: (0, _actions.action)("setViewedTrip"),
      showAgencyInfo: showAgencyInfo,
      showAlertEffectiveDateTimeText: showAlertEffectiveDateTimeText,
      showApproximateAccessLegTravelTimes: showApproximateAccessLegTravelTimes,
      showElevationProfile: true,
      showLegIcon: showLegIcon,
      showMapButtonColumn: showMapButtonColumn,
      showViewTripButton: showViewTripButton,
      TimeColumnContent: TimeColumnContent,
      toRouteAbbreviation: toRouteAbbreviation,
      TransitLegSubheader: TransitLegSubheader,
      TransitLegSummary: TransitLegSummary || _transitLegSummary.default
    });
  }
}
exports.default = ItineraryBodyDefaultsWrapper;
//# sourceMappingURL=itinerary-body-defaults-wrapper.js.map