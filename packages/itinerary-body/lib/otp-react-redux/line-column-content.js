"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.barberPole = void 0;
exports.default = LineColumnContent;
var _coreUtils = _interopRequireDefault(require("@opentripplanner/core-utils"));
var _buildingBlocks = _interopRequireDefault(require("@opentripplanner/building-blocks"));
var _locationIcon = _interopRequireDefault(require("@opentripplanner/location-icon"));
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _Circle = require("@styled-icons/fa-solid/Circle");
var _styled = require("../styled");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
const {
  blue,
  grey,
  red
} = _buildingBlocks.default;

// These color variables correspond to those in the transitive-overlay package
// TODO: Move these into building-blocks
const MICROMOBILITY_ORANGE = "#f1b34e";
const BIKE_RED = red[600];
const WALK_BLUE = blue[400];
const DRIVE_GREY = grey[500];
const DEFAULT_TRANSIT_BLUE = blue[900];
const cssWalk = (0, _styledComponents.css)(["background:radial-gradient( ellipse at center,", " 40%,transparent 10% );background-position:center -5px;background-repeat:repeat-y;background-size:12px 12px;left:6px;right:6px;"], WALK_BLUE);
const cssBicycle = (0, _styledComponents.css)(["background:repeating-linear-gradient( 0deg,", ",", " 8px,white 8px,white 12.5px );left:7.5px;right:7.5px;"], BIKE_RED, BIKE_RED);
const cssCar = (0, _styledComponents.css)(["background:repeating-linear-gradient( 0deg,grey,grey 8px,white 8px,white 12.5px );left:7.5px;right:7.5px;"]);
const cssMicromobility = (0, _styledComponents.css)(["background:repeating-linear-gradient( 0deg,", ",", " 8px,white 8px,white 12.5px );left:7.5px;right:7.5px;"], MICROMOBILITY_ORANGE, MICROMOBILITY_ORANGE);
const cssTransit = (0, _styledComponents.css)(["background-color:gray;left:5px;right:5px;"]);
function getLegCSS(mode) {
  switch (mode) {
    case "WALK":
      return cssWalk;
    case "BICYCLE":
    case "BICYCLE_RENT":
      return cssBicycle;
    case "CAR":
      return cssCar;
    case "MICROMOBILITY":
    case "MICROMOBILITY_RENT":
    case "SCOOTER":
      return cssMicromobility;
    default:
      return cssTransit;
  }
}
const IconStacker = _styledComponents.default.span.withConfig({
  displayName: "line-column-content__IconStacker",
  componentId: "sc-1wcbb7o-0"
})(["position:absolute;width:100%;top:3px;z-index:20;"]);
const legLineBackgroundColor = ({
  leg,
  routeColor
}) => {
  const {
    mode
  } = leg;
  return leg.transitLeg || _coreUtils.default.itinerary.isTransit(mode) ? routeColor ? `#${routeColor}` : `${DEFAULT_TRANSIT_BLUE}` : undefined;
};

/**
 * Generates background-image CSS for "barber pole" effect
 * @param routeColor  the background color. Assumed to be hex.
 */
const barberPole = (routeColor, gap = 5) => `repeating-linear-gradient( 
  -45deg, 
  ${routeColor}30, 
  ${routeColor}30 ${gap}px, 
  ${routeColor} ${gap}px, 
  ${routeColor} ${gap * 2}px
  );`;
exports.barberPole = barberPole;
const LegLine = _styledComponents.default.div.withConfig({
  displayName: "line-column-content__LegLine",
  componentId: "sc-1wcbb7o-1"
})(["", " background-color:", ";background:", ";bottom:-11px;position:absolute;top:11px;z-index:10;"], props => getLegCSS(props.leg.mode), props => legLineBackgroundColor(props), props => _coreUtils.default.itinerary.isFlex(props.leg) ? barberPole(legLineBackgroundColor(props)) : undefined);
const StackedCircle = (0, _styledComponents.default)(_Circle.Circle).withConfig({
  displayName: "line-column-content__StackedCircle",
  componentId: "sc-1wcbb7o-2"
})(["left:0;line-height:inherit;position:absolute;text-align:center;width:100%;"]);
const StackedCircleInner = (0, _styledComponents.default)(StackedCircle).withConfig({
  displayName: "line-column-content__StackedCircleInner",
  componentId: "sc-1wcbb7o-3"
})(["top:3px;"]);
const StyledLocationIcon = (0, _styledComponents.default)(_locationIcon.default).withConfig({
  displayName: "line-column-content__StyledLocationIcon",
  componentId: "sc-1wcbb7o-4"
})(["left:0;position:absolute;text-align:center;width:100%;"]);
function LineColumnContent({
  interline,
  isDestination,
  lastLeg,
  leg,
  legIndex
}) {
  let legBadge;
  if (interline) {
    // Interlined. Place a small dot at the junction of the two lines.
    legBadge = /*#__PURE__*/_react.default.createElement(_styled.InterlineDot, null);
  } else if (isDestination) {
    // Destination
    legBadge = /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(StackedCircleInner, {
      size: 14,
      color: "white"
    }), /*#__PURE__*/_react.default.createElement(StyledLocationIcon, {
      size: 20,
      type: "to"
    }));
  } else if (legIndex === 0) {
    // Origin
    legBadge = /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(StackedCircleInner, {
      size: 14,
      color: "white"
    }), /*#__PURE__*/_react.default.createElement(StyledLocationIcon, {
      size: 20,
      type: "from"
    }));
  } else if ((leg.from.bikeShareId || leg.from.rentalVehicle) && leg.mode.startsWith("BICYCLE") || lastLeg.from.bikeShareId && leg.mode === "WALK") {
    // start or end of a bike rental leg (not including origin or
    // destination)
    legBadge = /*#__PURE__*/_react.default.createElement(StackedCircle, {
      size: 17,
      color: BIKE_RED
    });
  } else if (leg.from.vertexType === "VEHICLERENTAL" || leg.from.vertexType === "BIKESHARE" || lastLeg.from.vertexType === "VEHICLERENTAL" && leg.mode === "WALK" || lastLeg.from.vertexType === "BIKESHARE" && leg.mode === "WALK") {
    // start or end of a vehicle rental leg (not including origin or
    // destination)
    legBadge = /*#__PURE__*/_react.default.createElement(StackedCircle, {
      size: 17,
      color: MICROMOBILITY_ORANGE
    });
  } else if (leg.mode === "CAR" && lastLeg.mode === "WALK" || lastLeg.mode === "CAR" && leg.mode === "WALK") {
    // start or end of a car rental/TNC/P&R leg (not including origin or
    // destination)
    legBadge = /*#__PURE__*/_react.default.createElement(StackedCircle, {
      size: 17,
      color: DRIVE_GREY
    });
  } else {
    legBadge = /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(StackedCircle, {
      size: 20,
      color: "black"
    }), /*#__PURE__*/_react.default.createElement(StackedCircleInner, {
      size: 14,
      color: "white"
    }));
  }
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !isDestination && /*#__PURE__*/_react.default.createElement(LegLine, {
    className: "leg-line",
    leg: leg,
    routeColor: leg.routeColor
  }), /*#__PURE__*/_react.default.createElement(IconStacker, null, legBadge));
}
//# sourceMappingURL=line-column-content.js.map