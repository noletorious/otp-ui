"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = AccessLegSteps;
var _icons = require("@opentripplanner/icons");
var _react = _interopRequireDefault(require("react"));
var S = _interopRequireWildcard(require("../styled"));
var _accessLegStep = _interopRequireDefault(require("../defaults/access-leg-step"));
var _mapillaryButton = _interopRequireDefault(require("./mapillary-button"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore FIXME: Create TypeScript types for the icons package.

/**
 * Renders a turn-by-turn step of an access leg.
 */
function AccessLegSteps({
  mapillaryCallback,
  mapillaryKey,
  steps,
  units
}) {
  return /*#__PURE__*/_react.default.createElement(S.Steps, null, steps.map((step, k) => {
    const {
      lat,
      lon,
      relativeDirection
    } = step;
    return /*#__PURE__*/_react.default.createElement(S.StepRow, {
      key: k
    }, /*#__PURE__*/_react.default.createElement(S.StepIconContainer, null, /*#__PURE__*/_react.default.createElement(_icons.DirectionIcon, {
      relativeDirection: relativeDirection
    })), /*#__PURE__*/_react.default.createElement(S.StepDescriptionContainer, null, /*#__PURE__*/_react.default.createElement(_accessLegStep.default, {
      step: step,
      units: units
    }), /*#__PURE__*/_react.default.createElement(_mapillaryButton.default, {
      clickCallback: mapillaryCallback,
      coords: {
        lat,
        lon
      },
      mapillaryKey: mapillaryKey
    })));
  }));
}
//# sourceMappingURL=access-leg-steps.js.map