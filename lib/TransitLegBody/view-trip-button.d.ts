import { Component, ReactElement } from "react";
import { SetViewedTripFunction, TripSection } from "../types";
type Props = TripSection & {
    setViewedTrip: SetViewedTripFunction;
};
declare class ViewTripButton extends Component<Props> {
    onClick: () => void;
    render(): ReactElement;
}
export default ViewTripButton;
//# sourceMappingURL=view-trip-button.d.ts.map