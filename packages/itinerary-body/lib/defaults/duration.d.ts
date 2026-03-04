import { ReactElement } from "react";
interface Props {
    seconds: number;
    showApproximatePrefix?: boolean;
}
/**
 * This is a clickable component that summarizes the leg (travel time, stops
 * passed). On click it will expand and show the list of intermediate stops.
 */
export default function Duration({ seconds, showApproximatePrefix }: Props): ReactElement;
export {};
//# sourceMappingURL=duration.d.ts.map