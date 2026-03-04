import { Alert } from "@opentripplanner/types";
import { FunctionComponent, ReactElement } from "react";
interface Props {
    agencyName?: string;
    alerts: Alert[];
    AlertIcon?: FunctionComponent;
    showAlertEffectiveDateTimeText?: boolean;
    timeZone?: string;
}
export default function AlertsBody({ agencyName, alerts, AlertIcon, showAlertEffectiveDateTimeText, timeZone }: Props): ReactElement;
export {};
//# sourceMappingURL=alerts-body.d.ts.map