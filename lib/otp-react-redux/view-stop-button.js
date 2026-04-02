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
class ViewStopButton extends _react.Component {
  constructor(...args) {
    super(...args);
    this.onClick = () => {
      const {
        onStopClick,
        stop,
        stopId
      } = this.props;
      onStopClick({
        ...stop,
        stopId: "gtfsId" in stop ? stop.gtfsId : stopId
      });
    };
  }
  render() {
    const {
      stopCode
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(S.ViewerButton, {
      onClick: this.onClick,
      role: "link",
      showBeforeContent: !!stopCode
    }, /*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage, {
      defaultMessage: _util.defaultMessages["otpUi.TransitLegBody.stopViewer"],
      description: "Text for link that opens the stop viewer",
      id: "otpUi.TransitLegBody.stopViewer"
    }));
  }
}
exports.default = ViewStopButton;
//# sourceMappingURL=view-stop-button.js.map