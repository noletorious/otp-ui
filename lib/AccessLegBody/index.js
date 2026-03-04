"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "AccessLegSteps", {
  enumerable: true,
  get: function () {
    return _accessLegSteps.default;
  }
});
Object.defineProperty(exports, "AccessLegSummary", {
  enumerable: true,
  get: function () {
    return _accessLegSummary.default;
  }
});
Object.defineProperty(exports, "LegDiagramPreview", {
  enumerable: true,
  get: function () {
    return _legDiagramPreview.default;
  }
});
Object.defineProperty(exports, "RentedVehicleSubheader", {
  enumerable: true,
  get: function () {
    return _rentedVehicleSubheader.default;
  }
});
exports.Styled = void 0;
Object.defineProperty(exports, "TNCLeg", {
  enumerable: true,
  get: function () {
    return _tncLeg.default;
  }
});
exports.default = void 0;
var _coreUtils = _interopRequireDefault(require("@opentripplanner/core-utils"));
var _react = _interopRequireWildcard(require("react"));
var _reactAnimateHeight = _interopRequireDefault(require("react-animate-height"));
var _reactIntl = require("react-intl");
var _defaults = require("../defaults");
var S = _interopRequireWildcard(require("../styled"));
exports.Styled = S;
var _accessLegSteps = _interopRequireDefault(require("./access-leg-steps"));
var _accessLegSummary = _interopRequireDefault(require("./access-leg-summary"));
var _legDiagramPreview = _interopRequireDefault(require("./leg-diagram-preview"));
var _mapillaryButton = _interopRequireDefault(require("./mapillary-button"));
var _rentedVehicleSubheader = _interopRequireDefault(require("./rented-vehicle-subheader"));
var _tncLeg = _interopRequireDefault(require("./tnc-leg"));
var _util = require("../util");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
const {
  ensureAtLeastOneMinute
} = _coreUtils.default.time;
const {
  isTransit
} = _coreUtils.default.itinerary;
/**
 * Component for access (e.g. walk/bike/etc.) leg in narrative itinerary. This
 * particular component is used in the line-itin (i.e., trimet-mod-otp) version
 * of the narrative itinerary.
 */
class AccessLegBody extends _react.Component {
  constructor(props) {
    super(props);
    this.onStepsHeaderClick = () => {
      const {
        expanded
      } = this.state;
      this.setState({
        expanded: !expanded
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
      expanded: false
    };
  }
  render() {
    var _config$itinerary;
    const {
      config,
      diagramVisible,
      followsTransit,
      leg,
      LegIcon,
      mapillaryCallback,
      mapillaryKey,
      setLegDiagram,
      showApproximateTravelTime,
      showElevationProfile,
      showLegIcon,
      TransitLegSubheader
    } = this.props;
    const {
      expanded
    } = this.state;
    const hideDrivingDirections = (config === null || config === void 0 || (_config$itinerary = config.itinerary) === null || _config$itinerary === void 0 ? void 0 : _config$itinerary.hideDrivingDirections) && leg.mode === "CAR";
    const durationSeconds = ensureAtLeastOneMinute(leg.duration);
    if (leg.mode === "CAR" && leg.rideHailingEstimate) {
      return /*#__PURE__*/_react.default.createElement(_tncLeg.default, {
        config: config,
        followsTransit: followsTransit,
        leg: leg,
        LegIcon: LegIcon,
        onSummaryClick: this.onSummaryClick,
        showLegIcon: showLegIcon
      });
    }
    const mapillary = /*#__PURE__*/_react.default.createElement(_mapillaryButton.default, {
      clickCallback: mapillaryCallback,
      coords: leg.from,
      mapillaryKey: mapillaryKey
    });
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, leg && (leg.rentedVehicle || leg.rentedBike || leg.rentedCar) && /*#__PURE__*/_react.default.createElement(_rentedVehicleSubheader.default, {
      config: config,
      leg: leg
    }), TransitLegSubheader && /*#__PURE__*/_react.default.createElement(TransitLegSubheader, {
      leg: leg
    }), /*#__PURE__*/_react.default.createElement(S.LegBody, null, /*#__PURE__*/_react.default.createElement(_accessLegSummary.default, {
      config: config,
      leg: leg,
      LegIcon: LegIcon,
      onSummaryClick: this.onSummaryClick,
      showLegIcon: showLegIcon
    }), leg.distance !== 0 && /*#__PURE__*/_react.default.createElement(S.LegDetails, null, hideDrivingDirections ? /*#__PURE__*/_react.default.createElement(S.StepsHeaderAndMapLink, null, /*#__PURE__*/_react.default.createElement(S.StepsHeaderSpan, null, /*#__PURE__*/_react.default.createElement(_defaults.Duration, {
      seconds: durationSeconds
    })), mapillary) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(S.StepsHeaderAndMapLink, null, /*#__PURE__*/_react.default.createElement(S.StepsHeaderButton, {
      "aria-expanded": expanded,
      onClick: this.onStepsHeaderClick
    }, /*#__PURE__*/_react.default.createElement(_defaults.Duration, {
      seconds: durationSeconds,
      showApproximatePrefix: showApproximateTravelTime && !isTransit(leg.mode)
    }), leg.steps && leg.steps.length > 0 && /*#__PURE__*/_react.default.createElement(S.CaretToggle, {
      expanded: expanded
    }), /*#__PURE__*/_react.default.createElement(S.InvisibleAdditionalDetails, null, /*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage, {
      defaultMessage: _util.defaultMessages["otpUi.TransitLegBody.expandDetails"],
      description: "Screen reader text added to expand steps",
      id: "otpUi.TransitLegBody.expandDetails"
    }))), mapillary), /*#__PURE__*/_react.default.createElement(_reactAnimateHeight.default, {
      duration: 500,
      height: expanded ? "auto" : 0,
      style: {
        gridColumn: "1 / span 2"
      }
    }, /*#__PURE__*/_react.default.createElement(_accessLegSteps.default, {
      mapillaryCallback: mapillaryCallback,
      mapillaryKey: mapillaryKey,
      steps: leg.steps,
      units: config.units
    }))), /*#__PURE__*/_react.default.createElement(_legDiagramPreview.default, {
      diagramVisible: diagramVisible,
      leg: leg,
      setLegDiagram: setLegDiagram,
      showElevationProfile: showElevationProfile
    }))));
  }
}
var _default = exports.default = AccessLegBody;
//# sourceMappingURL=index.js.map