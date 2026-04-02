import coreUtils from "@opentripplanner/core-utils";
import React from "react";
import { FormattedMessage } from "react-intl";
import * as S from "../styled";
import { defaultMessages } from "../util";
import ViewStopButton from "./view-stop-button";
var _coreUtils$itinerary = coreUtils.itinerary,
  getDisplayedStopCode = _coreUtils$itinerary.getDisplayedStopCode,
  isFlex = _coreUtils$itinerary.isFlex;
export default function TransitLegSubheader(_ref) {
  var _from$stop;
  var leg = _ref.leg,
    onStopClick = _ref.onStopClick;
  var from = leg.from;
  if (!((_from$stop = from.stop) !== null && _from$stop !== void 0 && _from$stop.id) && !from.stopId) return null;
  return /*#__PURE__*/React.createElement(S.PlaceSubheader, {
    className: "transit-leg-subheader"
  }, getDisplayedStopCode(from) && /*#__PURE__*/React.createElement(FormattedMessage, {
    defaultMessage: defaultMessages["otpUi.TransitLegBody.stopId"],
    description: "Displays the stop ID",
    id: "otpUi.TransitLegBody.stopId",
    values: {
      stopId: getDisplayedStopCode(from)
    }
  }), !isFlex(leg) && /*#__PURE__*/React.createElement(ViewStopButton, {
    onStopClick: onStopClick,
    stop: from.stop,
    stopCode: getDisplayedStopCode(from),
    stopId: from.stopId
  }));
}
//# sourceMappingURL=transit-leg-subheader.js.map