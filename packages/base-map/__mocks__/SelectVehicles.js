import React from "react";
import { FeatureGroup, MapLayer, withLeaflet } from "react-leaflet";

import callIfValid from "../src/util";

import VehicleMarker from "./VehicleMarker";

const vehicleData = require("./vehicle-data/all-trimet.json"); // https://maps.trimet.org/gtfs/rt/vehicles/routes/all

/**
 * This component demonstrates an example map overlay that shows real-time transit vehicle locations on a leaflet map.
 * It is modeled after the component available in this file:
 * https://github.com/OpenTransitTools/transit-components/blob/master/lib/vehicles/SelectVehicles.js
 */
class SelectVehicles extends MapLayer {
  state = {
    selectedRoutes: [],
    selectedStop: null,
    routeData: [], // TBD Array of <RouteData > components, which comprise route and stop geo data
    mapZoom: 0,
    trackedVehicle: vehicleData[0],
    vehicles: vehicleData
  };

  constructor(props) {
    super(props);

    this.onOverlayAdded = this.onOverlayAdded.bind(this);
    this.onOverlayRemoved = this.onOverlayRemoved.bind(this);
    this.onViewportChanged = this.onViewportChanged.bind(this);
  }

  // these zoom layers control which markers are shown (e.g. closeZoom is where icons are turned on)
  closeZoom = 15;

  midZoom = 13;

  farZoom = 10;

  onOverlayAdded(e) {
    callIfValid(this.props.onOverlayAdded)(e);
  }

  onOverlayRemoved(e) {
    callIfValid(this.props.onOverlayRemoved)(e);
  }

  onViewportChanged(viewport) {
    callIfValid(this.props.onOverlayRemoved)(viewport);
  }

  componentDidMount() {
    console.log("SelectedVehicles::componentDidMount");
    // action("SelectVehicles::componentDidMount")();
    const { registerOverlay } = this.props;
    callIfValid(registerOverlay)(this);
  }

  componentWillUnmount() {}

  componentDidUpdate() {
    this.trackVehicle();
  }

  componentWillReceiveProps(/* nextProps */) {}

  /**
   * this method is used for backporting to React 15
   * v16:  return this.props.leaflet;
   * v15:  return this.context;
   */
  getLeafletContext() {
    return this.props.leaflet;
  }

  trackVehicle() {
    if (
      this.state.trackedVehicle != null &&
      this.state.trackedVehicle.id != null
    ) {
      const v = this.findVehicle(this.state.trackedVehicle.id);
      if (v != null) {
        const ll = [v.lat, v.lon];
        this.getLeafletContext().map.setView(ll);
        this.state.trackedVehicle = v; // update the state with newest vehicle
      }
    }
  }

  isTrackingVehicle(vehicle) {
    return (
      this.state.trackedVehicle && this.state.trackedVehicle.id === vehicle.id
    );
  }

  findVehicle(id) {
    return this.state.vehicles.find(v => v.id === id);
  }

  // need to implement create interface (and update interface for older React-Leaflet versions)
  createLeafletElement(/* props */) {}

  updateLeafletElement(/* props */) {}

  render() {
    const { limit = 5 } = this.props;
    let { vehicles } = this.state;
    vehicles = vehicles.slice(0, Math.min(limit, vehicles.length) - 1);
    return (
      <FeatureGroup id="vehicles fg">
        {vehicles &&
          vehicles.map(v => (
            <VehicleMarker
              key={v.id}
              vehicle={v}
              controller={this}
              closeZoom={this.closeZoom}
              midZoom={this.midZoom}
              farZoom={this.farZoom}
            />
          ))}
      </FeatureGroup>
    );
  }
}

export default withLeaflet(SelectVehicles);
