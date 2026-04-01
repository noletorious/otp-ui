"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = DemoAccessLegFooter;
var _react = _interopRequireDefault(require("react"));
function DemoAccessLegFooter({
  leg
}) {
  var _leg$to;
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      padding: "8px 0",
      fontSize: "0.95em"
    }
  }, "Next stop: ", (_leg$to = leg.to) === null || _leg$to === void 0 ? void 0 : _leg$to.name);
}
//# sourceMappingURL=access-leg-footer.js.map