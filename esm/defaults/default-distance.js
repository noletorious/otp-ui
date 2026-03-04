import { Distance, isImperial } from "@opentripplanner/humanize-distance";
import React from "react";

/**
 * Wrapper around Distance from humanize-distance with imperial defaults and long format when showing imperial units.
 * The default to imperial units is there so that existing implementations don't visually break.
 */
var DefaultDistance = function DefaultDistance(_ref) {
  var meters = _ref.meters,
    _ref$units = _ref.units,
    units = _ref$units === void 0 ? "imperial" : _ref$units;
  return /*#__PURE__*/React.createElement(Distance, {
    "long": isImperial(units),
    meters: meters,
    units: units
  });
};
export default DefaultDistance;
//# sourceMappingURL=default-distance.js.map