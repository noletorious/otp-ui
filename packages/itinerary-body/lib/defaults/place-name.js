"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = PlaceName;
var _react = _interopRequireDefault(require("react"));
var _reactIntl = require("react-intl");
var S = _interopRequireWildcard(require("../styled"));
var _util = require("../util");
var _basicPlaceName = _interopRequireDefault(require("./basic-place-name"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
function PlaceName({
  config,
  interline,
  place
}) {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_basicPlaceName.default, {
    config: config,
    interline: interline,
    place: place
  }), place.stopId && !interline && /*#__PURE__*/_react.default.createElement(S.StopIdSpan, null, /*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage, {
    defaultMessage: _util.defaultMessages["otpUi.TransitLegBody.stopIdBasic"],
    description: "Displays a stop id",
    id: "otpUi.TransitLegBody.stopIdBasic",
    values: {
      stopId: place.stopId.split(":")[1]
    }
  }))
  /*
    TODO: There is no explicit stop button on the mocks.
    Have a question out to marketing as to whether the above StopID
    is a button to navigate the user to the arrival list for the stop
    that's what the button below does
  */
  /* <ViewStopButton stopId={place.stopId} /> */);
}
//# sourceMappingURL=place-name.js.map