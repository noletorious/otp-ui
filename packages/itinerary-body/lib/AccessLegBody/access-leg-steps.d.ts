import { Step, UnitSystem } from "@opentripplanner/types";
import { ReactElement } from "react";
interface Props {
    mapillaryCallback?: (id: string) => void;
    mapillaryKey?: string;
    steps: Step[];
    units: UnitSystem;
}
/**
 * Renders a turn-by-turn step of an access leg.
 */
export default function AccessLegSteps({ mapillaryCallback, mapillaryKey, steps, units }: Props): ReactElement;
export {};
//# sourceMappingURL=access-leg-steps.d.ts.map