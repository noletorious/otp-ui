import { Config, Leg } from "@opentripplanner/types";
import React, { HTMLAttributes, ReactElement } from "react";
import { IntlShape } from "react-intl";
interface Props extends HTMLAttributes<HTMLElement> {
    config: Config;
    leg: Leg;
    headingAs?: React.ElementType;
}
/**
 * Gets the summary mode in the ambient language.
 */
export declare function getSummaryMode(leg: Leg, intl: IntlShape): string;
/**
 * Renders leg description text, e.g. "Walk 0.5 mi to..."
 * while letting others style the mode and place text.
 */
export default function AccessLegDescription({ className, config, leg, style, headingAs }: Props): ReactElement;
export {};
//# sourceMappingURL=access-leg-description.d.ts.map