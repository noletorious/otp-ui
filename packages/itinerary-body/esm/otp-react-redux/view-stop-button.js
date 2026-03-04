import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import * as S from "../styled";
import { defaultMessages } from "../util";
var ViewStopButton = /*#__PURE__*/function (_Component) {
  function ViewStopButton() {
    var _this;
    _classCallCheck(this, ViewStopButton);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, ViewStopButton, [].concat(args));
    _this.onClick = function () {
      var _this$props = _this.props,
        onStopClick = _this$props.onStopClick,
        stop = _this$props.stop,
        stopId = _this$props.stopId;
      onStopClick(_objectSpread(_objectSpread({}, stop), {}, {
        stopId: "gtfsId" in stop ? stop.gtfsId : stopId
      }));
    };
    return _this;
  }
  _inherits(ViewStopButton, _Component);
  return _createClass(ViewStopButton, [{
    key: "render",
    value: function render() {
      var stopCode = this.props.stopCode;
      return /*#__PURE__*/React.createElement(S.ViewerButton, {
        onClick: this.onClick,
        role: "link",
        showBeforeContent: !!stopCode
      }, /*#__PURE__*/React.createElement(FormattedMessage, {
        defaultMessage: defaultMessages["otpUi.TransitLegBody.stopViewer"],
        description: "Text for link that opens the stop viewer",
        id: "otpUi.TransitLegBody.stopViewer"
      }));
    }
  }]);
}(Component);
export { ViewStopButton as default };
//# sourceMappingURL=view-stop-button.js.map