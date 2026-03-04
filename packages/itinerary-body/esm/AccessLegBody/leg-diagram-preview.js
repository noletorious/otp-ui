import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
import coreUtils from "@opentripplanner/core-utils";
import React, { Component } from "react";
import { FormattedMessage, injectIntl } from "react-intl";
import ReactResizeDetector from "react-resize-detector";
import * as S from "../styled";
import { defaultMessages } from "../util";
var METERS_TO_FEET = 3.28084;
function generateSvg(profile, width) {
  var height = 30;
  var ptArr = profile.points,
    traversed = profile.traversed;
  var minElev = profile.minElev,
    maxElev = profile.maxElev;
  // Pad the min-max range by 25m on either side
  minElev -= 25;
  maxElev += 25;

  // Transform the point array and store it as an SVG-ready string
  var pts = ptArr.map(function (pt) {
    var x = pt[0] / traversed * width;
    var y = height - height * (pt[1] - minElev) / (maxElev - minElev);
    return "".concat(x, ",").concat(y);
  }).join(" ");

  // Render the SVG
  return /*#__PURE__*/React.createElement("svg", {
    height: height,
    width: width
  }, /*#__PURE__*/React.createElement("polyline", {
    points: pts,
    fill: "none",
    stroke: "black",
    strokeWidth: 1.3
  }));
}
var LegDiagramPreview = /*#__PURE__*/function (_Component) {
  function LegDiagramPreview(props) {
    var _this;
    _classCallCheck(this, LegDiagramPreview);
    _this = _callSuper(this, LegDiagramPreview, [props]);
    _this.onResize = function (width) {
      if (width > 0) {
        _this.setState({
          width: width
        });
      }
    };
    /**
     * Determine if the diagram currently visible is for this leg (based on start
     * time).
     */
    _this.isActive = function () {
      var _this$props = _this.props,
        diagramVisible = _this$props.diagramVisible,
        leg = _this$props.leg;
      return diagramVisible && diagramVisible.startTime === leg.startTime;
    };
    _this.onExpandClick = function () {
      var _this$props2 = _this.props,
        leg = _this$props2.leg,
        setLegDiagram = _this$props2.setLegDiagram;
      if (_this.isActive()) setLegDiagram(null);else setLegDiagram(leg);
    };
    /** Round elevation to whole number and add foot (') symbol. */
    _this.formatElevation = function (elev) {
      return "".concat(Math.round(elev), "'");
    };
    _this.state = {
      width: null
    };
    return _this;
  }
  _inherits(LegDiagramPreview, _Component);
  return _createClass(LegDiagramPreview, [{
    key: "render",
    value: function render() {
      var IS_TEST_RUNNER = window.navigator.userAgent.match(/StorybookTestRunner/);
      var _this$props3 = this.props,
        intl = _this$props3.intl,
        leg = _this$props3.leg,
        showElevationProfile = _this$props3.showElevationProfile;
      var width = this.state.width;
      if (!showElevationProfile) return null;
      var profile = coreUtils.itinerary.getElevationProfile(leg.steps);
      // Don't show for very short legs
      if (leg.distance < 500 || leg.mode === "CAR") return null;
      return /*#__PURE__*/React.createElement(S.PreviewContainer, {
        active: this.isActive()
      }, /*#__PURE__*/React.createElement(S.PreviewDiagram, {
        onClick: this.onExpandClick,
        role: "button",
        tabIndex: 0
        // This is shown in a tooltip, so use intl.formatMessage.
        ,
        title: intl.formatMessage({
          defaultMessage: defaultMessages["otpUi.AccessLegBody.LegDiagramPreview.toggleElevationChart"],
          description: "Tooltip text describing the toggling of the elevation chart.",
          id: "otpUi.AccessLegBody.LegDiagramPreview.toggleElevationChart"
        })
      }, /*#__PURE__*/React.createElement(S.PreviewDiagramTitle, null, /*#__PURE__*/React.createElement(FormattedMessage, {
        defaultMessage: defaultMessages["otpUi.AccessLegBody.LegDiagramPreview.elevationChart"],
        description: "Title text for elevation chart",
        id: "otpUi.AccessLegBody.LegDiagramPreview.elevationChart"
      }), /*#__PURE__*/React.createElement(S.PreviewDiagramElevationGain, null, "\u2191", this.formatElevation(profile.gain * METERS_TO_FEET)), /*#__PURE__*/React.createElement(S.PreviewDiagramElevationLoss, null, "\u2193", this.formatElevation(-profile.loss * METERS_TO_FEET))), profile.points.length > 0 ? generateSvg(profile, IS_TEST_RUNNER ? "245" : width) : /*#__PURE__*/React.createElement(FormattedMessage, {
        defaultMessage: defaultMessages["otpUi.AccessLegBody.LegDiagramPreview.noElevationData"],
        description: "Text shown if no elevation data is available.",
        id: "otpUi.AccessLegBody.LegDiagramPreview.noElevationData"
      }), /*#__PURE__*/React.createElement(ReactResizeDetector, {
        handleWidth: true,
        onResize: this.onResize
      })));
    }
  }]);
}(Component);
export default injectIntl(LegDiagramPreview);
//# sourceMappingURL=leg-diagram-preview.js.map