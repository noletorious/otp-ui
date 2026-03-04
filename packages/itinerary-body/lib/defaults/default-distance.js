"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _humanizeDistance = require("@opentripplanner/humanize-distance");
var _react = _interopRequireDefault(require("react"));
/**
 * Wrapper around Distance from humanize-distance with imperial defaults and long format when showing imperial units.
 * The default to imperial units is there so that existing implementations don't visually break.
 */
const DefaultDistance = ({
  meters,
  units = "imperial"
}) => /*#__PURE__*/_react.default.createElement(_humanizeDistance.Distance, {
  long: (0, _humanizeDistance.isImperial)(units),
  meters: meters,
  units: units
});
var _default = exports.default = DefaultDistance;
//# sourceMappingURL=default-distance.js.map