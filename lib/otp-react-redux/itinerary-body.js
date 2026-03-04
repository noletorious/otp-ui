"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _buildingBlocks = _interopRequireDefault(require("@opentripplanner/building-blocks"));
var _ItineraryBody = _interopRequireDefault(require("../ItineraryBody"));
var ItineraryBodyClasses = _interopRequireWildcard(require("../styled"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
const {
  blue,
  grey
} = _buildingBlocks.default;
const StyledItineraryBody = (0, _styledComponents.default)(_ItineraryBody.default).withConfig({
  displayName: "itinerary-body__StyledItineraryBody",
  componentId: "sc-1aqc6e3-0"
})(["font-size:16px;*:not(.fa){box-sizing:border-box;font-family:Hind,sans-serif;}", "{background-color:", ";border-color:white;border-image:initial;border-radius:12px;border-style:solid;border-width:1px;box-shadow:rgb(0,0,0) 0px 0px 0.25em;color:white;display:inline-block;font-size:14px;font-weight:500;height:24px;line-height:1.5;margin-right:8px;min-width:24px;padding:2px 3px;text-align:center;}", "{grid-area:line;display:table-cell;max-width:20px;width:20px;padding:0;position:relative;}", "{grid-area:title;color:#000;font-size:18px;font-weight:500;line-height:20px;}", "{height:inherit;white-space:normal;}", "{width:100%;}", "{margin-left:-23px;}", "{grid-area:time;color:", ";display:table-cell;font-size:14px;padding-right:4px;padding-top:2px;text-align:right;vertical-align:top;width:60px;}"], ItineraryBodyClasses.LegDescriptionRouteShortName, blue[700], ItineraryBodyClasses.LineColumn, ItineraryBodyClasses.PlaceHeader, ItineraryBodyClasses.PlaceName, ItineraryBodyClasses.PlaceRowWrapper, ItineraryBodyClasses.StopMarker, ItineraryBodyClasses.TimeColumn, grey[700]);
var _default = exports.default = StyledItineraryBody;
//# sourceMappingURL=itinerary-body.js.map