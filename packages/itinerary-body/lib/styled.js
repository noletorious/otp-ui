"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ViewerButton = exports.TransparentButton = exports.TransitLegSummary = exports.TransitLegFare = exports.TransitLegExpandedBody = exports.TransitLegDetailsHeader = exports.TransitLegDetails = exports.TransitAlerts = exports.TransitAlertToggle = exports.TransitAlertIconContainer = exports.TransitAlertHeader = exports.TransitAlertExternalLink = exports.TransitAlertEffectiveDate = exports.TransitAlertDiv = exports.TransitAlertBody = exports.TransitAlert = exports.TimeColumn = exports.TNCTravelTime = exports.TNCCost = exports.StopRow = exports.StopName = exports.StopMarker = exports.StopIdSpan = exports.StepsHeaderSpan = exports.StepsHeaderButton = exports.StepsHeaderAndMapLink = exports.Steps = exports.StepStreetName = exports.StepRow = exports.StepLength = exports.StepIconContainer = exports.StepDescriptionContainer = exports.SROnly = exports.SRHidden = exports.RouteBadge = exports.PreviewDiagramTitle = exports.PreviewDiagramElevationLoss = exports.PreviewDiagramElevationGain = exports.PreviewDiagramElevationChange = exports.PreviewDiagram = exports.PreviewContainer = exports.PlaceSubheader = exports.PlaceRowWrapper = exports.PlaceName = exports.PlaceHeader = exports.PlaceDetails = exports.MapIcon = exports.MapButtonColumn = exports.MapButton = exports.LinkButton = exports.LineColumn = exports.LineBadgeContainer = exports.LightBorderDiv = exports.LegLine = exports.LegIconContainer = exports.LegIconAndRouteShortName = exports.LegDetails = exports.LegDescriptionRouteShortName = exports.LegDescriptionRouteLongName = exports.LegDescriptionPlace = exports.LegDescriptionMode = exports.LegDescriptionHeadsignPrefix = exports.LegDescriptionForTransit = exports.LegDescription = exports.LegClickableButton = exports.LegClickable = exports.LegBody = exports.ItineraryBody = exports.InvisibleAdditionalDetails = exports.IntermediateStops = exports.InterlineName = exports.InterlineDot = exports.InnerLine = exports.Destination = exports.DefaultAlertToggleIcon = exports.DefaultAlertBodyIcon = exports.CaretToggleBase = exports.CaretToggle = exports.CallAheadWarning = exports.BookTNCRideButtonContainer = exports.BookTNCRideButton = exports.BookLaterText = exports.BookLaterPointer = exports.BookLaterInnerContainer = exports.BookLaterContainer = exports.ArrivalTimeContainer = exports.AnchorButton = exports.AgencyInfo = exports.AccessBadge = void 0;
var _icons = require("@opentripplanner/icons");
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _CaretDown = require("@styled-icons/fa-solid/CaretDown");
var _CaretUp = require("@styled-icons/fa-solid/CaretUp");
var _ExclamationTriangle = require("@styled-icons/fa-solid/ExclamationTriangle");
var _buildingBlocks = _interopRequireDefault(require("@opentripplanner/building-blocks"));
var _util = require("./util");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
// stylelint-disable declaration-block-no-shorthand-property-overrides
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore FIXME: Create TypeScript types for the icons package.

const {
  red,
  blue,
  grey
} = _buildingBlocks.default;
const GREY_TEXT_COLOR = "#333";
const BOOK_LATER_YELLOW = "#fcf9d3";

/**
 * This component is needed to give the offset border look to stacked place rows
 * Since the value we have access to is "interlineWithPreviousLeg" then we
 * have to show/hide the top border of the div and apply a small offset
 */
const LightBorderDiv = exports.LightBorderDiv = _styledComponents.default.div.withConfig({
  displayName: "styled__LightBorderDiv",
  componentId: "sc-1q8npbl-0"
})(["border-top-style:solid;border-top-width:", ";border-top-color:", ";padding-top:", ";padding-bottom:", ";transform:", ";"], props => props.hideBorder === "true" ? "0" : "2px", props => props.theme.borderColor, props => props.hideBorder === "true" ? "0" : "10px", props => props.hideBorder === "true" ? "10px" : "0", props => props.hideBorder === "true" ? "" : "translateY(-12px)");
const TransparentButton = exports.TransparentButton = _styledComponents.default.button.withConfig({
  displayName: "styled__TransparentButton",
  componentId: "sc-1q8npbl-1"
})(["background:transparent;border:0;color:inherit;cursor:pointer;font-size:inherit;text-decoration:none;"]);
const AnchorButton = exports.AnchorButton = _styledComponents.default.a.withConfig({
  displayName: "styled__AnchorButton",
  componentId: "sc-1q8npbl-2"
})(["background-color:#fff;background-image:none;border-radius:4px;border:1px solid ", ";color:", ";cursor:pointer;display:inline-block;font-size:14px;font-weight:400;padding:4px 6px;text-align:center;text-decoration:none;touch-action:manipulation;user-select:none;white-space:nowrap;&:hover,&:active{color:", ";background-color:", ";border-color:", ";}&:active{background-image:none;outline:0;box-shadow:inset 0 3px 5px rgba(0,0,0,0.125);}&:focus,&:active:hover{color:", ";background-color:", ";border-color:", ";}"], grey[200], GREY_TEXT_COLOR, GREY_TEXT_COLOR, grey[100], grey[300], GREY_TEXT_COLOR, grey[100], grey[500]);
const LinkButton = exports.LinkButton = (0, _styledComponents.default)(TransparentButton).withConfig({
  displayName: "styled__LinkButton",
  componentId: "sc-1q8npbl-3"
})(["color:", ";margin-left:5px;&:hover{text-decoration:underline;}"], blue[900]);
const ViewerButton = exports.ViewerButton = (0, _styledComponents.default)(LinkButton).attrs(props => {
  var _props$showBeforeCont;
  return {
    showBeforeContent: (_props$showBeforeCont = props.showBeforeContent) !== null && _props$showBeforeCont !== void 0 ? _props$showBeforeCont : true
  };
}).withConfig({
  displayName: "styled__ViewerButton",
  componentId: "sc-1q8npbl-4"
})(["padding-left:0px;", ";"], props => props.showBeforeContent ? (0, _styledComponents.css)(["&:before{content:\"|\";color:black;margin-right:5px;}"]) : (0, _styledComponents.css)(["margin-left:0px;"]));

// ////////////////////////////////////////////////
// /////////////// App components /////////////////
// ////////////////////////////////////////////////

// TODO: Can we turn this into a more abstract element to inherit from for other badges?
const AccessBadge = exports.AccessBadge = _styledComponents.default.div.withConfig({
  displayName: "styled__AccessBadge",
  componentId: "sc-1q8npbl-5"
})(["color:black;background-color:", ";border:2px solid ", ";text-align:center;width:25px;height:25px;font-size:1.2em;border-radius:50%;display:flex;align-items:center;justify-content:center;padding-left:1px;"], props => (0, _util.toModeColor)(props.mode, props.routeColor), grey[300]);
const ArrivalTimeContainer = exports.ArrivalTimeContainer = _styledComponents.default.button.withConfig({
  displayName: "styled__ArrivalTimeContainer",
  componentId: "sc-1q8npbl-6"
})(["align-items:center;background:none;border:none;color:", ";cursor:pointer;display:flex;font-size:0.9em;font-family:inherit;margin:0;margin-top:5px;outline:inherit;padding:0;text-align:inherit;"], blue[700]);
const CallAheadWarning = exports.CallAheadWarning = _styledComponents.default.div.withConfig({
  displayName: "styled__CallAheadWarning",
  componentId: "sc-1q8npbl-7"
})(["color:", ";margin-top:5px;"], red[800]);
const BookLaterContainer = exports.BookLaterContainer = _styledComponents.default.div.withConfig({
  displayName: "styled__BookLaterContainer",
  componentId: "sc-1q8npbl-8"
})(["bottom:0;left:110px;position:absolute;right:0;top:0;"]);
const BookLaterInnerContainer = exports.BookLaterInnerContainer = _styledComponents.default.div.withConfig({
  displayName: "styled__BookLaterInnerContainer",
  componentId: "sc-1q8npbl-9"
})(["background-color:", ";display:table;height:100%;width:100%;"], BOOK_LATER_YELLOW);
const BookLaterPointer = exports.BookLaterPointer = _styledComponents.default.div.withConfig({
  displayName: "styled__BookLaterPointer",
  componentId: "sc-1q8npbl-10"
})(["border-bottom:16px solid transparent;border-right:16px solid ", ";border-top:16px solid transparent;height:0;left:94px;position:absolute;top:0;width:0;"], BOOK_LATER_YELLOW);
const BookLaterText = exports.BookLaterText = _styledComponents.default.div.withConfig({
  displayName: "styled__BookLaterText",
  componentId: "sc-1q8npbl-11"
})(["color:", ";display:table-cell;font-style:italic;line-height:0.95;padding:0px 2px;vertical-align:middle;"], GREY_TEXT_COLOR);
const BookTNCRideButton = exports.BookTNCRideButton = (0, _styledComponents.default)(AnchorButton).withConfig({
  displayName: "styled__BookTNCRideButton",
  componentId: "sc-1q8npbl-12"
})([""]);
const BookTNCRideButtonContainer = exports.BookTNCRideButtonContainer = _styledComponents.default.div.withConfig({
  displayName: "styled__BookTNCRideButtonContainer",
  componentId: "sc-1q8npbl-13"
})(["height:32px;margin-bottom:10px;margin-top:10px;position:relative;"]);
const TNCTravelTime = exports.TNCTravelTime = _styledComponents.default.div.withConfig({
  displayName: "styled__TNCTravelTime",
  componentId: "sc-1q8npbl-14"
})([""]);
const TNCCost = exports.TNCCost = _styledComponents.default.div.withConfig({
  displayName: "styled__TNCCost",
  componentId: "sc-1q8npbl-15"
})([""]);
const CaretToggleBase = ({
  className,
  expanded
}) => /*#__PURE__*/_react.default.createElement("span", {
  className: className
}, expanded ? /*#__PURE__*/_react.default.createElement(_CaretUp.CaretUp, {
  size: 15
}) : /*#__PURE__*/_react.default.createElement(_CaretDown.CaretDown, {
  size: 15
}));
exports.CaretToggleBase = CaretToggleBase;
const CaretToggle = exports.CaretToggle = (0, _styledComponents.default)(CaretToggleBase).withConfig({
  displayName: "styled__CaretToggle",
  componentId: "sc-1q8npbl-16"
})(["&::before{content:\"\";margin:0 0.125em;}"]);
const Destination = exports.Destination = _styledComponents.default.div.withConfig({
  displayName: "styled__Destination",
  componentId: "sc-1q8npbl-17"
})(["text-align:center;"]);
const InnerLine = exports.InnerLine = _styledComponents.default.div.withConfig({
  displayName: "styled__InnerLine",
  componentId: "sc-1q8npbl-18"
})(["border-left:", ";height:100%;width:0;position:absolute;left:50%;transform:translateX(-50%);"], props => (0, _util.toModeBorder)(props.mode, props.routeColor));
const InterlineDot = exports.InterlineDot = _styledComponents.default.div.withConfig({
  displayName: "styled__InterlineDot",
  componentId: "sc-1q8npbl-19"
})(["color:#fff;z-index:30;&::before{content:\"\u2022\";display:block;padding-top:0.5px;text-align:center;}"]);
const InterlineName = exports.InterlineName = _styledComponents.default.div.withConfig({
  displayName: "styled__InterlineName",
  componentId: "sc-1q8npbl-20"
})([""]);
const IntermediateStops = exports.IntermediateStops = _styledComponents.default.ol.withConfig({
  displayName: "styled__IntermediateStops",
  componentId: "sc-1q8npbl-21"
})(["display:block;font-size:13px;list-style:none;padding:0;"]);
const ItineraryBody = exports.ItineraryBody = _styledComponents.default.ol.withConfig({
  displayName: "styled__ItineraryBody",
  componentId: "sc-1q8npbl-22"
})(["list-style:none;padding:0;"]);
const LegBody = exports.LegBody = _styledComponents.default.div.withConfig({
  displayName: "styled__LegBody",
  componentId: "sc-1q8npbl-23"
})(["color:", ";font-size:13px;padding-bottom:12px;"], grey[700]);
const LegClickable = exports.LegClickable = _styledComponents.default.div.withConfig({
  displayName: "styled__LegClickable",
  componentId: "sc-1q8npbl-24"
})([""]);

/**
 * Transparent button, clickable by all, with an invisible text about zooming to a leg on the map.
 * The button sits on top of LegDescription, so that the button's text visually appears to be
 * that of LegDescription.
 */
const LegClickableButton = exports.LegClickableButton = (0, _styledComponents.default)(TransparentButton).withConfig({
  displayName: "styled__LegClickableButton",
  componentId: "sc-1q8npbl-25"
})(["bottom:0;cursor:pointer;left:0;position:absolute;right:0;top:0;width:100%;z-index:1;"]);

// Use <span> for correct semantics as it is the contents of a button or a link.
const LegDescription = exports.LegDescription = _styledComponents.default.span.withConfig({
  displayName: "styled__LegDescription",
  componentId: "sc-1q8npbl-26"
})(["align-items:center;display:inline-flex;line-height:16px;min-height:31px;position:relative;"]);

// additional description added to ClickableLeg for screenreaders
const InvisibleAdditionalDetails = exports.InvisibleAdditionalDetails = _styledComponents.default.span.attrs({
  className: "invisible-additional-details"
}).withConfig({
  displayName: "styled__InvisibleAdditionalDetails",
  componentId: "sc-1q8npbl-27"
})(["display:inline-block;grid-row-start:2;grid-column-start:1;height:0;overflow:hidden;width:0;"]);
const LegDescriptionHeadsignPrefix = exports.LegDescriptionHeadsignPrefix = _styledComponents.default.span.withConfig({
  displayName: "styled__LegDescriptionHeadsignPrefix",
  componentId: "sc-1q8npbl-28"
})(["font-weight:200;"]);

/**
 * Lets others apply styles to the mode text in
 * "Bicycle 0.5 miles to City Hall"
 */
const LegDescriptionMode = exports.LegDescriptionMode = _styledComponents.default.span.withConfig({
  displayName: "styled__LegDescriptionMode",
  componentId: "sc-1q8npbl-29"
})(["font-weight:inherit;"]);

/**
 * Lets others apply styles to the place text in
 * "Bicycle 0.5 miles to City Hall"
 */
const LegDescriptionPlace = exports.LegDescriptionPlace = _styledComponents.default.span.withConfig({
  displayName: "styled__LegDescriptionPlace",
  componentId: "sc-1q8npbl-30"
})(["font-weight:inherit;"]);
const LegDescriptionRouteLongName = exports.LegDescriptionRouteLongName = _styledComponents.default.span.withConfig({
  displayName: "styled__LegDescriptionRouteLongName",
  componentId: "sc-1q8npbl-31"
})(["font-size:13px;font-weight:500;"]);
const LegDescriptionRouteShortName = exports.LegDescriptionRouteShortName = _styledComponents.default.span.withConfig({
  displayName: "styled__LegDescriptionRouteShortName",
  componentId: "sc-1q8npbl-32"
})(["font-weight:800;margin-right:6px;"]);
const LegDescriptionForTransit = exports.LegDescriptionForTransit = (0, _styledComponents.default)(LegDescription).withConfig({
  displayName: "styled__LegDescriptionForTransit",
  componentId: "sc-1q8npbl-33"
})(["color:", ";margin-top:5px;"], grey[700]);
const LegIconContainer = exports.LegIconContainer = _styledComponents.default.span.withConfig({
  displayName: "styled__LegIconContainer",
  componentId: "sc-1q8npbl-34"
})(["img,svg{margin-right:6px;height:24px;width:24px;vertical-align:bottom;}"]);
const LegIconAndRouteShortName = exports.LegIconAndRouteShortName = _styledComponents.default.span.withConfig({
  displayName: "styled__LegIconAndRouteShortName",
  componentId: "sc-1q8npbl-35"
})(["flex-shrink:0;"]);
const LegLine = exports.LegLine = _styledComponents.default.div.withConfig({
  displayName: "styled__LegLine",
  componentId: "sc-1q8npbl-36"
})(["position:relative;left:50%;transform:translateX(-50%);height:100%;"]);
const LineBadgeContainer = exports.LineBadgeContainer = _styledComponents.default.div.withConfig({
  displayName: "styled__LineBadgeContainer",
  componentId: "sc-1q8npbl-37"
})(["width:30px;height:30px;border-radius:50%;position:absolute;left:50%;top:0;transform:translate(-51%,-10%);"]);
const LineColumn = exports.LineColumn = _styledComponents.default.div.withConfig({
  displayName: "styled__LineColumn",
  componentId: "sc-1q8npbl-38"
})(["grid-column-start:2;grid-row:span 2;padding-right:5px;"]);
const LegDetails = exports.LegDetails = _styledComponents.default.span.withConfig({
  displayName: "styled__LegDetails",
  componentId: "sc-1q8npbl-39"
})(["display:grid;grid-template-columns:130px auto;"]);
const PlaceRowWrapper = exports.PlaceRowWrapper = _styledComponents.default.li.withConfig({
  displayName: "styled__PlaceRowWrapper",
  componentId: "sc-1q8npbl-40"
})(["max-width:500px;display:grid;grid-template-areas:\"time line title\" \"time line instructions\";grid-template-columns:65px 30px auto;"]);
const PreviewContainer = exports.PreviewContainer = _styledComponents.default.div.withConfig({
  displayName: "styled__PreviewContainer",
  componentId: "sc-1q8npbl-41"
})(["background-color:", ";border-color:", ";border-radius:5px;border-style:solid;border-width:1px;display:inline-block;font-style:normal;grid-column:2;grid-row:1;margin:0 4px;position:relative;text-align:center;text-decoration:none;vertical-align:middle;width:75%;&:hover{border-color:", ";background-color:#f6f8fa;}"], props => props.active && grey[50], props => props.active ? blue[100] : "#fff", blue[100]);
const TimeColumn = exports.TimeColumn = _styledComponents.default.div.withConfig({
  displayName: "styled__TimeColumn",
  componentId: "sc-1q8npbl-42"
})(["grid-column-start:1;grid-row:1 / span 2;padding-right:5px;font-size:0.9em;"]);
const MapButton = exports.MapButton = (0, _styledComponents.default)(LinkButton).withConfig({
  displayName: "styled__MapButton",
  componentId: "sc-1q8npbl-43"
})(["padding:3px 10px 3px 10px;border:0;margin-top:-15px;width:35px;height:35px;&:hover{cursor:pointer;}"]);
const MapButtonColumn = exports.MapButtonColumn = (0, _styledComponents.default)(LightBorderDiv).withConfig({
  displayName: "styled__MapButtonColumn",
  componentId: "sc-1q8npbl-44"
})(["flex:0 0 25px;grid-column:-1;"]);
const MapIcon = exports.MapIcon = (0, _styledComponents.default)(_icons.Map).attrs(props => ({
  fill: props.theme.secondaryColor,
  width: 15,
  height: 15,
  role: "img"
})).withConfig({
  displayName: "styled__MapIcon",
  componentId: "sc-1q8npbl-45"
})([""]);
const PlaceDetails = exports.PlaceDetails = _styledComponents.default.div.withConfig({
  displayName: "styled__PlaceDetails",
  componentId: "sc-1q8npbl-46"
})(["grid-row-start:2;grid-column-start:3;grid-area:instructions;"]);
const PlaceHeader = exports.PlaceHeader = _styledComponents.default.div.withConfig({
  displayName: "styled__PlaceHeader",
  componentId: "sc-1q8npbl-47"
})(["display:flex;font-size:1.2em;grid-row-start:1;grid-column-start:3;"]);
const PlaceName = exports.PlaceName = _styledComponents.default.span.withConfig({
  displayName: "styled__PlaceName",
  componentId: "sc-1q8npbl-48"
})(["font-size:inherit;font-weight:bold;height:1.2em;margin:0;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;flex:1 1 auto;padding:3px 0 10px 0;"]);
const PlaceSubheader = exports.PlaceSubheader = _styledComponents.default.div.withConfig({
  displayName: "styled__PlaceSubheader",
  componentId: "sc-1q8npbl-49"
})(["color:", ";font-size:13px;font-weight:300;padding-top:1px;margin-bottom:10px;margin-top:-14px;"], grey[700]);
const PreviewDiagram = exports.PreviewDiagram = (0, _styledComponents.default)(TransparentButton).withConfig({
  displayName: "styled__PreviewDiagram",
  componentId: "sc-1q8npbl-50"
})(["padding:2px;width:100%;"]);
const PreviewDiagramElevationChange = exports.PreviewDiagramElevationChange = _styledComponents.default.span.withConfig({
  displayName: "styled__PreviewDiagramElevationChange",
  componentId: "sc-1q8npbl-51"
})(["font-size:xx-small;&::before{content:\"\";margin:0 0.125em;}"]);
const PreviewDiagramElevationGain = exports.PreviewDiagramElevationGain = (0, _styledComponents.default)(PreviewDiagramElevationChange).withConfig({
  displayName: "styled__PreviewDiagramElevationGain",
  componentId: "sc-1q8npbl-52"
})(["color:", ";"], red[700]);
const PreviewDiagramElevationLoss = exports.PreviewDiagramElevationLoss = (0, _styledComponents.default)(PreviewDiagramElevationChange).withConfig({
  displayName: "styled__PreviewDiagramElevationLoss",
  componentId: "sc-1q8npbl-53"
})(["color:green;"]);
const PreviewDiagramTitle = exports.PreviewDiagramTitle = _styledComponents.default.div.withConfig({
  displayName: "styled__PreviewDiagramTitle",
  componentId: "sc-1q8npbl-54"
})(["font-size:small;"]);
const RouteBadge = exports.RouteBadge = _styledComponents.default.div.withConfig({
  displayName: "styled__RouteBadge",
  componentId: "sc-1q8npbl-55"
})(["text-align:center;min-width:30px;min-height:30px;font-size:1.2em;background-color:", ";color:white;border-radius:50%;display:flex;align-items:center;justify-content:center;padding-left:1px;border:1px solid ", ";user-select:none;cursor:default;"], props => (0, _util.toSafeRouteColor)(props.routeColor) || props.theme.mainColor, props => props.theme.badgeBorderColor);
const SROnly = exports.SROnly = _styledComponents.default.span.withConfig({
  displayName: "styled__SROnly",
  componentId: "sc-1q8npbl-56"
})(["position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0;"]);
const SRHidden = exports.SRHidden = _styledComponents.default.span.attrs({
  "aria-hidden": true
}).withConfig({
  displayName: "styled__SRHidden",
  componentId: "sc-1q8npbl-57"
})([""]);
const Steps = exports.Steps = _styledComponents.default.ol.withConfig({
  displayName: "styled__Steps",
  componentId: "sc-1q8npbl-58"
})(["display:block;list-style:none;padding:0;"]);
const StepDescriptionContainer = exports.StepDescriptionContainer = _styledComponents.default.div.withConfig({
  displayName: "styled__StepDescriptionContainer",
  componentId: "sc-1q8npbl-59"
})(["margin-left:24px;line-height:1.25em;padding-top:1px;& > span{margin-right:1ch;}"]);
const StepsHeaderAndMapLink = exports.StepsHeaderAndMapLink = _styledComponents.default.span.withConfig({
  displayName: "styled__StepsHeaderAndMapLink",
  componentId: "sc-1q8npbl-60"
})(["display:inline-flex;align-self:center;margin-top:10px;a{display:flex;align-items:center;justify-content:center;}"]);
const stepsHeaderStyling = (0, _styledComponents.css)(["color:", ";font-size:13px;font-style:normal;padding:0;"], grey[700]);
const StepsHeaderButton = exports.StepsHeaderButton = (0, _styledComponents.default)(TransparentButton).withConfig({
  displayName: "styled__StepsHeaderButton",
  componentId: "sc-1q8npbl-61"
})(["", ""], stepsHeaderStyling);
const StepsHeaderSpan = exports.StepsHeaderSpan = _styledComponents.default.span.withConfig({
  displayName: "styled__StepsHeaderSpan",
  componentId: "sc-1q8npbl-62"
})(["", " margin-right:0.4em;"], stepsHeaderStyling);
const StepIconContainer = exports.StepIconContainer = _styledComponents.default.div.withConfig({
  displayName: "styled__StepIconContainer",
  componentId: "sc-1q8npbl-63"
})(["fill:", ";float:left;height:16px;width:16px;"], grey[700]);
const StepRow = exports.StepRow = _styledComponents.default.li.withConfig({
  displayName: "styled__StepRow",
  componentId: "sc-1q8npbl-64"
})(["font-size:13px;margin-top:8px;color:", ";font-style:normal;"], grey[700]);
const StepStreetName = exports.StepStreetName = _styledComponents.default.span.withConfig({
  displayName: "styled__StepStreetName",
  componentId: "sc-1q8npbl-65"
})(["font-weight:500;"]);
const StepLength = exports.StepLength = _styledComponents.default.span.withConfig({
  displayName: "styled__StepLength",
  componentId: "sc-1q8npbl-66"
})(["font-weight:200;opacity:0.8975;padding-left:1ch;"]);
const StopIdSpan = exports.StopIdSpan = _styledComponents.default.span.withConfig({
  displayName: "styled__StopIdSpan",
  componentId: "sc-1q8npbl-67"
})(["font-weight:200;font-size:0.9em;margin-left:10px;"]);
const StopMarker = exports.StopMarker = _styledComponents.default.div.withConfig({
  displayName: "styled__StopMarker",
  componentId: "sc-1q8npbl-68"
})(["float:left;margin-left:-36px;color:#fff;"]);
const StopName = exports.StopName = _styledComponents.default.div.withConfig({
  displayName: "styled__StopName",
  componentId: "sc-1q8npbl-69"
})(["color:", ";margin-top:3px;"], grey[700]);
const StopRow = exports.StopRow = _styledComponents.default.li.withConfig({
  displayName: "styled__StopRow",
  componentId: "sc-1q8npbl-70"
})(["z-index:30;position:relative;"]);
const TransitAlert = exports.TransitAlert = _styledComponents.default.li.withConfig({
  displayName: "styled__TransitAlert",
  componentId: "sc-1q8npbl-71"
})(["background-color:", ";border-radius:4px;color:#000;display:block;margin-top:5px;padding:8px;text-decoration:none;"], grey[50]);
const TransitAlertExternalLink = exports.TransitAlertExternalLink = _styledComponents.default.a.withConfig({
  displayName: "styled__TransitAlertExternalLink",
  componentId: "sc-1q8npbl-72"
})(["align-items:baseline;display:flex;gap:5px;margin-top:0.5em;text-decoration:none;&:hover{text-decoration:underline;}"]);
const TransitAlertBody = exports.TransitAlertBody = _styledComponents.default.div.withConfig({
  displayName: "styled__TransitAlertBody",
  componentId: "sc-1q8npbl-73"
})(["font-size:12px;margin-left:30px;white-space:pre-wrap;"]);
const TransitAlertEffectiveDate = exports.TransitAlertEffectiveDate = _styledComponents.default.div.withConfig({
  displayName: "styled__TransitAlertEffectiveDate",
  componentId: "sc-1q8npbl-74"
})(["margin-top:5px;margin-left:30px;font-size:12px;font-style:italic;"]);
const TransitAlertHeader = exports.TransitAlertHeader = _styledComponents.default.div.withConfig({
  displayName: "styled__TransitAlertHeader",
  componentId: "sc-1q8npbl-75"
})(["font-size:14px;margin-left:30px;font-weight:600;"]);
const TransitAlertIconContainer = exports.TransitAlertIconContainer = _styledComponents.default.div.withConfig({
  displayName: "styled__TransitAlertIconContainer",
  componentId: "sc-1q8npbl-76"
})(["float:left;font-size:18px;"]);
const TransitAlerts = exports.TransitAlerts = _styledComponents.default.ul.withConfig({
  displayName: "styled__TransitAlerts",
  componentId: "sc-1q8npbl-77"
})(["display:block;margin-top:3px;padding:0;"]);
const alertToggleStyling = (0, _styledComponents.css)(["color:", ";display:flex;font-weight:400;margin-top:8px;padding:0;svg{margin-right:0.5em;}"], red[800]);
const TransitAlertToggle = exports.TransitAlertToggle = (0, _styledComponents.default)(TransparentButton).withConfig({
  displayName: "styled__TransitAlertToggle",
  componentId: "sc-1q8npbl-78"
})(["cursor:\"cursor\";", ""], alertToggleStyling);
const TransitAlertDiv = exports.TransitAlertDiv = _styledComponents.default.div.withConfig({
  displayName: "styled__TransitAlertDiv",
  componentId: "sc-1q8npbl-79"
})(["", ""], alertToggleStyling);
const TransitLegDetails = exports.TransitLegDetails = _styledComponents.default.div.withConfig({
  displayName: "styled__TransitLegDetails",
  componentId: "sc-1q8npbl-80"
})(["margin-top:5px;"]);
const TransitLegDetailsHeader = exports.TransitLegDetailsHeader = _styledComponents.default.div.withConfig({
  displayName: "styled__TransitLegDetailsHeader",
  componentId: "sc-1q8npbl-81"
})(["color:", ";display:flex;"], grey[700]);
const TransitLegExpandedBody = exports.TransitLegExpandedBody = _styledComponents.default.div.withConfig({
  displayName: "styled__TransitLegExpandedBody",
  componentId: "sc-1q8npbl-82"
})(["font-size:14px;"]);
const TransitLegFare = exports.TransitLegFare = _styledComponents.default.div.withConfig({
  displayName: "styled__TransitLegFare",
  componentId: "sc-1q8npbl-83"
})([""]);
const TransitLegSummary = exports.TransitLegSummary = (0, _styledComponents.default)(TransparentButton).withConfig({
  displayName: "styled__TransitLegSummary",
  componentId: "sc-1q8npbl-84"
})(["padding:0;"]);
const DefaultAlertToggleIcon = exports.DefaultAlertToggleIcon = (0, _styledComponents.default)(_ExclamationTriangle.ExclamationTriangle).attrs({
  size: 15
}).withConfig({
  displayName: "styled__DefaultAlertToggleIcon",
  componentId: "sc-1q8npbl-85"
})([""]);
const DefaultAlertBodyIcon = exports.DefaultAlertBodyIcon = (0, _styledComponents.default)(_ExclamationTriangle.ExclamationTriangle).attrs({
  size: 18
}).withConfig({
  displayName: "styled__DefaultAlertBodyIcon",
  componentId: "sc-1q8npbl-86"
})([""]);
const AgencyInfo = exports.AgencyInfo = _styledComponents.default.div.withConfig({
  displayName: "styled__AgencyInfo",
  componentId: "sc-1q8npbl-87"
})(["margin-top:5px;a{color:", ";text-decoration:none;}a:hover{text-decoration:underline;}img{margin-left:5px;vertical-align:middle;}"], blue[700]);
//# sourceMappingURL=styled.js.map