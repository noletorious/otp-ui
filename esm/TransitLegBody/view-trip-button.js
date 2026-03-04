import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import * as S from "../styled";
import { defaultMessages } from "../util";
var ViewTripButton = /*#__PURE__*/function (_Component) {
  function ViewTripButton() {
    var _this;
    _classCallCheck(this, ViewTripButton);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, ViewTripButton, [].concat(args));
    _this.onClick = function () {
      var _this$props = _this.props,
        fromIndex = _this$props.fromIndex,
        fromStopId = _this$props.fromStopId,
        setViewedTrip = _this$props.setViewedTrip,
        toIndex = _this$props.toIndex,
        toStopId = _this$props.toStopId,
        tripId = _this$props.tripId;
      if (fromIndex || toIndex) {
        setViewedTrip({
          fromIndex: fromIndex,
          toIndex: toIndex,
          tripId: tripId
        });
      } else {
        setViewedTrip({
          fromStopId: fromStopId,
          toStopId: toStopId,
          tripId: tripId
        });
      }
    };
    return _this;
  }
  _inherits(ViewTripButton, _Component);
  return _createClass(ViewTripButton, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(S.ViewerButton, {
        onClick: this.onClick,
        role: "link"
      }, /*#__PURE__*/React.createElement(FormattedMessage, {
        defaultMessage: defaultMessages["otpUi.TransitLegBody.tripViewer"],
        description: "Link text to the trip viewer",
        id: "otpUi.TransitLegBody.tripViewer"
      }));
    }
  }]);
}(Component);
export default ViewTripButton;
//# sourceMappingURL=view-trip-button.js.map