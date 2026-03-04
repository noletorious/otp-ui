import { Step, UnitSystem } from "@opentripplanner/types";
import { HTMLAttributes, ReactElement } from "react";
interface Props extends HTMLAttributes<HTMLSpanElement> {
    step: Step;
    units?: UnitSystem;
}
/**
 * Renders a step of an access leg.
 */
export default function AccessLegStep({ className, step, style, units }: Props): ReactElement;
export {};
//# sourceMappingURL=access-leg-step.d.ts.map