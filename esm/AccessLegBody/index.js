import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
import coreUtils from "@opentripplanner/core-utils";
import React, { Component } from "react";
import AnimateHeight from "react-animate-height";
import { FormattedMessage } from "react-intl";
import { Duration } from "../defaults";
import * as S from "../styled";
import AccessLegSteps from "./access-leg-steps";
import AccessLegSummary from "./access-leg-summary";
import LegDiagramPreview from "./leg-diagram-preview";
import MapillaryButton from "./mapillary-button";
import RentedVehicleSubheader from "./rented-vehicle-subheader";
import TNCLeg from "./tnc-leg";
import { defaultMessages } from "../util";
var ensureAtLeastOneMinute = coreUtils.time.ensureAtLeastOneMinute;
var isTransit = coreUtils.itinerary.isTransit;
/**
 * Component for access (e.g. walk/bike/etc.) leg in narrative itinerary. This
 * particular component is used in the line-itin (i.e., trimet-mod-otp) version
 * of the narrative itinerary.
 */
var AccessLegBody = /*#__PURE__*/function (_Component) {
  function AccessLegBody(props) {
    var _this;
    _classCallCheck(this, AccessLegBody);
    _this = _callSuper(this, AccessLegBody, [props]);
    _this.onStepsHeaderClick = function () {
      var expanded = _this.state.expanded;
      _this.setState({
        expanded: !expanded
      });
    };
    _this.onSummaryClick = function () {
      var _this$props = _this.props,
        leg = _this$props.leg,
        legIndex = _this$props.legIndex,
        setActiveLeg = _this$props.setActiveLeg;
      setActiveLeg(legIndex, leg);
    };
    _this.state = {
      expanded: false
    };
    return _this;
  }
  _inherits(AccessLegBody, _Component);
  return _createClass(AccessLegBody, [{
    key: "render",
    value: function render() {
      var _config$itinerary;
      var _this$props2 = this.props,
        config = _this$props2.config,
        diagramVisible = _this$props2.diagramVisible,
        followsTransit = _this$props2.followsTransit,
        leg = _this$props2.leg,
        LegIcon = _this$props2.LegIcon,
        mapillaryCallback = _this$props2.mapillaryCallback,
        mapillaryKey = _this$props2.mapillaryKey,
        setLegDiagram = _this$props2.setLegDiagram,
        showApproximateTravelTime = _this$props2.showApproximateTravelTime,
        showElevationProfile = _this$props2.showElevationProfile,
        showLegIcon = _this$props2.showLegIcon,
        TransitLegSubheader = _this$props2.TransitLegSubheader;
      var expanded = this.state.expanded;
      var hideDrivingDirections = (config === null || config === void 0 || (_config$itinerary = config.itinerary) === null || _config$itinerary === void 0 ? void 0 : _config$itinerary.hideDrivingDirections) && leg.mode === "CAR";
      var durationSeconds = ensureAtLeastOneMinute(leg.duration);
      if (leg.mode === "CAR" && leg.rideHailingEstimate) {
        return /*#__PURE__*/React.createElement(TNCLeg, {
          config: config,
          followsTransit: followsTransit,
          leg: leg,
          LegIcon: LegIcon,
          onSummaryClick: this.onSummaryClick,
          showLegIcon: showLegIcon
        });
      }
      var mapillary = /*#__PURE__*/React.createElement(MapillaryButton, {
        clickCallback: mapillaryCallback,
        coords: leg.from,
        mapillaryKey: mapillaryKey
      });
      return /*#__PURE__*/React.createElement(React.Fragment, null, leg && (leg.rentedVehicle || leg.rentedBike || leg.rentedCar) && /*#__PURE__*/React.createElement(RentedVehicleSubheader, {
        config: config,
        leg: leg
      }), TransitLegSubheader && /*#__PURE__*/React.createElement(TransitLegSubheader, {
        leg: leg
      }), /*#__PURE__*/React.createElement(S.LegBody, null, /*#__PURE__*/React.createElement(AccessLegSummary, {
        config: config,
        leg: leg,
        LegIcon: LegIcon,
        onSummaryClick: this.onSummaryClick,
        showLegIcon: showLegIcon
      }), leg.distance !== 0 && /*#__PURE__*/React.createElement(S.LegDetails, null, hideDrivingDirections ? /*#__PURE__*/React.createElement(S.StepsHeaderAndMapLink, null, /*#__PURE__*/React.createElement(S.StepsHeaderSpan, null, /*#__PURE__*/React.createElement(Duration, {
        seconds: durationSeconds
      })), mapillary) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(S.StepsHeaderAndMapLink, null, /*#__PURE__*/React.createElement(S.StepsHeaderButton, {
        "aria-expanded": expanded,
        onClick: this.onStepsHeaderClick
      }, /*#__PURE__*/React.createElement(Duration, {
        seconds: durationSeconds,
        showApproximatePrefix: showApproximateTravelTime && !isTransit(leg.mode)
      }), leg.steps && leg.steps.length > 0 && /*#__PURE__*/React.createElement(S.CaretToggle, {
        expanded: expanded
      }), /*#__PURE__*/React.createElement(S.InvisibleAdditionalDetails, null, /*#__PURE__*/React.createElement(FormattedMessage, {
        defaultMessage: defaultMessages["otpUi.TransitLegBody.expandDetails"],
        description: "Screen reader text added to expand steps",
        id: "otpUi.TransitLegBody.expandDetails"
      }))), mapillary), /*#__PURE__*/React.createElement(AnimateHeight, {
        duration: 500,
        height: expanded ? "auto" : 0,
        style: {
          gridColumn: "1 / span 2"
        }
      }, /*#__PURE__*/React.createElement(AccessLegSteps, {
        mapillaryCallback: mapillaryCallback,
        mapillaryKey: mapillaryKey,
        steps: leg.steps,
        units: config.units
      }))), /*#__PURE__*/React.createElement(LegDiagramPreview, {
        diagramVisible: diagramVisible,
        leg: leg,
        setLegDiagram: setLegDiagram,
        showElevationProfile: showElevationProfile
      }))));
    }
  }]);
}(Component);
export default AccessLegBody;
export { AccessLegSteps, AccessLegSummary, LegDiagramPreview, RentedVehicleSubheader, S as Styled, TNCLeg };
//# sourceMappingURL=index.js.map