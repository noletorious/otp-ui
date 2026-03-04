/* eslint-disable no-case-declarations */

import React from "react";
import { FormattedMessage } from "react-intl";
import * as S from "../styled";
import { defaultMessages } from "../util";
import AccessLegStepAction from "./access-leg-step-action";
import AccessLegStepHeading from "./access-leg-step-heading";
import Distance from "./default-distance";
import StreetName from "./street-name";
/**
 * Renders a step of an access leg.
 */
export default function AccessLegStep(_ref) {
  var className = _ref.className,
    step = _ref.step,
    style = _ref.style,
    units = _ref.units;
  var absoluteDirection = step.absoluteDirection,
    distance = step.distance,
    relativeDirection = step.relativeDirection,
    streetName = step.streetName;
  var street = /*#__PURE__*/React.createElement(S.StepStreetName, null, /*#__PURE__*/React.createElement(StreetName, {
    rawStreetName: streetName
  }));
  var stepContent;
  var action = relativeDirection;
  switch (relativeDirection) {
    case "ELEVATOR":
      stepContent = /*#__PURE__*/React.createElement(FormattedMessage, {
        defaultMessage: defaultMessages["otpUi.AccessLegBody.stepElevator"],
        description: "Text for taking an elevator",
        id: "otpUi.AccessLegBody.stepElevator",
        values: {
          street: street
        }
      });
      break;
    case "DEPART":
      var heading = absoluteDirection;
      stepContent = /*#__PURE__*/React.createElement(FormattedMessage, {
        defaultMessage: defaultMessages["otpUi.AccessLegBody.stepDepart"],
        description: "Describes the initial action to take for an itinerary",
        id: "otpUi.AccessLegBody.stepDepart",
        values: {
          heading: /*#__PURE__*/React.createElement(AccessLegStepHeading, {
            heading: heading
          }),
          street: street
        }
      });
      break;
    case "ENTER_STATION":
    case "EXIT_STATION":
      stepContent = /*#__PURE__*/React.createElement(FormattedMessage, {
        defaultMessage: defaultMessages["otpUi.AccessLegBody.stepStation"],
        description: "Describes an action to progress through an itinerary",
        id: "otpUi.AccessLegBody.stepStation",
        values: {
          step: /*#__PURE__*/React.createElement(AccessLegStepAction, {
            action: action
          }),
          street: street
        }
      });
      break;
    case "FOLLOW_SIGNS":
      stepContent = /*#__PURE__*/React.createElement(FormattedMessage, {
        defaultMessage: defaultMessages["otpUi.AccessLegBody.stepFollowSigns"],
        description: "Describes an action to progress through an itinerary",
        id: "otpUi.AccessLegBody.stepFollowSigns",
        values: {
          street: street
        }
      });
      break;
    default:
      stepContent = /*#__PURE__*/React.createElement(FormattedMessage, {
        defaultMessage: defaultMessages["otpUi.AccessLegBody.stepGeneric"],
        description: "Describes an action to progress through an itinerary",
        id: "otpUi.AccessLegBody.stepGeneric",
        values: {
          step: /*#__PURE__*/React.createElement(AccessLegStepAction, {
            action: action
          }),
          street: street
        }
      });
  }
  return (
    /*#__PURE__*/
    // Return an HTML element which is passed a className (and style props)
    // for styled-components support.
    React.createElement("span", {
      className: className,
      style: style
    }, stepContent, distance > 0 && /*#__PURE__*/React.createElement(S.StepLength, null, /*#__PURE__*/React.createElement(Distance, {
      meters: distance,
      units: units
    })))
  );
}
//# sourceMappingURL=access-leg-step.js.map