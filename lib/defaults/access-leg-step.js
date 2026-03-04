"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = AccessLegStep;
var _react = _interopRequireDefault(require("react"));
var _reactIntl = require("react-intl");
var S = _interopRequireWildcard(require("../styled"));
var _util = require("../util");
var _accessLegStepAction = _interopRequireDefault(require("./access-leg-step-action"));
var _accessLegStepHeading = _interopRequireDefault(require("./access-leg-step-heading"));
var _defaultDistance = _interopRequireDefault(require("./default-distance"));
var _streetName = _interopRequireDefault(require("./street-name"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/* eslint-disable no-case-declarations */

/**
 * Renders a step of an access leg.
 */
function AccessLegStep({
  className,
  step,
  style,
  units
}) {
  const {
    absoluteDirection,
    distance,
    relativeDirection,
    streetName
  } = step;
  const street = /*#__PURE__*/_react.default.createElement(S.StepStreetName, null, /*#__PURE__*/_react.default.createElement(_streetName.default, {
    rawStreetName: streetName
  }));
  let stepContent;
  const action = relativeDirection;
  switch (relativeDirection) {
    case "ELEVATOR":
      stepContent = /*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage, {
        defaultMessage: _util.defaultMessages["otpUi.AccessLegBody.stepElevator"],
        description: "Text for taking an elevator",
        id: "otpUi.AccessLegBody.stepElevator",
        values: {
          street
        }
      });
      break;
    case "DEPART":
      const heading = absoluteDirection;
      stepContent = /*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage, {
        defaultMessage: _util.defaultMessages["otpUi.AccessLegBody.stepDepart"],
        description: "Describes the initial action to take for an itinerary",
        id: "otpUi.AccessLegBody.stepDepart",
        values: {
          heading: /*#__PURE__*/_react.default.createElement(_accessLegStepHeading.default, {
            heading: heading
          }),
          street
        }
      });
      break;
    case "ENTER_STATION":
    case "EXIT_STATION":
      stepContent = /*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage, {
        defaultMessage: _util.defaultMessages["otpUi.AccessLegBody.stepStation"],
        description: "Describes an action to progress through an itinerary",
        id: "otpUi.AccessLegBody.stepStation",
        values: {
          step: /*#__PURE__*/_react.default.createElement(_accessLegStepAction.default, {
            action: action
          }),
          street
        }
      });
      break;
    case "FOLLOW_SIGNS":
      stepContent = /*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage, {
        defaultMessage: _util.defaultMessages["otpUi.AccessLegBody.stepFollowSigns"],
        description: "Describes an action to progress through an itinerary",
        id: "otpUi.AccessLegBody.stepFollowSigns",
        values: {
          street
        }
      });
      break;
    default:
      stepContent = /*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage, {
        defaultMessage: _util.defaultMessages["otpUi.AccessLegBody.stepGeneric"],
        description: "Describes an action to progress through an itinerary",
        id: "otpUi.AccessLegBody.stepGeneric",
        values: {
          step: /*#__PURE__*/_react.default.createElement(_accessLegStepAction.default, {
            action: action
          }),
          street
        }
      });
  }
  return (
    /*#__PURE__*/
    // Return an HTML element which is passed a className (and style props)
    // for styled-components support.
    _react.default.createElement("span", {
      className: className,
      style: style
    }, stepContent, distance > 0 && /*#__PURE__*/_react.default.createElement(S.StepLength, null, /*#__PURE__*/_react.default.createElement(_defaultDistance.default, {
      meters: distance,
      units: units
    })))
  );
}
//# sourceMappingURL=access-leg-step.js.map