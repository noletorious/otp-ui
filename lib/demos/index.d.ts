import { Place } from "@opentripplanner/types";
import { ReactElement } from "react";
import { TimeColumnContentProps, TransitLegSubheaderProps, TransitLegSummaryProps } from "../types";
export declare function CustomPlaceName({ place }: {
    place: Place;
}): string;
/**
 * Custom component, for illustration purposes only, for displaying the time and other info
 * of the given leg in the time column of the ItineraryBody -> PlaceRow component.
 */
export declare function CustomTimeColumnContent({ isDestination, leg }: TimeColumnContentProps): ReactElement;
export declare function customToRouteAbbreviation(route: number | string): string;
export declare function CustomTransitLegSummary({ leg, onClick, stopsExpanded }: TransitLegSummaryProps): ReactElement;
export declare const StyledItineraryBody: import("styled-components").StyledComponent<({ accessibilityScoreGradationMap, AlertBodyIcon, AlertToggleIcon, alwaysCollapseAlerts, className, config, defaultFareSelector, diagramVisible, frameLeg, itinerary, LegIcon, LineColumnContent, mapillaryCallback, mapillaryKey, PlaceName, RouteDescription, RouteDescriptionFooter, routingType, setActiveLeg, setLegDiagram, setViewedTrip, showAgencyInfo, showAlertEffectiveDateTimeText, showApproximateAccessLegTravelTimes, showElevationProfile, showLegIcon, showMapButtonColumn, showViewTripButton, TimeColumnContent, toRouteAbbreviation, TransitLegSubheader, TransitLegSummary }: import("..").ItineraryBodyProps) => ReactElement, any, {}, never>;
export declare function WrappedOtpRRTransitLegSubheader({ leg }: TransitLegSubheaderProps): ReactElement;
//# sourceMappingURL=index.d.ts.map