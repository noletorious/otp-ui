import { DistanceProps } from "@opentripplanner/humanize-distance";
import { ReactElement } from "react";
/**
 * Wrapper around Distance from humanize-distance with imperial defaults and long format when showing imperial units.
 * The default to imperial units is there so that existing implementations don't visually break.
 */
declare const DefaultDistance: ({ meters, units }: Omit<DistanceProps, "long">) => ReactElement;
export default DefaultDistance;
//# sourceMappingURL=default-distance.d.ts.map