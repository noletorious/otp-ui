"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactIntl = require("react-intl");
var S = _interopRequireWildcard(require("../styled"));
var _util = require("../util");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
class ViewTripButton extends _react.Component {
  constructor(...args) {
    super(...args);
    this.onClick = () => {
      const {
        fromIndex,
        fromStopId,
        setViewedTrip,
        toIndex,
        toStopId,
        tripId
      } = this.props;
      if (fromIndex || toIndex) {
        setViewedTrip({
          fromIndex,
          toIndex,
          tripId
        });
      } else {
        setViewedTrip({
          fromStopId,
          toStopId,
          tripId
        });
      }
    };
  }
  render() {
    return /*#__PURE__*/_react.default.createElement(S.ViewerButton, {
      onClick: this.onClick,
      role: "link"
    }, /*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage, {
      defaultMessage: _util.defaultMessages["otpUi.TransitLegBody.tripViewer"],
      description: "Link text to the trip viewer",
      id: "otpUi.TransitLegBody.tripViewer"
    }));
  }
}
var _default = exports.default = ViewTripButton;
//# sourceMappingURL=view-trip-button.js.map