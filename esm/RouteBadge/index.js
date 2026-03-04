import React from "react";
import colors from "@opentripplanner/building-blocks";
import * as S from "../styled";
var blue = colors.blue;
export default function RouteBadge(_ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? blue[900] : _ref$color,
    abbreviation = _ref.abbreviation,
    name = _ref.name;
  return /*#__PURE__*/React.createElement(S.RouteBadge, {
    routeColor: color
  }, /*#__PURE__*/React.createElement(S.SRHidden, null, abbreviation), /*#__PURE__*/React.createElement(S.SROnly, null, name));
}
//# sourceMappingURL=index.js.map