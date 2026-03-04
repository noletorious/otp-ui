import styled from "styled-components";
import colors from "@opentripplanner/building-blocks";
import ItineraryBody from "../ItineraryBody";
import * as ItineraryBodyClasses from "../styled";
var blue = colors.blue,
  grey = colors.grey;
var StyledItineraryBody = styled(ItineraryBody).withConfig({
  displayName: "itinerary-body__StyledItineraryBody",
  componentId: "sc-1aqc6e3-0"
})(["font-size:16px;*:not(.fa){box-sizing:border-box;font-family:Hind,sans-serif;}", "{background-color:", ";border-color:white;border-image:initial;border-radius:12px;border-style:solid;border-width:1px;box-shadow:rgb(0,0,0) 0px 0px 0.25em;color:white;display:inline-block;font-size:14px;font-weight:500;height:24px;line-height:1.5;margin-right:8px;min-width:24px;padding:2px 3px;text-align:center;}", "{grid-area:line;display:table-cell;max-width:20px;width:20px;padding:0;position:relative;}", "{grid-area:title;color:#000;font-size:18px;font-weight:500;line-height:20px;}", "{height:inherit;white-space:normal;}", "{width:100%;}", "{margin-left:-23px;}", "{grid-area:time;color:", ";display:table-cell;font-size:14px;padding-right:4px;padding-top:2px;text-align:right;vertical-align:top;width:60px;}"], ItineraryBodyClasses.LegDescriptionRouteShortName, blue[700], ItineraryBodyClasses.LineColumn, ItineraryBodyClasses.PlaceHeader, ItineraryBodyClasses.PlaceName, ItineraryBodyClasses.PlaceRowWrapper, ItineraryBodyClasses.StopMarker, ItineraryBodyClasses.TimeColumn, grey[700]);
export default StyledItineraryBody;
//# sourceMappingURL=itinerary-body.js.map