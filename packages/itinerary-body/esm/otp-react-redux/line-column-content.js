import coreUtils from "@opentripplanner/core-utils";
import colors from "@opentripplanner/building-blocks";
import LocationIcon from "@opentripplanner/location-icon";
import React from "react";
import styled, { css } from "styled-components";
import { Circle } from "@styled-icons/fa-solid/Circle";
import { InterlineDot } from "../styled";
var blue = colors.blue,
  grey = colors.grey,
  red = colors.red;

// These color variables correspond to those in the transitive-overlay package
// TODO: Move these into building-blocks
var MICROMOBILITY_ORANGE = "#f1b34e";
var BIKE_RED = red[600];
var WALK_BLUE = blue[400];
var DRIVE_GREY = grey[500];
var DEFAULT_TRANSIT_BLUE = blue[900];
var cssWalk = css(["background:radial-gradient( ellipse at center,", " 40%,transparent 10% );background-position:center -5px;background-repeat:repeat-y;background-size:12px 12px;left:6px;right:6px;"], WALK_BLUE);
var cssBicycle = css(["background:repeating-linear-gradient( 0deg,", ",", " 8px,white 8px,white 12.5px );left:7.5px;right:7.5px;"], BIKE_RED, BIKE_RED);
var cssCar = css(["background:repeating-linear-gradient( 0deg,grey,grey 8px,white 8px,white 12.5px );left:7.5px;right:7.5px;"]);
var cssMicromobility = css(["background:repeating-linear-gradient( 0deg,", ",", " 8px,white 8px,white 12.5px );left:7.5px;right:7.5px;"], MICROMOBILITY_ORANGE, MICROMOBILITY_ORANGE);
var cssTransit = css(["background-color:gray;left:5px;right:5px;"]);
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
var IconStacker = styled.span.withConfig({
  displayName: "line-column-content__IconStacker",
  componentId: "sc-1wcbb7o-0"
})(["position:absolute;width:100%;top:3px;z-index:20;"]);
var legLineBackgroundColor = function legLineBackgroundColor(_ref) {
  var leg = _ref.leg,
    routeColor = _ref.routeColor;
  var mode = leg.mode;
  return leg.transitLeg || coreUtils.itinerary.isTransit(mode) ? routeColor ? "#".concat(routeColor) : "".concat(DEFAULT_TRANSIT_BLUE) : undefined;
};

/**
 * Generates background-image CSS for "barber pole" effect
 * @param routeColor  the background color. Assumed to be hex.
 */
export var barberPole = function barberPole(routeColor) {
  var gap = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5;
  return "repeating-linear-gradient( \n  -45deg, \n  ".concat(routeColor, "30, \n  ").concat(routeColor, "30 ").concat(gap, "px, \n  ").concat(routeColor, " ").concat(gap, "px, \n  ").concat(routeColor, " ").concat(gap * 2, "px\n  );");
};
var LegLine = styled.div.withConfig({
  displayName: "line-column-content__LegLine",
  componentId: "sc-1wcbb7o-1"
})(["", " background-color:", ";background:", ";bottom:-11px;position:absolute;top:11px;z-index:10;"], function (props) {
  return getLegCSS(props.leg.mode);
}, function (props) {
  return legLineBackgroundColor(props);
}, function (props) {
  return coreUtils.itinerary.isFlex(props.leg) ? barberPole(legLineBackgroundColor(props)) : undefined;
});
var StackedCircle = styled(Circle).withConfig({
  displayName: "line-column-content__StackedCircle",
  componentId: "sc-1wcbb7o-2"
})(["left:0;line-height:inherit;position:absolute;text-align:center;width:100%;"]);
var StackedCircleInner = styled(StackedCircle).withConfig({
  displayName: "line-column-content__StackedCircleInner",
  componentId: "sc-1wcbb7o-3"
})(["top:3px;"]);
var StyledLocationIcon = styled(LocationIcon).withConfig({
  displayName: "line-column-content__StyledLocationIcon",
  componentId: "sc-1wcbb7o-4"
})(["left:0;position:absolute;text-align:center;width:100%;"]);
export default function LineColumnContent(_ref2) {
  var interline = _ref2.interline,
    isDestination = _ref2.isDestination,
    lastLeg = _ref2.lastLeg,
    leg = _ref2.leg,
    legIndex = _ref2.legIndex;
  var legBadge;
  if (interline) {
    // Interlined. Place a small dot at the junction of the two lines.
    legBadge = /*#__PURE__*/React.createElement(InterlineDot, null);
  } else if (isDestination) {
    // Destination
    legBadge = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(StackedCircleInner, {
      size: 14,
      color: "white"
    }), /*#__PURE__*/React.createElement(StyledLocationIcon, {
      size: 20,
      type: "to"
    }));
  } else if (legIndex === 0) {
    // Origin
    legBadge = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(StackedCircleInner, {
      size: 14,
      color: "white"
    }), /*#__PURE__*/React.createElement(StyledLocationIcon, {
      size: 20,
      type: "from"
    }));
  } else if ((leg.from.bikeShareId || leg.from.rentalVehicle) && leg.mode.startsWith("BICYCLE") || lastLeg.from.bikeShareId && leg.mode === "WALK") {
    // start or end of a bike rental leg (not including origin or
    // destination)
    legBadge = /*#__PURE__*/React.createElement(StackedCircle, {
      size: 17,
      color: BIKE_RED
    });
  } else if (leg.from.vertexType === "VEHICLERENTAL" || leg.from.vertexType === "BIKESHARE" || lastLeg.from.vertexType === "VEHICLERENTAL" && leg.mode === "WALK" || lastLeg.from.vertexType === "BIKESHARE" && leg.mode === "WALK") {
    // start or end of a vehicle rental leg (not including origin or
    // destination)
    legBadge = /*#__PURE__*/React.createElement(StackedCircle, {
      size: 17,
      color: MICROMOBILITY_ORANGE
    });
  } else if (leg.mode === "CAR" && lastLeg.mode === "WALK" || lastLeg.mode === "CAR" && leg.mode === "WALK") {
    // start or end of a car rental/TNC/P&R leg (not including origin or
    // destination)
    legBadge = /*#__PURE__*/React.createElement(StackedCircle, {
      size: 17,
      color: DRIVE_GREY
    });
  } else {
    legBadge = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(StackedCircle, {
      size: 20,
      color: "black"
    }), /*#__PURE__*/React.createElement(StackedCircleInner, {
      size: 14,
      color: "white"
    }));
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, !isDestination && /*#__PURE__*/React.createElement(LegLine, {
    className: "leg-line",
    leg: leg,
    routeColor: leg.routeColor
  }), /*#__PURE__*/React.createElement(IconStacker, null, legBadge));
}
//# sourceMappingURL=line-column-content.js.map