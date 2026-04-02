"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _coreUtils = _interopRequireDefault(require("@opentripplanner/core-utils"));
var _react = _interopRequireWildcard(require("react"));
var _reactIntl = require("react-intl");
var _reactResizeDetector = _interopRequireDefault(require("react-resize-detector"));
var S = _interopRequireWildcard(require("../styled"));
var _util = require("../util");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
const METERS_TO_FEET = 3.28084;
function generateSvg(profile, width) {
  const height = 30;
  const {
    points: ptArr,
    traversed
  } = profile;
  let {
    minElev,
    maxElev
  } = profile;
  // Pad the min-max range by 25m on either side
  minElev -= 25;
  maxElev += 25;

  // Transform the point array and store it as an SVG-ready string
  const pts = ptArr.map(pt => {
    const x = pt[0] / traversed * width;
    const y = height - height * (pt[1] - minElev) / (maxElev - minElev);
    return `${x},${y}`;
  }).join(" ");

  // Render the SVG
  return /*#__PURE__*/_react.default.createElement("svg", {
    height: height,
    width: width
  }, /*#__PURE__*/_react.default.createElement("polyline", {
    points: pts,
    fill: "none",
    stroke: "black",
    strokeWidth: 1.3
  }));
}
class LegDiagramPreview extends _react.Component {
  constructor(props) {
    super(props);
    this.onResize = width => {
      if (width > 0) {
        this.setState({
          width
        });
      }
    };
    /**
     * Determine if the diagram currently visible is for this leg (based on start
     * time).
     */
    this.isActive = () => {
      const {
        diagramVisible,
        leg
      } = this.props;
      return diagramVisible && diagramVisible.startTime === leg.startTime;
    };
    this.onExpandClick = () => {
      const {
        leg,
        setLegDiagram
      } = this.props;
      if (this.isActive()) setLegDiagram(null);else setLegDiagram(leg);
    };
    /** Round elevation to whole number and add foot (') symbol. */
    this.formatElevation = elev => `${Math.round(elev)}'`;
    this.state = {
      width: null
    };
  }
  render() {
    const IS_TEST_RUNNER = window.navigator.userAgent.match(/StorybookTestRunner/);
    const {
      intl,
      leg,
      showElevationProfile
    } = this.props;
    const {
      width
    } = this.state;
    if (!showElevationProfile) return null;
    const profile = _coreUtils.default.itinerary.getElevationProfile(leg.steps);
    // Don't show for very short legs
    if (leg.distance < 500 || leg.mode === "CAR") return null;
    return /*#__PURE__*/_react.default.createElement(S.PreviewContainer, {
      active: this.isActive()
    }, /*#__PURE__*/_react.default.createElement(S.PreviewDiagram, {
      onClick: this.onExpandClick,
      role: "button",
      tabIndex: 0
      // This is shown in a tooltip, so use intl.formatMessage.
      ,
      title: intl.formatMessage({
        defaultMessage: _util.defaultMessages["otpUi.AccessLegBody.LegDiagramPreview.toggleElevationChart"],
        description: "Tooltip text describing the toggling of the elevation chart.",
        id: "otpUi.AccessLegBody.LegDiagramPreview.toggleElevationChart"
      })
    }, /*#__PURE__*/_react.default.createElement(S.PreviewDiagramTitle, null, /*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage, {
      defaultMessage: _util.defaultMessages["otpUi.AccessLegBody.LegDiagramPreview.elevationChart"],
      description: "Title text for elevation chart",
      id: "otpUi.AccessLegBody.LegDiagramPreview.elevationChart"
    }), /*#__PURE__*/_react.default.createElement(S.PreviewDiagramElevationGain, null, "\u2191", this.formatElevation(profile.gain * METERS_TO_FEET)), /*#__PURE__*/_react.default.createElement(S.PreviewDiagramElevationLoss, null, "\u2193", this.formatElevation(-profile.loss * METERS_TO_FEET))), profile.points.length > 0 ? generateSvg(profile, IS_TEST_RUNNER ? "245" : width) : /*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage, {
      defaultMessage: _util.defaultMessages["otpUi.AccessLegBody.LegDiagramPreview.noElevationData"],
      description: "Text shown if no elevation data is available.",
      id: "otpUi.AccessLegBody.LegDiagramPreview.noElevationData"
    }), /*#__PURE__*/_react.default.createElement(_reactResizeDetector.default, {
      handleWidth: true,
      onResize: this.onResize
    })));
  }
}
var _default = exports.default = (0, _reactIntl.injectIntl)(LegDiagramPreview);
//# sourceMappingURL=leg-diagram-preview.js.map